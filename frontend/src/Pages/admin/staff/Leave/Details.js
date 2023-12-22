import React from 'react'
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development'
import { IoIosArrowRoundBack } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import AdminLogin from "../../AdminLogin"

const StaffLeaveDetails = () => {
    const data = [
        ['Casual', '10th - 12th October', '2']

    ];



    const [user, setUser] = useState(false)

    return (
        <div className="">
            {user ? (
                <AdminLogin />

            ) : (
                <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full">
                    <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
                        <div className='flex justify-between '>
                            <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' > Leave Details</p>
                            <Link to='/leave-management' className='mt-8'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>

                        </div>
                    </div>
                    <div className='border-[#F13178] border-b '></div>



                    <div className='pl-5 rounded-xl "w-[412px] h-full bg-slate-400 mt-2 pr-5'>
                        <div className='grid sm:grid-cols-2 gap-4'>
                            <div className='bg-slate-300 mt-8 pb-2 pl-2 rounded-md text-[#134574]'>
                                <div className='flex gap-8 pt-2'>
                                    <p>Name:</p>

                                    <h2>Okereke Emmanuel</h2>
                                </div>
                                <div className='flex gap-8 pt-2'>
                                    <p>Location:</p>

                                    <h2>Ehizua Hub Awoyaya</h2>
                                </div>
                                <div className='flex gap-8 pt-2'>
                                    <p>Email:</p>

                                    <h2>eokereke47@gmail.com</h2>
                                </div>
                                <div className='flex gap-8 pt-2'>
                                    <p>Position:</p>

                                    <h2>Full Stack Instructor</h2>
                                </div>
                            </div>
                            <table className="table-auto border-separate border border-slate-500 mt-8 text-[#134574] rounded-md">
                                <thead>
                                    <tr className='bg-slate-400'>
                                        <th className="border p-2">Leave Type</th>
                                        <th className="border p-2">Duration</th>
                                        <th className="border p-2">Days</th>

                                    </tr>
                                </thead>
                                <tbody className='bg-slate-300'>
                                    {data.map((row, index) => (
                                        <tr key={index} className=''>
                                            {row.map((cell, cellIndex) => (
                                                <td key={cellIndex} className="border p-3">
                                                    {cell}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>


                        <div className='pb-8'>
                            <p className='text-white pt-8'>Reason</p>
                            <textarea type='text' readOnly className='h-[240px] w-full rounded-md outline-none p-6 text-[#134574] bg-slate-200'
                                value='Aed on yo desig styling based on your design requirementsAdjust the styling based on your design requirementsAdjust the styling based on your design requirementsAdjust the styling based on your design requirementsAdjust the styling based on your design requirementsAdjust the styling based on your design requirementsAdjust the styling based on your design requirements' />
                        </div>


                    </div>

                    <div className='pb-8'>
                        <p className='text-[#F13178] pt-8 font-bold mb-2'>Comment</p>
                        <textarea type='text' placeholder='Add comment here' className='h-[80px] w-full rounded-md outline-none p-6 text-neutral-700'
                        />
                        <div className='flex gap-4 mt-4 justify-center'>
                            <Link className="flex bg-[#16DA70] rounded-xl  w-32 items-center justify-center">
                                <p className='text-white'>Accept</p>
                                <TiTick size={26} className="text-white" />
                            </Link>

                            <Link className="flex bg-[#DA162E] rounded-xl w-32 items-center justify-center">
                                <p className='text-white'>Decline</p>
                                <FaTimes size={20} className="text-white" />
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-white max-w-[980px] w-fit pb-44">
                    </div>



                </div>
            )}
            {/* right section  */}



        </div>
    )
}

export default StaffLeaveDetails