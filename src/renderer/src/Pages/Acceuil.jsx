import React from 'react'
import {motion, spring} from 'framer-motion'
import {Link} from 'react-router-dom'
import Arrow from '../assets/imgs/arrow.png'
const Acceuil = () => {
  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:1 , type:'spring'}}
    className='h-screen w-screen bg-[#111315] justify-center items-center flex flex-col gap-[10vh]'>
      <Link to='/order'><motion.div
      initial={{scale:1}}
      whileHover={{scale:1.05}}
      whileTap={{scale:0.9}}
      className='cursor-pointer h-[10vh] w-[40vw] bg-[#dfa62e] border-2 border-white rounded-2xl justify-between items-center flex p-4'>
         <h1 className='Anybody text-white text-2xl px-8'>Service Clients</h1>
         <motion.div 
         initial={{rotate:0}}
         whileHover={{rotate:-30}}
         className='cursor-pointer'>
            <img src={Arrow} alt="" className='size-[6vh] rotate-180 p-2 bg-[#754a2d] rounded-full' />
         </motion.div>
      </motion.div>
      </Link>
      <Link to='/admin'><motion.div
      initial={{scale:1}}
      whileHover={{scale:1.05}}
      whileTap={{scale:0.9}}
      className='cursor-pointer h-[10vh] w-[40vw] bg-[#dfa62e] border-2 border-white rounded-2xl justify-between items-center flex p-4'>
         <h1 className='Anybody text-white text-2xl px-8'>Service Admin</h1>
         <motion.div 
         initial={{rotate:0}}
         whileHover={{rotate:-30}}
         className='cursor-pointer'>
            <img src={Arrow} alt="" className='size-[6vh] p-2 bg-[#754a2d] rounded-full' />
         </motion.div>
      </motion.div>
      </Link>
    </motion.div>
  )
}

export default Acceuil