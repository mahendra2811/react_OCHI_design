import React from 'react';
import { motion } from 'framer-motion';

function Marquee() {
    return (
        <div>
            <div className='w-full py-20 rounded-tl-3xl rounded-tr-3xl h-[50vh]  bg-[#004d43]'>
                <div className="text border-t-2 border-b-2 border-zinc-30 flex whitespace-nowrap gap-10 overflow-hidden">
                    <motion.h1
                        initial={{ x: 0 }}
                        animate={{ x: "-100%" }}
                        transition={{ ease: "linear , repeat: Infinity , duration:5" }}
                        className=' text-[16vw] leading-none font-["Founders_Grotesk_x-condensed"] font-semibold uppercase mt-0 pt-0  -mb-[1vw]   ' >
                        we are ochi
                    </motion.h1>
                    


                </div>

            </div>

        </div>
    )
}

export default Marquee
