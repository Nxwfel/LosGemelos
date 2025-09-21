import React from 'react'
import {motion, scale} from 'framer-motion'
import { filter } from 'framer-motion/client'
const Order = () => {
  return (
    <div
    className='h-screen w-screen overflow-hidden bg-[#fdfbfb] flex'
    >
      <div className='h-screen w-[8vw] bg-white flex flex-col items-center justify-items-center-safe gap-[20vh] mr-auto shadow-2xl'>
        <h1 className='font-serif text-5xl bg-white text-[#dba840] mt-[3vh]'>L</h1>
        <div className='flex flex-col items-center justify-center gap-[5vh] mt-[7vh]'>
          <div className='flex flex-col h-[8vh] w-[4vw] hover:bg-[#dba840] rounded justify-center items-center hover:transition-colors text-[#c4c1c3] hover:text-white stroke-[#c4c1c3] hover:stroke-white p-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="size-[4vh]">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            <h1 className='font-Quicksand text-[2vh]'>Acceuil</h1>
          </div>
          <div className='flex flex-col h-[8.5vh] w-[4vw] hover:bg-[#dba840] rounded justify-center items-center hover:transition-colors text-[#c4c1c3] hover:text-white fill-[#c4c1c3] hover:fill-white p-2'>
            <svg xmlns="http://www.w3.org/2000/svg" className='size-[4vh]' viewBox="0 0 64 64">
                    <g  fill-rule="evenodd">
                        <path d="M61.821 11.045c.703-1.309-.891-.912-.891-.912s-10.627 10.201-12.104 8.951S59.231 8.057 57.825 6.23c-1.301-1.703-11.74 10.455-12.994 8.97c-1.242-1.482 8.939-12.123 8.939-12.123s.387-1.602-.912-.9C36.851 10.785 34.812 18.81 34.812 18.81s-.551 1.563.645 2.771c.117.105-29.204 29.26-33.129 33.196c-1.91 1.908 5.098 8.801 6.996 6.893c3.926-3.936 33.024-33.303 33.129-33.194c1.207 1.205 2.766.652 2.766.652s8.012-2.045 16.602-18.083"/>
                        <path d="M32.028 40.507c7.803 7.82 20.958 20.999 20.958 20.999s5.742-1.879 6.551-6.729L38.662 33.861a5104.35 5104.35 0 0 0-6.634 6.646M21.76 33.729a5059.26 5059.26 0 0 0 8.387-8.4L7.459 2.598s-.41-.43-1.313.477C4.353 4.862.884 16.248 15.591 30.977c2.331 2.336 4.359 2.66 6.169 2.752"/>
                    </g>
                </svg>
              <h1 className='font-Quicksand text-[2vh]'>Menu</h1>
            </div>
            <div className='flex flex-col h-[8vh] w-[4vw] hover:bg-[#dba840] rounded justify-center items-center hover:transition-colors text-[#c4c1c3] hover:text-white fill-[#c4c1c3] hover:fill-white p-2'>
              <svg xmlns="http://www.w3.org/2000/svg" className='size-[4vh]' viewBox="0 0 24 24"><path  d="M12 22H6a2 2 0 0 1 2-2V8H2V5h14v3h-6v12a2 2 0 0 1 2 2M22 2v20h-2v-7h-5v7h-2v-8a2 2 0 0 1 2-2h5V2Z"/></svg>
              <h1 className='font-Quicksand text-[2.2vh]'>Tables</h1>
            </div>
          </div>
          </div>

          <div className='h-screen w-[92vw] flex flex-col'>
            <div className='h-[10vh] w-[55vw] mt-[4vh] ml-[3vw] flex items-center justify-between'>
              <h1 className='font-Quicksand font-normal text-[3vh] text-nowrap'>Choissisez la category</h1>
              <div class="relative mt-[1vh]">
              <input
                placeholder="Search..."
                class="input bg-white shadow-lg focus:border-2 border-gray-300 px-5 py-3 rounded-xl w-56 transition-all focus:w-64 outline-none"
                name="search"
                type="search"
              />
              <svg
                class="size-6 absolute top-3 right-3 text-gray-500"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
            </div>
            
          </div>
          <div className='h-[15vh] max-w-[55vw] items-center justify-center flex mt-[3vh] ml-[3vw] bg-white rounded-2xl shadow'>
           <div className='flex flex-col border-1 border-gray-300 items-center justify-center h-[13vh] w-[8vw] p-2 bg-[#f5f5f5] rounded-2xl hover:scale-105 transition-all cursor-pointer'>
          
            <h1 className='font-Quicksand font-medium'>Pizzas</h1>
           </div>
          </div>
          <div className='h-[60vh] w-[55vw] mt-[3vh] ml-[3vw] bg-white rounded-2xl shadow flex flex-col'>

            </div>
        </div>
        <div className='h-[90vh] w-[40vw] bg-white shadow rounded-2xl mt-[5vh] mr-[1vw] '></div>
    </div>
  )
}

export default Order