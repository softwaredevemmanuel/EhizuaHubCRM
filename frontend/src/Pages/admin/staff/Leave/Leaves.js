import React from 'react'
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development'
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { MdOutlinePending } from "react-icons/md";



import { useState } from "react";
import AdminLogin from "../../AdminLogin"

const AllLeave = () => {


    const [user, setUser] = useState(false)

    return (
        <div className="">
            {user ? (
                <AdminLogin />

            ) : (
                <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full">
                    <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
                        <div className='flex justify-between '>
                            <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >All Leave Request</p>
                            <Link to='/leave-management' className='mt-8'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>

                        </div>
                    </div>
                    <div className='border-[#F13178] border-b '></div>


                    
                    <div className='flex flex-row gap-12 md:gap-52 lg:gap-60'>
                   
          
                    </div>
                    <div className='pl-5 rounded-xl "w-[412px] h-[50px] bg-[#134574] flex items-center justify-between mt-5 pr-5'>
                        <div className='flex'>
                            <p className='text-white'>1</p>
                            <div className='sm:flex '>
                                <p className='text-white ml-2 text-sm'>eokereke47@gmail.com</p>
                                <Link to='/staff-leave-details' className='ml-2 text-[#16DA70] underline text-sm'>View More</Link>
                            </div>
                        </div>

                        <div className='flex gap-4'>


                            <Link className="flex bg-[#FFC909] rounded-xl sm:w-32 items-center justify-center">
                                <p className='text-white sm:pl-4 hidden sm:block'>Pending</p>
                                <MdOutlinePending size={20} className="text-white" />
                            </Link>
                        </div>

                    </div>

                    <div className='pl-5 rounded-xl "w-[412px] h-[50px] bg-[#134574] flex items-center justify-between mt-5 pr-5'>
                        <div className='flex'>
                            <p className='text-white'>1</p>
                            <div className='sm:flex '>
                                <p className='text-white ml-2 text-sm'>eokereke47@gmail.com</p>
                                <Link to='/staff-leave-details' className='ml-2 text-[#16DA70] underline text-sm'>View More</Link>
                            </div>
                        </div>

                        <div className='flex gap-4'>
                            <Link className="flex bg-[#DA162E] rounded-xl sm:w-32 items-center justify-center">
                                <p className='text-white sm:pl-4 hidden sm:block'>Declined</p>
                                <FaTimes size={20} className="text-white" />
                            </Link>
                        </div>

                    </div>

                    <div className='pl-5 rounded-xl "w-[412px] h-[50px] bg-[#134574] flex items-center justify-between mt-5 pr-5'>
                        <div className='flex'>
                            <p className='text-white'>1</p>
                            <div className='sm:flex '>
                                <p className='text-white ml-2 text-sm'>eokereke47@gmail.com</p>
                                <Link to='/staff-leave-details' className='ml-2 text-[#16DA70] underline text-sm'>View More</Link>
                            </div>
                        </div>

                        <div className='flex gap-4'>
                            <Link className="flex bg-[#DA162E] rounded-xl sm:w-32 items-center justify-center">
                                <p className='text-white sm:pl-4 hidden sm:block'>Declined</p>
                                <FaTimes size={20} className="text-white" />
                            </Link>
                        </div>

                    </div>
                    <div className='pl-5 rounded-xl "w-[412px] h-[50px] bg-[#134574] flex items-center justify-between mt-5 pr-5'>
                        <div className='flex'>
                            <p className='text-white'>1</p>
                            <div className='sm:flex '>
                                <p className='text-white ml-2 text-sm'>eokereke47@gmail.com</p>
                                <Link to='/staff-leave-details' className='ml-2 text-[#16DA70] underline text-sm'>View More</Link>
                            </div>
                        </div>

                        <div className='flex gap-4'>
                            <Link className="flex bg-[#16DA70] rounded-xl  sm:w-32 items-center justify-center">
                                <p className='text-white sm:pl-4 hidden sm:block'>Approved</p>
                                <TiTick size={26} className="text-white" />
                            </Link>

                        </div>

                    </div>

                    <div className='pl-5 rounded-xl "w-[412px] h-[50px] bg-[#134574] flex items-center justify-between mt-5 pr-5'>
                        <div className='flex'>
                            <p className='text-white'>1</p>
                            <div className='sm:flex '>
                                <p className='text-white ml-2 text-sm'>eokereke47@gmail.com</p>
                                <Link to='/staff-leave-details' className='ml-2 text-[#16DA70] underline text-sm'>View More</Link>
                            </div>
                        </div>

                        <div className='flex gap-4'>
                            <Link className="flex bg-[#16DA70] rounded-xl  sm:w-32 items-center justify-center">
                                <p className='text-white sm:pl-4 hidden sm:block'>Approved</p>
                                <TiTick size={26} className="text-white" />
                            </Link>

                        </div>

                    </div>

                    <div className='pl-5 rounded-xl "w-[412px] h-[50px] bg-[#134574] flex items-center justify-between mt-5 pr-5'>
                        <div className='flex'>
                            <p className='text-white'>1</p>
                            <div className='sm:flex '>
                                <p className='text-white ml-2 text-sm'>eokereke47@gmail.com</p>
                                <Link to='/staff-leave-details' className='ml-2 text-[#16DA70] underline text-sm'>View More</Link>
                            </div>
                        </div>

                        <div className='flex gap-4'>
                            <Link className="flex bg-[#16DA70] rounded-xl  sm:w-32 items-center justify-center">
                                <p className='text-white sm:pl-4 hidden sm:block'>Approved</p>
                                <TiTick size={26} className="text-white" />
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

export default AllLeave