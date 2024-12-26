import React from 'react';




function Featured() {
  return (
    <div className='w-full py-10 ' >
      <div className="w-full px-20 border-b-[1px] border-zinc-100 pb-20 ">
        <h1 className="text-8xl font-['Founders_Grotesk_X-Condensed'] tracking-tight ">
          Featured Project
        </h1>


        <div className="px-20 ">
          <div className="cards w-full flex gap-10 mt-10 mb-10 ">


            <div className="cardcontainer  relative  w-1/2 h-[75vh] bg-red-500 ">
              <div className="card w-full h-full bg-green-600    overflow-hidden " >
                <h1 className="absolute  text-[8rem]  text-[#cdea68] font-['Founders_Grotesk_X-Condensed'] left-1/2 md:left-full top-1/2 leading-none   tracking-tighter  flex overflow-hidden  -translate-x-1/2 -translate-y-1/2   ">
                  {"VISE".split('').map((item, index) =>
                    <span key={index} className='' >{item}</span>
                  )}
                </h1>
                <img className='w-full h-full bg-cover ' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
              </div>
            </div>

            <div className="cardcontainer rounded-xl w-1/2 h-[75vh] bg-red-500 ovarflow-hidden">
              <div className="card sdfasdw-full h-full bg-green-600  rounded-xl overflow-hidden " >
                <h1 className="absolute flex overflow-hidden right-1/2 sm:right-full top-1/2  tracking-tighter  translate-x-1/2  -translate-y-1/2 z-10 text-8xl font-NueueMontreal leading-none ">mahendra
                  {"Fude".split('').map((item, index) =>
                    <span key={index} className='' >{item}</span>
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
