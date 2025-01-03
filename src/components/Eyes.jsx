import React, { useEffect, useState } from 'react';
import eyeBg from '../assets/eyeBg.png';

function Eyes() {

    const [rotate , setRotate]= useState(0); 

    useEffect(()=>{
        window.addEventListener('mousemove', (e)=>{
            let mouseX = e.clientX ;
            let mouseY = e.clientY ;
            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;
            var angel = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angel-180);
            
            
        }  )
    })
    return (
        <div className="eyes w-full h-screen overflow-hidden">
            <div 
            data-scroll
             data-scroll-speed="-.7"
              className="relative w-full bg-cover bg-center h-full "
              style={{ backgroundImage: `url(${eyeBg})` }}>
                <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10">
                    <div className="flex items-center justify-center bg-zinc-100 rounded-full w-[15vw] h-[15vw]">
                        <div className="bg-zinc-900 relative rounded-full w-2/3  h-2/3 ]">
                            <div 
                            style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}}
                            className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
                                <div className="bg-zinc-100 h-10 rounded-full w-10"></div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center bg-zinc-100 rounded-full w-[15vw] h-[15vw]">
                        <div className="bg-zinc-900 h-2/3 relative rounded-full w-2/3 ]">
                        <div 
                            style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}}
                            className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
                                <div className="bg-zinc-100 h-10 rounded-full w-10"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eyes;
