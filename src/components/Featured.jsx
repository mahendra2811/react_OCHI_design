import { motion } from 'framer-motion';
import React, { useState } from 'react';




function Featured() {

  const [isHovering, setIsHovering] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);



  return (
    <div className='w-full py-10 ' >
      <div className="w-full px-20 border-b-[1px] border-zinc-100 pb-20 ">
        <h1 className="text-8xl font-['Founders_Grotesk_X-Condensed'] tracking-tight ">
          Featured Project
        </h1>


        <div className="px-20 ">
          <div className="cards w-full flex gap-10 mt-10 mb-10 ">


            <div
              className="cardcontainer  relative  w-1/2 h-[75vh] bg-red-500 "
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)} >

              <div className="card w-full h-full bg-green-600    overflow-hidden " >
                <h1 className="absolute flex  text-[10rem]  text-[#cdea68] font-['Founders_Grotesk_X-Condensed'] left-1/2 md:left-full top-1/2 leading-none   tracking-tighter   overflow-hidden  -translate-x-1/2 -translate-y-1/2  z-50 font-extrabold ">
                  {"VISE".split('').map((item, index) =>
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
            </div>

            <div className="cardcontainer relative  rounded-xl w-1/2 h-[75vh] bg-red-500 "
              onMouseEnter={() => setIsHovering2(true)}
              onMouseLeave={() => setIsHovering2(false)}
            >
              <div className="card  w-full h-full bg-green-600   overflow-hidden " >
                <h1 className="absolute  text-[10rem]  text-[#cdea68] font-['Founders_Grotesk_X-Condensed'] right-1/2 md:right-full top-1/2  leading-none   tracking-tighter  flex overflow-hidden  translate-x-1/2 -translate-y-1/2  font-extrabold z-50  ">
                  {"FYDE".split('').map((item, index) =>
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
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured
