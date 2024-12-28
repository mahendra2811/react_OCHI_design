import React from 'react'

function Footer() {
    return (
        <>
            <div className="w-full h-screen bg-zinc-700 flex   ">
                <div className="w-1/2 h-full flex  justify-center relative   ">
                    <h1 className="text-white text-9xl font-bold ml-10 uppercase   top-20 absolute -mb-10  ">eye opening</h1>
                    <img className='w-32 bottom-5 left-10 absolute' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                </div>


                <div className="w-1/2 h-full flex  justify-center relative   ">

                    <h1 className="text-white text-8xl font-bold ml-10 uppercase    top-20 absolute h-[20vh]  ">Presentations</h1>
                    <div className="w-1/2 h-[20vh] absolute  left-20 top-[30vh] ">
                        <p className="text-3xl font-bold">S:</p>
                        <ul className='underline-offset-7 underline text-lg' >
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Linkedin</li>
                        </ul>
                    </div>
                    <div className="w-1/2 h-[20vh] absolute  right-0   top-[45vh] ">
                        <p className="text-3xl font-bold">M:</p>
                        <ul className='underline-offset-7 underline text-lg ' >
                            <li>Home</li>
                            <li>Services</li>
                            <li>Our Work</li>
                            <li>About us </li>
                            <li>Insights</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                    <br />
                    <div className="w-1/2 h-[20vh] absolute  left-20 top-[50vh] ">
                        <p className="text-3xl font-bold">L:</p>
                        <ul className='underline-offset-7 underline text-lg' >
                            <li>202-dammy address</li>
                            <li>Delhi , India</li>
                            <li>00 bharat nagar</li>
                            <li>india </li>
                        </ul>
                    </div>
                    <div className="w-1/2 h-[20vh] absolute  left-20   top-[72vh] ">
                        <p className="text-3xl font-bold">E:</p>
                        <ul className='underline-offset-7 underline text-lg' >
                            <li>mahipooniya143@gmailcom</li>
                        </ul>
                    </div>

                    <div className="w-[90%] h-[20vh] absolute  left-20   top-[90vh] ">
                        <p className="text-mdl font-bold">&copy; Ochi design 2024 : this designed made for educational purpose </p>
                    </div>




                </div>

            </div>

        </>

    )
}

export default Footer
