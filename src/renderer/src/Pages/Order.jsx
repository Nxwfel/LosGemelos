import React, { useRef , useState , useEffect } from 'react'
import { motion } from 'framer-motion'
import {Link} from 'react-router-dom'
// Update this with your actual API URL
const API_BASE_URL = 'http://localhost:8000';

const Order = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [categories, setCategories] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const [tables, setTables] = useState([]);
  const [orderItems, setOrderItems] = useState([]);
  const [selectedTable, setSelectedTable] = useState('');
  const [hidden, setHidden] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [foodOptions, setFoodOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    fetchCategories();
    fetchFoodItems();
    fetchTables();
  }, []);

  // Fetch options when food is selected
  useEffect(() => {
    if (selectedFood) {
      fetchFoodOptions(selectedFood.id);
    }
  }, [selectedFood]);

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/food/categories/`);
      const data = await response.json();
      setCategories(data);
      if (data.length > 0 && !activeSection) {
        setActiveSection(data[0].id);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchFoodItems = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/food/`);
      const data = await response.json();
      setFoodItems(data);
    } catch (error) {
      console.error('Error fetching food items:', error);
    }
  };

  const fetchTables = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/tables/`);
      const data = await response.json();
      setTables(data);
    } catch (error) {
      console.error('Error fetching tables:', error);
    }
  };

  const fetchFoodOptions = async (foodId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/food/options/?food_id=${foodId}`);
      const data = await response.json();
      setFoodOptions(data);
    } catch (error) {
      console.error('Error fetching food options:', error);
      setFoodOptions([]);
    }
  };

  const addFoodToOrder = () => {
    if (!selectedFood) return;

    // Create order item with all necessary information
    const newItem = {
      food_id: selectedFood.id,
      name: selectedFood.name,
      price: selectedFood.price,
      quantity: quantity,
      option_ids: selectedOptions,
      tempId: Date.now(), // Temporary ID for frontend tracking
      options: selectedOptions.map(optId => 
        foodOptions.find(opt => opt.id === optId)
      ).filter(Boolean)
    };

    setOrderItems([...orderItems, newItem]);
    setHidden(false);
    setQuantity(1);
    setSelectedFood(null);
    setSelectedOptions([]);
    setFoodOptions([]);
  };

  const removeFoodFromOrder = (tempId) => {
    setOrderItems(orderItems.filter(item => item.tempId !== tempId));
  };

  const handleSendToKitchen = async () => {
    if (!selectedTable) {
      alert('Please select a table');
      return;
    }
    
    if (orderItems.length === 0) {
      alert('Please add items to the order');
      return;
    }

    try {
      // Prepare the order payload according to your API spec
      // POST /orders/ expects: { table_id: int, food: [{ food_id: int, quantity: int, option_ids: [int] }] }
      const orderPayload = {
        table_id: parseInt(selectedTable),
        food: orderItems.map(item => ({
          food_id: item.food_id,
          quantity: item.quantity,
          option_ids: item.option_ids
        }))
      };

      console.log('Sending order to kitchen:', orderPayload);

      const response = await fetch(`${API_BASE_URL}/orders/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderPayload)
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Order created successfully:', result);
        
        const tableName = tables.find(t => t.id === parseInt(selectedTable))?.name;
        alert(`✅ Order sent to kitchen for ${tableName}!`);
        
        // Reset the form after successful order
        setOrderItems([]);
        setSelectedTable('');
      } else {
        const errorData = await response.json();
        console.error('Server error:', errorData);
        
        // Display more detailed error information
        if (errorData.detail && Array.isArray(errorData.detail)) {
          const errorMessages = errorData.detail.map(err => 
            `Field: ${err.loc.join('.')} - ${err.msg}`
          ).join('\n');
          alert(`❌ Failed to send order:\n${errorMessages}`);
        } else {
          alert('❌ Failed to send order. Please check the console for details.');
        }
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('❌ Network error. Failed to send order to kitchen. Please try again.');
    }
  };

  const handleCategoryClick = (categoryId) => {
    setActiveSection(categoryId);
  };

  const handleFoodClick = (food) => {
    setSelectedFood(food);
    setQuantity(1);
    setSelectedOptions([]);
    setHidden(true);
  };

  const toggleOption = (optionId) => {
    setSelectedOptions(prev => 
      prev.includes(optionId) 
        ? prev.filter(id => id !== optionId)
        : [...prev, optionId]
    );
  };

  const getCategoryFoodItems = () => {
    let items = foodItems.filter(food => food.category_id === activeSection);
    
    if (searchQuery) {
      items = items.filter(food => 
        food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (food.description && food.description.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    
    return items;
  };

  const calculateItemTotal = (item) => {
    let total = item.price * item.quantity;
    
    // Add option prices
    if (item.options && item.options.length > 0) {
      item.options.forEach(option => {
        if (option) {
          total = option.price * item.quantity;
        }
      });
    }
    
    return total;
  };

  const calculateTotal = () => {
    return orderItems.reduce((total, item) => total + calculateItemTotal(item), 0);
  };
  

  const renderFoodItems = () => {
    const items = getCategoryFoodItems();
    const currentCategory = categories.find(cat => cat.id === activeSection);
    
    return (
      <section className='h-full w-full flex flex-col'>
        <div className='h-[10vh] max-w-[55vw] flex justify-between items-center'>
          <h1 className='Anybody text-2xl text-white font-bold'>{currentCategory?.name || 'Menu'}</h1>
          <h2 className='Anybody text-sm text-neutral-400'>Resultat: {items.length}</h2>
        </div>
        <div className='h-full max-w-[60vw] overflow-scroll p-4 gap-[1vh] grid grid-cols-2'>
          {items.length === 0 ? (
            <div className='Anybody col-span-2 text-center text-neutral-400 mt-[5vh]'>
              No items found
            </div>
          ) : (
            items.map((food) => (
              <motion.div
                key={food.id}
                initial={{ scale: 1 , backgroundColor: "#202020" }}
                whileHover={{ scale: 1.05 , backgroundColor: "#FFD41D" }}
                onClick={() => handleFoodClick(food)}
                className='h-[15vh] w-[25vw] bg-[#202020] shadow-xl overflow-hidden cursor-pointer rounded-2xl items-center justify-start flex'
              >
                <div className='bg-[#FFD41D] h-full w-[1vw]'>

                </div>
                <div className='flex flex-col ml-[1vw]'>
                  <div className='flex items-center justify-start'>
                    <p className='Anybody text-neutral-400 text-xs mr-2'>Command</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6 ">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                    <p className='Anybody text-neutral-400 text-xs ml-2'>Cuisine</p>
                  </div>
                  <h1 className='Anybody text-md text-white'>{food.name}</h1>
                  <h3 className='Anybody text-lg font-bold mt-[1vh] text-white'>{food.price} DA</h3>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </section>
    );
  };

  return (
    <div className='h-screen w-screen overflow-hidden bg-[#111315] flex'>
      {/* Food Selection Modal */}
      <div className={`${hidden ? '' : 'hidden'} absolute ml-[40vw] mt-[20vh] h-fit max-h-[60vh] w-[20vw] bg-white justify-center text-center items-center drop-shadow-2xl rounded-xl z-50 overflow-y-auto`}>
        <div className='h-4 w-full sticky top-0 bg-white z-10'>
          <p onClick={() => { setHidden(false); setQuantity(1); setSelectedOptions([]); }} className='px-3 bg-amber-200 cursor-pointer text-white'>x</p>
        </div>
        <div className='h-[15vh] w-full rounded-2xl items-center justify-center flex'>
          <div className='flex flex-col items-center'>
            <h1 className='Anybody text-md font-bold'>{selectedFood?.name}</h1>
            <h3 className='Anybody text-lg font-bold mt-[1vh]'>{selectedFood?.price} DA</h3>
          </div>
        </div>

        {/* Options Section */}
        {foodOptions.length > 0 && (
          <div className='px-4 mb-4'>
            <h2 className='Anybody text-md font-semibold mb-2'>Options</h2>
            <div className='flex flex-col gap-2'>
              {foodOptions.map(option => (
                <div 
                  key={option.id}
                  onClick={() => toggleOption(option.id)}
                  className={`p-2 rounded-lg cursor-pointer border-2 transition-all ${
                    selectedOptions.includes(option.id) 
                      ? 'border-emerald-400 bg-emerald-50' 
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  <div className='flex justify-between items-center'>
                    <span className='Anybody text-sm'>{option.extra_name}</span>
                    <span className='Anybody text-sm font-semibold'>+{option.price} DA</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <h1 className='Anybody text-black mb-[1vh]'>Quantity</h1>
        <div className='flex justify-center items-center mb-4'>
          <p onClick={() => setQuantity(q => q + 1)} className='Anybody text-md text-black bg-emerald-200 px-2 rounded-2xl cursor-pointer'>+</p>
          <p className='Anybody text-md text-black mx-2'>{quantity}</p>
          <p onClick={() => setQuantity(q => Math.max(1, q - 1))} className='Anybody text-md text-black bg-amber-200 px-2 rounded-2xl cursor-pointer'>-</p>
        </div>
        <button onClick={addFoodToOrder} className="inline-block mb-4 Anybody cursor-pointer items-center justify-center rounded-xl border-[1.58px] border-zinc-600 bg-zinc-950 px-5 py-2 font-medium text-slate-200 shadow-md transition-all duration-300 hover:[transform:translateY(-.335rem)] hover:shadow-xl">
          Ajouter au order
        </button>
      </div>

      {/* Sidebar */}
      <div className='h-screen w-[20vw] flex flex-col items-center justify-start mt-[4vh] mr-auto'>
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
          <div className="relative mt-[1vh]">
            <input
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input Anybody bg-[#2d2d2d] text-white shadow-lg focus:border-2 border-gray-300 px-5 py-3 rounded-lg w-56 transition-all focus:w-64 outline-none"
              name="search"
              type="search"
            />
            <svg className="size-6 absolute top-3 right-3 text-neutral-400" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none">
              <path d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" strokeLinejoin="round" strokeLinecap="round"></path>
            </svg>
          </div>
        </div>

        <div className="relative">
  <div
    className="h-[35vh] max-w-[55vw] px-5 py-2 overflow-y-auto overflow-x-hidden
               grid grid-cols-5 gap-[.5vw] mt-[2vh] ml-[3vw]"
  >
    {categories.map((category) => (
      <div
        key={category.id}
        className={`flex flex-col gap-[1.5vh] shadow-sm shadow-[#2d2d2d]
          items-center text-center justify-start p-1 h-[16vh] w-[9vw]
          bg-[#2d2d2d] rounded-lg hover:scale-105 transition-all cursor-pointer ${
            activeSection === category.id ? 'border-2 border-[#dba840]' : ''
          }`}
        onClick={() => handleCategoryClick(category.id)}
      >
        <span className="text-2xl mr-auto">{category.icon || '🍽️'}</span>
        <h1 className="Anybody font-medium text-[1.5vh] text-white max-w-[6vw]">
          {category.name}
        </h1>
      </div>
    ))}
  </div>

  {/* Progress bar */}
  <div className="absolute bottom-0 left-10 w-[90%] h-[3px] bg-[#2d2d2d]">
  </div>
</div>

        <div className='h-[50vh] max-w-[60vw] ml-[3vw] rounded-2xl flex flex-col'>
          {renderFoodItems()}
        </div>
      </div>

      {/* Order Panel */}
      <div className='h-[90vh] w-[40vw] bg-transparent text-white shadow-xl p-4 rounded-2xl mt-[5vh] mr-[1vw]'>
        <h1 className='Anybody text-xl font-bold'>Command</h1>
        <div className='flex flex-col h-[75vh] mt-[2vh] overflow-scroll gap-[1vh]'>
          <div className='h-[60vh] w-full overflow-scroll gap-[1vh] flex flex-col'>
          {orderItems.map((item) => (
            <div key={item.tempId} className='min-h-fit w-[25vw] rounded-2xl items-start justify-start flex relative overflow-hidden bg-[#202020] shadow-md'>
                <div className='bg-[#FFD41D] h-full w-[1vw]'>
                </div>
              <div className='flex flex-col ml-[1vw] flex-1 py-[1vh]'>
                <h1 className='Anybody text-md font-semibold '>{item.name}</h1>
                {item.options && item.options.length > 0 && (
                  <div className='text-xs text-neutral-600 mt-1'>
                    {item.options.map((opt, idx) => (
                      <div key={idx}>+ {opt.extra_name} (+{opt.price} DA)</div>
                    ))}
                  </div>
                )}
                
                <h3 className='Anybody text-lg font-bold mt-[1vh]'>{calculateItemTotal(item)} DA</h3>
              </div>
              <div className='flex flex-col items-center justify-center gap-[1vh] px-2 py-1'>
                <h1 className='text-md Anybody'>x{item.quantity}</h1>
                <button 
                  onClick={() => removeFoodFromOrder(item.tempId)}
                  className='text-xs bg-red-200 px-2 py-1 rounded cursor-pointer hover:bg-red-300'
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          </div>
          
          <div className='flex justify-between border-t-2 items-center mt-[2vh] pt-2'>
            <h1 className='Anybody text-lg ml-[1vw] font-bold'>Total</h1>
            <p className='Anybody text-xl font-bold'>{calculateTotal()} DA</p>
          </div>
          
          <div className='h-fit flex flex-col gap-[2vh] justify-start items-center mt-[3vh]'>
            <div className="max-w-sm mx-auto -mt-[3.5vh]">
              <select 
                id="tables" 
                value={selectedTable}
                onChange={(e) => setSelectedTable(e.target.value)}
                className="border-1 Anybody border-black bg-white text-black text-md rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-2.5"
              >
                <option value="">Select a table</option>
                {tables.map((table) => (
                  <option key={table.id} value={table.id}>
                    {table.name}
                  </option>
                ))}
              </select>
            </div>
            <button 
              onClick={handleSendToKitchen}
              disabled={!selectedTable || orderItems.length === 0}
              className="inline-block Anybody cursor-pointer items-center justify-center rounded-full border-[1.58px] border-black bg-white px-3 py-2 text-black shadow-md transition-all duration-300 hover:[transform:translateY(-.335rem)] hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none"
            >
              Vers la cuisine
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order