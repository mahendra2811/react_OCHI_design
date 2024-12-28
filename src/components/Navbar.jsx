import React from 'react'

function Navbar() {
    return (
        <div className=' fixed z-[999] w-full  px-20 py-8 font-["Neue Montreal"]  flex justify-between items-center    ' >
            <div className="logo">
                   
            </div>
            <div className="links flex gap-10 ">
                {
                    ["Services", "Our works", "About Us", "Insights" , "Contact"].map((item, index) => (
                        <a key={index} className= {`text-lg font-light capitalize ${index===4 && "ml-32"} `}>{item}</a>
                    ))
                }
            </div>
        </div>
    )
}

export default Navbar
