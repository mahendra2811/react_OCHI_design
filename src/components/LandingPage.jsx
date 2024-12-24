import React from 'react'
import { BsArrowUpRight } from "react-icons/bs";

function LandingPage() {
  return (
    <div>
      <div className='w-full h-screen bg-zinc-900 pt-1'>

        <div className="textstructure mt-52 px-20">
          {["WE CREATE", "Eye opening", "Presentations"].map((item, index) => {
            return (
              <div className="masker" key={index}>
              <div className='w-fit flex items-end overflow-hidden'>
                {index === 1 && (<div className='w-[7vw] h-[5vw] bg-red-500 relative  rounded-md' ></div>)}
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
          <div className="start flex items-center uppercase ">
            <div className='px-5 py-2 border-[2px] border-zinc-500 font-light text-md capitalize rounded-full ' >START THE PROJECT</div>

            <div className='px-2 py-2 mx-1 border-[2px] border-zinc-500 justify-center text-xl   rounded-full' > <BsArrowUpRight /></div>
          </div>
        </div>


      </div>

    </div>
  );
}

export default LandingPage;
