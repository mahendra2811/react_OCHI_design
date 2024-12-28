import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { LuRedoDot } from "react-icons/lu";




function Featured() {

  const [isHovering, setIsHovering] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);



  return (
    <div className='w-full py-10 ' >
      <div className="w-full px-5 border-zinc-100 pb-20 ">
        <h1 className="text-8xl pb-10 px-10 font-['Founders_Grotesk_X-Condensed'] tracking-tight ">
          Featured Project
        </h1>


        <div className="px-5 border-t-[1px] border-zinc-100 pb-20 ">
          <div className="cards w-full flex gap-10 mt-10 mb-10 ">


            <div className="cardcontainer  relative rounded-3xl w-1/2 h-[75vh] "
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)} >
              <h3 className='text-2xl mb-5 flex gap-1 my-5' > <LuRedoDot /> FYDE</h3>

              <div className="card w-full h-full bg-green-600    overflow-hidden " >
                <h1 className="absolute flex  text-[15rem]  text-[#cdea68] font-['Founders_Grotesk_X-Condensed'] left-1/2 md:left-full top-1/2 leading-none   tracking-tighter   overflow-hidden  -translate-x-1/2 -translate-y-1/2  z-50 font-extrabold ">
                  {"FYDE".split('').map((item, index) =>
                    <motion.span
                      initial={{ y: '100%' }}
                      animate={isHovering ? { y: 0 } : { y: '100%' }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      key={index}
                      className='inline-block  ' >
                      {item}</motion.span>
                  )}
                </h1>
                <img className='w-full h-full bg-cover ' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
              </div>
              <div className="w-full flex flex-row gap-5 my-3">
                <motion.button
                  className='uppercase rounded-full px-5 py-2 border-2 border-white'
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  BRANDED TEMPLATE
                </motion.button>
                <motion.button
                  className='uppercase rounded-full px-5 py-2 border-2 border-white'
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  sales desk
                </motion.button>
                <motion.button
                  className='uppercase rounded-full px-5 py-2 border-2 border-white'
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  social media TEMPLATE
                </motion.button>
              </div>
            </div>

            <div className="cardcontainer relative  rounded-3xl w-1/2 h-[75vh] "
              onMouseEnter={() => setIsHovering2(true)}
              onMouseLeave={() => setIsHovering2(false)}
            >
              <h3 className='text-2xl mb-5 flex gap-1 my-5 ' > <LuRedoDot />  VISE</h3>
              <div className="card  w-full h-full bg-green-600   overflow-hidden " >
                <h1 className="absolute  text-[15rem]  text-[#cdea68] font-['Founders_Grotesk_X-Condensed'] right-1/2 md:right-full top-1/2  leading-none   tracking-tighter  flex overflow-hidden  translate-x-1/2 -translate-y-1/2  font-extrabold z-50  ">
                  {"VISE".split('').map((item, index) =>
                    <motion.span
                      initial={{ y: '100%' }}
                      animate={isHovering2 ? { y: 0 } : { y: '100%' }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      key={index}
                      className='inline-block  ' >
                      {item}</motion.span>
                  )}
                </h1>
                <img className='w-full h-full' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="" />
              </div>

              <div className="w-full flex flex-row gap-3 my-3">
                <motion.button
                  className='uppercase rounded-full px-5 py-2 border-2 border-white'
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  Pitch deck
                </motion.button>
              </div>
            </div>



          </div>









        </div>
        <div className="w-full my-3 flex justify-center items-center">
          <motion.button
            className="border-2 flex flex-row gap-7 border-white bg-white text-black rounded-full mt-20 uppercase mx-10 px-5 py-2"
            whileHover={{
              scale: 1.1,
              backgroundColor: '#000', // Change to black on hover
              color: '#fff' // Change text color to white on hover
            }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <p>view all case studies</p>
            🡢
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Featured
