import React from 'react'
import {motion, scale} from 'framer-motion'
import Burger from '../assets/imgs/burger.svg'
import Bucket from '../assets/imgs/chicken.png'
import Pizza from '../assets/imgs/pizzas.jpg'
import TacosIcon from '../assets/imgs/tacosicon.png'
import Plates from '../assets/imgs/Plates.jpg'
import Salade from '../assets/imgs/salad.png'
import Poutine from '../assets/imgs/poutine.png'
import Nachos from '../assets/imgs/nachos.png'
import Dessert from '../assets/imgs/desserts.png'
import Pasta from '../assets/imgs/pasta.png'
import Frites from '../assets/imgs/frites.png'
const Order = () => {
  return (
    <div
    className='h-screen w-screen overflow-hidden bg-[#fdfbfb] flex'
    >
      <div className='h-[97%] w-[8vw] mt-[1vh] bg-white border-1 border-neutral-300 rounded-3xl ml-[1vw] flex flex-col items-center justify-items-center-safe gap-[20vh] mr-auto shadow-xl'>
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
          <div className='h-[15vh] max-w-[55vw] overflow-x-scroll items-center justify-start flex gap-[2vw] mt-[3vh] ml-[3vw] '>
           <div className='flex flex-col gap-[1vh] shadow-lg items-center justify-center h-[13vh] w-[5vw] p-4 bg-white rounded-2xl hover:scale-105 transition-all cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" className='size-[4vh]' viewBox="0 0 64 64"><path fill="#f6da77" d="M62.3 47.1C62.2 22.7 41.5 2.1 17.1 2L2.3 62l60-14.9"/><path fill="#860d16" d="m54.5 49l2.1-.4c-1-19-14.6-38.9-41-40.9l-.3 2C35.5 12.3 52 28.7 54.5 49"/><path fill="#c98e52" d="m56.5 48.6l5.7-1.4C62.3 22.8 41.5 2 16.9 2l-1.4 5.7c23.5 2.2 38.8 17.6 41 40.9z"/><path fill="#83bf4f" d="M13.5 41.7c-1.7 0-3.2-.6-4.4-1.8c-.5-.5-.5-1.3 0-1.7c.5-.5 1.3-.5 1.7 0c1.4 1.4 3.9 1.4 5.3 0c.7-.7 1.1-1.6 1.1-2.6s-.4-1.9-1.1-2.6c-.5-.5-.5-1.3 0-1.7c.5-.5 1.3-.5 1.7 0c1.2 1.2 1.8 2.7 1.8 4.4c0 1.7-.6 3.2-1.8 4.4c-1.1.9-2.7 1.6-4.3 1.6m25.1-19.8v.5c-.1.3-.2.5-.5.7c-.3.2-.6.2-.8.1c-.8-.2-1.6 0-2.3.4c-.7.4-1.2 1.1-1.4 1.9c-.4 1.6.7 3.3 2.3 3.7c.6.1 1 .8.8 1.3c-.1.6-.7 1-1.3.8c-2-.5-3.5-2-4-4c-.2-.8-.2-1.6 0-2.3c.3-1.4 1.2-2.5 2.4-3.3c1.2-.8 2.6-1 4-.7c.3.2.7.5.8.9m5.3 29h-.5c-.3-.1-.5-.2-.6-.5c-.1-.2-.2-.5-.1-.8c.2-.7.1-1.5-.3-2.2c-.4-.7-1-1.2-1.8-1.4c-1.5-.4-3.2.6-3.6 2c-.1.5-.8.9-1.3.7c-.6-.2-.9-.7-.7-1.3c.5-1.8 2-3.3 3.9-3.6c.7-.1 1.5-.1 2.2.1c1.3.3 2.4 1.2 3 2.3c.7 1.2.8 2.5.5 3.8c0 .5-.3.8-.7.9"/><path fill="#b21725" d="M37.1 36.2c1.4 4.1-.8 8.5-5 9.9c-4.2 1.4-8.7-.8-10-4.9c-1.4-4.1.8-8.5 5-9.9c4.1-1.4 8.6.8 10 4.9m12.5.8c.8 2.5-.5 5.1-3 6c-2.5.8-5.2-.5-6-3c-.8-2.5.5-5.1 3-6c2.4-.8 5.1.5 6 3M29 19c1.1 3.3-.7 7-4.1 8.1c-3.4 1.1-7.1-.7-8.2-4c-1.1-3.3.7-7 4.1-8.1c3.4-1.1 7.1.7 8.2 4m5.4 35l-9.7 2.4c-.9-2.6.9-5.7 3.5-6.4c3.2-.8 5.3 1.5 6.2 4m-14.8-7c1.2 3.4-.7 7.2-4.2 8.3c-3.5 1.2-7.3-.7-8.5-4.2c-1.2-3.4.7-7.2 4.2-8.3c3.5-1.1 7.3.8 8.5 4.2"/><path fill="#e0a763" d="M15.5 7.7c5.3.1 10.6 1.1 15.6 3.1c5 1.9 9.7 4.9 13.5 8.8c3.8 3.8 6.8 8.5 8.8 13.5c2 5 3 10.3 3.1 15.6c-.9-5.2-2.3-10.3-4.5-15c-2.2-4.7-5.1-9.1-8.8-12.7c-3.6-3.7-8-6.6-12.7-8.7c-4.7-2.3-9.8-3.7-15-4.6"/><path fill="#ffab41" d="m16.794 13.436l1.98-1.98l1.98 1.98l-1.98 1.98zm12.926 5.608l1.98-1.98l1.98 1.98l-1.98 1.98zm-16.812 7.404l1.98-1.98l1.98 1.98l-1.98 1.98zm6.84 5.687l1.98-1.98l1.98 1.98l-1.98 1.98zm17.797.255l1.98-1.98l1.98 1.98l-1.98 1.98zm11.479 14.151l1.98-1.98l1.98 1.98l-1.98 1.98zm-29.407-1.889l1.98-1.98l1.98 1.98l-1.98 1.98zm1.417 7.251l1.98-1.98l1.98 1.98l-1.98 1.98zM4.338 58.241l1.98-1.98l1.98 1.98l-1.98 1.98zm9.632-40.913l1.485-1.485l1.485 1.485l-1.485 1.485zm12.582 10.565l1.485-1.485l1.485 1.485l-1.485 1.485zm13.523.062l1.485-1.485l1.485 1.485l-1.485 1.485zm-26.639 8.209l1.485-1.485l1.485 1.485l-1.485 1.485zM7.36 42.1l1.485-1.485l1.485 1.484l-1.485 1.485zM5.03 54.485L6.515 53L8 54.485L6.515 55.97zm12.846.801l1.485-1.485l1.485 1.486l-1.485 1.484zm12.902-6.94l1.485-1.485l1.485 1.485l-1.485 1.485zm6.264 2.55l1.485-1.485l1.485 1.485l-1.485 1.484zm8.334-5.726l1.485-1.484l1.485 1.485l-1.485 1.485z"/></svg>
            <h1 className='font-Quicksand font-medium text-[1.5vh]'>Pizzas</h1>
           </div>
           <div className='flex flex-col gap-[1vh] shadow-lg items-center justify-center h-[13vh] w-[5vw] p-4 bg-white rounded-2xl hover:scale-105 transition-all cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" className='size-[4vh]' viewBox="0 0 128 128"><path fill="#DBDAD8" d="M62.27 52.91c-35.89.46-57.79 15.72-57.01 36.63c.82 22.12 28.07 35.13 59.81 35.1c36.15-.03 56.86-17.55 57.32-34.04c.54-19.23-18.8-38.21-60.12-37.69z"/><path fill="#F6F6F6" d="M62.29 51.18C28.5 51.62 7.87 66.25 8.6 86.29c.77 21.2 27.94 33.9 56.33 33.65c32.77-.29 53.55-16.82 53.99-32.63c.51-18.44-17.71-36.64-56.63-36.13z"/><path fill="#FFA726" d="M36.69 68.38s-6.5 1.03-10.62 4.85s-5.57 13.61 1.34 22.27s13.8 7.36 13.8 7.36s2.91 3.16 5.48 4.6s6.29 3.71 7.63 5.05s4.32 4.21 6.25 3.71c.71-.18 1.18-.77 1.38-1.01c.39-.48-.05-.86-.2-1.26c-.21-.52-7.94-5.98-7.94-5.98l-.31-1.75s3.92 1.55 6.08 2.99c2.17 1.44 5.84 3.69 7.33 3.5c1.54-.2 1.74-.77 1.88-.97c.79-1.09-.76-3.15-.76-3.15s1.34-.82 3.92-.72s14.33 1.65 19.8-3.2c3.25-2.88 4.06-5.18 4.18-6.57c.08-.95.19-1.49.19-1.49s7.91.94 11.1-3.7s3.82-11.14 2.06-14.13c-1.75-2.99-3.71-5.57-3.71-5.57s-.4-2.61-2.84-4.24c-2.58-1.73-6.24-2.56-6.24-2.56l-59.8 1.97z"/><path fill="#F6F6F6" d="M77.62 102.61s3.3-1.24 5.16-2.27c2.03-1.13 3.71-2.58 4.64-1.75c.93.82-.61 2.73-2.89 3.3c-3.3.82-6.91.72-6.91.72zM32.2 94.45c-.08.13.89 1.82 2.71 3.01c1.57 1.02 3.18 1.7 3.39 1.19c.17-.42-.25-.55-1.06-1.36c-.56-.56-.93-1.31-.93-1.31s-.93 0-1.99-.38a8.111 8.111 0 0 1-2.12-1.15z"/><path fill="#F7DF92" d="M69.18 79.04c.08.13 1.86 2.5 4.44 2.32s4.88-3.24 4.88-3.24s-6.87-1.07-6.92-.97c-.05.11-2.4 1.89-2.4 1.89z"/><path fill="#F7DF92" d="M103.65 76.47s1.74-3.44-.87-5.71c-2.61-2.28-5.62-2.42-5.62-2.42l-4.02 2.23s4.16.19 6 1.16s2.37 2.28 1.84 2.81c-.53.53-2.45-.64-5.6-.64c-3.15 0-4.47.74-4.47.74l.29 2.71s7.26-.82 10.22 2.08c2.95 2.9 3.67 9.39-2.37 11.23c-6.05 1.84-12.2-5.28-19.41-4.16c-6.31.97-8.67 8.42-8.67 8.42s3.29-3.78 8.52-5.18c3.83-1.03 10.12 2.81 10.12 2.81l-3.87.29s-3.16-2.22-7.36-.77c-4.65 1.6-8.47 7.46-15.2 8.62c-5.13.89-11.91-.34-17.09-3.73s-9.17-9.43-9.88-10.7c-.48-.87-1.2-2.19-.59-2.61c.63-.44 1.37 1.2 2.19 2.27c.81 1.05 9.09 13.58 22.9 12.49c14.14-1.11 9-12.83 9-12.83s3.36 1.04 6.57.15c4.85-1.35 6.84-5.42 6.84-5.42l-3.24-.53s-2.9 3.39-6.73 3.1c-3.82-.29-5.91-3.15-5.91-3.15l-3.15 1.26l2.18 2.42s-2.42-.73-4.6-.15c-2.18.58-3.43 1.76-2.52 3.1c.82 1.21 2.87-.09 3.49-.29c1.02-.34 3.73-.19 4.65 2.23c.92 2.42.29 6.44-5.47 7.07c-5.76.63-12.93-1.89-18.01-6.58s-4.44-6.76-7.58-8.48c-2.88-1.57-4.39.52-4.23 3.05c.17 2.8 2.52 6.73 2.52 6.73s-3.97-3-4.7-7.02s0-5.95 2.03-6.05c2.03-.1 2.23 1.21 2.76.68c.53-.53-2.13-4.21-5.81-2.03c-3.57 2.11-2.01 7.95-1.58 9.5c.62 2.27 2.84 6.52 5.99 7.78c2.31.92 3.15.24 3.15.24s4.16 4.79 8.04 7.07c3.87 2.28 10.46 4.84 14.77 7.02c4.31 2.18 7.31 4.5 8.38 4.84c1.07.34 2.47-1.11 1.36-2.61c-1.11-1.5-2.42-2.18-3.34-2.81c-.92-.63-4.02-2.18-4.02-2.18s1.84.24 3.39.15c1.55-.1 2.13-.34 2.13-.34s-.05 2.03 1.65 2.37c1.69.34 3.55-.49 6.44-.15c4.45.53 13.8.58 17.34-4.89c3.52-5.45-.18-7.86-.18-7.86s9.23 2.58 13.35-4.05c4.25-6.91-2.02-13.28-2.02-13.28zM76.38 95.93c3.15-2.11 5.5-1.52 5.5-1.52s-2.15 1.64-5.04 3.23c-3 1.65-5.48 2.17-5.48 2.17c.34-.15 3.11-2.6 5.02-3.88zm8.75 6.88c-5.6 1.68-12.42.03-12.42.03s5.45-1.84 8.44-4.04c3-2.2 7.47-4.4 9.18-2.26c1.56 1.96-2.07 5.33-5.2 6.27z"/><path fill="#F7DF92" d="M80.55 84.86c-.04.18 3.3-.27 6.93 1.21c3.63 1.47 11.29 5.72 13.74.77c2.24-4.54-1.35-7.3-4.77-7.65c-2.39-.25-4.2-.29-5.16.17c-1.24.59-1.33 2.59.62 2.56c1.95-.03 6.93-.66 6.01 2.89c-.77 2.98-6.9-1-9.58-1.74c-4.32-1.19-7.56.76-7.79 1.79z"/><path fill="#F7DF92" d="M95.49 95.46c.23.36.37.89.41 1.19c.08.53.04 1.2.04 1.23c.02.25 11.27 2.2 14.75-7.91c2.07-6.01-.41-11.41-1.66-13.27c-1.24-1.87-3.04-3.94-3.46-3.8c-.41.14.09 2.61.97 4.15c1.18 2.07 4.04 7.86 1.38 12.72c-4.13 7.59-12.43 5.69-12.43 5.69zM39.75 71.59c.04.91 1.46 4.34 5.84 10.04c2.93 3.81 6.88 5.87 9.02 6.1c2.37.26 2.45-2.52.55-3.25c-1.9-.73-3.96-1.88-5.37-3.18c-2.96-2.74-4.64-6.24-4.64-6.24l-2.77-3.1l-2.63-.37z"/><path fill="#F7DF92" d="M55.62 89.61c-3.62-.7-8.28-2.45-12.88-9.55c-4.6-7.1-6.22-10.48-9.89-11.17s-9.01 1.42-11.21 7.88c-1.46 4.29-.73 15.77 7.49 22.82s10.97 5.68 12.19 4.36c.85-.92.69-2.35.69-2.35s1.66 2.2 5.19 4.46c2.2 1.41 5.32 3.02 7.15 4.55c2.74 2.3 4.02 3.97 5.63 4.7c1.47.67 3.04-.24 2.01-1.71c-1.03-1.47-3.18-3.38-5.14-5.09c-1.41-1.23-3.59-2.45-3.59-2.45s-2.58-.88-5.47-2.2c-4.7-2.15-7.84-5.09-8.13-5.19c-.25-.08.15 2.74-1.91 2.55c-2.06-.2-8.47-4.95-11.12-10.19c-2.3-4.55-3.07-10.96-1.44-14.32c1.98-4.1 5.41-4.16 7.17-3.9c2.3.34 3.72 3.18 5.39 5.63s7.87 13.17 16.7 14.84c9.6 1.81 11.51-3.87 10.14-4.51s-3.39 1.92-8.97.84z"/><path fill="#BC2A16" d="M38.91 62.4s-7.28 2.33-7.42 6.05c-.09 2.3 5.72 3.58 9.53 5.61c3.8 2.04 6.95 6.75 12.48 8.13c5.7 1.41 10.14-.77 12.53-1.39c2.39-.62 5.88-1.85 8.62-1.45c2.74.4 7.55 1.85 11.36 1.01c3.8-.84 6.1-2.87 7.44-5.42c1.07-2.03 1.24-4.14 1.24-4.14s3.98-1.51 4.24-4.12c.34-3.36-5.22-5.1-5.22-5.1l-54.8.82z"/><path fill="#DC4E20" d="M35.4 63.92c.07.47 2.84 1.28 5.67 1.21c2.83-.07 5.15.54 6.5 2.09c1.35 1.55 1.29 5.9 6.66 7.85c5.71 2.08 12.94-1.94 19.21-2.28s8.2 1.36 12.38-.66c4.18-2.02 4.04-6.27 5.19-7.82c1.15-1.55 2.83-2.7 2.83-2.7s-3.25-1.17-5.61-2.52c-2.36-1.35-5.22-3.53-7.47-4.52c-2.36-1.04-4.32-1.51-5.45-1.92c-.67-.25-4.41-2.6-8.39-2.46c-3.98.13-9.2 2.06-10.96 2.73c-1.75.67-6.61.74-9.84 3.71s-3.22 4.1-6.26 5.23c-2.17.81-4.46 2.06-4.46 2.06z"/><path fill="#BC2A16" d="M75.4 65c-.15 1.61 1.09 3.22 3.52 3.22c2.51 0 3.52-2.01 3.22-3.47c-.36-1.74-1.85-2.52-3.77-2.46c-1.56.05-2.83 1.15-2.97 2.71zm-3.92 3.27c-1.26.55-1.47 1.98-1.16 2.61c.35.7 1.16 1.16 2.46.95c.8-.12 2.01-1.24 1.66-2.41c-.4-1.35-1.78-1.67-2.96-1.15zM46.4 62.89c.23 2 2.26 3.37 5.33 2.01c3.3-1.46 2.81-4.12 1.71-5.48c-1.11-1.36-3.18-1.29-4.52-.7c-1.62.7-2.82 1.56-2.52 4.17z"/><path fill="#FBC11A" d="M60.18 22.72c-1.07 1.92-.56 2.92-.31 5.99s.85 8.75.85 8.75s-1.25-.12-1.18.91c.07 1.03 4.94 19.35 4.73 19.42c-.21.07-.99 7.62-.49 7.88c.01 0 .76.5 1.82-.77c1.16-1.4.73-7.45.25-10.54s-1.8-7.01-2.54-9.26c-.79-2.43-.68-3.94-.68-3.94s.42-.33.69-.54c.27-.21.56-.71.56-.71s-.2 2.6.8 6.47c.52 2.02 1.99 5.43 2.51 8.91c.73 4.93-.14 8.16.32 8.84c.79 1.16 2.21.16 2.81-2.55c.37-1.65-.27-8.57-1.54-11.88s-1.68-5.46-1.89-7.18c-.14-1.11.04-2.82.04-2.82s.44.66 1.29.51c.67-.12 1.11-.74 1.11-.74l-1.51-2.33l-1.7.26s-.89-1.39-1.08-2.63s-.73-6.1-.89-6.25c-.15-.15-2.47-4.78-2.47-4.78l-1.5-1.02zm-8.48 3.44s-.63-.75-1.88.14c-.76.54-.61 1.97-.49 3.74c.11 1.57.56 4.6 1.13 6.24c.84 2.42 3.11 4.8 5.03 4.74c1.92-.06-.59-2.46-1.79-5.92c-.93-2.69-1.18-6.1-1.3-6.37c-.12-.26-.7-2.57-.7-2.57z"/><path fill="#ADADAD" d="M42.79 31.18c.08.49.61 1.49 1.78 1.31c1.15-.17 21.02-4.82 21.02-4.82l-.86-2.16s-14.66 3.75-15.52 4.01c-.85.26-5.55 1.27-5.86 1.41c-.41.19-.56.25-.56.25zm.48 3.03s-.07.15.28.8c.14.27.47.72 1.51.57c.74-.11 22.83-3.53 22.83-3.53l-.19-1.74l-1-.89l-23.43 4.79z"/><path fill="#ADADAD" d="M44.36 37.71s-.05.84.78 1.12c1.15.39 19.77-1.25 22.96-1.7c3.19-.45 8.43-1.48 12.95-4.42s6.05-9.09 6.9-11.14c.85-2.04 3.93-6.24 8.13-7.42c4.19-1.19 13.66-3.49 17.78-4.27s6.05-1.41 6.94-2.49s.71-2.75.71-2.75s-13.03 2.08-13.4 2.26c-.37.19-15.44 4.83-15.44 4.83l-9.35 9.21L70.7 33.09s-7.35 2.15-7.5 2.19c-.14.03-18.84 2.43-18.84 2.43z"/><path fill="#D0D0D2" d="M117.54 3.26c1.42-.26 3.25-.44 3.73.31c.48.74.2 1.61.2 1.61s-13.21 3.4-16.87 4.27s-10.81 3.31-12.42 4.23c-1.61.92-3.88 3.09-5.36 5.27s-3.4 8.02-6.01 10.81s-8.76 5.1-13.55 6.01s-22.81 2.39-22.81 2.39s-.41-1.08-.01-1.26c.39-.17 3.75-.48 3.75-.48l17.87-2.48c.57-.09 1.35-.52 1.31-1.22c-.04-.7-.07-1.65-1.07-1.7c-1-.04-21.7 3.91-22.48 3.85c-.58-.04-.77-1.15-.27-1.29c.5-.14 21.82-4.39 22.17-4.66c.35-.26-.44-2.22-.96-2.35c-.52-.13-20.82 5-21.31 5.11c-.5.11-1.05-.88-.3-1.32c.74-.44 11.42-3.14 13.25-3.66s15.08-3.53 18.31-4.36c3.23-.83 6.28-2.53 7.71-4.01c1.44-1.48 5.27-5.06 7.58-6.28c2.31-1.22 10.04-4.66 16.52-6.32c5.77-1.46 9.6-2.2 11.02-2.47z"/><path fill="#FFA724" d="m67.05 22.44l-1.57.65l2.88 5.27l.61 6.85l-.09 3.22s2.4.57 2.4.26s.44-7.45.39-7.58c-.04-.13-1.13-6.19-1.31-6.32c-.17-.13-3.31-2.35-3.31-2.35z"/><path fill="#FCC01E" d="M51.45 31.18c.03.26.13 1.06 1.28 1.02c1.15-.03 1.18-.93 1.15-1.76c-.03-.83-.19-2.63-.19-2.95s-.06-1.09.45-1.09c.91 0 1.78 2.33 2.08 5.95c.36 4.35-.15 5.58-.99 5.92c-.54.22-.73.15-1.29.65c-.34.3-.08 1.56.81 2.01c.32.16.99.22 1.53.16c2.41-.27 2.82-5.07 2.59-8.27c-.38-5.23-1.07-6.17-2.11-7.57c-1.41-1.89-3.3-1.57-4.23-1.06c-.93.51-1.39 1.68-1.32 3.29c.09 1.64.24 3.7.24 3.7z"/><path fill="#FDDD9C" d="M53.2 24.25c-.13.58.45 1.09.9 1.47c.45.38 1.09 1.25 1.54 2.4c.26.67.67 3.46 2.05 3.17c1.38-.29.58-3.33.1-4.35c-.48-1.02-1.07-2.29-2.47-2.95c-1.04-.48-2.03-.15-2.12.26z"/><path fill="#FBC11A" d="M63.68 20.9s-1-.21-2.2.53c-.6.37-1.47 1.21-1.47 1.88c0 .67-.09.93.17 1.19c.26.26.72.6 1.18 1.4c.76 1.3 1.75 2.79 2.04 4.45c.51 2.99.47 5.38-.33 6.62s-1.11 1.16-1.11 1.16l2.75 1.25s.67-1.44.64-2.02s-.19-10.37-.19-10.37s1.33 1.63 1.72 3.64s.65 4.26.52 5.23c-.14 1.05-.43 2.37-.43 2.37l2.53 1.39s.4-.34.57-1.68c.11-.85.07-3.51-.2-5.97c-.18-1.67-.52-2.24-.52-2.24l-3.17-6.07l.64-1.63l1.28.99l1.45 2.68l.76 2.31s.9 2.79.9 5.35s-1.25 4.96-1.25 4.96l-1.47 1.86s-.32 1.6.99 1.89c1.31.29 2.4-1.41 3.14-3.27c.36-.9.99-2.67 1.04-4.67c.06-2.12-.48-4.5-1.07-6.72c-1.15-4.32-3.57-5.71-5.04-6.67c-1.48-.96-3.87.16-3.87.16z"/><path fill="#FDDD9C" d="M61.82 22.23s-1.03.28-1.34.85c-.46.85.49 1.49.93 1.98c.51.58 1.56 2.07 2.14 3.33c.67 1.44.88 3.85.9 5.15c.03 2.66-.86 4.23-.99 4.51c-.13.29.03.93.83 1.06c.8.13 1.67-1.33 2.11-3.52c.58-2.85-.21-6.11-.51-7.11c-.66-2.16-1.86-4.01-1.79-4.2c.06-.19 1.38.8 2.5 3.59c.72 1.8 1.14 3.25 1.27 3.65c.26.83.96 1.14 1.5.7c.85-.7.16-3.37-.81-5.65c-.72-1.69-2.09-3.44-2.05-3.53c.08-.16 1.75.57 2.69 2.16c.83 1.41 1.27 2.92 2.2 2.86c.93-.06.96-2.44-.43-4.45c-1.04-1.51-2.93-2.66-3.57-2.94c-.81-.36-1.81-.76-2.73-.35c-.46.2-.68.64-.68.64s-.7-.31-1.6.18c-.65.36-.57 1.09-.57 1.09zm-.44 16.24c-.16-.13-1.5-.51-1.82.32c-.32.83-.5 2.63-.03 4.9c.74 3.59 2.67 8.59 3.3 12.26c1.02 5.95.04 8.64.22 9.16c.29.8 1.31.77 1.63.03c.29-.67.51-2.21.54-4.58c.04-3.14-.38-6.34-1.09-8.61c-.7-2.27-1.89-6.32-2.43-8.71c-.61-2.68-.32-4.77-.32-4.77z"/></svg>
            <h1 className='font-Quicksand font-medium text-[1.5vh]'>Plates</h1>
           </div>
           <div className='flex flex-col gap-[1vh] shadow-lg items-center justify-center h-[13vh] w-[5vw] p-4 bg-white rounded-2xl hover:scale-105 transition-all cursor-pointer'>
            <svg xmlns="http://www.w3.org/2000/svg" className='size-[4vh]' viewBox="0 0 128 128"><path fill="#D46F1E" d="M120.83 78.78c-1 2.11-14.62 13.81-23.13 21.15c-8.51 7.34-18.19 13.79-18.19 13.79l-7.48-.44l1.32-62.35l46.21 15.11s1.38.93 1.53 3.13c.14 2.2.58 7.84-.26 9.61z"/><path fill="#E48216" d="M12.16 81.74c-.88.15-2.49.29-3.08 3.52c-.59 3.23.01 9.75 2.36 12.1c5.01 5.01 11.84 6.58 17.15 7.12c4.7.48 7.38.02 8.69.77c2.28 1.32 2.33 3.97 8.26 7.42c4.48 2.61 12.28 5.06 17.7 5.06c9.02 0 16.25-4.01 16.25-4.01l-.15-12.47l-5.28-28.61l-61.9 9.1z"/><path fill="#FADFB1" d="M18.18 92.45c9.89 3.77 22.15 2.35 22.15 2.35s2.79 6.16 12.62 9.39c9.83 3.23 21.86 1.61 29.64-3.81s21.13-17.9 25.67-21.71s10.86-9.54 11-11s-25.38-21.43-25.38-21.43s-80.31 36.58-82.05 37.71c-1.3.86.19 6.15 6.35 8.5z"/><path fill="#EC8B7A" d="M14.8 74.7s-5.13.29-5.13 3.81s1.91 6.46 6.75 8.66s15.26 4.99 23.47 6.9c8.32 1.93 20.98 9.1 28.46 9.83c7.3.72 13.06-5.58 16.43-8.66c3.37-3.08 20.1-15.99 23.91-19.81c3.81-3.81 11.88-12.47 11.88-12.47l-55.16-20.1L14.8 74.7z"/><path fill="#D45E51" d="M19.02 80.03s-2.02-.09-3.31-.37s-3.59-1.2-3.31-.18s2.44 3.16 6.62 5.06c4.51 2.04 10.35 2.43 10.27 2.24c0 0 2.96 2.35 6.28 3.41c4.05 1.29 8.28 2.5 11.49 2.78c3.05.27 3.6-.34 2.5-1.45s-4.05-2.94-4.05-2.94l-15.64-9.29l-10.85.74zm34.5 13.61c-.12 1.04 4.69 3.59 8.19 5.06s9.64 3.39 9.29-1.01c-.24-3.01-4.02-3.34-8.28-3.77c-4.48-.45-9.1-1.13-9.2-.28z"/><path fill="#B7D019" d="M12.67 57.58s-4.88 9.2-6.53 8.83s-2.39-1.47-3.13-.55s-.83 7.91 3.04 9.02s4.39-.24 6.69.77s5.25 2.69 5.25 2.69s-1.8 1.56-1.53 2.02s3.2 1.9 4.58 3.19s1.64 2.71 7.9 3.72s7.75.94 10.05.67s3.22-1.38 3.22-1.38s3.31 4.42 6.62 4.6s4.23-.92 5.34-.92s-.55 1.1 2.94 1.1s7.49.32 12.13 1.58c3.27.89 6.36 4.21 8.48 4.95s5.24.09 6.16-.92s.9-3.44 2.64-5.27s6.28-4.16 7.84-5.82s2.58-6.85 2.58-6.85s2.12 1.66 3.96 1.29s3.96-3.59 5.61-3.86s3.31-.74 4.88-2.3s.92-5.7 1.93-6.44s4.88 1.56 6.9 1.01s3.96-3.5 3.5-5.43c-.46-1.93-.92-2.21-.92-3.31s1.2-2.94-.28-4.78s-26.69-11.87-26.69-11.87L12.67 57.58z"/><path fill="#96A819" d="M21.04 72.85s-1.2 2.67-.74 3.22s7.27 6.16 8.92 6.35s13.62-.28 13.62-.28l-5.15-9.29H21.04zm43.24 1.66s-5.24 11.5-4.6 12.51s5.8 1.2 10.21 2.39s5.7 1.84 7.18 1.75s7.54-3.5 7.64-4.6s-4.69-6.62-4.69-6.62l-15.74-5.43zm30.45-3.5l-1.84 4.78s8.56.55 12.42-1.29s6.66-8.51 7.86-10.53c1.66-2.78 4-5.18 3.81-6.19s-6.06-4.9-6.06-4.9L94.73 71.01z"/><path fill="#DC0D2A" d="M95.47 72.02s-9.29 2.39-9.48 2.94s-8.65 9.84-8.65 9.84s6.26 3.04 13.25-.92c6.99-3.94 4.88-11.86 4.88-11.86zm22.72-27.41s5.06 1.38 4.23 7.64c-.97 7.32-13.34 6.99-13.34 6.99s-3.31-8.83-2.76-9.29s11.87-5.34 11.87-5.34zM44.78 72.76l-7.45 3.86s1.2 7.82 13.62 9.94s19.32-8.65 19.32-8.65l-25.49-5.15zm-22.36-8l-8.19.37s-.3 5.31 3.96 8.37c5.31 3.81 13.06 2.02 13.06 2.02l-8.83-10.76z"/><path fill="#FEDF64" d="m37.6 63.1l-15.64 3.96S29.87 77.55 33 77.82s18.58-2.94 18.58-2.94L37.6 63.1zm23.55 15.82s9.67 7.81 14.08 7.45c3.4-.28 7.7-6.24 13.32-9.28s14.11-5.27 15.57-6.36c2.89-2.16 6.9-13.98 8.83-16.74s6.72-9.11 6.81-10.12s-.83-4.23-.83-4.23L82.4 68.62l-21.25 10.3z"/><path fill="#D46F1E" d="M68.97 77.45c.46-.09 9.38.92 9.38.92s7.21-5.58 18.25-14.69s21.33-18.95 23.63-22.95c.66-1.14.95-8.16.98-9.92c.06-3.06-1.64-3.63-1.64-3.63l-49.6 35.55l-1 14.72z"/><path fill="#E38211" d="M78.45 64.66c0 .92.61 13.12-.09 13.71c-1.66 1.38-16.19 5.43-28.52-.18c-11.85-5.39-13.9-10.21-13.9-10.21s-15.02 1.71-23.92-3.31c-5.7-3.22-5.98-9.48-5.89-12.7s.46-6.26 1.75-7.64s18.13-15.45 21.72-18.3c3.59-2.85 19.59-14.63 22.08-15.09s23.83 3.68 31 5.34s28.06 7.08 31.65 8.46s5.8 2.21 5.89 3.22s-1.01 2.58-2.3 3.68c-1.29 1.1-28.98-.37-29.71 4.69s-9.76 28.33-9.76 28.33z"/><path fill="#FADFB1" d="M52.14 13.28c-2.79.49-18.52 12.89-22.96 16.46S13.26 42.63 11.31 44.36c-1.95 1.73-4.12 8.12 5.41 11.8c9.53 3.68 22.85 1.95 22.85 1.95s4.77 9.31 16.14 10.51s19.17.76 24.15-3.25c4.98-4.01 21.55-18.09 25.34-21.55c3.79-3.47 13.51-12.12 13.32-13.32c-.54-3.47-27.18-9.31-38.55-11.91c-10.25-2.35-25.34-5.74-27.83-5.31z"/></svg>
            <h1 className='font-Quicksand font-medium text-[1.5vh]'>Sandwiches</h1>
           </div>
           <div className='flex flex-col gap-[1vh] shadow-lg items-center justify-center h-[13vh] w-[5vw] p-4 bg-white rounded-2xl hover:scale-105 transition-all cursor-pointer'>
            <img src={Burger} alt="" className='size-[4vh]'/>
            <h1 className='font-Quicksand font-medium text-[1.5vh]'>Burgers</h1>
           </div>
           <div className='flex flex-col gap-[1vh] shadow-lg items-center justify-center h-[13vh] w-[5vw] p-4 bg-white rounded-2xl hover:scale-105 transition-all cursor-pointer'>
            <img src={Bucket} alt="" className='size-[4vh]'/>
            <h1 className='font-Quicksand font-medium text-[1.5vh]'>Broast</h1>
           </div>
           <div className='flex flex-col gap-[1vh] shadow-lg items-center justify-center h-[13vh] w-[5vw] p-4 bg-white rounded-2xl hover:scale-105 transition-all cursor-pointer'>
            <img src={TacosIcon} alt="" className='size-[4vh]'/>
            <h1 className='font-Quicksand font-medium text-[1.5vh]'>Tacos</h1>
           </div>

           <div className='flex flex-col gap-[1vh] shadow-lg items-center justify-center h-[13vh] w-[5vw] p-4 bg-white rounded-2xl hover:scale-105 transition-all cursor-pointer'>
            <img src={Poutine} alt="" className='size-[4vh]'/>
            <h1 className='font-Quicksand font-medium text-[1.5vh]'>Poutines</h1>
           </div>
           <div className='flex flex-col gap-[1vh] shadow-lg items-center justify-center h-[13vh] w-[5vw] p-4 bg-white rounded-2xl hover:scale-105 transition-all cursor-pointer'>
            <img src={Pasta} alt="" className='size-[4vh]'/>
            <h1 className='font-Quicksand font-medium text-[1.5vh]'>Pasta</h1>
           </div>
           <div className='flex flex-col gap-[1vh] shadow-lg items-center justify-center h-[13vh] w-[5vw] p-4 bg-white rounded-2xl hover:scale-105 transition-all cursor-pointer'>
            <img src={Nachos} alt="" className='size-[4vh]'/>
            <h1 className='font-Quicksand font-medium text-[1.5vh]'>Nachos</h1>
           </div>
           <div className='flex flex-col gap-[1vh] shadow-lg items-center justify-center h-[13vh] w-[5vw] p-4 bg-white rounded-2xl hover:scale-105 transition-all cursor-pointer'>
            <img src={Frites} alt="" className='size-[4vh]'/>
            <h1 className='font-Quicksand font-medium text-[1.5vh]'>Frites</h1>
           </div>          
           <div className='flex flex-col gap-[1vh] shadow-lg items-center justify-center h-[13vh] w-[5vw] p-4 bg-white rounded-2xl hover:scale-105 transition-all cursor-pointer'>
            <img src={Salade} alt="" className='size-[4vh]'/>
            <h1 className='font-Quicksand font-medium text-[1.5vh]'>Salades</h1>
           </div>
           <div className='flex flex-col gap-[1vh] shadow-lg items-center justify-center h-[13vh] w-[5vw] p-4 bg-white rounded-2xl hover:scale-105 transition-all cursor-pointer'>
            <img src={Dessert} alt="" className='size-[4vh]'/>
            <h1 className='font-Quicksand font-medium text-[1.5vh]'>Desserts</h1>
           </div>
          </div>
          <div className='h-[63vh] max-w-[60vw] ml-[3vw] rounded-2xl flex flex-col'>
           <section id='pizzas' className=' h-full w-full flex flex-col '>
            <div className='h-[10vh] max-w-[55vw] flex justify-between items-center'>
               <h1 className='font-Quicksand text-2xl'>Pizzas Menu</h1>
               <h2 className='font-Quicksand text-sm text-neutral-400'>Resultat:10</h2>
            </div>
            <div className='h-full max-w-[60vw] p-4 gap-[1vh] grid grid-cols-2'>
             <div className='h-[15vh] w-[25vw] bg-white shadow-xl rounded-2xl items-center justify-start flex'>
              <img src={Pizza} alt="" className='size-[13vh] rounded-2xl ml-[.5vw] '/>
              <div className='flex flex-col ml-[1vw]'>
                <h1 className='font-Quicksand text-md'>Pizzas Marguerite</h1>
                <h2 className='font-Quicksand text-sm text-neutral-400'>Tomato, Mozzarella, Basil</h2>
                <h3 className='font-Quicksand text-lg font-bold mt-[1vh]'>400 DA</h3>
              </div>
             </div>
            </div>
           </section>
          <section id='Plates' className='hidden h-full w-full flex flex-col '>
            <div className='h-[10vh] max-w-[55vw] flex justify-between items-center'>
               <h1 className='font-Quicksand text-2xl'>Menu des Plates</h1>
               <h2 className='font-Quicksand text-sm text-neutral-400'>Resultat:10</h2>
            </div>
            <div className='h-full max-w-[60vw] p-4 gap-[1vh] grid grid-cols-2'>
             <div className='h-[15vh] w-[25vw] bg-white shadow-xl rounded-2xl items-center justify-start flex'>
              <img src={Plates} alt="" className='size-[13vh] rounded-2xl ml-[.5vw] '/>
              <div className='flex flex-col ml-[1vw]'>
                <h1 className='font-Quicksand text-md'>Pizzas Marguerite</h1>
                <h2 className='font-Quicksand text-sm text-neutral-400'>Tomato, Mozzarella, Basil</h2>
                <h3 className='font-Quicksand text-lg font-bold mt-[1vh]'>400 DA</h3>
              </div>
             </div>
            </div>
           </section>
            <section id='Nachos' className='hidden h-full w-full flex flex-col '>
            <div className='h-[10vh] max-w-[55vw] flex justify-between items-center'>
               <h1 className='font-Quicksand text-2xl'>Menu des Nachos</h1>
               <h2 className='font-Quicksand text-sm text-neutral-400'>Resultat:10</h2>
            </div>
            <div className='h-full max-w-[60vw] p-4 gap-[1vh] grid grid-cols-2'>
             <div className='h-[15vh] w-[25vw] bg-white shadow-xl rounded-2xl items-center justify-start flex'>
              <img src={Nachos} alt="" className='size-[13vh] rounded-2xl ml-[.5vw] '/>
              <div className='flex flex-col ml-[1vw]'>
                <h1 className='font-Quicksand text-md'>Pizzas Marguerite</h1>
                <h2 className='font-Quicksand text-sm text-neutral-400'>Tomato, Mozzarella, Basil</h2>
                <h3 className='font-Quicksand text-lg font-bold mt-[1vh]'>400 DA</h3>
              </div>
             </div>
            </div>
           </section>
           <section id='Pasta' className='hidden h-full w-full flex flex-col '>
            <div className='h-[10vh] max-w-[55vw] flex justify-between items-center'>
               <h1 className='font-Quicksand text-2xl'>Menu des Pastas</h1>
               <h2 className='font-Quicksand text-sm text-neutral-400'>Resultat:10</h2>
            </div>
            <div className='h-full max-w-[60vw] p-4 gap-[1vh] grid grid-cols-2'>
             <div className='h-[15vh] w-[25vw] bg-white shadow-xl rounded-2xl items-center justify-start flex'>
              <img src={Pasta} alt="" className='size-[13vh] rounded-2xl ml-[.5vw] '/>
              <div className='flex flex-col ml-[1vw]'>
                <h1 className='font-Quicksand text-md'>Pizzas Marguerite</h1>
                <h2 className='font-Quicksand text-sm text-neutral-400'>Tomato, Mozzarella, Basil</h2>
                <h3 className='font-Quicksand text-lg font-bold mt-[1vh]'>400 DA</h3>
              </div>
             </div>
            </div>
           </section>
           <section id='Frites' className='hidden h-full w-full flex flex-col '>
            <div className='h-[10vh] max-w-[55vw] flex justify-between items-center'>
               <h1 className='font-Quicksand text-2xl'>Menu des Frites</h1>
               <h2 className='font-Quicksand text-sm text-neutral-400'>Resultat:10</h2>
            </div>
            <div className='h-full max-w-[60vw] p-4 gap-[1vh] grid grid-cols-2'>
             <div className='h-[15vh] w-[25vw] bg-white shadow-xl rounded-2xl items-center justify-start flex'>
              <img src={Frites} alt="" className='size-[13vh] rounded-2xl ml-[.5vw] '/>
              <div className='flex flex-col ml-[1vw]'>
                <h1 className='font-Quicksand text-md'>Pizzas Marguerite</h1>
                <h2 className='font-Quicksand text-sm text-neutral-400'>Tomato, Mozzarella, Basil</h2>
                <h3 className='font-Quicksand text-lg font-bold mt-[1vh]'>400 DA</h3>
              </div>
             </div>
            </div>
           </section>
           <section id='Dessert' className='hidden h-full w-full flex flex-col '>
            <div className='h-[10vh] max-w-[55vw] flex justify-between items-center'>
               <h1 className='font-Quicksand text-2xl'>Menu des Desserts</h1>
               <h2 className='font-Quicksand text-sm text-neutral-400'>Resultat:10</h2>
            </div>
            <div className='h-full max-w-[60vw] p-4 gap-[1vh] grid grid-cols-2'>
             <div className='h-[15vh] w-[25vw] bg-white shadow-xl rounded-2xl items-center justify-start flex'>
              <img src={Dessert} alt="" className='size-[13vh] rounded-2xl ml-[.5vw] '/>
              <div className='flex flex-col ml-[1vw]'>
                <h1 className='font-Quicksand text-md'>Pizzas Marguerite</h1>
                <h2 className='font-Quicksand text-sm text-neutral-400'>Tomato, Mozzarella, Basil</h2>
                <h3 className='font-Quicksand text-lg font-bold mt-[1vh]'>400 DA</h3>
              </div>
             </div>
            </div>
           </section>
           <section id='Burger' className='hidden h-full w-full flex flex-col '>
            <div className='h-[10vh] max-w-[55vw] flex justify-between items-center'>
               <h1 className='font-Quicksand text-2xl'>Menu des Burger</h1>
               <h2 className='font-Quicksand text-sm text-neutral-400'>Resultat:10</h2>
            </div>
            <div className='h-full max-w-[60vw] p-4 gap-[1vh] grid grid-cols-2'>
             <div className='h-[15vh] w-[25vw] bg-white shadow-xl rounded-2xl items-center justify-start flex'>
              <img src={Burger} alt="" className='size-[13vh] rounded-2xl ml-[.5vw] '/>
              <div className='flex flex-col ml-[1vw]'>
                <h1 className='font-Quicksand text-md'>Pizzas Marguerite</h1>
                <h2 className='font-Quicksand text-sm text-neutral-400'>Tomato, Mozzarella, Basil</h2>
                <h3 className='font-Quicksand text-lg font-bold mt-[1vh]'>400 DA</h3>
              </div>
             </div>
            </div>
           </section>
           <section id='Tacos' className='hidden h-full w-full flex flex-col '>
            <div className='h-[10vh] max-w-[55vw] flex justify-between items-center'>
               <h1 className='font-Quicksand text-2xl'>Menu des Tacos</h1>
               <h2 className='font-Quicksand text-sm text-neutral-400'>Resultat:10</h2>
            </div>
            <div className='h-full max-w-[60vw] p-4 gap-[1vh] grid grid-cols-2'>
             <div className='h-[15vh] w-[25vw] bg-white shadow-xl rounded-2xl items-center justify-start flex'>
              <img src={TacosIcon} alt="" className='size-[13vh] rounded-2xl ml-[.5vw] '/>
              <div className='flex flex-col ml-[1vw]'>
                <h1 className='font-Quicksand text-md'>Pizzas Marguerite</h1>
                <h2 className='font-Quicksand text-sm text-neutral-400'>Tomato, Mozzarella, Basil</h2>
                <h3 className='font-Quicksand text-lg font-bold mt-[1vh]'>400 DA</h3>
              </div>
             </div>
            </div>
           </section>
           <section id='Poutine' className='hidden h-full w-full flex flex-col '>
            <div className='h-[10vh] max-w-[55vw] flex justify-between items-center'>
               <h1 className='font-Quicksand text-2xl'>Menu des Poutines</h1>
               <h2 className='font-Quicksand text-sm text-neutral-400'>Resultat:10</h2>
            </div>
            <div className='h-full max-w-[60vw] p-4 gap-[1vh] grid grid-cols-2'>
             <div className='h-[15vh] w-[25vw] bg-white shadow-xl rounded-2xl items-center justify-start flex'>
              <img src={Poutine} alt="" className='size-[13vh] rounded-2xl ml-[.5vw] '/>
              <div className='flex flex-col ml-[1vw]'>
                <h1 className='font-Quicksand text-md'>Pizzas Marguerite</h1>
                <h2 className='font-Quicksand text-sm text-neutral-400'>Tomato, Mozzarella, Basil</h2>
                <h3 className='font-Quicksand text-lg font-bold mt-[1vh]'>400 DA</h3>
              </div>
             </div>
            </div>
           </section>
           <section id='Salades' className='hidden h-full w-full flex flex-col '>
            <div className='h-[10vh] max-w-[55vw] flex justify-between items-center'>
               <h1 className='font-Quicksand text-2xl'>Menu des Salades</h1>
               <h2 className='font-Quicksand text-sm text-neutral-400'>Resultat:10</h2>
            </div>
            <div className='h-full max-w-[60vw] p-4 gap-[1vh] grid grid-cols-2'>
             <div className='h-[15vh] w-[25vw] bg-white shadow-xl rounded-2xl items-center justify-start flex'>
              <img src={Salade} alt="" className='size-[13vh] rounded-2xl ml-[.5vw] '/>
              <div className='flex flex-col ml-[1vw]'>
                <h1 className='font-Quicksand text-md'>Pizzas Marguerite</h1>
                <h2 className='font-Quicksand text-sm text-neutral-400'>Tomato, Mozzarella, Basil</h2>
                <h3 className='font-Quicksand text-lg font-bold mt-[1vh]'>400 DA</h3>
              </div>
             </div>
            </div>
           </section>
            <section id='Broast' className='hidden h-full w-full flex flex-col '>
            <div className='h-[10vh] max-w-[55vw] flex justify-between items-center'>
               <h1 className='font-Quicksand text-2xl'>Menu des Broast</h1>
               <h2 className='font-Quicksand text-sm text-neutral-400'>Resultat:10</h2>
            </div>
            <div className='h-full max-w-[60vw] p-4 gap-[1vh] grid grid-cols-2'>
             <div className='h-[15vh] w-[25vw] bg-white shadow-xl rounded-2xl items-center justify-start flex'>
              <img src={Bucket} alt="" className='size-[13vh] rounded-2xl ml-[.5vw] '/>
              <div className='flex flex-col ml-[1vw]'>
                <h1 className='font-Quicksand text-md'>Pizzas Marguerite</h1>
                <h2 className='font-Quicksand text-sm text-neutral-400'>Tomato, Mozzarella, Basil</h2>
                <h3 className='font-Quicksand text-lg font-bold mt-[1vh]'>400 DA</h3>
              </div>
             </div>
            </div>
           </section>
           <section id='sandwiches' className='hidden h-full w-full flex flex-col overflow-y-scroll scrollbar-hide '>
            <div className='h-[10vh] max-w-[55vw] flex justify-between items-center'>
               <h1 className='font-Quicksand text-2xl'>Sandwiches Menu</h1>
               <h2 className='font-Quicksand text-sm text-neutral-400'>Resultat:6</h2>
            </div>
            <h1 className='font-Quicksand text-md text-neutral-400'>Tikka</h1>
            <div className='h-fit max-w-[60vw] p-4 gap-[1vh] grid grid-cols-2'>
              
             <div className='h-[15vh] w-[25vw] bg-white shadow-lg rounded-2xl items-center justify-start flex'>
              <svg xmlns="http://www.w3.org/2000/svg" className='size-[14vh]' viewBox="0 0 128 128"><path fill="#D46F1E" d="M120.83 78.78c-1 2.11-14.62 13.81-23.13 21.15c-8.51 7.34-18.19 13.79-18.19 13.79l-7.48-.44l1.32-62.35l46.21 15.11s1.38.93 1.53 3.13c.14 2.2.58 7.84-.26 9.61z"/><path fill="#E48216" d="M12.16 81.74c-.88.15-2.49.29-3.08 3.52c-.59 3.23.01 9.75 2.36 12.1c5.01 5.01 11.84 6.58 17.15 7.12c4.7.48 7.38.02 8.69.77c2.28 1.32 2.33 3.97 8.26 7.42c4.48 2.61 12.28 5.06 17.7 5.06c9.02 0 16.25-4.01 16.25-4.01l-.15-12.47l-5.28-28.61l-61.9 9.1z"/><path fill="#FADFB1" d="M18.18 92.45c9.89 3.77 22.15 2.35 22.15 2.35s2.79 6.16 12.62 9.39c9.83 3.23 21.86 1.61 29.64-3.81s21.13-17.9 25.67-21.71s10.86-9.54 11-11s-25.38-21.43-25.38-21.43s-80.31 36.58-82.05 37.71c-1.3.86.19 6.15 6.35 8.5z"/><path fill="#EC8B7A" d="M14.8 74.7s-5.13.29-5.13 3.81s1.91 6.46 6.75 8.66s15.26 4.99 23.47 6.9c8.32 1.93 20.98 9.1 28.46 9.83c7.3.72 13.06-5.58 16.43-8.66c3.37-3.08 20.1-15.99 23.91-19.81c3.81-3.81 11.88-12.47 11.88-12.47l-55.16-20.1L14.8 74.7z"/><path fill="#D45E51" d="M19.02 80.03s-2.02-.09-3.31-.37s-3.59-1.2-3.31-.18s2.44 3.16 6.62 5.06c4.51 2.04 10.35 2.43 10.27 2.24c0 0 2.96 2.35 6.28 3.41c4.05 1.29 8.28 2.5 11.49 2.78c3.05.27 3.6-.34 2.5-1.45s-4.05-2.94-4.05-2.94l-15.64-9.29l-10.85.74zm34.5 13.61c-.12 1.04 4.69 3.59 8.19 5.06s9.64 3.39 9.29-1.01c-.24-3.01-4.02-3.34-8.28-3.77c-4.48-.45-9.1-1.13-9.2-.28z"/><path fill="#B7D019" d="M12.67 57.58s-4.88 9.2-6.53 8.83s-2.39-1.47-3.13-.55s-.83 7.91 3.04 9.02s4.39-.24 6.69.77s5.25 2.69 5.25 2.69s-1.8 1.56-1.53 2.02s3.2 1.9 4.58 3.19s1.64 2.71 7.9 3.72s7.75.94 10.05.67s3.22-1.38 3.22-1.38s3.31 4.42 6.62 4.6s4.23-.92 5.34-.92s-.55 1.1 2.94 1.1s7.49.32 12.13 1.58c3.27.89 6.36 4.21 8.48 4.95s5.24.09 6.16-.92s.9-3.44 2.64-5.27s6.28-4.16 7.84-5.82s2.58-6.85 2.58-6.85s2.12 1.66 3.96 1.29s3.96-3.59 5.61-3.86s3.31-.74 4.88-2.3s.92-5.7 1.93-6.44s4.88 1.56 6.9 1.01s3.96-3.5 3.5-5.43c-.46-1.93-.92-2.21-.92-3.31s1.2-2.94-.28-4.78s-26.69-11.87-26.69-11.87L12.67 57.58z"/><path fill="#96A819" d="M21.04 72.85s-1.2 2.67-.74 3.22s7.27 6.16 8.92 6.35s13.62-.28 13.62-.28l-5.15-9.29H21.04zm43.24 1.66s-5.24 11.5-4.6 12.51s5.8 1.2 10.21 2.39s5.7 1.84 7.18 1.75s7.54-3.5 7.64-4.6s-4.69-6.62-4.69-6.62l-15.74-5.43zm30.45-3.5l-1.84 4.78s8.56.55 12.42-1.29s6.66-8.51 7.86-10.53c1.66-2.78 4-5.18 3.81-6.19s-6.06-4.9-6.06-4.9L94.73 71.01z"/><path fill="#DC0D2A" d="M95.47 72.02s-9.29 2.39-9.48 2.94s-8.65 9.84-8.65 9.84s6.26 3.04 13.25-.92c6.99-3.94 4.88-11.86 4.88-11.86zm22.72-27.41s5.06 1.38 4.23 7.64c-.97 7.32-13.34 6.99-13.34 6.99s-3.31-8.83-2.76-9.29s11.87-5.34 11.87-5.34zM44.78 72.76l-7.45 3.86s1.2 7.82 13.62 9.94s19.32-8.65 19.32-8.65l-25.49-5.15zm-22.36-8l-8.19.37s-.3 5.31 3.96 8.37c5.31 3.81 13.06 2.02 13.06 2.02l-8.83-10.76z"/><path fill="#FEDF64" d="m37.6 63.1l-15.64 3.96S29.87 77.55 33 77.82s18.58-2.94 18.58-2.94L37.6 63.1zm23.55 15.82s9.67 7.81 14.08 7.45c3.4-.28 7.7-6.24 13.32-9.28s14.11-5.27 15.57-6.36c2.89-2.16 6.9-13.98 8.83-16.74s6.72-9.11 6.81-10.12s-.83-4.23-.83-4.23L82.4 68.62l-21.25 10.3z"/><path fill="#D46F1E" d="M68.97 77.45c.46-.09 9.38.92 9.38.92s7.21-5.58 18.25-14.69s21.33-18.95 23.63-22.95c.66-1.14.95-8.16.98-9.92c.06-3.06-1.64-3.63-1.64-3.63l-49.6 35.55l-1 14.72z"/><path fill="#E38211" d="M78.45 64.66c0 .92.61 13.12-.09 13.71c-1.66 1.38-16.19 5.43-28.52-.18c-11.85-5.39-13.9-10.21-13.9-10.21s-15.02 1.71-23.92-3.31c-5.7-3.22-5.98-9.48-5.89-12.7s.46-6.26 1.75-7.64s18.13-15.45 21.72-18.3c3.59-2.85 19.59-14.63 22.08-15.09s23.83 3.68 31 5.34s28.06 7.08 31.65 8.46s5.8 2.21 5.89 3.22s-1.01 2.58-2.3 3.68c-1.29 1.1-28.98-.37-29.71 4.69s-9.76 28.33-9.76 28.33z"/><path fill="#FADFB1" d="M52.14 13.28c-2.79.49-18.52 12.89-22.96 16.46S13.26 42.63 11.31 44.36c-1.95 1.73-4.12 8.12 5.41 11.8c9.53 3.68 22.85 1.95 22.85 1.95s4.77 9.31 16.14 10.51s19.17.76 24.15-3.25c4.98-4.01 21.55-18.09 25.34-21.55c3.79-3.47 13.51-12.12 13.32-13.32c-.54-3.47-27.18-9.31-38.55-11.91c-10.25-2.35-25.34-5.74-27.83-5.31z"/></svg>
              <div className='flex flex-col ml-[1vw]'>
                <h1 className='font-Quicksand text-md'>Tikka</h1>
                <h2 className='font-Quicksand text-sm text-neutral-400'>Tomato, Mozzarella, Basil</h2>
                <h3 className='font-Quicksand text-lg font-bold mt-[1vh]'>400 DA</h3>
              </div>
             </div>
            </div>
            <h1 className='font-Quicksand text-md text-neutral-400'>Avido</h1>
            <div className='min-h-fit max-w-[60vw] p-4 gap-[1vh] grid grid-cols-2'>
              
             <div className='h-[15vh] w-[25vw] bg-white shadow-lg rounded-2xl items-center justify-start flex'>
              <svg xmlns="http://www.w3.org/2000/svg" className='size-[14vh]' viewBox="0 0 128 128"><path fill="#D46F1E" d="M120.83 78.78c-1 2.11-14.62 13.81-23.13 21.15c-8.51 7.34-18.19 13.79-18.19 13.79l-7.48-.44l1.32-62.35l46.21 15.11s1.38.93 1.53 3.13c.14 2.2.58 7.84-.26 9.61z"/><path fill="#E48216" d="M12.16 81.74c-.88.15-2.49.29-3.08 3.52c-.59 3.23.01 9.75 2.36 12.1c5.01 5.01 11.84 6.58 17.15 7.12c4.7.48 7.38.02 8.69.77c2.28 1.32 2.33 3.97 8.26 7.42c4.48 2.61 12.28 5.06 17.7 5.06c9.02 0 16.25-4.01 16.25-4.01l-.15-12.47l-5.28-28.61l-61.9 9.1z"/><path fill="#FADFB1" d="M18.18 92.45c9.89 3.77 22.15 2.35 22.15 2.35s2.79 6.16 12.62 9.39c9.83 3.23 21.86 1.61 29.64-3.81s21.13-17.9 25.67-21.71s10.86-9.54 11-11s-25.38-21.43-25.38-21.43s-80.31 36.58-82.05 37.71c-1.3.86.19 6.15 6.35 8.5z"/><path fill="#EC8B7A" d="M14.8 74.7s-5.13.29-5.13 3.81s1.91 6.46 6.75 8.66s15.26 4.99 23.47 6.9c8.32 1.93 20.98 9.1 28.46 9.83c7.3.72 13.06-5.58 16.43-8.66c3.37-3.08 20.1-15.99 23.91-19.81c3.81-3.81 11.88-12.47 11.88-12.47l-55.16-20.1L14.8 74.7z"/><path fill="#D45E51" d="M19.02 80.03s-2.02-.09-3.31-.37s-3.59-1.2-3.31-.18s2.44 3.16 6.62 5.06c4.51 2.04 10.35 2.43 10.27 2.24c0 0 2.96 2.35 6.28 3.41c4.05 1.29 8.28 2.5 11.49 2.78c3.05.27 3.6-.34 2.5-1.45s-4.05-2.94-4.05-2.94l-15.64-9.29l-10.85.74zm34.5 13.61c-.12 1.04 4.69 3.59 8.19 5.06s9.64 3.39 9.29-1.01c-.24-3.01-4.02-3.34-8.28-3.77c-4.48-.45-9.1-1.13-9.2-.28z"/><path fill="#B7D019" d="M12.67 57.58s-4.88 9.2-6.53 8.83s-2.39-1.47-3.13-.55s-.83 7.91 3.04 9.02s4.39-.24 6.69.77s5.25 2.69 5.25 2.69s-1.8 1.56-1.53 2.02s3.2 1.9 4.58 3.19s1.64 2.71 7.9 3.72s7.75.94 10.05.67s3.22-1.38 3.22-1.38s3.31 4.42 6.62 4.6s4.23-.92 5.34-.92s-.55 1.1 2.94 1.1s7.49.32 12.13 1.58c3.27.89 6.36 4.21 8.48 4.95s5.24.09 6.16-.92s.9-3.44 2.64-5.27s6.28-4.16 7.84-5.82s2.58-6.85 2.58-6.85s2.12 1.66 3.96 1.29s3.96-3.59 5.61-3.86s3.31-.74 4.88-2.3s.92-5.7 1.93-6.44s4.88 1.56 6.9 1.01s3.96-3.5 3.5-5.43c-.46-1.93-.92-2.21-.92-3.31s1.2-2.94-.28-4.78s-26.69-11.87-26.69-11.87L12.67 57.58z"/><path fill="#96A819" d="M21.04 72.85s-1.2 2.67-.74 3.22s7.27 6.16 8.92 6.35s13.62-.28 13.62-.28l-5.15-9.29H21.04zm43.24 1.66s-5.24 11.5-4.6 12.51s5.8 1.2 10.21 2.39s5.7 1.84 7.18 1.75s7.54-3.5 7.64-4.6s-4.69-6.62-4.69-6.62l-15.74-5.43zm30.45-3.5l-1.84 4.78s8.56.55 12.42-1.29s6.66-8.51 7.86-10.53c1.66-2.78 4-5.18 3.81-6.19s-6.06-4.9-6.06-4.9L94.73 71.01z"/><path fill="#DC0D2A" d="M95.47 72.02s-9.29 2.39-9.48 2.94s-8.65 9.84-8.65 9.84s6.26 3.04 13.25-.92c6.99-3.94 4.88-11.86 4.88-11.86zm22.72-27.41s5.06 1.38 4.23 7.64c-.97 7.32-13.34 6.99-13.34 6.99s-3.31-8.83-2.76-9.29s11.87-5.34 11.87-5.34zM44.78 72.76l-7.45 3.86s1.2 7.82 13.62 9.94s19.32-8.65 19.32-8.65l-25.49-5.15zm-22.36-8l-8.19.37s-.3 5.31 3.96 8.37c5.31 3.81 13.06 2.02 13.06 2.02l-8.83-10.76z"/><path fill="#FEDF64" d="m37.6 63.1l-15.64 3.96S29.87 77.55 33 77.82s18.58-2.94 18.58-2.94L37.6 63.1zm23.55 15.82s9.67 7.81 14.08 7.45c3.4-.28 7.7-6.24 13.32-9.28s14.11-5.27 15.57-6.36c2.89-2.16 6.9-13.98 8.83-16.74s6.72-9.11 6.81-10.12s-.83-4.23-.83-4.23L82.4 68.62l-21.25 10.3z"/><path fill="#D46F1E" d="M68.97 77.45c.46-.09 9.38.92 9.38.92s7.21-5.58 18.25-14.69s21.33-18.95 23.63-22.95c.66-1.14.95-8.16.98-9.92c.06-3.06-1.64-3.63-1.64-3.63l-49.6 35.55l-1 14.72z"/><path fill="#E38211" d="M78.45 64.66c0 .92.61 13.12-.09 13.71c-1.66 1.38-16.19 5.43-28.52-.18c-11.85-5.39-13.9-10.21-13.9-10.21s-15.02 1.71-23.92-3.31c-5.7-3.22-5.98-9.48-5.89-12.7s.46-6.26 1.75-7.64s18.13-15.45 21.72-18.3c3.59-2.85 19.59-14.63 22.08-15.09s23.83 3.68 31 5.34s28.06 7.08 31.65 8.46s5.8 2.21 5.89 3.22s-1.01 2.58-2.3 3.68c-1.29 1.1-28.98-.37-29.71 4.69s-9.76 28.33-9.76 28.33z"/><path fill="#FADFB1" d="M52.14 13.28c-2.79.49-18.52 12.89-22.96 16.46S13.26 42.63 11.31 44.36c-1.95 1.73-4.12 8.12 5.41 11.8c9.53 3.68 22.85 1.95 22.85 1.95s4.77 9.31 16.14 10.51s19.17.76 24.15-3.25c4.98-4.01 21.55-18.09 25.34-21.55c3.79-3.47 13.51-12.12 13.32-13.32c-.54-3.47-27.18-9.31-38.55-11.91c-10.25-2.35-25.34-5.74-27.83-5.31z"/></svg>
              <div className='flex flex-col ml-[1vw]'>
                <h1 className='font-Quicksand text-md'>Tikka</h1>
                <h2 className='font-Quicksand text-sm text-neutral-400'>Tomato, Mozzarella, Basil</h2>
                <h3 className='font-Quicksand text-lg font-bold mt-[1vh]'>400 DA</h3>
              </div>
             </div>
             
            </div>
            <h1 className='font-Quicksand text-md text-neutral-400'>Special</h1>
            <div className='h-fit max-w-[60vw]  p-4 gap-[1vh] grid grid-cols-2'>
              
             <div className='h-[15vh] w-[25vw] bg-white shadow-xl rounded-2xl items-center justify-start flex'>
             <svg xmlns="http://www.w3.org/2000/svg" className='size-[14vh]' viewBox="0 0 128 128"><path fill="#D46F1E" d="M120.83 78.78c-1 2.11-14.62 13.81-23.13 21.15c-8.51 7.34-18.19 13.79-18.19 13.79l-7.48-.44l1.32-62.35l46.21 15.11s1.38.93 1.53 3.13c.14 2.2.58 7.84-.26 9.61z"/><path fill="#E48216" d="M12.16 81.74c-.88.15-2.49.29-3.08 3.52c-.59 3.23.01 9.75 2.36 12.1c5.01 5.01 11.84 6.58 17.15 7.12c4.7.48 7.38.02 8.69.77c2.28 1.32 2.33 3.97 8.26 7.42c4.48 2.61 12.28 5.06 17.7 5.06c9.02 0 16.25-4.01 16.25-4.01l-.15-12.47l-5.28-28.61l-61.9 9.1z"/><path fill="#FADFB1" d="M18.18 92.45c9.89 3.77 22.15 2.35 22.15 2.35s2.79 6.16 12.62 9.39c9.83 3.23 21.86 1.61 29.64-3.81s21.13-17.9 25.67-21.71s10.86-9.54 11-11s-25.38-21.43-25.38-21.43s-80.31 36.58-82.05 37.71c-1.3.86.19 6.15 6.35 8.5z"/><path fill="#EC8B7A" d="M14.8 74.7s-5.13.29-5.13 3.81s1.91 6.46 6.75 8.66s15.26 4.99 23.47 6.9c8.32 1.93 20.98 9.1 28.46 9.83c7.3.72 13.06-5.58 16.43-8.66c3.37-3.08 20.1-15.99 23.91-19.81c3.81-3.81 11.88-12.47 11.88-12.47l-55.16-20.1L14.8 74.7z"/><path fill="#D45E51" d="M19.02 80.03s-2.02-.09-3.31-.37s-3.59-1.2-3.31-.18s2.44 3.16 6.62 5.06c4.51 2.04 10.35 2.43 10.27 2.24c0 0 2.96 2.35 6.28 3.41c4.05 1.29 8.28 2.5 11.49 2.78c3.05.27 3.6-.34 2.5-1.45s-4.05-2.94-4.05-2.94l-15.64-9.29l-10.85.74zm34.5 13.61c-.12 1.04 4.69 3.59 8.19 5.06s9.64 3.39 9.29-1.01c-.24-3.01-4.02-3.34-8.28-3.77c-4.48-.45-9.1-1.13-9.2-.28z"/><path fill="#B7D019" d="M12.67 57.58s-4.88 9.2-6.53 8.83s-2.39-1.47-3.13-.55s-.83 7.91 3.04 9.02s4.39-.24 6.69.77s5.25 2.69 5.25 2.69s-1.8 1.56-1.53 2.02s3.2 1.9 4.58 3.19s1.64 2.71 7.9 3.72s7.75.94 10.05.67s3.22-1.38 3.22-1.38s3.31 4.42 6.62 4.6s4.23-.92 5.34-.92s-.55 1.1 2.94 1.1s7.49.32 12.13 1.58c3.27.89 6.36 4.21 8.48 4.95s5.24.09 6.16-.92s.9-3.44 2.64-5.27s6.28-4.16 7.84-5.82s2.58-6.85 2.58-6.85s2.12 1.66 3.96 1.29s3.96-3.59 5.61-3.86s3.31-.74 4.88-2.3s.92-5.7 1.93-6.44s4.88 1.56 6.9 1.01s3.96-3.5 3.5-5.43c-.46-1.93-.92-2.21-.92-3.31s1.2-2.94-.28-4.78s-26.69-11.87-26.69-11.87L12.67 57.58z"/><path fill="#96A819" d="M21.04 72.85s-1.2 2.67-.74 3.22s7.27 6.16 8.92 6.35s13.62-.28 13.62-.28l-5.15-9.29H21.04zm43.24 1.66s-5.24 11.5-4.6 12.51s5.8 1.2 10.21 2.39s5.7 1.84 7.18 1.75s7.54-3.5 7.64-4.6s-4.69-6.62-4.69-6.62l-15.74-5.43zm30.45-3.5l-1.84 4.78s8.56.55 12.42-1.29s6.66-8.51 7.86-10.53c1.66-2.78 4-5.18 3.81-6.19s-6.06-4.9-6.06-4.9L94.73 71.01z"/><path fill="#DC0D2A" d="M95.47 72.02s-9.29 2.39-9.48 2.94s-8.65 9.84-8.65 9.84s6.26 3.04 13.25-.92c6.99-3.94 4.88-11.86 4.88-11.86zm22.72-27.41s5.06 1.38 4.23 7.64c-.97 7.32-13.34 6.99-13.34 6.99s-3.31-8.83-2.76-9.29s11.87-5.34 11.87-5.34zM44.78 72.76l-7.45 3.86s1.2 7.82 13.62 9.94s19.32-8.65 19.32-8.65l-25.49-5.15zm-22.36-8l-8.19.37s-.3 5.31 3.96 8.37c5.31 3.81 13.06 2.02 13.06 2.02l-8.83-10.76z"/><path fill="#FEDF64" d="m37.6 63.1l-15.64 3.96S29.87 77.55 33 77.82s18.58-2.94 18.58-2.94L37.6 63.1zm23.55 15.82s9.67 7.81 14.08 7.45c3.4-.28 7.7-6.24 13.32-9.28s14.11-5.27 15.57-6.36c2.89-2.16 6.9-13.98 8.83-16.74s6.72-9.11 6.81-10.12s-.83-4.23-.83-4.23L82.4 68.62l-21.25 10.3z"/><path fill="#D46F1E" d="M68.97 77.45c.46-.09 9.38.92 9.38.92s7.21-5.58 18.25-14.69s21.33-18.95 23.63-22.95c.66-1.14.95-8.16.98-9.92c.06-3.06-1.64-3.63-1.64-3.63l-49.6 35.55l-1 14.72z"/><path fill="#E38211" d="M78.45 64.66c0 .92.61 13.12-.09 13.71c-1.66 1.38-16.19 5.43-28.52-.18c-11.85-5.39-13.9-10.21-13.9-10.21s-15.02 1.71-23.92-3.31c-5.7-3.22-5.98-9.48-5.89-12.7s.46-6.26 1.75-7.64s18.13-15.45 21.72-18.3c3.59-2.85 19.59-14.63 22.08-15.09s23.83 3.68 31 5.34s28.06 7.08 31.65 8.46s5.8 2.21 5.89 3.22s-1.01 2.58-2.3 3.68c-1.29 1.1-28.98-.37-29.71 4.69s-9.76 28.33-9.76 28.33z"/><path fill="#FADFB1" d="M52.14 13.28c-2.79.49-18.52 12.89-22.96 16.46S13.26 42.63 11.31 44.36c-1.95 1.73-4.12 8.12 5.41 11.8c9.53 3.68 22.85 1.95 22.85 1.95s4.77 9.31 16.14 10.51s19.17.76 24.15-3.25c4.98-4.01 21.55-18.09 25.34-21.55c3.79-3.47 13.51-12.12 13.32-13.32c-.54-3.47-27.18-9.31-38.55-11.91c-10.25-2.35-25.34-5.74-27.83-5.31z"/></svg>
              <div className='flex flex-col ml-[1vw]'>
                <h1 className='font-Quicksand text-md'>Tikka</h1>
                <h2 className='font-Quicksand text-sm text-neutral-400'>Tomato, Mozzarella, Basil</h2>
                <h3 className='font-Quicksand text-lg font-bold mt-[1vh]'>400 DA</h3>
              </div>
             </div>
             
            </div>
            <h1 className='font-Quicksand text-md text-neutral-400'>Le Triangle</h1>
            <div className='h-fit max-w-[60vw]  p-4 gap-[1vh] grid grid-cols-2'>
              
             <div className='h-[15vh] w-[25vw] bg-white shadow-xl rounded-2xl items-center justify-start flex'>
             <svg xmlns="http://www.w3.org/2000/svg" className='size-[14vh]' viewBox="0 0 128 128"><path fill="#D46F1E" d="M120.83 78.78c-1 2.11-14.62 13.81-23.13 21.15c-8.51 7.34-18.19 13.79-18.19 13.79l-7.48-.44l1.32-62.35l46.21 15.11s1.38.93 1.53 3.13c.14 2.2.58 7.84-.26 9.61z"/><path fill="#E48216" d="M12.16 81.74c-.88.15-2.49.29-3.08 3.52c-.59 3.23.01 9.75 2.36 12.1c5.01 5.01 11.84 6.58 17.15 7.12c4.7.48 7.38.02 8.69.77c2.28 1.32 2.33 3.97 8.26 7.42c4.48 2.61 12.28 5.06 17.7 5.06c9.02 0 16.25-4.01 16.25-4.01l-.15-12.47l-5.28-28.61l-61.9 9.1z"/><path fill="#FADFB1" d="M18.18 92.45c9.89 3.77 22.15 2.35 22.15 2.35s2.79 6.16 12.62 9.39c9.83 3.23 21.86 1.61 29.64-3.81s21.13-17.9 25.67-21.71s10.86-9.54 11-11s-25.38-21.43-25.38-21.43s-80.31 36.58-82.05 37.71c-1.3.86.19 6.15 6.35 8.5z"/><path fill="#EC8B7A" d="M14.8 74.7s-5.13.29-5.13 3.81s1.91 6.46 6.75 8.66s15.26 4.99 23.47 6.9c8.32 1.93 20.98 9.1 28.46 9.83c7.3.72 13.06-5.58 16.43-8.66c3.37-3.08 20.1-15.99 23.91-19.81c3.81-3.81 11.88-12.47 11.88-12.47l-55.16-20.1L14.8 74.7z"/><path fill="#D45E51" d="M19.02 80.03s-2.02-.09-3.31-.37s-3.59-1.2-3.31-.18s2.44 3.16 6.62 5.06c4.51 2.04 10.35 2.43 10.27 2.24c0 0 2.96 2.35 6.28 3.41c4.05 1.29 8.28 2.5 11.49 2.78c3.05.27 3.6-.34 2.5-1.45s-4.05-2.94-4.05-2.94l-15.64-9.29l-10.85.74zm34.5 13.61c-.12 1.04 4.69 3.59 8.19 5.06s9.64 3.39 9.29-1.01c-.24-3.01-4.02-3.34-8.28-3.77c-4.48-.45-9.1-1.13-9.2-.28z"/><path fill="#B7D019" d="M12.67 57.58s-4.88 9.2-6.53 8.83s-2.39-1.47-3.13-.55s-.83 7.91 3.04 9.02s4.39-.24 6.69.77s5.25 2.69 5.25 2.69s-1.8 1.56-1.53 2.02s3.2 1.9 4.58 3.19s1.64 2.71 7.9 3.72s7.75.94 10.05.67s3.22-1.38 3.22-1.38s3.31 4.42 6.62 4.6s4.23-.92 5.34-.92s-.55 1.1 2.94 1.1s7.49.32 12.13 1.58c3.27.89 6.36 4.21 8.48 4.95s5.24.09 6.16-.92s.9-3.44 2.64-5.27s6.28-4.16 7.84-5.82s2.58-6.85 2.58-6.85s2.12 1.66 3.96 1.29s3.96-3.59 5.61-3.86s3.31-.74 4.88-2.3s.92-5.7 1.93-6.44s4.88 1.56 6.9 1.01s3.96-3.5 3.5-5.43c-.46-1.93-.92-2.21-.92-3.31s1.2-2.94-.28-4.78s-26.69-11.87-26.69-11.87L12.67 57.58z"/><path fill="#96A819" d="M21.04 72.85s-1.2 2.67-.74 3.22s7.27 6.16 8.92 6.35s13.62-.28 13.62-.28l-5.15-9.29H21.04zm43.24 1.66s-5.24 11.5-4.6 12.51s5.8 1.2 10.21 2.39s5.7 1.84 7.18 1.75s7.54-3.5 7.64-4.6s-4.69-6.62-4.69-6.62l-15.74-5.43zm30.45-3.5l-1.84 4.78s8.56.55 12.42-1.29s6.66-8.51 7.86-10.53c1.66-2.78 4-5.18 3.81-6.19s-6.06-4.9-6.06-4.9L94.73 71.01z"/><path fill="#DC0D2A" d="M95.47 72.02s-9.29 2.39-9.48 2.94s-8.65 9.84-8.65 9.84s6.26 3.04 13.25-.92c6.99-3.94 4.88-11.86 4.88-11.86zm22.72-27.41s5.06 1.38 4.23 7.64c-.97 7.32-13.34 6.99-13.34 6.99s-3.31-8.83-2.76-9.29s11.87-5.34 11.87-5.34zM44.78 72.76l-7.45 3.86s1.2 7.82 13.62 9.94s19.32-8.65 19.32-8.65l-25.49-5.15zm-22.36-8l-8.19.37s-.3 5.31 3.96 8.37c5.31 3.81 13.06 2.02 13.06 2.02l-8.83-10.76z"/><path fill="#FEDF64" d="m37.6 63.1l-15.64 3.96S29.87 77.55 33 77.82s18.58-2.94 18.58-2.94L37.6 63.1zm23.55 15.82s9.67 7.81 14.08 7.45c3.4-.28 7.7-6.24 13.32-9.28s14.11-5.27 15.57-6.36c2.89-2.16 6.9-13.98 8.83-16.74s6.72-9.11 6.81-10.12s-.83-4.23-.83-4.23L82.4 68.62l-21.25 10.3z"/><path fill="#D46F1E" d="M68.97 77.45c.46-.09 9.38.92 9.38.92s7.21-5.58 18.25-14.69s21.33-18.95 23.63-22.95c.66-1.14.95-8.16.98-9.92c.06-3.06-1.64-3.63-1.64-3.63l-49.6 35.55l-1 14.72z"/><path fill="#E38211" d="M78.45 64.66c0 .92.61 13.12-.09 13.71c-1.66 1.38-16.19 5.43-28.52-.18c-11.85-5.39-13.9-10.21-13.9-10.21s-15.02 1.71-23.92-3.31c-5.7-3.22-5.98-9.48-5.89-12.7s.46-6.26 1.75-7.64s18.13-15.45 21.72-18.3c3.59-2.85 19.59-14.63 22.08-15.09s23.83 3.68 31 5.34s28.06 7.08 31.65 8.46s5.8 2.21 5.89 3.22s-1.01 2.58-2.3 3.68c-1.29 1.1-28.98-.37-29.71 4.69s-9.76 28.33-9.76 28.33z"/><path fill="#FADFB1" d="M52.14 13.28c-2.79.49-18.52 12.89-22.96 16.46S13.26 42.63 11.31 44.36c-1.95 1.73-4.12 8.12 5.41 11.8c9.53 3.68 22.85 1.95 22.85 1.95s4.77 9.31 16.14 10.51s19.17.76 24.15-3.25c4.98-4.01 21.55-18.09 25.34-21.55c3.79-3.47 13.51-12.12 13.32-13.32c-.54-3.47-27.18-9.31-38.55-11.91c-10.25-2.35-25.34-5.74-27.83-5.31z"/></svg>
              <div className='flex flex-col ml-[1vw]'>
                <h1 className='font-Quicksand text-md'>Tikka</h1>
                <h2 className='font-Quicksand text-sm text-neutral-400'>Tomato, Mozzarella, Basil</h2>
                <h3 className='font-Quicksand text-lg font-bold mt-[1vh]'>400 DA</h3>
              </div>
             </div>
            </div>
            <h1 className='font-Quicksand text-md text-neutral-400'>American</h1>
            <div className='h-fit max-w-[60vw]  p-4 gap-[1vh] grid grid-cols-2'>
              
             <div className='h-[15vh] w-[25vw] bg-white shadow-xl rounded-2xl items-center justify-start flex'>
              <svg xmlns="http://www.w3.org/2000/svg" className='size-[14vh]' viewBox="0 0 128 128"><path fill="#D46F1E" d="M120.83 78.78c-1 2.11-14.62 13.81-23.13 21.15c-8.51 7.34-18.19 13.79-18.19 13.79l-7.48-.44l1.32-62.35l46.21 15.11s1.38.93 1.53 3.13c.14 2.2.58 7.84-.26 9.61z"/><path fill="#E48216" d="M12.16 81.74c-.88.15-2.49.29-3.08 3.52c-.59 3.23.01 9.75 2.36 12.1c5.01 5.01 11.84 6.58 17.15 7.12c4.7.48 7.38.02 8.69.77c2.28 1.32 2.33 3.97 8.26 7.42c4.48 2.61 12.28 5.06 17.7 5.06c9.02 0 16.25-4.01 16.25-4.01l-.15-12.47l-5.28-28.61l-61.9 9.1z"/><path fill="#FADFB1" d="M18.18 92.45c9.89 3.77 22.15 2.35 22.15 2.35s2.79 6.16 12.62 9.39c9.83 3.23 21.86 1.61 29.64-3.81s21.13-17.9 25.67-21.71s10.86-9.54 11-11s-25.38-21.43-25.38-21.43s-80.31 36.58-82.05 37.71c-1.3.86.19 6.15 6.35 8.5z"/><path fill="#EC8B7A" d="M14.8 74.7s-5.13.29-5.13 3.81s1.91 6.46 6.75 8.66s15.26 4.99 23.47 6.9c8.32 1.93 20.98 9.1 28.46 9.83c7.3.72 13.06-5.58 16.43-8.66c3.37-3.08 20.1-15.99 23.91-19.81c3.81-3.81 11.88-12.47 11.88-12.47l-55.16-20.1L14.8 74.7z"/><path fill="#D45E51" d="M19.02 80.03s-2.02-.09-3.31-.37s-3.59-1.2-3.31-.18s2.44 3.16 6.62 5.06c4.51 2.04 10.35 2.43 10.27 2.24c0 0 2.96 2.35 6.28 3.41c4.05 1.29 8.28 2.5 11.49 2.78c3.05.27 3.6-.34 2.5-1.45s-4.05-2.94-4.05-2.94l-15.64-9.29l-10.85.74zm34.5 13.61c-.12 1.04 4.69 3.59 8.19 5.06s9.64 3.39 9.29-1.01c-.24-3.01-4.02-3.34-8.28-3.77c-4.48-.45-9.1-1.13-9.2-.28z"/><path fill="#B7D019" d="M12.67 57.58s-4.88 9.2-6.53 8.83s-2.39-1.47-3.13-.55s-.83 7.91 3.04 9.02s4.39-.24 6.69.77s5.25 2.69 5.25 2.69s-1.8 1.56-1.53 2.02s3.2 1.9 4.58 3.19s1.64 2.71 7.9 3.72s7.75.94 10.05.67s3.22-1.38 3.22-1.38s3.31 4.42 6.62 4.6s4.23-.92 5.34-.92s-.55 1.1 2.94 1.1s7.49.32 12.13 1.58c3.27.89 6.36 4.21 8.48 4.95s5.24.09 6.16-.92s.9-3.44 2.64-5.27s6.28-4.16 7.84-5.82s2.58-6.85 2.58-6.85s2.12 1.66 3.96 1.29s3.96-3.59 5.61-3.86s3.31-.74 4.88-2.3s.92-5.7 1.93-6.44s4.88 1.56 6.9 1.01s3.96-3.5 3.5-5.43c-.46-1.93-.92-2.21-.92-3.31s1.2-2.94-.28-4.78s-26.69-11.87-26.69-11.87L12.67 57.58z"/><path fill="#96A819" d="M21.04 72.85s-1.2 2.67-.74 3.22s7.27 6.16 8.92 6.35s13.62-.28 13.62-.28l-5.15-9.29H21.04zm43.24 1.66s-5.24 11.5-4.6 12.51s5.8 1.2 10.21 2.39s5.7 1.84 7.18 1.75s7.54-3.5 7.64-4.6s-4.69-6.62-4.69-6.62l-15.74-5.43zm30.45-3.5l-1.84 4.78s8.56.55 12.42-1.29s6.66-8.51 7.86-10.53c1.66-2.78 4-5.18 3.81-6.19s-6.06-4.9-6.06-4.9L94.73 71.01z"/><path fill="#DC0D2A" d="M95.47 72.02s-9.29 2.39-9.48 2.94s-8.65 9.84-8.65 9.84s6.26 3.04 13.25-.92c6.99-3.94 4.88-11.86 4.88-11.86zm22.72-27.41s5.06 1.38 4.23 7.64c-.97 7.32-13.34 6.99-13.34 6.99s-3.31-8.83-2.76-9.29s11.87-5.34 11.87-5.34zM44.78 72.76l-7.45 3.86s1.2 7.82 13.62 9.94s19.32-8.65 19.32-8.65l-25.49-5.15zm-22.36-8l-8.19.37s-.3 5.31 3.96 8.37c5.31 3.81 13.06 2.02 13.06 2.02l-8.83-10.76z"/><path fill="#FEDF64" d="m37.6 63.1l-15.64 3.96S29.87 77.55 33 77.82s18.58-2.94 18.58-2.94L37.6 63.1zm23.55 15.82s9.67 7.81 14.08 7.45c3.4-.28 7.7-6.24 13.32-9.28s14.11-5.27 15.57-6.36c2.89-2.16 6.9-13.98 8.83-16.74s6.72-9.11 6.81-10.12s-.83-4.23-.83-4.23L82.4 68.62l-21.25 10.3z"/><path fill="#D46F1E" d="M68.97 77.45c.46-.09 9.38.92 9.38.92s7.21-5.58 18.25-14.69s21.33-18.95 23.63-22.95c.66-1.14.95-8.16.98-9.92c.06-3.06-1.64-3.63-1.64-3.63l-49.6 35.55l-1 14.72z"/><path fill="#E38211" d="M78.45 64.66c0 .92.61 13.12-.09 13.71c-1.66 1.38-16.19 5.43-28.52-.18c-11.85-5.39-13.9-10.21-13.9-10.21s-15.02 1.71-23.92-3.31c-5.7-3.22-5.98-9.48-5.89-12.7s.46-6.26 1.75-7.64s18.13-15.45 21.72-18.3c3.59-2.85 19.59-14.63 22.08-15.09s23.83 3.68 31 5.34s28.06 7.08 31.65 8.46s5.8 2.21 5.89 3.22s-1.01 2.58-2.3 3.68c-1.29 1.1-28.98-.37-29.71 4.69s-9.76 28.33-9.76 28.33z"/><path fill="#FADFB1" d="M52.14 13.28c-2.79.49-18.52 12.89-22.96 16.46S13.26 42.63 11.31 44.36c-1.95 1.73-4.12 8.12 5.41 11.8c9.53 3.68 22.85 1.95 22.85 1.95s4.77 9.31 16.14 10.51s19.17.76 24.15-3.25c4.98-4.01 21.55-18.09 25.34-21.55c3.79-3.47 13.51-12.12 13.32-13.32c-.54-3.47-27.18-9.31-38.55-11.91c-10.25-2.35-25.34-5.74-27.83-5.31z"/></svg>
              <div className='flex flex-col ml-[1vw]'>
                <h1 className='font-Quicksand text-md'>Tikka</h1>
                <h2 className='font-Quicksand text-sm text-neutral-400'>Tomato, Mozzarella, Basil</h2>
                <h3 className='font-Quicksand text-lg font-bold mt-[1vh]'>400 DA</h3>
              </div>
             </div>
            </div>
            <h1 className='font-Quicksand text-md text-neutral-400'>Caprio</h1>
            <div className='h-fit max-w-[60vw] p-4 gap-[1vh] grid grid-cols-2'>
              
             <div className='h-[15vh] w-[25vw] bg-white shadow-xl rounded-2xl items-center justify-start flex'>
              <svg xmlns="http://www.w3.org/2000/svg" className='size-[14vh]' viewBox="0 0 128 128"><path fill="#D46F1E" d="M120.83 78.78c-1 2.11-14.62 13.81-23.13 21.15c-8.51 7.34-18.19 13.79-18.19 13.79l-7.48-.44l1.32-62.35l46.21 15.11s1.38.93 1.53 3.13c.14 2.2.58 7.84-.26 9.61z"/><path fill="#E48216" d="M12.16 81.74c-.88.15-2.49.29-3.08 3.52c-.59 3.23.01 9.75 2.36 12.1c5.01 5.01 11.84 6.58 17.15 7.12c4.7.48 7.38.02 8.69.77c2.28 1.32 2.33 3.97 8.26 7.42c4.48 2.61 12.28 5.06 17.7 5.06c9.02 0 16.25-4.01 16.25-4.01l-.15-12.47l-5.28-28.61l-61.9 9.1z"/><path fill="#FADFB1" d="M18.18 92.45c9.89 3.77 22.15 2.35 22.15 2.35s2.79 6.16 12.62 9.39c9.83 3.23 21.86 1.61 29.64-3.81s21.13-17.9 25.67-21.71s10.86-9.54 11-11s-25.38-21.43-25.38-21.43s-80.31 36.58-82.05 37.71c-1.3.86.19 6.15 6.35 8.5z"/><path fill="#EC8B7A" d="M14.8 74.7s-5.13.29-5.13 3.81s1.91 6.46 6.75 8.66s15.26 4.99 23.47 6.9c8.32 1.93 20.98 9.1 28.46 9.83c7.3.72 13.06-5.58 16.43-8.66c3.37-3.08 20.1-15.99 23.91-19.81c3.81-3.81 11.88-12.47 11.88-12.47l-55.16-20.1L14.8 74.7z"/><path fill="#D45E51" d="M19.02 80.03s-2.02-.09-3.31-.37s-3.59-1.2-3.31-.18s2.44 3.16 6.62 5.06c4.51 2.04 10.35 2.43 10.27 2.24c0 0 2.96 2.35 6.28 3.41c4.05 1.29 8.28 2.5 11.49 2.78c3.05.27 3.6-.34 2.5-1.45s-4.05-2.94-4.05-2.94l-15.64-9.29l-10.85.74zm34.5 13.61c-.12 1.04 4.69 3.59 8.19 5.06s9.64 3.39 9.29-1.01c-.24-3.01-4.02-3.34-8.28-3.77c-4.48-.45-9.1-1.13-9.2-.28z"/><path fill="#B7D019" d="M12.67 57.58s-4.88 9.2-6.53 8.83s-2.39-1.47-3.13-.55s-.83 7.91 3.04 9.02s4.39-.24 6.69.77s5.25 2.69 5.25 2.69s-1.8 1.56-1.53 2.02s3.2 1.9 4.58 3.19s1.64 2.71 7.9 3.72s7.75.94 10.05.67s3.22-1.38 3.22-1.38s3.31 4.42 6.62 4.6s4.23-.92 5.34-.92s-.55 1.1 2.94 1.1s7.49.32 12.13 1.58c3.27.89 6.36 4.21 8.48 4.95s5.24.09 6.16-.92s.9-3.44 2.64-5.27s6.28-4.16 7.84-5.82s2.58-6.85 2.58-6.85s2.12 1.66 3.96 1.29s3.96-3.59 5.61-3.86s3.31-.74 4.88-2.3s.92-5.7 1.93-6.44s4.88 1.56 6.9 1.01s3.96-3.5 3.5-5.43c-.46-1.93-.92-2.21-.92-3.31s1.2-2.94-.28-4.78s-26.69-11.87-26.69-11.87L12.67 57.58z"/><path fill="#96A819" d="M21.04 72.85s-1.2 2.67-.74 3.22s7.27 6.16 8.92 6.35s13.62-.28 13.62-.28l-5.15-9.29H21.04zm43.24 1.66s-5.24 11.5-4.6 12.51s5.8 1.2 10.21 2.39s5.7 1.84 7.18 1.75s7.54-3.5 7.64-4.6s-4.69-6.62-4.69-6.62l-15.74-5.43zm30.45-3.5l-1.84 4.78s8.56.55 12.42-1.29s6.66-8.51 7.86-10.53c1.66-2.78 4-5.18 3.81-6.19s-6.06-4.9-6.06-4.9L94.73 71.01z"/><path fill="#DC0D2A" d="M95.47 72.02s-9.29 2.39-9.48 2.94s-8.65 9.84-8.65 9.84s6.26 3.04 13.25-.92c6.99-3.94 4.88-11.86 4.88-11.86zm22.72-27.41s5.06 1.38 4.23 7.64c-.97 7.32-13.34 6.99-13.34 6.99s-3.31-8.83-2.76-9.29s11.87-5.34 11.87-5.34zM44.78 72.76l-7.45 3.86s1.2 7.82 13.62 9.94s19.32-8.65 19.32-8.65l-25.49-5.15zm-22.36-8l-8.19.37s-.3 5.31 3.96 8.37c5.31 3.81 13.06 2.02 13.06 2.02l-8.83-10.76z"/><path fill="#FEDF64" d="m37.6 63.1l-15.64 3.96S29.87 77.55 33 77.82s18.58-2.94 18.58-2.94L37.6 63.1zm23.55 15.82s9.67 7.81 14.08 7.45c3.4-.28 7.7-6.24 13.32-9.28s14.11-5.27 15.57-6.36c2.89-2.16 6.9-13.98 8.83-16.74s6.72-9.11 6.81-10.12s-.83-4.23-.83-4.23L82.4 68.62l-21.25 10.3z"/><path fill="#D46F1E" d="M68.97 77.45c.46-.09 9.38.92 9.38.92s7.21-5.58 18.25-14.69s21.33-18.95 23.63-22.95c.66-1.14.95-8.16.98-9.92c.06-3.06-1.64-3.63-1.64-3.63l-49.6 35.55l-1 14.72z"/><path fill="#E38211" d="M78.45 64.66c0 .92.61 13.12-.09 13.71c-1.66 1.38-16.19 5.43-28.52-.18c-11.85-5.39-13.9-10.21-13.9-10.21s-15.02 1.71-23.92-3.31c-5.7-3.22-5.98-9.48-5.89-12.7s.46-6.26 1.75-7.64s18.13-15.45 21.72-18.3c3.59-2.85 19.59-14.63 22.08-15.09s23.83 3.68 31 5.34s28.06 7.08 31.65 8.46s5.8 2.21 5.89 3.22s-1.01 2.58-2.3 3.68c-1.29 1.1-28.98-.37-29.71 4.69s-9.76 28.33-9.76 28.33z"/><path fill="#FADFB1" d="M52.14 13.28c-2.79.49-18.52 12.89-22.96 16.46S13.26 42.63 11.31 44.36c-1.95 1.73-4.12 8.12 5.41 11.8c9.53 3.68 22.85 1.95 22.85 1.95s4.77 9.31 16.14 10.51s19.17.76 24.15-3.25c4.98-4.01 21.55-18.09 25.34-21.55c3.79-3.47 13.51-12.12 13.32-13.32c-.54-3.47-27.18-9.31-38.55-11.91c-10.25-2.35-25.34-5.74-27.83-5.31z"/></svg>
              <div className='flex flex-col ml-[1vw]'>
                <h1 className='font-Quicksand text-md'>Tikka</h1>
                <h2 className='font-Quicksand text-sm text-neutral-400'>Tomato, Mozzarella, Basil</h2>
                <h3 className='font-Quicksand text-lg font-bold mt-[1vh]'>400 DA</h3>
              </div>
             </div>
            </div>
           </section>

          </div>
        </div>
        <div className='h-[90vh] w-[40vw] bg-white shadow-xl p-4 rounded-2xl mt-[5vh] mr-[1vw] '>
          <h1 className='font-Quicksand text-xl font-bold'>
            Command
          </h1>
          <div className='flex flex-col h-[75vh] mt-[2vh] overflow-scroll gap-[1vh]'>
            <div className='h-[13vh] w-[25vw] rounded-2xl items-center justify-start flex'>
              <img src={Pizza} alt="" className='size-[11vh] rounded-2xl ml-[.5vw] '/>
              <div className='flex flex-col ml-[1vw]'>
                <h1 className='font-Quicksand text-md'>Pizzas Marguerite</h1>
                <h3 className='font-Quicksand text-lg font-bold mt-[1vh]'>$12.99</h3>
              </div>
             </div>
             <div className='h-[13vh] w-[25vw] rounded-2xl items-center justify-start flex'>
              <img src={Pizza} alt="" className='size-[11vh] rounded-2xl ml-[.5vw] '/>
              <div className='flex flex-col ml-[1vw]'>
                <h1 className='font-Quicksand text-md'>Pizzas Marguerite</h1>
                <h3 className='font-Quicksand text-lg font-bold mt-[1vh]'>$12.99</h3>
              </div>
             </div>
             <div className='h-[13vh] w-[25vw] rounded-2xl items-center justify-start flex'>
              <img src={Pizza} alt="" className='size-[11vh] rounded-2xl ml-[.5vw] '/>
              <div className='flex flex-col ml-[1vw]'>
                <h1 className='font-Quicksand text-md'>Pizzas Marguerite</h1>
                <h3 className='font-Quicksand text-lg font-bold mt-[1vh]'>$12.99</h3>
              </div>
             </div>
             <div className='h-[13vh] w-[25vw] rounded-2xl items-center justify-start flex'>
              <img src={Pizza} alt="" className='size-[11vh] rounded-2xl ml-[.5vw] '/>
              <div className='flex flex-col ml-[1vw]'>
                <h1 className='font-Quicksand text-md'>Pizzas Marguerite</h1>
                <h3 className='font-Quicksand text-lg font-bold mt-[1vh]'>$12.99</h3>
              </div>
             </div>
             
             <div className='flex justify-between border-t-1 items-center mt-[2vh]'>
               <h1 className='font-Quicksand text-lg  ml-[1vw]'>Total</h1>
               <p className='font-Quicksand text-sm mt-[1vh]'>2500 DA</p>
             </div>
             <div className='flex justify-center items-center mt-[5vh]'>
              <form class="max-w-sm mx-auto -mt-[3.5vh]">
                <label for="countries" class="block mb-2 text-sm font-Quicksand font-medium text-gray-900 dark:text-white">Tables </label>
                <select id="countries" class="border font-Quicksand border-zinc-600 bg-zinc-950 text-black text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 px-[2.5vw] py-[1.5vh] dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option selected>Table 01</option>
                  <option value="US">Table 02</option>
                  <option value="CA">Table 03</option>
                  <option value="FR">Table 04</option>
                  <option value="DE">Table 05</option>
                </select>
              </form>
              <button
                  class="inline-block font-Quicksand cursor-pointer items-center justify-center rounded-xl border-[1.58px] border-zinc-600 bg-zinc-950 px-5 py-2 font-medium text-slate-200 shadow-md transition-all duration-300 hover:[transform:translateY(-.335rem)] hover:shadow-xl"
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