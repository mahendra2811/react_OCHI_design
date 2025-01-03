import { motion } from 'framer-motion';
import React from 'react';
import { BsArrowUpRight } from "react-icons/bs";
import image from '../assets/image.png' ;


function LandingPage() {

  return (
    <div>
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.20"
        className='w-full h-screen bg-zinc-900 pt-1'>

        <div className="textstructure mt-36 px-20">
          {["WE CREATE", "Eye opening", "Presentations"].map((item, index) => {
            return (
              <div className="masker" key={index}>
                <div className='w-fit flex items-end overflow-hidden'>
                  {index === 1 && (
                    <motion.div
                      initial={{ width: '0' }}
                      animate={{ width: "10vw" }}
                      transition={{ ease: [0.76, 0, 0.24, 1], duration: 2 }}
                      className='w-[9vw] h-[4.8vw] top-[0.2vw] m-2  relative  rounded-md' >
                        <img src={image} alt="" className='w-full h-full overflow-hidden rounded-lg ' />

                    </motion.div>)}
                  <h1 className="uppercase text-[7vw] leading-[5.7vw]  font-['Founders_Grotesk_X-Condensed']  font-extrabold h-full"  >
                    {item}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>

        {/* putting all together */}
        {/* <div>
         <div className="masker  " >
          <h1 className="uppercase text-9xl leading-[6.4vw] -tracking-tight font-['Foundaers Grotesk'] ">
            WE CREATE
          </h1>
        </div>
        <div className="masker  " >
          <h1 className="uppercase text-9xl leading-[6.4vw] -tracking-tight font-['Foundaers Grotesk'] ">
            EYE OPENING
          </h1>
        </div>
        <div className="masker  " >
          <h1 className="uppercase text-9xl leading-[6.4vw] -tracking-tight font-['Foundaers Grotesk'] ">
            PRESENTATIONS
          </h1>
        </div> 
        </div> */}

        <div className="border-t-[0.8px] border-zinc-700 mt-28 flex justify-between items-center py-1 px-20">
          {[
            "For public and private companies ",
            "From the first pitch to IPO",
          ].map((item, index) => (
            <p key={index} className="text-md font-light tracking-tight leading-none " >{item}</p>
          ))}
          <div className="start flex items-center uppercase mt-2  ">
            <div className='px-5 py-2 border-[1px] border-zinc-500 font-light text-base capitalize rounded-full ' >START THE PROJECT</div>

            <div className='p-2  mx-1 border-[2px] border-zinc-500 justify-center text-2xl   rounded-full' > <BsArrowUpRight /></div>
          </div>
        </div>


      </div>

    </div>
  );
}

export default LandingPage;
