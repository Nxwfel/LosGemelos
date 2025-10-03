import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const API_BASE_URL = 'http://localhost:8000';

const Tables = () => {
  const [hidden, setHidden] = useState(false);
  const [tables, setTables] = useState([]);
  const [orders, setOrders] = useState([]);
  const [selectedTable, setSelectedTable] = useState(null);
  const [tableOrders, setTableOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTables();
    fetchOrders();
  }, []);

  const fetchTables = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/tables/`);
      const data = await response.json();
      setTables(data);
    } catch (error) {
      console.error('Error fetching tables:', error);
    }
  };

  const fetchOrders = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/orders/`);
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };
const handleTableClick = async (table) => {
  setSelectedTable(table);
  setLoading(true);
  
  try {
    // Fetch orders and food data in parallel
    const [ordersResponse, foodResponse] = await Promise.all([
      fetch(`${API_BASE_URL}/orders/`),
      fetch(`${API_BASE_URL}/food/`)
    ]);
    
    const allOrders = await ordersResponse.json();
    const allFoods = await foodResponse.json();
    
    console.log('Raw orders from API:', allOrders);
    console.log('All foods:', allFoods);
    
    // Filter orders for the selected table
    const filteredOrders = allOrders.filter(order => order.table_id === table.id);
    
    // Enrich orders with full food details
    const enrichedOrders = await Promise.all(
      filteredOrders.map(async (order) => {
        // Handle both 'food_items' and 'food' field names
        const foodItems = order.food_items || order.food || [];
        
        const enrichedFoodItems = await Promise.all(
          foodItems.map(async (item) => {
            // Find the full food details
            const foodDetails = allFoods.find(food => food.id === item.food_id);
            
            if (!foodDetails) {
              console.log('Food not found for food_id:', item.food_id);
              return null;
            }
            
            // Fetch options if option_ids exist
            let options = [];
            if (item.option_ids && item.option_ids.length > 0) {
              try {
                const optionsResponse = await fetch(`${API_BASE_URL}/food/options/?food_id=${item.food_id}`);
                const allOptions = await optionsResponse.json();
                
                // Filter to only the selected options
                options = allOptions.filter(opt => item.option_ids.includes(opt.id));
              } catch (error) {
                console.error('Error fetching options:', error);
              }
            }
            
            return {
              ...foodDetails,
              quantity: item.quantity,
              options: options,
              order_food_id: item.id || item.food_id // Make sure we have an ID for deletion
            };
          })
        );
        
        return {
          ...order,
          food_items: enrichedFoodItems.filter(item => item !== null)
        };
      })
    );
    
    console.log('Enriched orders:', enrichedOrders);
    console.log('First enriched order food_items:', enrichedOrders[0]?.food_items);
    setTableOrders(enrichedOrders);
    setHidden(true);
  } catch (error) {
    console.error('Error fetching table orders:', error);
    setTableOrders([]);
  } finally {
    setLoading(false);
  }
};

  const calculateTableTotal = () => {
    let total = 0;
    tableOrders.forEach(order => {
      if (order.food_items) {
        order.food_items.forEach(item => {
          total += (item.price || 0) * (item.quantity || 1);
          // Add options prices if available
          if (item.options) {
            item.options.forEach(option => {
              total += (option.price || 0) * (item.quantity || 1);
            });
          }
        });
      }
    });
    return total;
  };

  const handlePrintTicket = async () => {
    if (!selectedTable || tableOrders.length === 0) {
      alert('No orders to print');
      return;
    }

    // Create printable content
    const ticketContent = `
========================================
        RESTAURANT TICKET
========================================
Table: ${selectedTable.name}
Date: ${new Date().toLocaleString()}
========================================

${tableOrders.map(order => 
  order.food_items?.map(item => `
${item.name} x${item.quantity}
Price: ${item.price} DA
${item.options?.map(opt => `  + ${opt.extra_name}: ${opt.price} DA`).join('\n') || ''}
Subtotal: ${(item.price * item.quantity) + (item.options?.reduce((sum, opt) => sum + opt.price * item.quantity, 0) || 0)} DA
`).join('\n')
).join('\n')}

========================================
TOTAL: ${calculateTableTotal()} DA
========================================
    `;

    // In a real app, you'd integrate with a printer API
    // For now, we'll open a print dialog
    const printWindow = window.open('', '', 'width=300,height=600');
    printWindow.document.write(`
      <html>
        <head>
          <title>Ticket - ${selectedTable.name}</title>
          <style>
            body { font-family: monospace; padding: 20px; }
            pre { white-space: pre-wrap; }
          </style>
        </head>
        <body>
          <pre>${ticketContent}</pre>
          <script>window.print(); window.close();</script>
        </body>
      </html>
    `);
    printWindow.document.close();

    // Delete all orders for this table
    try {
      console.log('Deleting orders:', tableOrders.map(o => o.id));
      
      let successCount = 0;
      let failCount = 0;

      // Delete each entire order by order ID
      for (const order of tableOrders) {
        try {
          const response = await fetch(`${API_BASE_URL}/orders/food/?id=${order.id}`, {
            method: 'DELETE',
          });
          
          console.log(`Delete response for order ${order.id}:`, response.status, response.ok);
          
          if (response.ok) {
            successCount++;
          } else {
            failCount++;
            const errorText = await response.text();
            console.error(`Failed to delete order ${order.id}:`, errorText);
          }
        } catch (error) {
          failCount++;
          console.error(`Error deleting order ${order.id}:`, error);
        }
      }

      console.log(`Deletion complete: ${successCount} orders deleted, ${failCount} failed`);

      // Refresh the data
      await fetchOrders();
      setTableOrders([]);
      setHidden(false);
      
      alert('Ticket printed and table cleared!');
    } catch (error) {
      console.error('Error clearing table orders:', error);
      alert('Ticket printed but error clearing orders: ' + error.message);
    }
  };

  const handleRemoveOrderItem = async (orderFoodId) => {
    try {
      const response = await fetch(
  `${API_BASE_URL}/orders/food/?order_id=${orderFoodId}&food_id=${foodItem.food_id}`,
  { method: 'DELETE' }
);

      if (response.ok) {
        // Refresh table orders
        handleTableClick(selectedTable);
        alert('Item removed successfully');
      } else {
        alert('Failed to remove item');
      }
    } catch (error) {
      console.error('Error removing item:', error);
      alert('Error removing item');
    }
  };
 
  const getTableStatus = (tableId) => {
    const hasOrders = orders.some(order => order.table_id === tableId);
    return hasOrders ? 'bg-emerald-100 border-emerald-300' : 'bg-neutral-100 border-neutral-300';
  };

  return (
    <div className='h-screen w-screen overflow-hidden bg-[#fdfbfb] flex'>
      {/* Order Details Modal */}
      <div className={`${hidden ? '' : 'hidden'} absolute h-[80vh] w-[40vw] ml-[30vw] mt-[10vh] bg-white rounded-2xl shadow-2xl justify-center items-center text-center z-50`}>
        <p 
          onClick={() => setHidden(false)}
          className='h-[4vh] w-full bg-amber-200 text-white text-lg cursor-pointer rounded-t-2xl'
        >
          x
        </p>
        <h1 className='font-sans text-2xl mt-[3vh] font-bold'>
          {selectedTable?.name || 'Table'}
        </h1>
        
        {loading ? (
          <div className='mt-[10vh]'>
            <p className='font-sans text-neutral-400'>Loading orders...</p>
          </div>
        ) : tableOrders.length === 0 ? (
          <div className='mt-[10vh]'>
            <p className='font-sans text-neutral-400'>No orders for this table</p>
          </div>
        ) : (
          <>
            <div className='max-h-[50vh] w-[90%] overflow-y-auto flex flex-col gap-[1vh] ml-auto mr-auto items-center mt-[3vh] mb-[1vh] p-5'>
              {tableOrders.map(order => 
                order.food_items?.map((item, index) => (
                  <div key={`${order.id}-${index}`} className='h-fit w-[25vw] bg-white shadow-xl rounded-2xl items-start justify-start flex p-2 relative'>
                    <div className='size-[11vh] rounded-2xl ml-[.5vw] bg-orange-200 flex items-center justify-center shrink-0'>
                      <span className='text-2xl'>🍽️</span>
                    </div>
                    <div className='flex flex-col ml-[1vw] flex-1 text-left'>
                      <h1 className='font-sans text-md font-semibold'>{item.name}</h1>
                      {item.description && (
                        <h2 className='font-sans text-sm text-neutral-400'>{item.description}</h2>
                      )}
                      {item.options && item.options.length > 0 && (
                        <div className='text-xs text-neutral-600 mt-1'>
                          {item.options.map((opt, idx) => (
                            <div key={idx}>+ {opt.extra_name} (+{opt.price} DA)</div>
                          ))}
                        </div>
                      )}
                      <h3 className='font-sans text-lg font-bold mt-[1vh]'>
                        {item.price * item.quantity + (item.options?.reduce((sum, opt) => sum + opt.price * item.quantity, 0) || 0)} DA
                      </h3>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                      <p className='font-sans text-sm mb-2'>x{item.quantity}</p>
                      <button 
                        onClick={() => handleRemoveOrderItem(item.order_food_id)}
                        className='text-xs bg-red-200 px-2 py-1 rounded cursor-pointer hover:bg-red-300'
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
            
            <p className='font-sans text-xl font-bold w-full border-t-2 text-start pl-[2vw] pt-[2vh]'>
              Total: {calculateTableTotal()} DA
            </p>
            
            <button 
              onClick={handlePrintTicket}
              className="mt-[2vh] inline-block font-sans cursor-pointer items-center justify-center rounded-xl border-[1.58px] border-zinc-600 bg-zinc-950 px-5 py-2 font-medium text-slate-200 shadow-md transition-all duration-300 hover:[transform:translateY(-.335rem)] hover:shadow-xl"
            >
              Print Ticket
            </button>
          </>
        )}
      </div>

      {/* Sidebar */}
      <div className='h-[97%] w-[5.5vw] mt-[1vh] bg-white border-1 border-neutral-300 rounded-3xl ml-[1vw] flex flex-col items-center justify-items-center-safe gap-[20vh] mr-auto shadow-xl'>
        <h1 className='font-serif text-5xl bg-white text-[#dba840] mt-[3vh]'>L</h1>
        <div className='flex flex-col items-center justify-center gap-[5vh] mt-[7vh]'>
          <Link to='/'>
            <div className='flex flex-col h-[8vh] w-[4vw] hover:bg-[#dba840] rounded justify-center items-center hover:transition-colors text-[#c4c1c3] hover:text-white stroke-[#c4c1c3] hover:stroke-white p-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="size-[4vh]">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              <h1 className='font-sans text-[2vh]'>Acceuil</h1>
            </div>
          </Link>
          
          <Link to='/order'>
            <div className='flex flex-col h-[8.5vh] w-[4vw] hover:bg-[#dba840] rounded justify-center items-center hover:transition-colors text-[#c4c1c3] hover:text-white fill-[#c4c1c3] hover:fill-white p-2'>
              <svg xmlns="http://www.w3.org/2000/svg" className='size-[4vh]' viewBox="0 0 64 64">
                <g fillRule="evenodd">
                  <path d="M61.821 11.045c.703-1.309-.891-.912-.891-.912s-10.627 10.201-12.104 8.951S59.231 8.057 57.825 6.23c-1.301-1.703-11.74 10.455-12.994 8.97c-1.242-1.482 8.939-12.123 8.939-12.123s.387-1.602-.912-.9C36.851 10.785 34.812 18.81 34.812 18.81s-.551 1.563.645 2.771c.117.105-29.204 29.26-33.129 33.196c-1.91 1.908 5.098 8.801 6.996 6.893c3.926-3.936 33.024-33.303 33.129-33.194c1.207 1.205 2.766.652 2.766.652s8.012-2.045 16.602-18.083"/>
                </g>
              </svg>
              <h1 className='font-sans text-[2vh]'>Menu</h1>
            </div>
          </Link>
          
          <Link to='/tables'>
            <div className='flex flex-col h-[8vh] w-[4vw] bg-[#dba840] rounded justify-center items-center text-white fill-white p-2'>
              <svg xmlns="http://www.w3.org/2000/svg" className='size-[4vh]' viewBox="0 0 24 24">
                <path d="M12 22H6a2 2 0 0 1 2-2V8H2V5h14v3h-6v12a2 2 0 0 1 2 2M22 2v20h-2v-7h-5v7h-2v-8a2 2 0 0 1 2-2h5V2Z"/>
              </svg>
              <h1 className='font-sans text-[2.2vh]'>Tables</h1>
            </div>
          </Link>
        </div>
      </div>
    
      {/* Main Content */}
      <div className='h-screen w-[93vw] ml-[.5vw] flex flex-col'>
        <h1 className='font-sans text-3xl mt-[2vh] ml-[2vw] font-bold'>Tables</h1>
        
        <div className='flex mt-[3vh] ml-[3vw] gap-[10vw]'>
          <div className='items-center grid grid-cols-2'>
            {tables.slice(0, 8).map((table) => (
              <div
                key={table.id}
                onClick={() => handleTableClick(table)}
                className={`h-[10vh] w-[10vh] cursor-pointer rounded-full border-2 ${getTableStatus(table.id)} items-center justify-center m-[3vh] shadow-lg hover:scale-105 hover:transition-transform flex flex-col`}
              >
                <h1 className='font-sans font-semibold'>{table.name}</h1>
              </div>
            ))}
          </div>
          
          <div className='flex flex-col items-center grid grid-cols-2'>
            {tables.slice(8, 16).map((table) => (
              <div
                key={table.id}
                onClick={() => handleTableClick(table)}
                className={`h-[10vh] w-[10vh] cursor-pointer rounded-full border-2 ${getTableStatus(table.id)} items-center justify-center m-[3vh] shadow-lg hover:scale-105 hover:transition-transform flex flex-col`}
              >
                <h1 className='font-sans font-semibold'>{table.name}</h1>
              </div>
            ))}
          </div>
          
          <div className='flex flex-col items-center -mb-[20vh]'>
            <div className='flex mt-auto'>
              {tables.slice(16, 20).map((table) => (
                <div
                  key={table.id}
                  onClick={() => handleTableClick(table)}
                  className={`h-[10vh] w-[10vh] cursor-pointer rounded-full border-2 ${getTableStatus(table.id)} items-center justify-center m-[3vh] shadow-lg hover:scale-105 hover:transition-transform flex flex-col`}
                >
                  <h1 className='font-sans font-semibold'>{table.name}</h1>
                </div>
              ))}
            </div>
            <div className='flex'>
              {tables.slice(20, 24).map((table) => (
                <div
                  key={table.id}
                  onClick={() => handleTableClick(table)}
                  className={`h-[10vh] w-[10vh] cursor-pointer rounded-full border-2 ${getTableStatus(table.id)} items-center justify-center m-[3vh] shadow-lg hover:scale-105 hover:transition-transform flex flex-col`}
                >
                  <h1 className='font-sans font-semibold'>{table.name}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tables