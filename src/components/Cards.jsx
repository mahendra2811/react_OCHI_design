import React from 'react';

function Cards() {
    return (
        <div className='w-full h-screen bg-zinc-100 flex gap-5 px-32  items-center  '>

            <div className="cardContainer h-[50vh] w-1/2 ">
                <div className="card w-full bg-[#004D43] h-full  rounded-3xl  flex items-center justify-center  relative ">
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className='absolute px-5 py-1 border-2  rounded-full  bottom-3 left-4  flex items-center gap-4 '  > &copy; 2019-2022</button>

                </div>
            </div>
            <div className="cardContainer h-[50vh] w-1/4 ">
                <div className="card w-full bg-[#212c5e] h-full  rounded-3xl  flex items-center justify-center  relative ">
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    <button className='absolute px-5 py-1 border-2  rounded-full  bottom-3 left-4  flex items-center gap-4 '  > Rating 5.0 on Clutch</button>

                </div>
            </div>
            <div className="cardContainer h-[50vh] w-1/4 ">
                <div className="card w-full bg-[#212121] h-full  rounded-3xl  flex items-center justify-center  relative ">
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    <button className='absolute px-5 py-1 border-2  rounded-full  bottom-3 left-4  flex items-center gap-4 '  > BUSSINESS BOOTCAMP ALUMINI</button>

                </div>
            </div>


        </div>
    )
}

export default Cards
