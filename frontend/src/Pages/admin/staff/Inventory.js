import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";



const Inventory = () => {

    return (
        <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-screen">
            <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
                <div className='flex justify-between '>
                    <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Inventory</p>
                    <Link to='/staff-memo/hr' className='mt-8'><IoIosArrowRoundBack size={38} className="text-[#F13178]"/></Link>

                </div>
            </div>
            <div className='border-[#F13178] border-b '></div>



        </div>



    )
}

export default Inventory