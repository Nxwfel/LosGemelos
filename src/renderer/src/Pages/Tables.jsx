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
      const [ordersResponse, foodResponse] = await Promise.all([
        fetch(`${API_BASE_URL}/orders/`),
        fetch(`${API_BASE_URL}/food/`)
      ]);
      
      const allOrders = await ordersResponse.json();
      const allFoods = await foodResponse.json();
      
      const filteredOrders = allOrders.filter(order => order.table_id === table.id);
      
      const enrichedOrders = await Promise.all(
        filteredOrders.map(async (order) => {
          const foodItems = order.food_items || order.food || [];
          
          const enrichedFoodItems = await Promise.all(
            foodItems.map(async (item) => {
              const foodDetails = allFoods.find(food => food.id === item.food_id);
              
              if (!foodDetails) {
                return null;
              }
              
              let options = [];
              if (item.option_ids && item.option_ids.length > 0) {
                try {
                  const optionsResponse = await fetch(`${API_BASE_URL}/food/options/?food_id=${item.food_id}`);
                  const allOptions = await optionsResponse.json();
                  options = allOptions.filter(opt => item.option_ids.includes(opt.id));
                } catch (error) {
                  console.error('Error fetching options:', error);
                }
              }
              
              return {
                ...foodDetails,
                quantity: item.quantity,
                options: options,
                order_food_id: item.id || item.food_id
              };
            })
          );
          
          return {
            ...order,
            food_items: enrichedFoodItems.filter(item => item !== null)
          };
        })
      );
      
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

    try {
      let successCount = 0;
      let failCount = 0;

      for (const order of tableOrders) {
        try {
          const response = await fetch(`${API_BASE_URL}/orders/food/?id=${order.id}`, {
            method: 'DELETE',
          });
          
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

      await fetchOrders();
      setTableOrders([]);
      setHidden(false);
      
      alert('Ticket printed and table cleared!');
    } catch (error) {
      console.error('Error clearing table orders:', error);
      alert('Ticket printed but error clearing orders: ' + error.message);
    }
  };

  const handleRemoveOrderItem = async (orderFoodId, foodId) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/orders/food/?order_id=${orderFoodId}&food_id=${foodId}`,
        { method: 'DELETE' }
      );

      if (response.ok) {
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
    return hasOrders ? 'bg-emerald-400' : 'bg-[#2d2d2d]';
  };

  return (
    <div className='h-screen w-screen overflow-hidden bg-[#111315] flex'>
      {/* Order Details Modal */}
      <div className={`${hidden ? '' : 'hidden'} absolute ml-[30vw] mt-[10vh] h-fit max-h-[80vh] w-[40vw] bg-white justify-center text-center items-center drop-shadow-2xl rounded-xl z-50 overflow-y-auto`}>
        <div className='h-4 w-full sticky top-0 bg-white z-10'>
          <p 
            onClick={() => setHidden(false)}
            className='px-3 bg-amber-200 cursor-pointer text-white'
          >
            x
          </p>
        </div>
        
        <h1 className='Anybody text-2xl mt-[3vh] font-bold text-black'>
          {selectedTable?.name || 'Table'}
        </h1>
        
        {loading ? (
          <div className='mt-[10vh] mb-[3vh]'>
            <p className='Anybody text-neutral-400'>Loading orders...</p>
          </div>
        ) : tableOrders.length === 0 ? (
          <div className='mt-[10vh] mb-[3vh]'>
            <p className='Anybody text-neutral-400'>No orders for this table</p>
          </div>
        ) : (
          <>
            <div className='max-h-[50vh] w-[90%] overflow-y-auto flex flex-col gap-[1vh] ml-auto mr-auto items-center mt-[3vh] mb-[1vh] p-5'>
              {tableOrders.map(order => 
                order.food_items?.map((item, index) => (
                  <div key={`${order.id}-${index}`} className='min-h-fit w-full rounded-2xl items-start justify-start flex relative overflow-hidden bg-[#202020] shadow-md'>
                    <div className='bg-[#FFD41D] h-full w-[1vw]'></div>
                    <div className='flex flex-col ml-[1vw] flex-1 text-left py-[1vh]'>
                      <h1 className='Anybody text-md font-semibold text-white'>{item.name}</h1>
                      {item.options && item.options.length > 0 && (
                        <div className='text-xs text-neutral-400 mt-1'>
                          {item.options.map((opt, idx) => (
                            <div key={idx}>+ {opt.extra_name} (+{opt.price} DA)</div>
                          ))}
                        </div>
                      )}
                      <h3 className='Anybody text-lg font-bold mt-[1vh] text-white'>
                        {item.price * item.quantity + (item.options?.reduce((sum, opt) => sum + opt.price * item.quantity, 0) || 0)} DA
                      </h3>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-[1vh] px-2 py-1'>
                      <h1 className='text-md Anybody text-white'>x{item.quantity}</h1>
                      <button 
                        onClick={() => handleRemoveOrderItem(item.order_food_id, item.id)}
                        className='text-xs bg-red-200 px-2 py-1 rounded cursor-pointer hover:bg-red-300'
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
            
            <div className='flex justify-between border-t-2 items-center mt-[2vh] pt-2 px-[2vw]'>
              <h1 className='Anybody text-lg font-bold text-black'>Total</h1>
              <p className='Anybody text-xl font-bold text-black'>{calculateTableTotal()} DA</p>
            </div>
            
            <button 
              onClick={handlePrintTicket}
              className="mt-[2vh] mb-4 inline-block Anybody cursor-pointer items-center justify-center rounded-xl border-[1.58px] border-zinc-600 bg-zinc-950 px-5 py-2 font-medium text-slate-200 shadow-md transition-all duration-300 hover:[transform:translateY(-.335rem)] hover:shadow-xl"
            >
              Print Ticket
            </button>
          </>
        )}
      </div>

      {/* Sidebar */}
      <div className='h-screen w-[14vw] flex flex-col items-center justify-start mt-[4vh] mr-auto'>
        <div className='flex items-center justify-center gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="white" className="size-7">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
          </svg>
          <h1 className='Anybody text-lg text-white'>Los Gemelos</h1>
        </div>
        <div className='flex flex-col items-center justify-center gap-[2vh] w-full mt-[30vh]'>
          <Link to='/'>
            <h1 className='Anybody text-start text-[2vh] hover:duration-200 hover:transition-all text-white p-4 px-9 rounded-lg hover:bg-[#2d2d2d]'>Acceuil</h1>
          </Link> 
          
          <Link to='/order'>
            <h1 className='Anybody text-[2vh] hover:duration-200 hover:transition-all text-white p-4 px-9 rounded-lg hover:bg-[#2d2d2d]'>Menu</h1>
          </Link>
          
          <Link to='/tables'>
            <h1 className='Anybody text-[2vh] hover:duration-200 hover:transition-all text-white p-4 px-9 rounded-lg hover:bg-[#2d2d2d]'>Tables</h1>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className='h-screen w-[92vw] flex flex-col'>
        <div className='h-[10vh] w-[55vw] ml-[3vw] mt-[4vh] flex items-center justify-between'>
          <h1 className='Anybody text-2xl text-white font-bold'>Tables</h1>
        </div>

        <div className='h-[85vh] max-w-[80vw] ml-[3vw] mt-[2vh] overflow-scroll p-4 gap-[2vh] grid grid-cols-6'>
          {tables.map((table) => (
            <div
              key={table.id}
              onClick={() => handleTableClick(table)}
              className={`h-[15vh] w-[12vw] ${getTableStatus(table.id)} shadow-xl cursor-pointer rounded-2xl items-center justify-center flex flex-col hover:scale-105 transition-all`}
            >
              <h1 className='Anybody font-semibold text-white text-lg'>{table.name}</h1>
              {orders.some(order => order.table_id === table.id) && (
                <div className='mt-2 w-3 h-3 bg-white rounded-full'></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tables