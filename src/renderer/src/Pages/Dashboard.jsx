import React from 'react'

const Dashboard = () => {
  return (
    <div className='min-h-screen w-screen bg-neutral-100 flex flex-col items-center justify-start'>
      <div className='h-[10vh] w-[98%] rounded-xl shadow-md bg-white flex items-center mt-[2vh]'>
        <div className='justify-center items-center w-fit h-[80%] flex ml-auto mr-auto'>
         <h1 className='font-Quicksand text-sm text-neutral-400 hover:text-black hover:bg-neutral-200 cursor-pointer p-4 rounded-2xl'>Dashboard</h1>
         <h1 className='font-Quicksand text-sm text-neutral-400 hover:text-black hover:bg-neutral-200 cursor-pointer p-4 rounded-2xl'>Caisse</h1>
         <h1 className='font-Quicksand text-sm text-neutral-400 hover:text-black hover:bg-neutral-200 cursor-pointer p-4 rounded-2xl'>Orders</h1>
         <h1 className='font-Quicksand text-sm text-neutral-400 hover:text-black hover:bg-neutral-200 cursor-pointer p-4 rounded-2xl'>Paramètres</h1>
        </div>
      </div>
      <section id='Dashboard' className='h-[87vh] w-[98%] flex flex-col items-center justify-start'>
         <div className='h-[30vh] w-screen flex '>
            <div className='h-full w-[60%] shadow-md bg-white ml-[1vw] rounded-2xl mt-[2vh]'>

            </div>
            <div className='h-full w-[38%] shadow-md bg-white ml-[1vw] mt-[2vh] mr-[1vw] rounded-2xl'>

            </div>
         </div>
         <div className='h-[50vh] w-full flex mt-[4vh] rounded-2xl mb-3'>
          <div className='h-full w-[50%] shadow-lg bg-white ml-[0vw] rounded-2xl mt-[2vh]'>

            </div>
            <div className='h-full w-[50%] shadow-lg bg-white ml-[1vw] mt-[2vh] mr-[0vw] rounded-2xl'>

            </div>
         </div>
      </section>
      <section id='Dashboard' className='hidden h-[87vh] w-[98%] flex flex-col items-center justify-start'>
         <div className='h-[30vh] w-screen flex '>
            <div className='h-full w-[60%] shadow-md bg-white ml-[1vw] rounded-2xl mt-[2vh]'>

            </div>
            <div className='h-full w-[38%] shadow-md bg-white ml-[1vw] mt-[2vh] mr-[1vw] rounded-2xl'>

            </div>
         </div>
         <div className='h-[50vh] w-full flex mt-[4vh] rounded-2xl mb-3'>
          <div className='h-full w-[50%] shadow-lg bg-white ml-[0vw] rounded-2xl mt-[2vh]'>

            </div>
            <div className='h-full w-[50%] shadow-lg bg-white ml-[1vw] mt-[2vh] mr-[0vw] rounded-2xl'>

            </div>
         </div>
      </section>
    </div>
  )
}

export default Dashboard