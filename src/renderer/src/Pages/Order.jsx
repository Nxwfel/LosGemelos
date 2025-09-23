import React, { useState } from 'react'
import {Link} from 'react-router-dom'
const Order = () => {
  const [activeSection, setActiveSection] = useState('pizzas');

  const handleCategoryClick = (categoryId) => {
    setActiveSection(categoryId);
  };

  // Function to render the active section
  const renderActiveSection = () => {
    switch (activeSection) {
      case 'pizzas':
        return (
          <section id='pizzas' className='h-full w-full flex flex-col'>
            <div className='h-[10vh] max-w-[55vw] flex justify-between items-center'>
              <h1 className='font-sans text-2xl'>Pizzas Menu</h1>
              <h2 className='font-sans text-sm text-neutral-400'>Resultat:10</h2>
            </div>
            <div className='h-full max-w-[60vw] overflow-scroll p-4 gap-[1vh] grid grid-cols-2'>
              {/* Pizza items */}
              {[...Array(10)].map((_, index) => (
                <div key={index} className='h-[15vh] w-[25vw] bg-white shadow-xl rounded-2xl items-center justify-start flex'>
                  <div className='size-[13vh] rounded-2xl ml-[.5vw] bg-orange-200 flex items-center justify-center'>
                    <span className='text-2xl'>🍕</span>
                  </div>
                  <div className='flex flex-col ml-[1vw]'>
                    <h1 className='font-sans text-md'>Pizza Marguerite</h1>
                    <h2 className='font-sans text-sm text-neutral-400'>Tomato, Mozzarella, Basil</h2>
                    <h3 className='font-sans text-lg font-bold mt-[1vh]'>400 DA</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      
      case 'Plates':
        return (
          <section id='Plates' className='h-full w-full flex flex-col'>
            <div className='h-[10vh] max-w-[55vw] flex justify-between items-center'>
              <h1 className='font-sans text-2xl'>Menu des Plates</h1>
              <h2 className='font-sans text-sm text-neutral-400'>Resultat:8</h2>
            </div>
            <div className='h-full max-w-[60vw] overflow-scroll p-4 gap-[1vh] grid grid-cols-2'>
              {[...Array(8)].map((_, index) => (
                <div key={index} className='h-[15vh] w-[25vw] bg-white shadow-xl rounded-2xl items-center justify-start flex'>
                  <div className='size-[13vh] rounded-2xl ml-[.5vw] bg-yellow-200 flex items-center justify-center'>
                    <span className='text-2xl'>🍽️</span>
                  </div>
                  <div className='flex flex-col ml-[1vw]'>
                    <h1 className='font-sans text-md'>Plate Special</h1>
                    <h2 className='font-sans text-sm text-neutral-400'>Rice, meat, vegetables</h2>
                    <h3 className='font-sans text-lg font-bold mt-[1vh]'>650 DA</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      
      case 'Burgers':
        return (
          <section id='Burger' className='h-full w-full flex flex-col'>
            <div className='h-[10vh] max-w-[55vw] flex justify-between items-center'>
              <h1 className='font-sans text-2xl'>Menu des Burgers</h1>
              <h2 className='font-sans text-sm text-neutral-400'>Resultat:12</h2>
            </div>
            <div className='h-full max-w-[60vw] overflow-scroll p-4 gap-[1vh] grid grid-cols-2'>
              {[...Array(12)].map((_, index) => (
                <div key={index} className='h-[15vh] w-[25vw] bg-white shadow-xl rounded-2xl items-center justify-start flex'>
                  <div className='size-[13vh] rounded-2xl ml-[.5vw] bg-red-200 flex items-center justify-center'>
                    <span className='text-2xl'>🍔</span>
                  </div>
                  <div className='flex flex-col ml-[1vw]'>
                    <h1 className='font-sans text-md'>Burger Special</h1>
                    <h2 className='font-sans text-sm text-neutral-400'>Beef, cheese, lettuce</h2>
                    <h3 className='font-sans text-lg font-bold mt-[1vh]'>550 DA</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      
      case 'Bucket':
        return (
          <section id='Broast' className='h-full w-full flex flex-col'>
            <div className='h-[10vh] max-w-[55vw] flex justify-between items-center'>
              <h1 className='font-sans text-2xl'>Menu des Broast</h1>
              <h2 className='font-sans text-sm text-neutral-400'>Resultat:6</h2>
            </div>
            <div className='h-full max-w-[60vw] overflow-scroll p-4 gap-[1vh] grid grid-cols-2'>
              {[...Array(6)].map((_, index) => (
                <div key={index} className='h-[15vh] w-[25vw] bg-white shadow-xl rounded-2xl items-center justify-start flex'>
                  <div className='size-[13vh] rounded-2xl ml-[.5vw] bg-amber-200 flex items-center justify-center'>
                    <span className='text-2xl'>🍗</span>
                  </div>
                  <div className='flex flex-col ml-[1vw]'>
                    <h1 className='font-sans text-md'>Broast Special</h1>
                    <h2 className='font-sans text-sm text-neutral-400'>Crispy chicken pieces</h2>
                    <h3 className='font-sans text-lg font-bold mt-[1vh]'>800 DA</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      
      case 'Tacos':
        return (
          <section id='Tacos' className='h-full w-full flex flex-col'>
            <div className='h-[10vh] max-w-[55vw] flex justify-between items-center'>
              <h1 className='font-sans text-2xl'>Menu des Tacos</h1>
              <h2 className='font-sans text-sm text-neutral-400'>Resultat:15</h2>
            </div>
            <div className='h-full max-w-[60vw] overflow-scroll p-4 gap-[1vh] grid grid-cols-2'>
              {[...Array(15)].map((_, index) => (
                <div key={index} className='h-[15vh] w-[25vw] bg-white shadow-xl rounded-2xl items-center justify-start flex'>
                  <div className='size-[13vh] rounded-2xl ml-[.5vw] bg-green-200 flex items-center justify-center'>
                    <span className='text-2xl'>🌮</span>
                  </div>
                  <div className='flex flex-col ml-[1vw]'>
                    <h1 className='font-sans text-md'>Tacos Special</h1>
                    <h2 className='font-sans text-sm text-neutral-400'>Chicken, cheese, sauce</h2>
                    <h3 className='font-sans text-lg font-bold mt-[1vh]'>450 DA</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );

      case 'Sandwiches':
        return (
          <section id='sandwiches' className='h-full w-full flex flex-col overflow-y-scroll scrollbar-hide'>
            <div className='h-[10vh] max-w-[55vw] flex justify-between items-center'>
              <h1 className='font-sans text-2xl'>Sandwiches Menu</h1>
              <h2 className='font-sans text-sm text-neutral-400'>Resultat:18</h2>
            </div>
            
            <h3 className='font-sans text-md text-neutral-600 font-medium mb-2'>Tikka</h3>
            <div className='h-fit max-w-[60vw] p-4 gap-[1vh] grid grid-cols-2 mb-4'>
              {[...Array(3)].map((_, index) => (
                <div key={index} className='h-[15vh] w-[25vw] bg-white shadow-lg rounded-2xl items-center justify-start flex'>
                  <div className='size-[13vh] rounded-2xl ml-[.5vw] bg-orange-100 flex items-center justify-center'>
                    <span className='text-2xl'>🥙</span>
                  </div>
                  <div className='flex flex-col ml-[1vw]'>
                    <h1 className='font-sans text-md'>Tikka Sandwich</h1>
                    <h2 className='font-sans text-sm text-neutral-400'>Grilled chicken, spices</h2>
                    <h3 className='font-sans text-lg font-bold mt-[1vh]'>350 DA</h3>
                  </div>
                </div>
              ))}
            </div>

            <h3 className='font-sans text-md text-neutral-600 font-medium mb-2'>Avido</h3>
            <div className='h-fit max-w-[60vw] p-4 gap-[1vh] grid grid-cols-2 mb-4'>
              {[...Array(4)].map((_, index) => (
                <div key={index} className='h-[15vh] w-[25vw] bg-white shadow-lg rounded-2xl items-center justify-start flex'>
                  <div className='size-[13vh] rounded-2xl ml-[.5vw] bg-green-100 flex items-center justify-center'>
                    <span className='text-2xl'>🥪</span>
                  </div>
                  <div className='flex flex-col ml-[1vw]'>
                    <h1 className='font-sans text-md'>Avido Special</h1>
                    <h2 className='font-sans text-sm text-neutral-400'>Mixed vegetables</h2>
                    <h3 className='font-sans text-lg font-bold mt-[1vh]'>300 DA</h3>
                  </div>
                </div>
              ))}
            </div>

            <h3 className='font-sans text-md text-neutral-600 font-medium mb-2'>Special</h3>
            <div className='h-fit max-w-[60vw] p-4 gap-[1vh] grid grid-cols-2'>
              {[...Array(5)].map((_, index) => (
                <div key={index} className='h-[15vh] w-[25vw] bg-white shadow-xl rounded-2xl items-center justify-start flex'>
                  <div className='size-[13vh] rounded-2xl ml-[.5vw] bg-purple-100 flex items-center justify-center'>
                    <span className='text-2xl'>🌯</span>
                  </div>
                  <div className='flex flex-col ml-[1vw]'>
                    <h1 className='font-sans text-md'>House Special</h1>
                    <h2 className='font-sans text-sm text-neutral-400'>Chef's selection</h2>
                    <h3 className='font-sans text-lg font-bold mt-[1vh]'>450 DA</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );

      case 'Poutines':
        return (
          <section id='Poutines' className='h-full w-full flex flex-col'>
            <div className='h-[10vh] max-w-[55vw] flex justify-between items-center'>
              <h1 className='font-sans text-2xl'>Menu des Poutines</h1>
              <h2 className='font-sans text-sm text-neutral-400'>Resultat:7</h2>
            </div>
            <div className='h-full max-w-[60vw] overflow-scroll p-4 gap-[1vh] grid grid-cols-2'>
              {[...Array(7)].map((_, index) => (
                <div key={index} className='h-[15vh] w-[25vw] bg-white shadow-xl rounded-2xl items-center justify-start flex'>
                  <div className='size-[13vh] rounded-2xl ml-[.5vw] bg-yellow-100 flex items-center justify-center'>
                    <span className='text-2xl'>🍟</span>
                  </div>
                  <div className='flex flex-col ml-[1vw]'>
                    <h1 className='font-sans text-md'>Poutine Classic</h1>
                    <h2 className='font-sans text-sm text-neutral-400'>Fries, cheese, gravy</h2>
                    <h3 className='font-sans text-lg font-bold mt-[1vh]'>380 DA</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );

      case 'Pasta':
        return (
          <section id='Pasta' className='h-full w-full flex flex-col'>
            <div className='h-[10vh] max-w-[55vw] flex justify-between items-center'>
              <h1 className='font-sans text-2xl'>Menu des Pastas</h1>
              <h2 className='font-sans text-sm text-neutral-400'>Resultat:9</h2>
            </div>
            <div className='h-full max-w-[60vw] overflow-scroll p-4 gap-[1vh] grid grid-cols-2'>
              {[...Array(9)].map((_, index) => (
                <div key={index} className='h-[15vh] w-[25vw] bg-white shadow-xl rounded-2xl items-center justify-start flex'>
                  <div className='size-[13vh] rounded-2xl ml-[.5vw] bg-red-100 flex items-center justify-center'>
                    <span className='text-2xl'>🍝</span>
                  </div>
                  <div className='flex flex-col ml-[1vw]'>
                    <h1 className='font-sans text-md'>Pasta Bolognese</h1>
                    <h2 className='font-sans text-sm text-neutral-400'>Meat sauce, parmesan</h2>
                    <h3 className='font-sans text-lg font-bold mt-[1vh]'>520 DA</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );

      case 'Nachos':
        return (
          <section id='Nachos' className='h-full w-full flex flex-col'>
            <div className='h-[10vh] max-w-[55vw] flex justify-between items-center'>
              <h1 className='font-sans text-2xl'>Menu des Nachos</h1>
              <h2 className='font-sans text-sm text-neutral-400'>Resultat:5</h2>
            </div>
            <div className='h-full max-w-[60vw] overflow-scroll p-4 gap-[1vh] grid grid-cols-2'>
              {[...Array(5)].map((_, index) => (
                <div key={index} className='h-[15vh] w-[25vw] bg-white shadow-xl rounded-2xl items-center justify-start flex'>
                  <div className='size-[13vh] rounded-2xl ml-[.5vw] bg-orange-100 flex items-center justify-center'>
                    <span className='text-2xl'>🧀</span>
                  </div>
                  <div className='flex flex-col ml-[1vw]'>
                    <h1 className='font-sans text-md'>Nachos Supreme</h1>
                    <h2 className='font-sans text-sm text-neutral-400'>Chips, cheese, jalapeños</h2>
                    <h3 className='font-sans text-lg font-bold mt-[1vh]'>420 DA</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );

      case 'Frites':
        return (
          <section id='Frites' className='h-full w-full flex flex-col'>
            <div className='h-[10vh] max-w-[55vw] flex justify-between items-center'>
              <h1 className='font-sans text-2xl'>Menu des Frites</h1>
              <h2 className='font-sans text-sm text-neutral-400'>Resultat:8</h2>
            </div>
            <div className='h-full max-w-[60vw] overflow-scroll p-4 gap-[1vh] grid grid-cols-2'>
              {[...Array(8)].map((_, index) => (
                <div key={index} className='h-[15vh] w-[25vw] bg-white shadow-xl rounded-2xl items-center justify-start flex'>
                  <div className='size-[13vh] rounded-2xl ml-[.5vw] bg-yellow-200 flex items-center justify-center'>
                    <span className='text-2xl'>🍟</span>
                  </div>
                  <div className='flex flex-col ml-[1vw]'>
                    <h1 className='font-sans text-md'>Frites Classiques</h1>
                    <h2 className='font-sans text-sm text-neutral-400'>Golden crispy fries</h2>
                    <h3 className='font-sans text-lg font-bold mt-[1vh]'>250 DA</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );

      case 'Salades':
        return (
          <section id='Salades' className='h-full w-full flex flex-col'>
            <div className='h-[10vh] max-w-[55vw] flex justify-between items-center'>
              <h1 className='font-sans text-2xl'>Menu des Salades</h1>
              <h2 className='font-sans text-sm text-neutral-400'>Resultat:6</h2>
            </div>
            <div className='h-full max-w-[60vw] overflow-scroll p-4 gap-[1vh] grid grid-cols-2'>
              {[...Array(6)].map((_, index) => (
                <div key={index} className='h-[15vh] w-[25vw] bg-white shadow-xl rounded-2xl items-center justify-start flex'>
                  <div className='size-[13vh] rounded-2xl ml-[.5vw] bg-green-100 flex items-center justify-center'>
                    <span className='text-2xl'>🥗</span>
                  </div>
                  <div className='flex flex-col ml-[1vw]'>
                    <h1 className='font-sans text-md'>Salade César</h1>
                    <h2 className='font-sans text-sm text-neutral-400'>Lettuce, croutons, dressing</h2>
                    <h3 className='font-sans text-lg font-bold mt-[1vh]'>320 DA</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );

      case 'Desserts':
        return (
          <section id='Desserts' className='h-full w-full flex flex-col'>
            <div className='h-[10vh] max-w-[55vw] flex justify-between items-center'>
              <h1 className='font-sans text-2xl'>Menu des Desserts</h1>
              <h2 className='font-sans text-sm text-neutral-400'>Resultat:12</h2>
            </div>
            <div className='h-full max-w-[60vw] overflow-scroll p-4 gap-[1vh] grid grid-cols-2'>
              {[...Array(12)].map((_, index) => (
                <div key={index} className='h-[15vh] w-[25vw] bg-white shadow-xl rounded-2xl items-center justify-start flex'>
                  <div className='size-[13vh] rounded-2xl ml-[.5vw] bg-pink-100 flex items-center justify-center'>
                    <span className='text-2xl'>🍰</span>
                  </div>
                  <div className='flex flex-col ml-[1vw]'>
                    <h1 className='font-sans text-md'>Chocolate Cake</h1>
                    <h2 className='font-sans text-sm text-neutral-400'>Rich chocolate layers</h2>
                    <h3 className='font-sans text-lg font-bold mt-[1vh]'>280 DA</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      
      default:
        return (
          <section id='pizzas' className='h-full w-full flex flex-col'>
            <div className='h-[10vh] max-w-[55vw] flex justify-between items-center'>
              <h1 className='font-sans text-2xl'>Pizzas Menu</h1>
              <h2 className='font-sans text-sm text-neutral-400'>Resultat:10</h2>
            </div>
            <div className='h-full max-w-[60vw] overflow-scroll p-4 gap-[1vh] grid grid-cols-2'>
              {[...Array(10)].map((_, index) => (
                <div key={index} className='h-[15vh] w-[25vw] bg-white shadow-xl rounded-2xl items-center justify-start flex'>
                  <div className='size-[13vh] rounded-2xl ml-[.5vw] bg-orange-200 flex items-center justify-center'>
                    <span className='text-2xl'>🍕</span>
                  </div>
                  <div className='flex flex-col ml-[1vw]'>
                    <h1 className='font-sans text-md'>Pizza Marguerite</h1>
                    <h2 className='font-sans text-sm text-neutral-400'>Tomato, Mozzarella, Basil</h2>
                    <h3 className='font-sans text-lg font-bold mt-[1vh]'>400 DA</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
    }
  };

  return (
    <div className='h-screen w-screen overflow-hidden bg-[#fdfbfb] flex'>
      <div className='absolute ml-[40vw] mt-[30vh] h-[40vh] w-[20vw] bg-white justify-center items-center drop-shadow-2xl rounded-xl'>
        <div className='h-[15vh] w-full  rounded-2xl items-center justify-start flex'>
                  <div className='flex w-full px-3 justify-between ml-[1vw]'>
                    <div className='flex flex-col'>
                    <h1 className='font-sans text-md'>Salade César</h1>
                    <h2 className='font-sans text-sm text-neutral-400'>Lettuce, croutons, dressing</h2>
                    </div>
                    <h3 className='font-sans text-lg font-bold mt-[1vh]'>320 DA</h3>
                  </div>
                </div>
      </div>
      {/* Sidebar */}
      <div className='h-[97%] w-[8vw] mt-[1vh] bg-white border-1 border-neutral-300 rounded-3xl ml-[1vw] flex flex-col items-center justify-items-center-safe gap-[20vh] mr-auto shadow-xl'>
        <h1 className='font-serif text-5xl bg-white text-[#dba840] mt-[3vh]'>L</h1>
        <div className='flex flex-col items-center justify-center gap-[5vh] mt-[7vh]'>
          {/* Navigation buttons */}
          <Link to='/'><div className='flex flex-col h-[8vh] w-[4vw] hover:bg-[#dba840] rounded justify-center items-center hover:transition-colors text-[#c4c1c3] hover:text-white stroke-[#c4c1c3] hover:stroke-white p-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="size-[4vh]">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            <h1 className='font-sans text-[2vh]'>Acceuil</h1>
          </div>
          </Link>
          
          <Link to='/order'><div className='flex flex-col h-[8.5vh] w-[4vw] hover:bg-[#dba840] rounded justify-center items-center hover:transition-colors text-[#c4c1c3] hover:text-white fill-[#c4c1c3] hover:fill-white p-2'>
            <svg xmlns="http://www.w3.org/2000/svg" className='size-[4vh]' viewBox="0 0 64 64">
              <g fillRule="evenodd">
                <path d="M61.821 11.045c.703-1.309-.891-.912-.891-.912s-10.627 10.201-12.104 8.951S59.231 8.057 57.825 6.23c-1.301-1.703-11.74 10.455-12.994 8.97c-1.242-1.482 8.939-12.123 8.939-12.123s.387-1.602-.912-.9C36.851 10.785 34.812 18.81 34.812 18.81s-.551 1.563.645 2.771c.117.105-29.204 29.26-33.129 33.196c-1.91 1.908 5.098 8.801 6.996 6.893c3.926-3.936 33.024-33.303 33.129-33.194c1.207 1.205 2.766.652 2.766.652s8.012-2.045 16.602-18.083"/>
              </g>
            </svg>
            <h1 className='font-sans text-[2vh]'>Menu</h1>
          </div>
          </Link>
          
          <Link to='/tables'><div className='flex flex-col h-[8vh] w-[4vw] hover:bg-[#dba840] rounded justify-center items-center hover:transition-colors text-[#c4c1c3] hover:text-white fill-[#c4c1c3] hover:fill-white p-2'>
            <svg xmlns="http://www.w3.org/2000/svg" className='size-[4vh]' viewBox="0 0 24 24">
              <path d="M12 22H6a2 2 0 0 1 2-2V8H2V5h14v3h-6v12a2 2 0 0 1 2 2M22 2v20h-2v-7h-5v7h-2v-8a2 2 0 0 1 2-2h5V2Z"/>
            </svg>
            <h1 className='font-sans text-[2.2vh]'>Tables</h1>
          </div>
          </Link>
        </div>
      </div>

      <div className='h-screen w-[92vw] flex flex-col'>
        {/* Header */}
        <div className='h-[10vh] w-[55vw] mt-[4vh] ml-[3vw] flex items-center justify-between'>
          <h1 className='font-sans font-normal text-[3vh] text-nowrap'>Choisissez la catégorie</h1>
          <div className="relative mt-[1vh]">
            <input
              placeholder="Search..."
              className="input bg-white shadow-lg focus:border-2 border-gray-300 px-5 py-3 rounded-xl w-56 transition-all focus:w-64 outline-none"
              name="search"
              type="search"
            />
            <svg
              className="size-6 absolute top-3 right-3 text-gray-500"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
          </div>
        </div>

        {/* Categories */}
        <div className='h-[15vh] max-w-[55vw] overflow-x-scroll items-center justify-start flex gap-[2vw] mt-[3vh] ml-[3vw]'>
          {/* Pizzas */}
          <div 
            className={`flex flex-col gap-[1vh] shadow-lg items-center justify-center h-[13vh] w-[5vw] p-4 bg-white rounded-2xl hover:scale-105 transition-all cursor-pointer ${
              activeSection === 'pizzas' ? 'border-2 border-[#dba840]' : ''
            }`}
            onClick={() => handleCategoryClick('pizzas')}
          >
            <span className='text-4xl'>🍕</span>
            <h1 className='font-sans font-medium text-[1.5vh]'>Pizzas</h1>
          </div>

          {/* Plates */}
          <div 
            className={`flex flex-col gap-[1vh] shadow-lg items-center justify-center h-[13vh] w-[5vw] p-4 bg-white rounded-2xl hover:scale-105 transition-all cursor-pointer ${
              activeSection === 'Plates' ? 'border-2 border-[#dba840]' : ''
            }`}
            onClick={() => handleCategoryClick('Plates')}
          >
            <span className='text-4xl'>🍽️</span>
            <h1 className='font-sans font-medium text-[1.5vh]'>Plates</h1>
          </div>

          {/* Sandwiches */}
          <div 
            className={`flex flex-col gap-[1vh] shadow-lg items-center justify-center h-[13vh] w-[5vw] p-4 bg-white rounded-2xl hover:scale-105 transition-all cursor-pointer ${
              activeSection === 'Sandwiches' ? 'border-2 border-[#dba840]' : ''
            }`}
            onClick={() => handleCategoryClick('Sandwiches')}
          >
            <span className='text-4xl'>🥙</span>
            <h1 className='font-sans font-medium text-[1.5vh]'>Sandwiches</h1>
          </div>

          {/* Burgers */}
          <div 
            className={`flex flex-col gap-[1vh] shadow-lg items-center justify-center h-[13vh] w-[5vw] p-4 bg-white rounded-2xl hover:scale-105 transition-all cursor-pointer ${
              activeSection === 'Burgers' ? 'border-2 border-[#dba840]' : ''
            }`}
            onClick={() => handleCategoryClick('Burgers')}
          >
            <span className='text-4xl'>🍔</span>
            <h1 className='font-sans font-medium text-[1.5vh]'>Burgers</h1>
          </div>

          {/* Bucket */}
          <div 
            className={`flex flex-col gap-[1vh] shadow-lg items-center justify-center h-[13vh] w-[5vw] p-4 bg-white rounded-2xl hover:scale-105 transition-all cursor-pointer ${
              activeSection === 'Bucket' ? 'border-2 border-[#dba840]' : ''
            }`}
            onClick={() => handleCategoryClick('Bucket')}
          >
            <span className='text-4xl'>🍗</span>
            <h1 className='font-sans font-medium text-[1.5vh]'>Broast</h1>
          </div>

          {/* Tacos */}
          <div 
            className={`flex flex-col gap-[1vh] shadow-lg items-center justify-center h-[13vh] w-[5vw] p-4 bg-white rounded-2xl hover:scale-105 transition-all cursor-pointer ${
              activeSection === 'Tacos' ? 'border-2 border-[#dba840]' : ''
            }`}
            onClick={() => handleCategoryClick('Tacos')}
          >
            <span className='text-4xl'>🌮</span>
            <h1 className='font-sans font-medium text-[1.5vh]'>Tacos</h1>
          </div>

          {/* Poutines */}
          <div 
            className={`flex flex-col gap-[1vh] shadow-lg items-center justify-center h-[13vh] w-[5vw] p-4 bg-white rounded-2xl hover:scale-105 transition-all cursor-pointer ${
              activeSection === 'Poutines' ? 'border-2 border-[#dba840]' : ''
            }`}
            onClick={() => handleCategoryClick('Poutines')}
          >
            <span className='text-4xl'>🍟</span>
            <h1 className='font-sans font-medium text-[1.5vh]'>Poutines</h1>
          </div>

          {/* Pasta */}
          <div 
            className={`flex flex-col gap-[1vh] shadow-lg items-center justify-center h-[13vh] w-[5vw] p-4 bg-white rounded-2xl hover:scale-105 transition-all cursor-pointer ${
              activeSection === 'Pasta' ? 'border-2 border-[#dba840]' : ''
            }`}
            onClick={() => handleCategoryClick('Pasta')}
          >
            <span className='text-4xl'>🍝</span>
            <h1 className='font-sans font-medium text-[1.5vh]'>Pasta</h1>
          </div>

          {/* Nachos */}
          <div 
            className={`flex flex-col gap-[1vh] shadow-lg items-center justify-center h-[13vh] w-[5vw] p-4 bg-white rounded-2xl hover:scale-105 transition-all cursor-pointer ${
              activeSection === 'Nachos' ? 'border-2 border-[#dba840]' : ''
            }`}
            onClick={() => handleCategoryClick('Nachos')}
          >
            <span className='text-4xl'>🧀</span>
            <h1 className='font-sans font-medium text-[1.5vh]'>Nachos</h1>
          </div>

          {/* Frites */}
          <div 
            className={`flex flex-col gap-[1vh] shadow-lg items-center justify-center h-[13vh] w-[5vw] p-4 bg-white rounded-2xl hover:scale-105 transition-all cursor-pointer ${
              activeSection === 'Frites' ? 'border-2 border-[#dba840]' : ''
            }`}
            onClick={() => handleCategoryClick('Frites')}
          >
            <span className='text-4xl'>🍟</span>
            <h1 className='font-sans font-medium text-[1.5vh]'>Frites</h1>
          </div>

          {/* Salades */}
          <div 
            className={`flex flex-col gap-[1vh] shadow-lg items-center justify-center h-[13vh] w-[5vw] p-4 bg-white rounded-2xl hover:scale-105 transition-all cursor-pointer ${
              activeSection === 'Salades' ? 'border-2 border-[#dba840]' : ''
            }`}
            onClick={() => handleCategoryClick('Salades')}
          >
            <span className='text-4xl'>🥗</span>
            <h1 className='font-sans font-medium text-[1.5vh]'>Salades</h1>
          </div>

          {/* Desserts */}
          <div 
            className={`flex flex-col gap-[1vh] shadow-lg items-center justify-center h-[13vh] w-[5vw] p-4 bg-white rounded-2xl hover:scale-105 transition-all cursor-pointer ${
              activeSection === 'Desserts' ? 'border-2 border-[#dba840]' : ''
            }`}
            onClick={() => handleCategoryClick('Desserts')}
          >
            <span className='text-4xl'>🍰</span>
            <h1 className='font-sans font-medium text-[1.5vh]'>Desserts</h1>
          </div>
        </div>

        {/* Content Area - Using the renderActiveSection function */}
        <div className='h-[63vh] max-w-[60vw] ml-[3vw] rounded-2xl flex flex-col'>
          {renderActiveSection()}
        </div>
      </div>

      {/* Order Summary Sidebar */}
      <div className='h-[90vh] w-[40vw] bg-white shadow-xl p-4 rounded-2xl mt-[5vh] mr-[1vw]'>
        <h1 className='font-sans text-xl font-bold'>Command</h1>
        <div className='flex flex-col h-[75vh] mt-[2vh] overflow-scroll gap-[1vh]'>
          {/* Order items */}
          {[
            { name: "Pizza Marguerite", price: "$12.99", size: "XXL", qty: 1 },
            { name: "Pizza Marguerite", price: "$12.99", size: "XL", qty: 2 },
            { name: "Pizza Marguerite", price: "$12.99", size: "L", qty: 3 },
            { name: "Pizza Marguerite", price: "$12.99", size: "L", qty: 2 }
          ].map((item, index) => (
            <div key={index} className='h-[13vh] w-[25vw] rounded-2xl items-center justify-start flex'>
              <div className='size-[11vh] rounded-2xl ml-[.5vw] bg-orange-200 flex items-center justify-center'>
                <span className='text-2xl'>🍕</span>
              </div>
              <div className='flex flex-col ml-[1vw]'>
                <h1 className='font-sans text-md'>{item.name}</h1>
                <h3 className='font-sans text-lg font-bold mt-[1vh]'>{item.price}</h3>
              </div>
              <div className='flex flex-col items-center justify-center ml-auto gap-[1vh]'>
                <h1 className='text-lg rounded-full font-sans px-2.5 border-1 border-neutral-300 text-center'>{item.size}</h1>
                <h1 className='text-md font-sans'>x{item.qty}</h1>
              </div>
            </div>
          ))}
          
          <div className='flex justify-between border-t-1 items-center mt-[2vh]'>
            <h1 className='font-sans text-lg ml-[1vw]'>Total</h1>
            <p className='font-sans text-sm mt-[1vh]'>2500 DA</p>
          </div>
          
          <div className='h-fit flex flex-col gap-[2vh] justify-center items-center mt-[3vh]'>
            <form className="max-w-sm mx-auto -mt-[3.5vh]">
              <label htmlFor="tables" className="block mb-2 text-sm font-sans font-medium text-gray-900">Tables</label>
              <select 
                id="tables" 
                className="border font-sans border-zinc-600 bg-zinc-950 text-white text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 px-[2.5vw] py-[1.5vh]"
              >
                <option value="">Table 01</option>
                {[...Array(25)].map((_, i) => (
                  <option key={i} value={`Table ${String(i + 2).padStart(2, '0')}`}>
                    Table {String(i + 2).padStart(2, '0')}
                  </option>
                ))}
              </select>
            </form>
            <button className="inline-block font-sans cursor-pointer items-center justify-center rounded-xl border-[1.58px] border-zinc-600 bg-zinc-950 px-5 py-2 font-medium text-slate-200 shadow-md transition-all duration-300 hover:[transform:translateY(-.335rem)] hover:shadow-xl">
              Vers la cuisine
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order