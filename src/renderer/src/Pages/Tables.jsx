import React , {useState , useEffect} from 'react'
import {Link} from 'react-router-dom'
const Tables = () => {
  useEffect (() => {
   fetch("http://localhost:8000/")
   .then(res => res.json())
   .then(res => console.log(res))
  })
    const [hidden, setHidden] = useState(false);
  return (
    <div className='h-screen w-screen overflow-hidden bg-[#fdfbfb] flex'>
        <div className={`${hidden ? '' : 'hidden'} absolute h-[80vh] w-[40vw] ml-[30vw] mt-[10vh] bg-white rounded-2xl shadow-2xl justify-center items-center text-center`}>
         <p 
         onClick={() => setHidden((prev) => !prev)}
         className='h-[4vh] w-full bg-amber-200 text-white text-lg cursor-pointer'>x</p>
         <h1 className='font-Quicksand text-xl mt-[5vh]'>Table:01</h1>
         <div className='max-h-[50vh] w-[90%] overflow-y-auto flex flex-col gap-[1vh] ml-auto mr-auto items-center mt-[1vh] mb-[1vh] p-5'>
          <div className='h-[15vh] w-[25vw] bg-white shadow-xl rounded-2xl items-center justify-start flex'>
                  <div className='size-[13vh] rounded-2xl ml-[.5vw] bg-orange-200 flex items-center justify-center'>
                    <span className='text-2xl'>🍕</span>
                  </div>
                  <div className='flex flex-col ml-[1vw]'>
                    <h1 className='font-sans text-md'>Pizza Marguerite</h1>
                    <h2 className='font-sans text-sm text-neutral-400'>Tomato, Mozzarella, Basil</h2>
                    <h3 className='font-sans text-lg font-bold mt-[1vh]'>400 DA</h3>
                  </div>
                </div>
            <div className='h-[15vh] w-[25vw] bg-white shadow-xl rounded-2xl items-center justify-start flex'>
                  <div className='size-[13vh] rounded-2xl ml-[.5vw] bg-orange-200 flex items-center justify-center'>
                    <span className='text-2xl'>🍕</span>
                  </div>
                  <div className='flex flex-col ml-[1vw]'>
                    <h1 className='font-sans text-md'>Pizza Marguerite</h1>
                    <h2 className='font-sans text-sm text-neutral-400'>Tomato, Mozzarella, Basil</h2>
                    <h3 className='font-sans text-lg font-bold mt-[1vh]'>400 DA</h3>
                  </div>
                </div>
                <div className='h-[15vh] w-[25vw] bg-white shadow-xl rounded-2xl items-center justify-start flex'>
                  <div className='size-[13vh] rounded-2xl ml-[.5vw] bg-orange-200 flex items-center justify-center'>
                    <span className='text-2xl'>🍕</span>
                  </div>
                  <div className='flex flex-col ml-[1vw]'>
                    <h1 className='font-sans text-md'>Pizza Marguerite</h1>
                    <h2 className='font-sans text-sm text-neutral-400'>Tomato, Mozzarella, Basil</h2>
                    <h3 className='font-sans text-lg font-bold mt-[1vh]'>400 DA</h3>
                  </div>
                </div>
                <div className='h-[15vh] w-[25vw] bg-white shadow-xl rounded-2xl items-center justify-start flex'>
                  <div className='size-[13vh] rounded-2xl ml-[.5vw] bg-orange-200 flex items-center justify-center'>
                    <span className='text-2xl'>🍕</span>
                  </div>
                  <div className='flex flex-col ml-[1vw]'>
                    <h1 className='font-sans text-md'>Pizza Marguerite</h1>
                    <h2 className='font-sans text-sm text-neutral-400'>Tomato, Mozzarella, Basil</h2>
                    <h3 className='font-sans text-lg font-bold mt-[1vh]'>400 DA</h3>
                  </div>
                </div>
          <div className='h-[15vh] w-[25vw] bg-white shadow-xl rounded-2xl items-center justify-start flex'>
                  <div className='size-[13vh] rounded-2xl ml-[.5vw] bg-orange-200 flex items-center justify-center'>
                    <span className='text-2xl'>🍕</span>
                  </div>
                  <div className='flex flex-col ml-[1vw]'>
                    <h1 className='font-sans text-md'>Pizza Marguerite</h1>
                    <h2 className='font-sans text-sm text-neutral-400'>Tomato, Mozzarella, Basil</h2>
                    <h3 className='font-sans text-lg font-bold mt-[1vh]'>400 DA</h3>
                  </div>
                </div>
         </div>
         <p className='font-Quicksand text-lg w-full border-t-1 text-start pl-[1vw]'>Total: 3400DA</p>
         <button className="mt-[2vh] inline-block font-sans cursor-pointer items-center justify-center rounded-xl border-[1.58px] border-zinc-600 bg-zinc-950 px-5 py-2 font-medium text-slate-200 shadow-md transition-all duration-300 hover:[transform:translateY(-.335rem)] hover:shadow-xl">
              Ticket
            </button>
        </div>
      <div className='h-[97%] w-[5.5vw] mt-[1vh] bg-white border-1 border-neutral-300 rounded-3xl ml-[1vw] flex flex-col items-center justify-items-center-safe gap-[20vh] mr-auto shadow-xl'>
             <h1 className='font-serif text-5xl bg-white text-[#dba840] mt-[3vh]'>L</h1>
             <div className='flex flex-col items-center justify-center gap-[5vh] mt-[7vh]'>
               <Link to='/'><div className='flex flex-col h-[8vh] w-[4vw] hover:bg-[#dba840] rounded justify-center items-center hover:transition-colors text-[#c4c1c3] hover:text-white stroke-[#c4c1c3] hover:stroke-white p-2'>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="size-[4vh]">
                   <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                 </svg>
                 <h1 className='font-Quicksand text-[2vh]'>Acceuil</h1>
               </div>
               </Link>
               <Link to='/order'><div className='flex flex-col h-[8.5vh] w-[4vw] hover:bg-[#dba840] rounded justify-center items-center hover:transition-colors text-[#c4c1c3] hover:text-white fill-[#c4c1c3] hover:fill-white p-2'>
                 <svg xmlns="http://www.w3.org/2000/svg" className='size-[4vh]' viewBox="0 0 64 64">
                    <g fillRule="evenodd">
                        <path d="M61.821 11.045c.703-1.309-.891-.912-.891-.912s-10.627 10.201-12.104 8.951S59.231 8.057 57.825 6.23c-1.301-1.703-11.74 10.455-12.994 8.97c-1.242-1.482 8.939-12.123 8.939-12.123s.387-1.602-.912-.9C36.851 10.785 34.812 18.81 34.812 18.81s-.551 1.563.645 2.771c.117.105-29.204 29.26-33.129 33.196c-1.91 1.908 5.098 8.801 6.996 6.893c3.926-3.936 33.024-33.303 33.129-33.194c1.207 1.205 2.766.652 2.766.652s8.012-2.045 16.602-18.083"/>
                    </g>
                </svg>
                   <h1 className='font-Quicksand text-[2vh]'>Menu</h1>
                 </div>
                 </Link>
                 <Link to='/tables'><div className='flex flex-col h-[8vh] w-[4vw] hover:bg-[#dba840] rounded justify-center items-center hover:transition-colors text-[#c4c1c3] hover:text-white fill-[#c4c1c3] hover:fill-white p-2'>
                   <svg xmlns="http://www.w3.org/2000/svg" className='size-[4vh]' viewBox="0 0 24 24"><path  d="M12 22H6a2 2 0 0 1 2-2V8H2V5h14v3h-6v12a2 2 0 0 1 2 2M22 2v20h-2v-7h-5v7h-2v-8a2 2 0 0 1 2-2h5V2Z"/></svg>
                   <h1 className='font-Quicksand text-[2.2vh]'>Tables</h1>
                 </div>
                 </Link>
               </div>
               </div>
     
          <div className='h-screen w-[93vw] ml-[.5vw] flex flex-col'>
            <h1 className='font-Quicksand text-3xl mt-[2vh] ml-[2vw]'>Tables</h1>
            <div className='flex mt-[3vh] ml-[3vw] gap-[10vw]'>
                <div className=' items-center grid grid-cols-2'>
                    <div
                    onClick={() => setHidden((prev) => !prev)}
                    className='h-[10vh] w-[10vh] cursor-pointer rounded-full border-1 border-neutral-300 bg-neutral-100 items-center justify-center m-[3vh] shadow-lg hover:scale-105 hover:transition-transform cursor-pointer flex flex-col'>
                        <h1 className='font-Quicksand'>01</h1>
                    </div>
                    <div className='h-[10vh] w-[10vh] rounded-full border-1 border-neutral-300 bg-neutral-100 items-center justify-center m-[3vh] shadow-lg hover:scale-105 hover:transition-transform cursor-pointer flex flex-col'>
                        <h1 className='font-Quicksand'>02</h1>
                    </div>
                    <div className='h-[10vh] w-[10vh] rounded-full border-1 border-neutral-300 bg-neutral-100 items-center justify-center m-[3vh] shadow-lg hover:scale-105 hover:transition-transform cursor-pointer flex flex-col'>
                        <h1 className='font-Quicksand'>03</h1>
                    </div>
                    <div className='h-[10vh] w-[10vh] rounded-full border-1 border-neutral-300 bg-neutral-100 items-center justify-center m-[3vh] shadow-lg hover:scale-105 hover:transition-transform cursor-pointer flex flex-col'>
                        <h1 className='font-Quicksand'>04</h1>
                    </div>
                    <div className='h-[10vh] w-[10vh] rounded-full border-1 border-neutral-300 bg-neutral-100 items-center justify-center m-[3vh] shadow-lg hover:scale-105 hover:transition-transform cursor-pointer flex flex-col'>
                        <h1 className='font-Quicksand'>05</h1>
                    </div>
                    <div className='h-[10vh] w-[10vh] rounded-full border-1 border-neutral-300 bg-neutral-100 items-center justify-center m-[3vh] shadow-lg hover:scale-105 hover:transition-transform cursor-pointer flex flex-col'>
                        <h1 className='font-Quicksand'>06</h1>
                    </div>
                    <div className='h-[10vh] w-[10vh] rounded-full border-1 border-neutral-300 bg-neutral-100 items-center justify-center m-[3vh] shadow-lg hover:scale-105 hover:transition-transform cursor-pointer flex flex-col'>
                        <h1 className='font-Quicksand'>07</h1>
                    </div>
                    <div className='h-[10vh] w-[10vh] rounded-full border-1 border-neutral-300 bg-neutral-100 items-center justify-center m-[3vh] shadow-lg hover:scale-105 hover:transition-transform cursor-pointer flex flex-col'>
                        <h1 className='font-Quicksand'>08</h1>
                    </div>
                </div>
                <div className='flex flex-col items-center grid grid-cols-2'>
                    <div className='h-[10vh] w-[10vh] rounded-full border-1 border-neutral-300 bg-neutral-100 items-center justify-center m-[3vh] shadow-lg hover:scale-105 hover:transition-transform cursor-pointer flex flex-col'>
                        <h1 className='font-Quicksand'>09</h1>
                    </div>
                    <div className='h-[10vh] w-[10vh] rounded-full border-1 border-neutral-300 bg-neutral-100 items-center justify-center m-[3vh] shadow-lg hover:scale-105 hover:transition-transform cursor-pointer flex flex-col'>
                        <h1 className='font-Quicksand'>10</h1>
                    </div>
                    <div className='h-[10vh] w-[10vh] rounded-full border-1 border-neutral-300 bg-neutral-100 items-center justify-center m-[3vh] shadow-lg hover:scale-105 hover:transition-transform cursor-pointer flex flex-col'>
                        <h1 className='font-Quicksand'>11</h1>
                    </div>
                    <div className='h-[10vh] w-[10vh] rounded-full border-1 border-neutral-300 bg-neutral-100 items-center justify-center m-[3vh] shadow-lg hover:scale-105 hover:transition-transform cursor-pointer flex flex-col'>
                        <h1 className='font-Quicksand'>12</h1>
                    </div>
                    <div className='h-[10vh] w-[10vh] rounded-full border-1 border-neutral-300 bg-neutral-100 items-center justify-center m-[3vh] shadow-lg hover:scale-105 hover:transition-transform cursor-pointer flex flex-col'>
                        <h1 className='font-Quicksand'>13</h1>
                    </div>
                    <div className='h-[10vh] w-[10vh] rounded-full border-1 border-neutral-300 bg-neutral-100 items-center justify-center m-[3vh] shadow-lg hover:scale-105 hover:transition-transform cursor-pointer flex flex-col'>
                        <h1 className='font-Quicksand'>14</h1>
                    </div>
                    <div className='h-[10vh] w-[10vh] rounded-full border-1 border-neutral-300 bg-neutral-100 items-center justify-center m-[3vh] shadow-lg hover:scale-105 hover:transition-transform cursor-pointer flex flex-col'>
                        <h1 className='font-Quicksand'>15</h1>
                    </div>
                    <div className='h-[10vh] w-[10vh] rounded-full border-1 border-neutral-300 bg-neutral-100 items-center justify-center m-[3vh] shadow-lg hover:scale-105 hover:transition-transform cursor-pointer flex flex-col'>
                        <h1 className='font-Quicksand'>16</h1>
                    </div>
                    
                </div>
            <div className='flex flex-col items-center -mb-[20vh]'>
                <div className='flex mt-auto'>
                   <div className='h-[10vh] w-[10vh] rounded-full border-1 border-neutral-300 bg-neutral-100 items-center justify-center m-[3vh] shadow-lg hover:scale-105 hover:transition-transform cursor-pointer flex flex-col'>
                        <h1 className='font-Quicksand'>17</h1>
                    </div>
                    <div className='h-[10vh] w-[10vh] rounded-full border-1 border-neutral-300 bg-neutral-100 items-center justify-center m-[3vh] shadow-lg hover:scale-105 hover:transition-transform cursor-pointer flex flex-col'>
                        <h1 className='font-Quicksand'>18</h1>
                    </div>
                    <div className='h-[10vh] w-[10vh] rounded-full border-1 border-neutral-300 bg-neutral-100 items-center justify-center m-[3vh] shadow-lg hover:scale-105 hover:transition-transform cursor-pointer flex flex-col'>
                        <h1 className='font-Quicksand'>19</h1>
                    </div>
                    <div className='h-[10vh] w-[10vh] rounded-full border-1 border-neutral-300 bg-neutral-100 items-center justify-center m-[3vh] shadow-lg hover:scale-105 hover:transition-transform cursor-pointer flex flex-col'>
                        <h1 className='font-Quicksand'>20</h1>
                    </div> 
                </div>
                <div className='flex '>
                   <div className='h-[10vh] w-[10vh] rounded-full border-1 border-neutral-300 bg-neutral-100 items-center justify-center m-[3vh] shadow-lg hover:scale-105 hover:transition-transform cursor-pointer flex flex-col'>
                        <h1 className='font-Quicksand'>21</h1>
                    </div>
                    <div className='h-[10vh] w-[10vh] rounded-full border-1 border-neutral-300 bg-neutral-100 items-center justify-center m-[3vh] shadow-lg hover:scale-105 hover:transition-transform cursor-pointer flex flex-col'>
                        <h1 className='font-Quicksand'>22</h1>
                    </div>
                    <div className='h-[10vh] w-[10vh] rounded-full border-1 border-neutral-300 bg-neutral-100 items-center justify-center m-[3vh] shadow-lg hover:scale-105 hover:transition-transform cursor-pointer flex flex-col'>
                        <h1 className='font-Quicksand'>23</h1>
                    </div>
                    <div className='h-[10vh] w-[10vh] rounded-full border-1 border-neutral-300 bg-neutral-100 items-center justify-center m-[3vh] shadow-lg hover:scale-105 hover:transition-transform cursor-pointer flex flex-col'>
                        <h1 className='font-Quicksand'>24</h1>
                    </div> 
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Tables