import React from 'react'

function Eyes() {
    return (
        <div>
            <div className="eyes w-full h-screen overflow-hidden p-0  " >
                <div className="realtive w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')] opacity-75 m-0 p-0 ">
                    <div className="  absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] bg-blue-600">

                        <div className="w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex justify-center items-center  ">
                            <div className="w-2/3 h-2/3 rounded-full bg-zinc-900 flex items-center justify-center  ">
                                <div className="line realtive absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10  bg-red-400">

                                    <div className="w-10 h-10 rounded-full bg-zinc-100 "></div>
                                </div>
                            </div>

                        </div>
                        {/* <div className="w-[15vw] h-[15vw] rounded-full bg-red-500 ">
                            <div className="w-2/3 h-2/3 rounded-full bg-zinc-900 flex items-center justify-center  ">
                                <div className="line w-full h-10 ">
                                    <div className="w-10 h-10 rounded-full bg-zinc-100 "></div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Eyes;
