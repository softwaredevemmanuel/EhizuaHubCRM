import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { FaTimes } from "react-icons/fa";


const Details = () => {

    return (
        <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-screen">
            <div className='flex justify-between '>
                <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Loan Details</p>
                <Link to='/staff-loan/hr' className='mt-8'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>

            </div>
            <div className='border-[#F13178] border-b '></div>

            <div className='bg-slate-200 pt-4 pl-4 text-[#134574]  rounded-md'>
                <div className='flex justify-end pr-4'>
                    <p className='text-[#F13178] font-bold'>Not Qualified </p>
                </div>
                <p><span className='font-bold'>Name:</span> Okereke Emmanuel </p>
                <p><span className='font-bold'>Staff Code:</span> 4THYU88 </p>
                <p><span className='font-bold'>Amount</span>: N50,000 </p>
                <p><span className='font-bold'>Type:</span> Salary Advance</p>
                <p><span className='font-bold'>Plan:</span> 1 Month</p>
                <p><span className='font-bold'>Reason:</span> Weekly Goals: Let's start the week by setting clear objectives. Please review your individual and team goals and ensure alignment with our overall department objectives.<br /><br /></p>

            </div>

            <div className='pb-8'>
                <p className='text-[#F13178] pt-8 font-bold mb-2'>Comment</p>
                <textarea type='text' placeholder='Add comment here' className='h-[80px] w-full rounded-md outline-none p-6 text-neutral-700'
                />
                <div className='flex gap-4 mt-4'>
                    <Link className="flex bg-slate-500 p-1 text-[#ede43b] rounded-md  w-32 items-center justify-center">
                        <p className='font-bold'>Review</p>
                        <TiTick size={26} className="text-white" />
                    </Link>
                    <Link className="flex bg-slate-500 p-1 text-[#16DA70] rounded-md  w-32 items-center justify-center">
                        <p className='font-bold'>Accept</p>
                        <TiTick size={26} className="text-white" />
                    </Link>

                    <Link className="flex bg-slate-500 p-1 text-[#DA162E] rounded-md w-32 items-center justify-center">
                        <p className='font-bold'>Decline</p>
                        <FaTimes size={20} className="text-white" />
                    </Link>
                </div>
            </div>







        </div>



    )
}

export default Details