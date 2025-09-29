import React, { useState, useEffect } from 'react';
import { BarChart, Bar, LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { Link } from 'react-router-dom';

const API_BASE = "http://localhost:8000";

const Dashboard = () => {
  const [message, setMessage] = useState("");
  const [activesection, setActivesection] = useState('Dashboard');
  
  const [categoryForm, setCategoryForm] = useState({ name: "", description: "" });
  const [foodForm, setFoodForm] = useState({ name: "", price: "", description: "", category_id: "", kitchen_id: "" });
  const [selectedCategoryToDelete, setSelectedCategoryToDelete] = useState("");
  const [selectedFoodToDelete, setSelectedFoodToDelete] = useState("");
  
  const [categories, setCategories] = useState([]);
  const [food, setFood] = useState([]);
  const [kitchens, setKitchens] = useState([]);
  const [orders, setOrders] = useState([]);

  ModuleRegistry.registerModules([AllCommunityModule]);

  useEffect(() => {
    fetchCategories();
    fetchFood();
    fetchKitchens();
    fetchOrders();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${API_BASE}/food/categories/`);
      if (!response.ok) throw new Error("Failed to fetch categories");
      const data = await response.json();
      setCategories(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchFood = async () => {
    try {
      const response = await fetch(`${API_BASE}/food/`);
      if (!response.ok) throw new Error("Failed to fetch food");
      const data = await response.json();
      setFood(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchKitchens = async () => {
    try {
      const response = await fetch(`${API_BASE}/kitchens/`);
      if (!response.ok) throw new Error("Failed to fetch kitchens");
      const data = await response.json();
      setKitchens(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchOrders = async () => {
    try {
      const response = await fetch(`${API_BASE}/orders/`);
      if (!response.ok) throw new Error("Failed to fetch orders");
      const data = await response.json();
      setOrders(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddCategory = async (e) => {
    e.preventDefault();
    setMessage("");
    
    try {
      const response = await fetch(`${API_BASE}/food/categories/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: categoryForm.name, description: categoryForm.description || null })
      });

      if (!response.ok) throw new Error("Failed to add category");
      
      setMessage(`✅ Category added successfully!`);
      setCategoryForm({ name: "", description: "" });
      fetchCategories();
    } catch (error) {
      setMessage(`❌ Error: ${error.message}`);
    }
  };

  const handleDeleteCategory = async () => {
    if (!selectedCategoryToDelete) return;
    
    try {
      const response = await fetch(`${API_BASE}/food/categories/?id=${selectedCategoryToDelete}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Failed to delete category");
      
      setMessage(`✅ Category deleted successfully!`);
      setSelectedCategoryToDelete("");
      fetchCategories();
    } catch (error) {
      setMessage(`❌ Error: ${error.message}`);
    }
  };

  const handleAddFood = async (e) => {
    e.preventDefault();
    setMessage("");
    
    try {
      const response = await fetch(`${API_BASE}/food/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: foodForm.name,
          price: parseFloat(foodForm.price),
          description: foodForm.description || null,
          category_id: parseInt(foodForm.category_id),
          kitchen_id: parseInt(foodForm.kitchen_id)
        })
      });

      if (!response.ok) throw new Error("Failed to add food");
      
      setMessage(`✅ Food item added successfully!`);
      setFoodForm({ name: "", price: "", description: "", category_id: "", kitchen_id: "" });
      fetchFood();
    } catch (error) {
      setMessage(`❌ Error: ${error.message}`);
    }
  };

  const handleDeleteFood = async () => {
    if (!selectedFoodToDelete) return;
    
    try {
      const response = await fetch(`${API_BASE}/food/?id=${selectedFoodToDelete}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Failed to delete food");
      
      setMessage(`✅ Food item deleted successfully!`);
      setSelectedFoodToDelete("");
      fetchFood();
    } catch (error) {
      setMessage(`❌ Error: ${error.message}`);
    }
  };

  const chartData = [
    { name: 'Lun', uv: 4000, pv: 2400 },
    { name: 'Mar', uv: 3000, pv: 1398 },
    { name: 'Mer', uv: 2000, pv: 9800 },
    { name: 'Jeu', uv: 2780, pv: 3908 },
    { name: 'Ven', uv: 1890, pv: 4800 },
    { name: 'Sam', uv: 2390, pv: 3800 },
    { name: 'Dim', uv: 3490, pv: 4300 }
  ];

  const GridExample = () => {
    const [rowData] = useState([
      { make: "Tesla", model: "Model Y", price: 64950, electric: true },
      { make: "Ford", model: "F-Series", price: 33850, electric: false },
      { make: "Toyota", model: "Corolla", price: 29600, electric: false }
    ]);

    const [colDefs] = useState([
      { field: "make" },
      { field: "model" },
      { field: "price" },
      { field: "electric" }
    ]);

    return (
      <div style={{ width: "100%", height: "100%" }}>
        <AgGridReact rowData={rowData} columnDefs={colDefs} defaultColDef={{ flex: 1 }} />
      </div>
    );
  };

  return (
    <div className='min-h-screen w-screen bg-neutral-100 flex flex-col items-center justify-start'>
      {message && (
        <div className="fixed top-4 right-4 bg-white p-4 rounded-lg shadow-lg z-50">
          <p className="font-Quicksand">{message}</p>
        </div>
      )}
      
      <div className='h-[10vh] w-[98%] rounded-xl shadow-md bg-white flex items-center mt-[2vh]'>
        <Link to='/'><div className='h-[60%] w-fit p-3 ml-[1vw] hover:text-red-600 cursor-pointer flex items-center justify-center bg-neutral-200 rounded-2xl'>
          <h1 className='font-Quicksand text-sm'>Back</h1>
        </div></Link>
        
        <div className="justify-center items-center w-fit h-[80%] gap-[1vw] flex ml-auto mr-auto">
          {["Dashboard", "Caisse", "Frais", "Paramètres"].map((item) => (
            <h1
              key={item}
              onClick={() => setActivesection(item)}
              className={`font-Quicksand text-sm cursor-pointer p-3 rounded-2xl transition 
                ${activesection === item ? "bg-neutral-200 text-black" : "text-neutral-400 hover:text-black hover:bg-neutral-200"}`}
            >
              {item}
            </h1>
          ))}
        </div>
      </div>

      <section className={`h-[87vh] w-[98%] flex flex-col items-center justify-start ${activesection === "Dashboard" ? "" : "hidden"}`}>
        <div className='h-[35vh] w-screen flex'>
          <div className='h-full w-[60%] flex flex-col shadow-md bg-white ml-[1vw] rounded-2xl mt-[2vh]'>
            <h1 className='font-Quicksand text-md p-4'>Revenues</h1>
            <h1 className='font-Quicksand text-2xl font-semibold px-[1vw]'>50000,00 DA</h1>
            <p className='font-Quicksand text-sm text-neutral-400 px-[1vw] py-[1vh]'>Votre Marge de profit est 30000,00 DA</p>
            
            <div className='flex ml-[1vw] mt-[1vh] gap-[2vw]'>
              <div className='h-[15vh] w-[30%] flex flex-col bg-neutral-200 rounded-2xl shadow-md'>
                <div className='flex items-center justify-start gap-[.5vw] mt-[1vh] mr-auto ml-[1vw]'>
                  <div className='h-[1vh] w-[1vw] bg-neutral-700'></div>
                  <h1 className='font-Quicksand text-sm text-neutral-500'>Chiffre d'affaire:</h1>
                </div>
                <h1 className='font-Quicksand text-2xl font-semibold px-[1vw] mt-[3vh]'>50000,00 DA</h1>
              </div>
              <div className='h-[15vh] w-[30%] flex flex-col bg-neutral-200 rounded-2xl shadow-md'>
                <div className='flex items-center justify-start gap-[.5vw] mt-[1vh] mr-auto ml-[1vw]'>
                  <div className='h-[1vh] w-[1vw] bg-neutral-700'></div>
                  <h1 className='font-Quicksand text-sm text-neutral-500'>Frais:</h1>
                </div>
                <h1 className='font-Quicksand text-2xl font-semibold px-[1vw] mt-[3vh]'>20000,00 DA</h1>
              </div>
              <div className='h-[15vh] w-[30%] flex flex-col bg-neutral-200 rounded-2xl shadow-md'>
                <div className='flex items-center justify-start gap-[.5vw] mt-[1vh] mr-auto ml-[1vw]'>
                  <div className='h-[1vh] w-[1vw] bg-neutral-700'></div>
                  <h1 className='font-Quicksand text-sm text-neutral-500'>Profit:</h1>
                </div>
                <h1 className='font-Quicksand text-2xl font-semibold px-[1vw] mt-[3vh]'>30000,00 DA</h1>
              </div>
            </div>
          </div>
          
          <div className='h-full w-[38%] shadow-md flex flex-col bg-white ml-[1vw] mt-[2vh] mr-[1vw] rounded-2xl'>
            <h1 className='font-Quicksand text-md p-4'>Total des Commandes</h1>
            <p className='font-Quicksand text-4xl font-semibold tracking-wider px-5'>{orders.length}</p>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart width={500} height={300} data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <Tooltip />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className='h-[50vh] w-full flex mt-[4vh] rounded-2xl mb-3'>
          <div className='h-full w-[50%] shadow-lg justify-center flex flex-col bg-white ml-[0vw] rounded-2xl mt-[2vh]'>
            <h1 className='font-Quicksand text-xl p-4'>Commandes Récentes</h1>
            <div style={{ width: "90%", height: "90%", marginLeft: 'auto', marginRight: 'auto' }}>
              <GridExample />
            </div>
          </div>
          <div className='h-full w-[50%] shadow-lg bg-white ml-[1vw] mt-[2vh] mr-[0vw] rounded-2xl'>
            <h1 className='font-Quicksand text-xl p-4'>Articles Vendu</h1>
            <div className='h-[38vh] w-[80%] ml-[4vw]'>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart width={150} height={40} data={chartData}>
                  <Bar dataKey="uv" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      <section className={`h-[95vh] pb-20 w-[98%] overflow-y-scroll overflow-x-hidden mt-[3vh] flex flex-col items-start justify-start gap-[3vw] ${activesection === "Paramètres" ? "" : "hidden"}`}>
        <div className='flex h-fit w-screen text-start'>
          <h1 className='font-Quicksand text-2xl'>Paramètres de Category</h1>
        </div>
        
        <div className='flex gap-[10vw] w-screen items-center justify-center'>
          <div className="mt-4 h-fit w-[30vw] flex flex-col bg-gray-900 rounded-lg p-4 shadow-sm font-Quicksand">
            <h2 className="text-white font-bold text-lg">Ajouter une Category au Menu</h2>
            
            <div className="mt-4">
              <label className="text-white">Nom de Category</label>
              <input 
                placeholder="Nom" 
                className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" 
                type="text"
                value={categoryForm.name}
                onChange={(e) => setCategoryForm({...categoryForm, name: e.target.value})}
              />
            </div>
            
            <div className="mt-4">
              <label className="text-white">Description (optionnel)</label>
              <input 
                placeholder="Description" 
                className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" 
                type="text"
                value={categoryForm.description}
                onChange={(e) => setCategoryForm({...categoryForm, description: e.target.value})}
              />
            </div>
            
            <div className="mt-4 flex justify-end">
              <button onClick={handleAddCategory} className="bg-white text-black rounded-md px-4 py-1 hover:bg-blue-500 hover:text-white transition-all duration-200">
                Submit
              </button>
            </div>
          </div>

          <div className="mt-4 h-fit w-[30vw] flex flex-col bg-gray-900 rounded-lg p-4 shadow-sm font-Quicksand pb-[6vh]">
            <h2 className="text-white font-bold text-lg">Effacer une Category du Menu</h2>
            
            <div className="mt-4">
              <label className="text-white">Category</label>
              <select 
                className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1"
                value={selectedCategoryToDelete}
                onChange={(e) => setSelectedCategoryToDelete(e.target.value)}
              >
                <option value="">Sélectionner une category</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="mt-4 flex justify-end">
              <button onClick={handleDeleteCategory} className="bg-white text-black rounded-md px-4 py-1 hover:bg-red-500 hover:text-white transition-all duration-200">
                Delete
              </button>
            </div>
          </div>
        </div>

        <div className='flex h-fit w-screen text-start'>
          <h1 className='font-Quicksand text-2xl'>Paramètres des Articles</h1>
        </div>
        
        <div className='flex gap-[10vw] w-screen items-center justify-center'>
          <div className="mt-4 h-fit w-[30vw] flex flex-col bg-gray-900 rounded-lg p-4 shadow-sm font-Quicksand">
            <h2 className="text-white font-bold text-lg">Ajouter un Article au Menu</h2>
            
            <div className="mt-4">
              <label className="text-white">Nom d'Article</label>
              <input 
                placeholder="Nom" 
                className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" 
                type="text"
                value={foodForm.name}
                onChange={(e) => setFoodForm({...foodForm, name: e.target.value})}
              />
            </div>
            
            <div className="mt-4">
              <label className="text-white">Prix</label>
              <input 
                placeholder="Prix" 
                className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" 
                type="number"
                step="0.01"
                value={foodForm.price}
                onChange={(e) => setFoodForm({...foodForm, price: e.target.value})}
              />
            </div>
            
            <div className="mt-4">
              <label className="text-white">Description (optionnel)</label>
              <input 
                placeholder="Description" 
                className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" 
                type="text"
                value={foodForm.description}
                onChange={(e) => setFoodForm({...foodForm, description: e.target.value})}
              />
            </div>
            
            <div className="mt-4">
              <label className="text-white">Category</label>
              <select 
                className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1"
                value={foodForm.category_id}
                onChange={(e) => setFoodForm({...foodForm, category_id: e.target.value})}
              >
                <option value="">Sélectionner une category</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="mt-4">
              <label className="text-white">Cuisine</label>
              <select 
                className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1"
                value={foodForm.kitchen_id}
                onChange={(e) => setFoodForm({...foodForm, kitchen_id: e.target.value})}
              >
                <option value="">Sélectionner une cuisine</option>
                {kitchens.map((kitchen) => (
                  <option key={kitchen.id} value={kitchen.id}>
                    {kitchen.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="mt-4 flex justify-end">
              <button onClick={handleAddFood} className="bg-white text-black rounded-md px-4 py-1 hover:bg-blue-500 hover:text-white transition-all duration-200">
                Submit
              </button>
            </div>
          </div>

          <div className="mt-4 h-fit w-[30vw] flex flex-col bg-gray-900 rounded-lg p-4 shadow-sm font-Quicksand pb-[6vh]">
            <h2 className="text-white font-bold text-lg">Effacer un Article du Menu</h2>
            
            <div className="mt-4">
              <label className="text-white">Article</label>
              <select 
                className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1"
                value={selectedFoodToDelete}
                onChange={(e) => setSelectedFoodToDelete(e.target.value)}
              >
                <option value="">Sélectionner un article</option>
                {food.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name} - {item.price} DA
                  </option>
                ))}
              </select>
            </div>
            
            <div className="mt-4 flex justify-end">
              <button onClick={handleDeleteFood} className="bg-white text-black rounded-md px-4 py-1 hover:bg-red-500 hover:text-white transition-all duration-200">
                Delete
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;