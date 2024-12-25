import React from 'react';
import { GoDotFill } from "react-icons/go";

function About() {
    return (
        <div className='w-full p-14  h-screen bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl  text-black '>
            <h1 className="font-['Neue Montreal'] text-[3vw] leading-[4vw] tracking-tight  " >Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>

            <div className="w-full flex gap-5 border-t-[1px] mt-20 border-[#687537] pt-10">
                <div className="w-1/2">
                    <h1 className='text-[4vw]' >Our approach:</h1>
                    <div className='flex justify-between items-center flex-wrap mt-5   text-[1.2vw]' >
                        <button className='bg-zinc-800 text-white rounded-full py-5 px-12 flex items-center  justify-between gap-7  uppercase '>Read More
                            <div className="left-0"><GoDotFill /></div>
                        </button>
                    </div>
                </div>
                {/* <div className=" w-1/2 h-[70vh] bg-[#808d51] flex gap-5 rounded-3xl"></div> */}

            </div>



        </div>
    )
}

export default About
