import React, { useState, useEffect } from 'react'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

// Update this with your actual API URL
const API_BASE_URL = 'http://localhost:8000';

const Order = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [categories, setCategories] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const [tables, setTables] = useState([]);
  const [orderItems, setOrderItems] = useState([]);
  const [currentOrder, setCurrentOrder] = useState(null);
  const [selectedTable, setSelectedTable] = useState('');
  const [hidden, setHidden] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch data on component mount
  useEffect(() => {
    fetchCategories();
    fetchFoodItems();
    fetchTables();
  }, []);

  // API Functions
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

  const createOrder = async (tableId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/orders/?table_id=${tableId}`, {
        method: 'POST',
      });
      const data = await response.json();
      setCurrentOrder(data);
      return data;
    } catch (error) {
      console.error('Error creating order:', error);
      return null;
    }
  };

  const addFoodToOrder = async (foodId, optionId = null) => {
    try {
      let order = currentOrder;
      
      if (!order && selectedTable) {
        order = await createOrder(parseInt(selectedTable));
      }
      
      if (!order) {
        alert('Please select a table first');
        return;
      }

      const response = await fetch(`${API_BASE_URL}/orders/food/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          order_id: order.id,
          food_id: foodId,
          option_id: optionId,
        }),
      });

      if (response.ok) {
        const foodItem = foodItems.find(f => f.id === foodId);
        const newItem = { ...foodItem, quantity, orderFoodId: Date.now() };
        setOrderItems([...orderItems, newItem]);
        setHidden(false);
        setQuantity(1);
        setSelectedFood(null);
      }
    } catch (error) {
      console.error('Error adding food to order:', error);
    }
  };

  const removeFoodFromOrder = async (orderFoodId, itemId) => {
    try {
      await fetch(`${API_BASE_URL}/orders/food/?id=${itemId}`, {
        method: 'DELETE',
      });
      setOrderItems(orderItems.filter(item => item.orderFoodId !== orderFoodId));
    } catch (error) {
      console.error('Error removing food from order:', error);
      setOrderItems(orderItems.filter(item => item.orderFoodId !== orderFoodId));
    }
  };

  const handleCategoryClick = (categoryId) => {
    setActiveSection(categoryId);
  };

  const handleFoodClick = (food) => {
    setSelectedFood(food);
    setQuantity(1);
    setHidden(true);
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

  const calculateTotal = () => {
    return orderItems.reduce((total, item) => total + (item.price * item.quantity), 0);
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

    const tableName = tables.find(t => t.id === parseInt(selectedTable))?.name;
    alert(`Order sent to kitchen for ${tableName}`);
    
    setOrderItems([]);
    setCurrentOrder(null);
    setSelectedTable('');
  };

  const renderFoodItems = () => {
    const items = getCategoryFoodItems();
    const currentCategory = categories.find(cat => cat.id === activeSection);
    
    return (
      <section className='h-full w-full flex flex-col'>
        <div className='h-[10vh] max-w-[55vw] flex justify-between items-center'>
          <h1 className='font-sans text-2xl'>{currentCategory?.name || 'Menu'}</h1>
          <h2 className='font-sans text-sm text-neutral-400'>Resultat: {items.length}</h2>
        </div>
        <div className='h-full max-w-[60vw] overflow-scroll p-4 gap-[1vh] grid grid-cols-2'>
          {items.length === 0 ? (
            <div className='col-span-2 text-center text-neutral-400 mt-[5vh]'>
              No items found
            </div>
          ) : (
            items.map((food) => (
              <motion.div
                key={food.id}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => handleFoodClick(food)}
                className='h-[15vh] w-[25vw] bg-white shadow-xl cursor-pointer rounded-2xl items-center justify-start flex'
              >
                <div className='size-[13vh] rounded-2xl ml-[.5vw] bg-orange-200 flex items-center justify-center'>
                  <span className='text-2xl'>🍽️</span>
                </div>
                <div className='flex flex-col ml-[1vw]'>
                  <h1 className='font-sans text-md'>{food.name}</h1>
                  <h2 className='font-sans text-sm text-neutral-400'>
                    {food.description || 'Delicious item'}
                  </h2>
                  <h3 className='font-sans text-lg font-bold mt-[1vh]'>{food.price} DA</h3>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </section>
    );
  };

  return (
    <div className='h-screen w-screen overflow-hidden bg-[#fdfbfb] flex'>
      <div className={`${hidden ? '' : 'hidden'} absolute ml-[40vw] mt-[30vh] h-[40vh] w-[20vw] bg-white justify-center text-center items-center drop-shadow-2xl rounded-xl z-50`}>
        <div className='h-4 w-full'>
          <p onClick={() => { setHidden(false); setQuantity(1); }} className='px-3 bg-amber-200 cursor-pointer text-white'>x</p>
        </div>
        <div className='h-[15vh] w-full rounded-2xl items-center justify-center flex'>
          <div className='flex flex-col items-center'>
            <h1 className='font-sans text-md'>{selectedFood?.name}</h1>
            <h2 className='font-sans text-sm text-neutral-400'>{selectedFood?.description}</h2>
            <h3 className='font-sans text-lg font-bold mt-[1vh]'>{selectedFood?.price} DA</h3>
          </div>
        </div>
        <h1 className='font-sans text-black mb-[1vh]'>Quantity</h1>
        <div className='flex justify-center items-center'>
          <p onClick={() => setQuantity(q => q + 1)} className='font-sans text-md text-black bg-emerald-200 px-2 rounded-2xl cursor-pointer'>+</p>
          <p className='font-sans text-md text-black mx-2'>{quantity}</p>
          <p onClick={() => setQuantity(q => Math.max(1, q - 1))} className='font-sans text-md text-black bg-amber-200 px-2 rounded-2xl cursor-pointer'>-</p>
        </div>
        <button onClick={() => selectedFood && addFoodToOrder(selectedFood.id)} className="inline-block mt-[5vh] font-sans cursor-pointer items-center justify-center rounded-xl border-[1.58px] border-zinc-600 bg-zinc-950 px-5 py-2 font-medium text-slate-200 shadow-md transition-all duration-300 hover:[transform:translateY(-.335rem)] hover:shadow-xl">
          Ajouter au order
        </button>
      </div>

      <div className='h-[97%] w-[8vw] mt-[1vh] bg-white border-1 border-neutral-300 rounded-3xl ml-[1vw] flex flex-col items-center justify-items-center-safe gap-[20vh] mr-auto shadow-xl'>
        <h1 className='font-serif text-5xl bg-white text-[#dba840] mt-[3vh]'>L</h1>
        <div className='flex flex-col items-center justify-center gap-[5vh] mt-[7vh]'>
          <Link to='/'><div className='flex flex-col h-[8vh] w-[4vw] hover:bg-[#dba840] rounded justify-center items-center hover:transition-colors text-[#c4c1c3] hover:text-white stroke-[#c4c1c3] hover:stroke-white p-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="size-[4vh]">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            <h1 className='font-sans text-[2vh]'>Acceuil</h1>
          </div></Link>
          
          <Link to='/order'><div className='flex flex-col h-[8.5vh] w-[4vw] hover:bg-[#dba840] rounded justify-center items-center hover:transition-colors text-[#c4c1c3] hover:text-white fill-[#c4c1c3] hover:fill-white p-2'>
            <svg xmlns="http://www.w3.org/2000/svg" className='size-[4vh]' viewBox="0 0 64 64">
              <g fillRule="evenodd">
                <path d="M61.821 11.045c.703-1.309-.891-.912-.891-.912s-10.627 10.201-12.104 8.951S59.231 8.057 57.825 6.23c-1.301-1.703-11.74 10.455-12.994 8.97c-1.242-1.482 8.939-12.123 8.939-12.123s.387-1.602-.912-.9C36.851 10.785 34.812 18.81 34.812 18.81s-.551 1.563.645 2.771c.117.105-29.204 29.26-33.129 33.196c-1.91 1.908 5.098 8.801 6.996 6.893c3.926-3.936 33.024-33.303 33.129-33.194c1.207 1.205 2.766.652 2.766.652s8.012-2.045 16.602-18.083"/>
              </g>
            </svg>
            <h1 className='font-sans text-[2vh]'>Menu</h1>
          </div></Link>
          
          <Link to='/tables'><div className='flex flex-col h-[8vh] w-[4vw] hover:bg-[#dba840] rounded justify-center items-center hover:transition-colors text-[#c4c1c3] hover:text-white fill-[#c4c1c3] hover:fill-white p-2'>
            <svg xmlns="http://www.w3.org/2000/svg" className='size-[4vh]' viewBox="0 0 24 24">
              <path d="M12 22H6a2 2 0 0 1 2-2V8H2V5h14v3h-6v12a2 2 0 0 1 2 2M22 2v20h-2v-7h-5v7h-2v-8a2 2 0 0 1 2-2h5V2Z"/>
            </svg>
            <h1 className='font-sans text-[2.2vh]'>Tables</h1>
          </div></Link>
        </div>
      </div>

      <div className='h-screen w-[92vw] flex flex-col'>
        <div className='h-[10vh] w-[55vw] mt-[4vh] ml-[3vw] flex items-center justify-between'>
          <h1 className='font-sans font-normal text-[3vh] text-nowrap'>Choisissez la catégorie</h1>
          <div className="relative mt-[1vh]">
            <input
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input bg-white shadow-lg focus:border-2 border-gray-300 px-5 py-3 rounded-xl w-56 transition-all focus:w-64 outline-none"
              name="search"
              type="search"
            />
            <svg className="size-6 absolute top-3 right-3 text-gray-500" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none">
              <path d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" strokeLinejoin="round" strokeLinecap="round"></path>
            </svg>
          </div>
        </div>

        <div className='h-[15vh] max-w-[55vw] overflow-x-scroll items-center justify-start flex gap-[2vw] mt-[3vh] ml-[3vw]'>
          {categories.map((category) => (
            <div 
              key={category.id}
              className={`flex flex-col gap-[1vh] shadow-lg items-center justify-center h-[13vh] w-[5vw] p-4 bg-white rounded-2xl hover:scale-105 transition-all cursor-pointer ${
                activeSection === category.id ? 'border-2 border-[#dba840]' : ''
              }`}
              onClick={() => handleCategoryClick(category.id)}
            >
              <span className='text-4xl'>🍽️</span>
              <h1 className='font-sans font-medium text-[1.5vh]'>{category.name}</h1>
            </div>
          ))}
        </div>

        <div className='h-[63vh] max-w-[60vw] ml-[3vw] rounded-2xl flex flex-col'>
          {renderFoodItems()}
        </div>
      </div>

      <div className='h-[90vh] w-[40vw] bg-white shadow-xl p-4 rounded-2xl mt-[5vh] mr-[1vw]'>
        <h1 className='font-sans text-xl font-bold'>Command</h1>
        <div className='flex flex-col h-[75vh] mt-[2vh] overflow-scroll gap-[1vh]'>
          {orderItems.map((item, index) => (
            <div key={item.orderFoodId} className='h-[13vh] w-[25vw] rounded-2xl items-center justify-start flex relative'>
              <div className='size-[11vh] rounded-2xl ml-[.5vw] bg-orange-200 flex items-center justify-center'>
                <span className='text-2xl'>🍽️</span>
              </div>
              <div className='flex flex-col ml-[1vw]'>
                <h1 className='font-sans text-md'>{item.name}</h1>
                <h3 className='font-sans text-lg font-bold mt-[1vh]'>{item.price} DA</h3>
              </div>
              <div className='flex flex-col items-center justify-center ml-auto gap-[1vh]'>
                <h1 className='text-md font-sans'>x{item.quantity}</h1>
                <button 
                  onClick={() => removeFoodFromOrder(item.orderFoodId, item.id)}
                  className='text-xs bg-red-200 px-2 py-1 rounded cursor-pointer hover:bg-red-300'
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          
          <div className='flex justify-between border-t-1 items-center mt-[2vh]'>
            <h1 className='font-sans text-lg ml-[1vw]'>Total</h1>
            <p className='font-sans text-sm mt-[1vh]'>{calculateTotal()} DA</p>
          </div>
          
          <div className='h-fit flex flex-col gap-[2vh] justify-center items-center mt-[3vh]'>
            <div className="max-w-sm mx-auto -mt-[3.5vh]">
              <label htmlFor="tables" className="block mb-2 text-sm font-sans font-medium text-gray-900">Tables</label>
              <select 
                id="tables" 
                value={selectedTable}
                onChange={(e) => setSelectedTable(e.target.value)}
                className="border font-sans border-zinc-600 bg-zinc-950 text-white text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 px-[2.5vw] py-[1.5vh]"
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
              className="inline-block font-sans cursor-pointer items-center justify-center rounded-xl border-[1.58px] border-zinc-600 bg-zinc-950 px-5 py-2 font-medium text-slate-200 shadow-md transition-all duration-300 hover:[transform:translateY(-.335rem)] hover:shadow-xl"
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