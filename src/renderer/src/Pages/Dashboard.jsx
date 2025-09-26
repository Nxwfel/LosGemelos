import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { BarChart, Bar } from 'recharts';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";

const Dashboard = () => {

 const dataB = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

 ModuleRegistry.registerModules([AllCommunityModule]);
  const GridExample = () => {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    { make: "Mercedes", model: "EQA", price: 48890, electric: true },
    { make: "Fiat", model: "500", price: 15774, electric: false },
    { make: "Nissan", model: "Juke", price: 20675, electric: false },
  ]);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState([
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" },
  ]);

  const defaultColDef = {
    flex: 1,
  };
    return (
    <div style={{ width: "100%", height: "100%" }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
      />
    </div>
  );
};
  const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
  const [activesection , setActivesection] = useState('Dashboard')
  return (
    <div className='min-h-screen w-screen bg-neutral-100 flex flex-col items-center justify-start'>
      <div className='h-[10vh] w-[98%] rounded-xl shadow-md bg-white flex items-center mt-[2vh]'>
  <div className="justify-center items-center w-fit h-[80%] gap-[1vw] flex ml-auto mr-auto">
    {["Dashboard", "Caisse", "Frais", "Paramètres"].map((item) => (
      <h1
        key={item}
        onClick={() => setActivesection(item)}
        className={`font-Quicksand text-sm cursor-pointer p-3 rounded-2xl transition 
          ${
            activesection === item
              ? "bg-neutral-200 text-black"
              : "text-neutral-400 hover:text-black hover:bg-neutral-200"
          }`}
      >
        {item}
      </h1>
    ))}
  </div>
      </div>
      <section id='Dashboard' className={`h-[87vh] w-[98%] flex flex-col items-center justify-start ${
        activesection === "Dashboard" ? "" : "hidden"
      }`}>
         <div className='h-[35vh] w-screen flex'>
            <div className='h-full w-[60%] flex flex-col shadow-md bg-white ml-[1vw] rounded-2xl mt-[2vh]'>
              <h1 className='font-Quicksand text-md p-4'>Revenues</h1>
              <h1 className='font-Quicksand text-2xl font-semibold px-[1vw]'>50000,00 DA</h1>
              <p className='font-Quicksand text-sm text-neutral-400 px-[1vw] py-[1vh]'>Votre Marge de profit est 30000,00 DA </p>
              
              <div className='flex ml-[1vw] mt-[1vh] gap-[2vw]'>
                 
                  <div className='h-[15vh] w-[30%] flex flex-col bg-neutral-200 rounded-2xl shadow-md'>
                  <div className='flex items-center justify-start gap-[.5vw] mt-[1vh] mr-auto ml-[1vw]'>
                    <div className='h-[1vh] w-[1vw] bg-neutral-700'></div>
                    <h1 className='font-Quicksand text-sm text-neutral-500'>Chiffre d'affaire: </h1>
                  </div>
                  <h1 className='font-Quicksand text-2xl font-semibold px-[1vw] mt-[3vh]'>50000,00 DA</h1>
                 </div>
                  <div className='h-[15vh] w-[30%] flex flex-col bg-neutral-200 rounded-2xl shadow-md'>
                  <div className='flex items-center justify-start gap-[.5vw] mt-[1vh] mr-auto ml-[1vw]'>
                    <div className='h-[1vh] w-[1vw] bg-neutral-700'></div>
                    <h1 className='font-Quicksand text-sm text-neutral-500'>Frais: </h1>
                  </div>
                  <h1 className='font-Quicksand text-2xl font-semibold px-[1vw] mt-[3vh]'>20000,00 DA</h1>
                 </div>
                 <div className='h-[15vh] w-[30%] flex flex-col bg-neutral-200 rounded-2xl shadow-md'>
                  <div className='flex items-center justify-start gap-[.5vw] mt-[1vh] mr-auto ml-[1vw]'>
                    <div className='h-[1vh] w-[1vw] bg-neutral-700'></div>
                    <h1 className='font-Quicksand text-sm text-neutral-500'>Profit: </h1>
                  </div>
                  <h1 className='font-Quicksand text-2xl font-semibold px-[1vw] mt-[3vh]'>30000,00 DA</h1>
                 </div>
              </div>
              
            </div>
            <div className='h-full w-[38%] shadow-md flex flex-col bg-white ml-[1vw] mt-[2vh] mr-[1vw] rounded-2xl'>
              <h1 className='font-Quicksand text-md p-4'>Total des Commandes</h1>
              <p className='font-Quicksand text-4xl font-semibold tracking-wider px-5'>350</p>
              <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
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
             <div style={{ width: "90%", height: "90%" , marginLeft: 'auto' , marginRight: 'auto' }}>
                <GridExample />
              </div>
            </div>
            <div className='h-full w-[50%] shadow-lg bg-white ml-[1vw] mt-[2vh] mr-[0vw] rounded-2xl'>
             <h1 className='font-Quicksand text-xl p-4'>Articles Vendu</h1>
             <div className='h-[38vh] w-[80%] ml-[4vw]'>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart width={150} height={40} data={data}>
                <Bar dataKey="uv" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
            </div>
            </div>
         </div>
      </section>
      <section id='Caisse' className={`h-[87vh] w-[98%] flex items-center justify-start ${
        activesection === "Caisse" ? "" : "hidden"
      }`}>
         <div className='h-[96%] w-[70%] bg-white shadow-xl rounded-xl'>
          <h1 className='font-Quicksand text-xl p-4'>Articles Vendu</h1>
              <div style={{ width: "98%", height: "87%" , marginLeft: 'auto' , marginRight: 'auto' }}>
                <GridExample />
              </div>
         </div>
         <div className='h-[96%] w-[29%] flex flex-col justify-start bg-white shadow-xl rounded-xl ml-[1vw]' >
          <h1 className='font-Quicksand text-xl p-4 mt-[2vh]'>Total des Revenues:</h1>
          <p className='font-Quicksand text-4xl font-semibold tracking-wider px-5 ml-auto mr-auto mb-[2vh]'>25000,00 DA</p>
          <h1 className='font-Quicksand text-xl p-4'>Total des Articles Vendu:</h1>
          <p className='font-Quicksand text-4xl font-semibold tracking-wider px-5 ml-auto mr-auto mb-[2vh]'>150</p>
          <h1 className='font-Quicksand text-xl p-4 mt-[2vh]'>Articles Plus Vendu:</h1>
          <p className='font-Quicksand text-2xl font-semibold tracking-wider px-5 ml-auto mr-auto mb-[2vh]'>Article XYZ</p>
          <h1 className='font-Quicksand text-xl p-4 mt-[2vh'>Articles Moins Vendu:</h1>
          <p className='font-Quicksand text-2xl font-semibold tracking-wider px-5 ml-auto mr-auto'>Article ABC</p>
         </div>
      </section>
      <section id='Frais' className={`h-[87vh] w-[98%] flex items-center justify-center ${
        activesection === "Frais" ? "" : "hidden"
      }`}>
         <div class="flex flex-col items-center justify-center h-fit ">
  <div class="w-full max-w-md bg-white rounded-lg shadow-md p-6">
    <h2 class="text-2xl font-bold text-gray-800 mb-4">Frais</h2>

    <form class="flex flex-col">
      <input placeholder="Ajouter un montant au frais" class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text"/>

      <button class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" type="submit">Submit</button>
    </form>
  </div>
</div>

      </section>
      <section id='Paramètres' className={`h-[80vh] w-[98%] flex items-center justify-center gap-[3vw] ${
        activesection === "Paramètres" ? "" : "hidden"
      }`}>

<div class="flex flex-col items-center justify-center h-fit light ">
  <div class="w-full max-w-md bg-white rounded-lg shadow-md p-6">
    <h2 class="text-2xl font-Quicksand text-gray-800 mb-4">Ajouter un produit</h2>

    <form class="flex flex-col">
      <input placeholder="Nom du produit" class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" type="text" />
      <select class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" id="product">
        <option value="product-1">Category</option>
        <option value="product-2">Pizzas</option>
        <option value="product-3">Tacos</option>
      </select>
      <textarea placeholder="Description du produit" class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" name="feedback"></textarea>

      <button class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" type="submit">Submit</button>
    </form>
  </div>
</div>
<div class="flex flex-col items-center justify-center h-fit light">
  <div class="w-full max-w-md bg-white rounded-lg shadow-md p-6">
    <h2 class="text-2xl font-Quicksand text-gray-800 mb-4">Effacer un Produit</h2>

    <form class="flex flex-col">
      <select class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" id="product">
        <option value="product-1">Category</option>
        <option value="product-2">Product 2</option>
        <option value="product-3">Product 3</option>
      </select>
      <select class="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" id="product">
        <option value="product-1">Product 1</option>
        <option value="product-2">Product 2</option>
        <option value="product-3">Product 3</option>
      </select>

      <button class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150" type="submit">Submit</button>
    </form>
  </div>
</div>

      </section>
    </div>
  )
}

export default Dashboard