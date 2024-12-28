import React from 'react';
import { GoDotFill } from "react-icons/go";

import about from "../assets/about.jpg"

function About() {
    return (
        <div className='w-full p-14   bg-[#cdea68] rounded-t-3xl  text-black '>
            <h1 className="font-['Neue Montreal'] text-[3vw] leading-[4vw] tracking-tight  " >Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>

            <div className="w-full h-[20vh] flex flex-col relative justify-center  border-t-[1px] border-[#687537] mt-8">
                <div className="w-1/2 text-2xl mt-0 absolute left-2  ">
                    <p>What you can expect:</p>
                </div>
                <div className="w-1/4 text-md absolute items-center left-[50vw] top-5">
                    <p>
                        We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.
                    </p> <br />
                    <p>
                        We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
                    </p>
                </div>
                <div className="w-1/4 text-md absolute items-center  top-5 right-0 text-right">
                    <ul>S:
                        <li>Instagram</li>
                        <li>Whatsapp</li>
                        <li>Github</li>
                        <li>Linkedin</li>
                    </ul>
                </div>

            </div>

            <div className="w-full flex gap-5 border-t-[1px] mt-20 border-[#687537] pt-10">
                <div className="w-1/2">
                    <h1 className='text-[4vw]' >Our approach:</h1>
                    <div className='flex justify-between items-center flex-wrap mt-5   text-[1.2vw]' >
                        <button className='bg-zinc-800 text-white rounded-full py-5 px-12 flex items-center  justify-between gap-7  uppercase '>Read More
                            <div className="left-0"><GoDotFill /></div>
                        </button>
                    </div>
                </div>
                <div className=" w-1/2 h-[70vh]  flex gap-5 rounded-3xl">
                <img className='w-full h-full overflow-hidden rounded-3xl ' src={about} alt="" />
                </div>

            </div>



        </div>
    )
}

export default About
