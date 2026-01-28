import React, { useState, useEffect } from 'react';
import { BarChart, Bar, LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { Link } from 'react-router-dom';
import Bg from '../assets/imgs/bg.jpg'
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
        const response = await fetch(`${API_BASE}/expenses/`);
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
  const totalExpenses = expenses?.reduce((sum, e) => sum + e.price, 0) || 0;

const [frais, setFrais] = useState("");
const handlesubmitfrais = async (e) => {
  e.preventDefault();
  const fraisform = {
    year: new Date().getFullYear(),      
    month: new Date().getMonth() + 1,    
    price: parseFloat(frais)              
  };

  try {
    const response = await fetch(`${API_BASE}/expenses/`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fraisform),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

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

    setFoods((prevFoods) => prevFoods.filter((food) => food.id !== Number(id)));

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
    icon: icon,
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

    setCategories((prev) => [...prev, saved]);

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

const [orders, setorders] = useState([]);
const [totalRevenue, setTotalRevenue] = useState(0);

useEffect(() => {
  const fetchcommandes = async () => {
    try {
      const response = await fetch(`${API_BASE}/orders/`);
      const commandes = await response.json();
      setorders(commandes);

      const total = commandes.reduce((sum, order) => sum + order.total_price, 0);
      setTotalRevenue(total);
    } catch (error) {
      console.log(error);
      setMessage(`Error: ${error.message}`);
    }
  };

  fetchcommandes();
}, []);
 
  const chartData = [
    { name: 'Lun', uv: 4000, pv: 2400 },
    { name: 'Mar', uv: 3000, pv: 1398 },
    { name: 'Mer', uv: 2000, pv: 9800 },
    { name: 'Jeu', uv: 2780, pv: 3908 },
    { name: 'Ven', uv: 1890, pv: 4800 },
    { name: 'Sam', uv: 2390, pv: 3800 },
    { name: 'Dim', uv: 3490, pv: 4300 }
  ];
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(`${API_BASE}/orders/`);
        const data = await response.json();
        if (Array.isArray(data)) {
          setOrders(data);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedOrders = [...orders].sort((a, b) => {
    if (!sortConfig.key) return 0;

    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (aValue < bValue) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const filteredOrders = sortedOrders.filter(order =>
    order.id.toString().includes(searchTerm) ||
    order.table_id.toString().includes(searchTerm) ||
    order.total_price.toString().includes(searchTerm)
  );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const SortIcon = ({ columnKey }) => {
    if (sortConfig.key !== columnKey) {
      return <span className="text-gray-400 ml-1">↕</span>;
    }
    return sortConfig.direction === 'asc' ? 
      <span className="text-[#FFD41D] ml-1">↑</span> : 
      <span className="text-[#FFD41D] ml-1">↓</span>;
  };

const profit = totalRevenue - totalExpenses;

const getMostExpensiveOrder = (orders) => {
  if (!orders || orders.length === 0) return 0;
  return Math.max(...orders.map(order => order.total_price));
};
const mostExpensive = getMostExpensiveOrder(orders);

  return (
    <div className='min-h-screen pb-[10vh] w-screen bg-[#111315] flex'>
      <Link to='/'><div className='h-fit w-fit p-3 ml-[1vw] mt-[2vh] hover:text-red-600 cursor-pointer flex items-center justify-center bg-neutral-200 rounded-2xl'>
          <h1 className='font-Quicksand text-sm'>Back</h1>
        </div></Link>
      {/* Main Content */}
      <div className='h-screen w-screen flex flex-col overflow-y-auto'>
        {/* Top Navigation */}
        <div className='h-[10vh] w-full flex items-center mt-[2vh] px-[3vw]'>
          <div className="justify-center items-center w-fit h-full gap-[1vw] flex">
            {["Dashboard", "Caisse", "Frais", "Paramètres"].map((item) => (
              <h1
                key={item}
                onClick={() => setActivesection(item)}
                className={`Anybody text-md cursor-pointer p-3 rounded-2xl transition 
                  ${activesection === item ? "bg-[#2d2d2d] text-white" : "text-neutral-400 hover:text-white hover:bg-[#2d2d2d]"}`}
              >
                {item}
              </h1>
            ))}
          </div>
        </div>

        {/* Dashboard Section */}
        <section className={`h-fit w-full flex flex-col px-[3vw] ${activesection === "Dashboard" ? "" : "hidden"}`}>
          <div className='h-[35vh] w-full flex gap-[2vw] mt-[2vh]'>
            <div className='h-full w-[60%] flex flex-col shadow-xl bg-[#202020] rounded-2xl p-4'>
              <h1 className='Anybody text-lg text-white'>Revenues</h1>
              <h1 className='Anybody text-3xl font-semibold text-white mt-2'>{totalRevenue} DA</h1>
              <p className='Anybody text-sm text-neutral-400 mt-1'>Votre Marge de profit est {profit} DA</p>
              
              <div className='flex gap-[1vw] mt-[2vh]'>
                <div className='h-[15vh] w-[33%] flex flex-col bg-[#2d2d2d] rounded-2xl shadow-md p-3'>
                  <div className='flex items-center gap-2'>
                    <div className='h-[1vh] w-[1vw] bg-[#FFD41D]'></div>
                    <h1 className='Anybody text-sm text-neutral-400'>Chiffre d'affaire:</h1>
                  </div>
                  <h1 className='Anybody text-2xl font-semibold text-white mt-auto'>{totalRevenue} DA</h1>
                </div>
                <div className='h-[15vh] w-[33%] flex flex-col bg-[#2d2d2d] rounded-2xl shadow-md p-3'>
                  <div className='flex items-center gap-2'>
                    <div className='h-[1vh] w-[1vw] bg-[#FFD41D]'></div>
                    <h1 className='Anybody text-sm text-neutral-400'>Frais:</h1>
                  </div>
                  <h1 className='Anybody text-2xl font-semibold text-white mt-auto'>{expenses?.reduce((sum, e) => sum + e.price, 0) || 0},00 DA</h1>
                </div>
                <div className='h-[15vh] w-[33%] flex flex-col bg-[#2d2d2d] rounded-2xl shadow-md p-3'>
                  <div className='flex items-center gap-2'>
                    <div className='h-[1vh] w-[1vw] bg-[#FFD41D]'></div>
                    <h1 className='Anybody text-sm text-neutral-400'>Profit:</h1>
                  </div>
                  <h1 className='Anybody text-2xl font-semibold text-white mt-auto'>{profit} DA</h1>
                </div>
              </div>
            </div>
            
            <div className='h-full w-[38%] shadow-xl flex flex-col bg-[#202020] rounded-2xl p-4'>
              <h1 className='Anybody text-lg text-white'>Total des Commandes</h1>
              <p className='Anybody text-4xl font-semibold text-white mt-2'>{Commandes.length || 0}</p>
              <ResponsiveContainer width="100%" height="70%">
                <LineChart data={chartData} margin={{ top: 20, right: 10, left: 0, bottom: 5 }}>
                  <Tooltip contentStyle={{ backgroundColor: '#2d2d2d', border: 'none', borderRadius: '8px' }} />
                  <Line type="monotone" dataKey="pv" stroke="#FFD41D" strokeWidth={2} activeDot={{ r: 6 }} />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className='h-[50vh] w-full flex gap-[2vw] mt-[4vh] mb-[4vh]'>
            <div className='h-full w-[60%] shadow-xl flex flex-col bg-[#202020] rounded-2xl p-4'>
              <h1 className='Anybody text-xl text-white mb-4'>Commandes Récentes</h1>
              <div className="w-full h-full flex flex-col">
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Rechercher par ID, Table, ou Prix..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 bg-[#2d2d2d] text-white border border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD41D] Anybody"
                  />
                </div>

                <div className="flex-1 overflow-auto rounded-lg border border-neutral-600">
                  <table className="w-full border-collapse">
                    <thead className="sticky top-0 bg-[#2d2d2d] text-white z-10">
                      <tr>
                        <th 
                          onClick={() => handleSort('id')}
                          className="px-6 py-4 text-left Anybody font-semibold cursor-pointer hover:bg-[#3d3d3d] transition-colors"
                        >
                          <div className="flex items-center">
                            ID
                            <SortIcon columnKey="id" />
                          </div>
                        </th>
                        <th 
                          onClick={() => handleSort('ordered_at')}
                          className="px-6 py-4 text-left Anybody font-semibold cursor-pointer hover:bg-[#3d3d3d] transition-colors"
                        >
                          <div className="flex items-center">
                            Date & Heure
                            <SortIcon columnKey="ordered_at" />
                          </div>
                        </th>
                        <th 
                          onClick={() => handleSort('table_id')}
                          className="px-6 py-4 text-left Anybody font-semibold cursor-pointer hover:bg-[#3d3d3d] transition-colors"
                        >
                          <div className="flex items-center">
                            Table
                            <SortIcon columnKey="table_id" />
                          </div>
                        </th>
                        <th 
                          onClick={() => handleSort('total_price')}
                          className="px-6 py-4 text-right Anybody font-semibold cursor-pointer hover:bg-[#3d3d3d] transition-colors"
                        >
                          <div className="flex items-center justify-end">
                            Total
                            <SortIcon columnKey="total_price" />
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredOrders.length === 0 ? (
                        <tr>
                          <td colSpan="4" className="px-6 py-8 text-center text-neutral-400 Anybody">
                            Aucune commande trouvée
                          </td>
                        </tr>
                      ) : (
                        filteredOrders.slice(0, 5).map((order, index) => (
                          <tr
                            key={order.id}
                            className={`border-b border-neutral-600 hover:bg-[#2d2d2d] transition-colors ${
                              index % 2 === 0 ? 'bg-[#202020]' : 'bg-[#1a1a1a]'
                            }`}
                          >
                            <td className="px-6 py-4 Anybody font-semibold text-white">
                              #{order.id}
                            </td>
                            <td className="px-6 py-4 Anybody text-neutral-300">
                              {formatDate(order.ordered_at)}
                            </td>
                            <td className="px-6 py-4 Anybody">
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#FFD41D] text-black">
                                Table {order.table_id}
                              </span>
                            </td>
                            <td className="px-6 py-4 Anybody text-right">
                              <span className="font-semibold text-emerald-400 text-lg">
                                {order.total_price.toFixed(2)} DA
                              </span>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

                <div className="mt-3 text-sm text-neutral-400 Anybody">
                  {filteredOrders.length} commande{filteredOrders.length !== 1 ? 's' : ''} affichée{filteredOrders.length !== 1 ? 's' : ''}
                  {searchTerm && ` sur ${orders.length} total`}
                </div>
              </div>
            </div>
            <div className='h-full w-[38%] shadow-xl bg-[#202020] rounded-2xl overflow-hidden'>
              <img src={Bg} alt="" className='h-full w-full object-cover rounded-2xl'/>
            </div>
          </div>
        </section>
     
        {/* Caisse Section */}
        <section className={`h-fit w-full flex px-[3vw] gap-[2vw] ${activesection === "Caisse" ? "" : "hidden"}`}>
          <div className='h-[85vh] w-[70%] bg-[#202020] rounded-xl shadow-2xl flex flex-col p-4'>
            <h1 className='text-white Anybody text-xl mb-4'>Commandes</h1>
            <div className="w-full h-full flex flex-col">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Rechercher par ID, Table, ou Prix..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 bg-[#2d2d2d] text-white border border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD41D] Anybody"
                />
              </div>

              <div className="flex-1 overflow-auto rounded-lg border border-neutral-600">
                <table className="w-full border-collapse">
                  <thead className="sticky top-0 bg-[#2d2d2d] text-white z-10">
                    <tr>
                      <th 
                        onClick={() => handleSort('id')}
                        className="px-6 py-4 text-left Anybody font-semibold cursor-pointer hover:bg-[#3d3d3d] transition-colors"
                      >
                        <div className="flex items-center">
                          ID
                          <SortIcon columnKey="id" />
                        </div>
                      </th>
                      <th 
                        onClick={() => handleSort('ordered_at')}
                        className="px-6 py-4 text-left Anybody font-semibold cursor-pointer hover:bg-[#3d3d3d] transition-colors"
                      >
                        <div className="flex items-center">
                          Date & Heure
                          <SortIcon columnKey="ordered_at" />
                        </div>
                      </th>
                      <th 
                        onClick={() => handleSort('table_id')}
                        className="px-6 py-4 text-left Anybody font-semibold cursor-pointer hover:bg-[#3d3d3d] transition-colors"
                      >
                        <div className="flex items-center">
                          Table
                          <SortIcon columnKey="table_id" />
                        </div>
                      </th>
                      <th 
                        onClick={() => handleSort('total_price')}
                        className="px-6 py-4 text-right Anybody font-semibold cursor-pointer hover:bg-[#3d3d3d] transition-colors"
                      >
                        <div className="flex items-center justify-end">
                          Total
                          <SortIcon columnKey="total_price" />
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredOrders.length === 0 ? (
                      <tr>
                        <td colSpan="4" className="px-6 py-8 text-center text-neutral-400 Anybody">
                          Aucune commande trouvée
                        </td>
                      </tr>
                    ) : (
                      filteredOrders.map((order, index) => (
                        <tr
                          key={order.id}
                          className={`border-b border-neutral-600 hover:bg-[#2d2d2d] transition-colors ${
                            index % 2 === 0 ? 'bg-[#202020]' : 'bg-[#1a1a1a]'
                          }`}
                        >
                          <td className="px-6 py-4 Anybody font-semibold text-white">
                            #{order.id}
                          </td>
                          <td className="px-6 py-4 Anybody text-neutral-300">
                            {formatDate(order.ordered_at)}
                          </td>
                          <td className="px-6 py-4 Anybody">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#FFD41D] text-black">
                              Table {order.table_id}
                            </span>
                          </td>
                          <td className="px-6 py-4 Anybody text-right">
                            <span className="font-semibold text-emerald-400 text-lg">
                              {order.total_price.toFixed(2)} DA
                            </span>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              <div className="mt-3 text-sm text-neutral-400 Anybody">
                {filteredOrders.length} commande{filteredOrders.length !== 1 ? 's' : ''} affichée{filteredOrders.length !== 1 ? 's' : ''}
                {searchTerm && ` sur ${orders.length} total`}
              </div>
            </div>
          </div>
          <div className='h-fit w-[28%] bg-[#202020] rounded-xl shadow-xl flex flex-col p-5'>
            <h1 className='Anybody text-2xl text-white'>Total des Commandes</h1>
            <p className='Anybody mt-[2vh] text-6xl text-white'>{Commandes.length || 0}</p>
            <h1 className='Anybody text-xl text-white mt-[4vh]'>Commandes plus chères</h1>
            <p className='Anybody mt-[2vh] text-5xl text-white'>{mostExpensive || 0} DA</p>
          </div>
        </section>

        {/* Frais Section */}
        <section className={`h-fit pb-20 w-full overflow-y-scroll overflow-x-hidden px-[3vw] flex flex-col items-center justify-center gap-[3vw] ${activesection === "Frais" ? "" : "hidden"}`}>
          <div className="mt-4 h-fit w-[30vw] flex flex-col bg-[#202020] rounded-lg p-4 shadow-xl Anybody">
            <h2 className="text-white font-bold text-lg">Entrer les frais</h2>
            <form onSubmit={handlesubmitfrais}>
              <div className="mt-4">
                <label className="text-white">Frais</label>
                <input 
                  onChange={(e) => setFrais(e.target.value)}
                  placeholder="Frais" 
                  className="w-full bg-[#2d2d2d] rounded-md border border-neutral-600 text-white px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#FFD41D]" 
                  type="text"
                />
              </div>
             
              <div className="mt-4 flex justify-end">
                <button
                  type='submit'
                  className="bg-white text-black rounded-md px-4 py-1 hover:bg-[#FFD41D] hover:text-black transition-all duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Paramètres Section */}
        <section className={`h-fit pb-20 w-full overflow-y-scroll overflow-x-hidden px-[3vw] flex flex-col items-start justify-start gap-[3vw] ${activesection === "Paramètres" ? "" : "hidden"}`}>
          <div className='flex h-fit w-full text-start'>
            <h1 className='Anybody text-2xl text-white'>Paramètres de Category</h1>
          </div>
          
          <div className='flex gap-[2vw] w-full items-center justify-center'>
            <div className="h-fit w-[45%] flex flex-col bg-[#202020] rounded-lg p-4 shadow-xl Anybody">
              <h2 className="text-white font-bold text-lg">Ajouter une Category au Menu</h2>
              <form onSubmit={handleSubmitCategory}>
                <div className="mt-4">
                  <label className="text-white">Nom de Category</label>
                  <input 
                    placeholder="Nom" 
                    className="w-full bg-[#2d2d2d] rounded-md border border-neutral-600 text-white px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#FFD41D]" 
                    type="text"
                    onChange={(e) => setCatName(e.target.value)}
                  />
                </div>
                
                <div className="mt-4">
                  <label className="text-white">Icon</label>
                  <select 
                    onChange={(e) => setIcon(e.target.value)}
                    className='w-full bg-[#2d2d2d] text-white rounded-md border border-neutral-600 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#FFD41D]'
                  >
                    {FOOD_CATEGORIES.map((cat, idx) => (
                      <option key={idx} value={cat.emoji}>
                        {cat.emoji}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="mt-4 flex justify-end">
                  <button
                    type='submit'
                    className="bg-white text-black rounded-md px-4 py-1 hover:bg-[#FFD41D] transition-all duration-200"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>

            <div className="h-fit w-[45%] flex flex-col bg-[#202020] rounded-lg p-4 shadow-xl Anybody">
              <h2 className="text-white font-bold text-lg">Effacer une Category du Menu</h2>
              <form onSubmit={handledeletecategory}>
                <div className="mt-4">
                  <label className="text-white">Category</label>
                  <select 
                    onChange={(e) => setCatid(e.target.value)}
                    className="w-full bg-[#2d2d2d] rounded-md border border-neutral-600 text-white px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#FFD41D]"
                  >
                    <option value="">Sélectionner une category</option>
                    {categories.map(cat => (
                      <option className='bg-[#2d2d2d]' value={cat.id} key={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                </div>
                
                <div className="mt-4 flex justify-end">
                  <button
                    type='submit'
                    className="bg-white text-black rounded-md px-4 py-1 hover:bg-red-500 hover:text-white transition-all duration-200"
                  >
                    Delete
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className='flex h-fit w-full text-start mt-[4vh]'>
            <h1 className='Anybody text-2xl text-white'>Paramètres des Articles</h1>
          </div>
          
          <div className='flex gap-[2vw] w-full items-center justify-center'>
            <div className="h-fit w-[45%] flex flex-col bg-[#202020] rounded-lg p-4 shadow-xl Anybody">
              <h2 className="text-white font-bold text-lg">Ajouter un Article au Menu</h2>
              <form onSubmit={handleSubmitFood}>
                <div className="mt-4">
                  <label className="text-white">Nom d'Article</label>
                  <input 
                    placeholder="Nom" 
                    className="w-full bg-[#2d2d2d] rounded-md border border-neutral-600 text-white px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#FFD41D]" 
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                
                <div className="mt-4">
                  <label className="text-white">Prix</label>
                  <input 
                    placeholder="Prix" 
                    className="w-full bg-[#2d2d2d] rounded-md border border-neutral-600 text-white px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#FFD41D]" 
                    type="number"
                    step="0.01"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                
                <div className="mt-4">
                  <label className="text-white">Description (optionnel)</label>
                  <input 
                    placeholder="Description" 
                    className="w-full bg-[#2d2d2d] rounded-md border border-neutral-600 text-white px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#FFD41D]" 
                    type="text"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                
                <div className="mt-4">
                  <label className="text-white">Category</label>
                  <select 
                    className="w-full bg-[#2d2d2d] rounded-md border border-neutral-600 text-white px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#FFD41D]"
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    {categories.map(cat =>(
                      <option value={cat.id} className='bg-[#2d2d2d]' key={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                </div>
                
                <div className="mt-4">
                  <label className="text-white">Cuisine</label>
                  <select 
                    className="w-full bg-[#2d2d2d] rounded-md border border-neutral-600 text-white px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#FFD41D]"
                    onChange={(e) => setKitchen(e.target.value)}
                  >
                    {kitchens.map(kitchen =>(
                      <option className='bg-[#2d2d2d]' value={kitchen.id} key={kitchen.id}>
                         {kitchen.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="mt-4 flex justify-end">
                  <button 
                    type='submit'
                    className="bg-white text-black rounded-md px-4 py-1 hover:bg-[#FFD41D] transition-all duration-200"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            
            <div className="h-fit w-[45%] flex flex-col bg-[#202020] rounded-lg p-4 shadow-xl Anybody">
              <h2 className="text-white font-bold text-lg">Effacer un Article du Menu</h2>
              <form onSubmit={handleDeleteFood}>
                <div className="mt-4">
                  <label className="text-white">Article</label>
                  <select
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    className="w-full bg-[#2d2d2d] rounded-md border border-neutral-600 text-white px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#FFD41D]"
                  >
                    <option value="">Select a food</option>
                    {foods.map((food) => (
                      <option className="bg-[#2d2d2d]" value={food.id} key={food.id}>
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
    </div>
  );
};

export default Dashboard;