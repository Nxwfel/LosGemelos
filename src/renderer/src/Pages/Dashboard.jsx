import React, { useState, useEffect } from 'react';
import { BarChart, Bar, LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { themeQuartz } from "ag-grid-community";
import { Link } from 'react-router-dom';

ModuleRegistry.registerModules([AllCommunityModule]);

const API_BASE = "http://localhost:8000";

const Dashboard = () => {
  const [activesection, setActivesection] = useState('Dashboard');
  const [foods , setFoods] = useState([]);
  const [categories , setCategories] = useState([]);
  const [kitchens , setKitchens] = useState([]);
  const [stats , setStats] = useState([]);
  const [expenses , setExpenses] = useState(null);
  const [message , setMessage] = useState(null);
  
  useEffect(() =>{
    const fetchexpenses = async() =>{
      try{
        const response = fetch(`${API_BASE}/expenses/`);
        const expense = await response.json();
        setExpenses(expense)
      }
      catch(error){
        console.log(error);
        setMessage(`Error: ${error.message}`)
      }
    }
    fetchexpenses();
  },[])

  const [frais, setFrais] = useState("");

const handlesubmitfrais = async (e) => {
  e.preventDefault();
  const fraisform = {
    price: frais,
  };
  try {
    const response = await fetch(`${API_BASE}/expenses/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fraisform),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // re-fetch after adding
    fetchexpenses();
  } catch (error) {
    console.log(error);
    setMessage(`Error: ${error.message}`);
  }
};

const fetchexpenses = async () => {
  try {
    const response = await fetch(`${API_BASE}/expenses/`);
    const data = await response.json();
    setExpenses(data);
  } catch (error) {
    console.log(error);
    setMessage(`Error: ${error.message}`);
  }
};

useEffect(() => {
  fetchexpenses();
}, []);

  useEffect(() => {
    const fetchKitchens = async() => {
      try{
      const response = await fetch(`${API_BASE}/kitchens/`)
      const kitchen = await response.json();
      setKitchens(kitchen);
      }
      catch(error){
        console.log(error);
        setMessage(`Error: ${error.message}`)
      }
      }
      fetchKitchens();
    }
  )
  useEffect(() => {
      const fetchFoods = async() => {
        try{
          const response = await fetch(`${API_BASE}/food/`);
          const Articles = await response.json();
          setFoods(Articles);
        }
        catch(error){
          console.log(error);
          setMessage(`Error: ${error.message}`)
        }
      }
      fetchFoods();
  },[]);

  useEffect(()=> {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${API_BASE}/food/categories`)
        const cat = await response.json();
        setCategories(cat);
        
      }
      catch(error){
        console.log(error);
        setMessage(`Error : ${error.message}`)
      }
    }
    fetchCategories();
  },[])


  const [name , setName] = useState(null);
  const [price , setPrice] = useState(null);
  const [description , setDescription] = useState(null);
  const [category , setCategory] = useState(null);
  const [kitchen , setKitchen] = useState(null);

  const handleSubmitFood = async (e) => {
    e.preventDefault();
    const add = {
      name,
      price,
      description,
      category_id:category,
      kitchen_id:kitchen
    };
    try {
     fetch(`${API_BASE}/food/` , {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(add)
    }
     )
     .then(() =>{
      console.log('Food added successfully')
      setMessage('Food added successfully')
     
      setName("");
     setPrice("");
     setDescription("");
     setCategory("");
     }
     )
      
    }
    catch(error){
      console.log(error);
      setMessage(`Error: ${error.message}`)
    }
  }

const [id, setId] = useState(""); 

const handleDeleteFood = async (e) => {
  e.preventDefault();

  if (!id) {
    setMessage("Please select a food to delete");
    return;
  }

  try {
    const response = await fetch(`${API_BASE}/food/?id=${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || "Failed to delete food");
    }

    setMessage("Food deleted successfully");

    // remove deleted food from state
    setFoods((prevFoods) => prevFoods.filter((food) => food.id !== Number(id)));

    // reset dropdown
    setId("");

  } catch (error) {
    console.error("Error deleting food:", error);
    setMessage(`Error: ${error.message}`);
  }
};


const FOOD_CATEGORIES = [
  { emoji: '🍕' },
  { emoji: '🍔' },
  { emoji: '🍜' },
  { emoji: '🍣' },
  {emoji: '🥗' },
  { emoji: '🍰' },
  {emoji: '☕' },
  { emoji: '🍺' },
  { emoji: '🍟' },
  { emoji: '🌮' },
  {emoji: '🥩' },
  { emoji: '🍝' },
  { emoji: '🍤' },
  { emoji: '🍗' },
  { emoji: '🥪' },
  { emoji: '🍳' },
  { emoji: '🍲' },
  { emoji: '🥙' },
  { emoji: '🍱' },
  {emoji: '🧁' },
  {emoji: '🥤' },
  {emoji: '🍷' },
  { emoji: '🍹' },
  { emoji: '🧃' }
];

const [catName, setCatName] = useState("");
const [icon, setIcon] = useState("");

const handleSubmitCategory = async (e) => {
  e.preventDefault();

  const newCategory = {
    name: catName,
    icon: icon,   // required, can't be missing
  };

  try {
    const response = await fetch(`${API_BASE}/food/categories/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCategory),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || "Failed to create category");
    }

    const saved = await response.json();
    setMessage("Category added successfully");

    // update categories list
    setCategories((prev) => [...prev, saved]);

    // reset form
    setCatName("");
    setIcon("");
  } catch (error) {
    console.error("Error creating category:", error);
    setMessage(`Error: ${error.message}`);
  }
};
const [Catid , setCatid] = useState(null);
const handledeletecategory = async (e) => {
  e.preventDefault();

  try{
    fetch(`${API_BASE}/food/categories/?id=${Catid}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Catid),
    }).then(() => {
      setMessage("Category deleted successfully");
    }
    )
  }
  catch(error){
    console.log(error);
    setMessage(`Error: ${error.message}`)
  }
}

const [Commandes , setCommandes] = useState([]);

useEffect(() => {
  const fetchcommandes = async() => {
    try{
      const response = await fetch (`${API_BASE}/orders/`);
      const commandes = await response.json();
      setCommandes(commandes);
    }
    catch(error){
      console.log(error);
      setMessage(`Error: ${error.message}`)
    }
  }
  fetchcommandes();
})

 
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
  const [rowData, setRowData] = useState([]); // ✅ holds orders
  const [colDefs] = useState([
    { field: "id", headerName: "ID" },
    { field: "ordered_at", headerName: "Ordered At" },
    { field: "table_id", headerName: "Table" },
    { field: "total_price", headerName: "Total Price" }
  ]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(`${API_BASE}/orders/`);
        const data = await response.json();
        console.log("Fetched orders:", data); // debug
        setRowData(data); // ✅ update rowData
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <AgGridReact
        rowData={rowData}       // ✅ use rowData state
        columnDefs={colDefs}
        defaultColDef={{ flex: 1, resizable: true }}
        theme={themeQuartz}
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
};
  return (
    <div className='min-h-screen w-screen bg-neutral-100 flex flex-col items-center justify-start'>
      
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
                <h1 className='font-Quicksand text-2xl font-semibold px-[1vw] mt-[3vh]'>{expenses || 0},00 DA</h1>
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
            <p className='font-Quicksand text-4xl font-semibold tracking-wider px-5'>{Commandes.length || 0}</p>
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
      <section className={`h-[95vh] pb-20 w-[98%] overflow-y-scroll overflow-x-hidden mt-[3vh] flex flex-col items-center justify-center gap-[3vw] ${activesection === "Frais" ? "" : "hidden"}`}>
        <div className="mt-4 h-fit w-[30vw] flex flex-col bg-gray-900 rounded-lg p-4 shadow-sm font-Quicksand">
            <h2 className="text-white font-bold text-lg">Entrer les frais</h2>
             <form onSubmit={handlesubmitfrais}>
            <div className="mt-4">
              <label className="text-white">Frais</label>
              <input 
                onChange={(e) => setFrais(e.target.value)}
                placeholder="Frais" 
                className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" 
                type="text"
                
              />
            </div>
           
            <div className="mt-4 flex justify-end">
              <button
              type='submit'
              className="bg-white text-black rounded-md px-4 py-1 hover:bg-blue-500 hover:text-white transition-all duration-200">
                Submit
              </button>
            </div>
            </form>
          </div>
      </section>

      <section className={`h-[95vh] pb-20 w-[98%] overflow-y-scroll overflow-x-hidden mt-[3vh] flex flex-col items-start justify-start gap-[3vw] ${activesection === "Paramètres" ? "" : "hidden"}`}>
        <div className='flex h-fit w-screen text-start'>
          <h1 className='font-Quicksand text-2xl'>Paramètres de Category</h1>
        </div>
        
        <div className='flex gap-[10vw] w-screen items-center justify-center'>
          <div className="mt-4 h-fit w-[30vw] flex flex-col bg-gray-900 rounded-lg p-4 shadow-sm font-Quicksand">
            <h2 className="text-white font-bold text-lg">Ajouter une Category au Menu</h2>
             <form onSubmit={handleSubmitCategory}>
            <div className="mt-4">
              <label className="text-white">Nom de Category</label>
              <input 
                placeholder="Nom" 
                className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" 
                type="text"
                onChange={(e) => setCatName(e.target.value)}
              />
            </div>
            
            <div className="mt-4">
              <label className="text-white">Icon</label>
              <select 
              onChange={(e) => setIcon(e.target.value)}
              className='text-white'>
                  {FOOD_CATEGORIES.map(cat => (
                    <option key={cat.id} value={cat.id}>
                      {cat.emoji}
                    </option>
                  ))}
                </select>
            </div>
            
            <div className="mt-4 flex justify-end">
              <button
              type='submit'
              className="bg-white text-black rounded-md px-4 py-1 hover:bg-blue-500 hover:text-white transition-all duration-200">
                Submit
              </button>
            </div>
            </form>
          </div>

          <div className="mt-4 h-fit w-[30vw] flex flex-col bg-gray-900 rounded-lg p-4 shadow-sm font-Quicksand pb-[6vh]">
            <h2 className="text-white font-bold text-lg">Effacer une Category du Menu</h2>
            <form onSubmit={handledeletecategory}>
            <div className="mt-4">
              <label className="text-white">Category</label>
              <select 
                onChange={(e) => setCatid(e.target.value)}
                className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1"
              >
                <option value="">Sélectionner une category</option>
                {categories.map(cat => (
                  <option className='bg-gray-800' value={cat.id} key={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>
            
            <div className="mt-4 flex justify-end">
              <button
              type='submit'
              className="bg-white text-black rounded-md px-4 py-1 hover:bg-red-500 hover:text-white transition-all duration-200">
                Delete
              </button>
            </div>
            </form>
          </div>
        </div>

        <div className='flex h-fit w-screen text-start'>
          <h1 className='font-Quicksand text-2xl'>Paramètres des Articles</h1>
        </div>
        
        <div className='flex gap-[10vw] w-screen items-center justify-center'>
          <div className="mt-4 h-fit w-[30vw] flex flex-col bg-gray-900 rounded-lg p-4 shadow-sm font-Quicksand">
            <h2 className="text-white font-bold text-lg">Ajouter un Article au Menu</h2>
            <form onSubmit={handleSubmitFood}>
            <div className="mt-4">
              <label className="text-white">Nom d'Article</label>
              <input 
                placeholder="Nom" 
                className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" 
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            
            <div className="mt-4">
              <label className="text-white">Prix</label>
              <input 
                placeholder="Prix" 
                className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" 
                type="number"
                step="0.01"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            
            <div className="mt-4">
              <label className="text-white">Description (optionnel)</label>
              <input 
                placeholder="Description" 
                className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1" 
                type="text"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            
            <div className="mt-4">
              <label className="text-white">Category</label>
              <select 
                className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1"
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map(cat =>(
                  <option value={cat.id} className='bg-gray-800'>{cat.name}</option>
                ))}
              </select>
            </div>
            
            <div className="mt-4">
              <label className="text-white">Cuisine</label>
              <select 
                className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1"
                onChange={(e) => setKitchen(e.target.value)}

              >
                {kitchens.map(kitchen =>(
                  <option className='bg-gray-800' value={kitchen.id}>
                     {kitchen.name}
                  </option>
                ))}

              </select>
            </div>
            
            <div className="mt-4 flex justify-end">
              <button className="bg-white text-black rounded-md px-4 py-1 hover:bg-blue-500 hover:text-white transition-all duration-200">
                Submit
              </button>
            </div>
            </form>
          </div>
          

          <div className="mt-4 h-fit w-[30vw] flex flex-col bg-gray-900 rounded-lg p-4 shadow-sm font-Quicksand pb-[6vh]">
            <h2 className="text-white font-bold text-lg">Effacer un Article du Menu</h2>
            <form onSubmit={handleDeleteFood}>
  <div className="mt-4">
    <label className="text-white">Article</label>
    <select
      value={id}
      onChange={(e) => setId(e.target.value)}
      className="w-full bg-gray-800 rounded-md border-gray-700 text-white px-2 py-1"
    >
      <option value="">Select a food</option>
      {foods.map((food) => (
        <option className="bg-gray-800" value={food.id} key={food.id}>
          {food.name}
        </option>
      ))}
    </select>
  </div>

  <div className="mt-4 flex justify-end">
    <button
      type="submit"
      className="bg-white text-black rounded-md px-4 py-1 hover:bg-red-500 hover:text-white transition-all duration-200"
    >
      Delete
    </button>
  </div>
</form>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;