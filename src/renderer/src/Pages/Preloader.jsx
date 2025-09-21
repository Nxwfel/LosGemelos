import React from 'react'
import SideImg from '../assets/imgs/Side-img.jpg'
import {motion} from 'framer-motion'

const Preloader = () => {
  return (
    <div className="overflow-hidden h-screen w-screen flex justify-between items-center">
      <motion.div
      initial={{x:-100}}
        animate={{x:0}}
        transition={{duration:2}}
      className="h-[20vh] w-[60vh] ml-[3vw] -mt-[20vh] flex flex-col">
        <h1 
        
        className="font-genos text-[13vh] text-nowrap text-[#e1a621]">Los Gemelos</h1>
        <p className="font-Quicksand text-[4vh] max-w-[50vw] text-nowrap text-[#25463c]">Goûtez la passion dans chaque plat,<br />vivez un voyage culinaire inoubliable.</p>
      </motion.div>
      <motion.img 
      initial={{rotate:0}}
      animate={{rotate:120}}
      transition={{duration:15}}
      src={SideImg} alt="" className="absolute h-[80vh] -right-[30vw]"/>
    </div>
  )
}

export default Preloader