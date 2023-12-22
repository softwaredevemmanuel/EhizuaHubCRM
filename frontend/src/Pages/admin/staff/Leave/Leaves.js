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
                    <div className='pl-5 rounded-xl "w-[412px] h-[50px] bg-slate-400 flex items-center justify-between mt-5 pr-5'>
                        <div className='flex'>
                            
                            <div className='sm:flex items-center gap-2'>
                             <p className='text-[#134574] ml-2 '>eokereke47@gmail.com</p>
                                <Link to='/staff-leave-details' className='ml-2 text-[#FFF] underline text-xs '>View More</Link>
                            </div>
                        </div>

                        <div className='flex gap-4'>


                            <Link className="flex bg-slate-300 rounded-xl sm:w-32 items-center justify-center gap-2">
                                <p className='text-yellow-600 sm:pl-4 hidden sm:block'>Pending</p>
                                <MdOutlinePending size={20} className="text-yellow-600" />
                            </Link>
                        </div>

                    </div>

                    <div className='pl-5 rounded-xl "w-[412px] h-[50px] bg-slate-400 flex items-center justify-between mt-1 pr-5'>
                        <div className='flex'>
                            
                        <div className='sm:flex items-center gap-2'>
                             <p className='text-[#134574] ml-2 '>eokereke47@gmail.com</p>
                                <Link to='/staff-leave-details' className='ml-2 text-[#FFF] underline text-xs '>View More</Link>
                            </div>
                        </div>

                        <div className='flex gap-4'>
                            <Link className="flex bg-slate-300 rounded-xl sm:w-32 items-center justify-center gap-2">
                                <p className='text-red-600 sm:pl-4 hidden sm:block'>Declined</p>
                                <FaTimes size={20} className="text-red-600" />
                            </Link>
                        </div>

                    </div>

                    <div className='pl-5 rounded-xl "w-[412px] h-[50px] bg-slate-400 flex items-center justify-between mt-1 pr-5'>
                        <div className='flex'>
                            
                        <div className='sm:flex items-center gap-2'>
                             <p className='text-[#134574] ml-2 '>eokereke47@gmail.com</p>
                                <Link to='/staff-leave-details' className='ml-2 text-[#FFF] underline text-xs '>View More</Link>
                            </div>
                        </div>

                        <div className='flex gap-4'>
                            <Link className="flex bg-slate-300 rounded-xl sm:w-32 items-center justify-center gap-2">
                                <p className='text-red-600 sm:pl-4 hidden sm:block'>Declined</p>
                                <FaTimes size={20} className="text-red-600" />
                            </Link>
                        </div>

                    </div>
                    <div className='pl-5 rounded-xl "w-[412px] h-[50px] bg-slate-400 flex items-center justify-between mt-1 pr-5'>
                        <div className='flex'>
                            
                        <div className='sm:flex items-center gap-2'>
                             <p className='text-[#134574] ml-2 '>eokereke47@gmail.com</p>
                                <Link to='/staff-leave-details' className='ml-2 text-[#FFF] underline text-xs '>View More</Link>
                            </div>
                        </div>

                        <div className='flex gap-4'>
                            <Link className="flex bg-slate-300 rounded-xl  sm:w-32 items-center justify-center gap-2">
                                <p className='text-[#2c8b59] sm:pl-4 hidden sm:block'>Approved</p>
                                <TiTick size={26} className="text-[#2c8b59]" />
                            </Link>

                        </div>

                    </div>

                    <div className='pl-5 rounded-xl "w-[412px] h-[50px] bg-slate-400 flex items-center justify-between mt-1 pr-5'>
                        <div className='flex'>
                            
                        <div className='sm:flex items-center gap-2'>
                             <p className='text-[#134574] ml-2 '>eokereke47@gmail.com</p>
                                <Link to='/staff-leave-details' className='ml-2 text-[#FFF] underline text-xs '>View More</Link>
                            </div>
                        </div>

                        <div className='flex gap-4'>
                            <Link className="flex bg-slate-300 rounded-xl  sm:w-32 items-center justify-center gap-2">
                                <p className='text-[#2c8b59] sm:pl-4 hidden sm:block'>Approved</p>
                                <TiTick size={26} className="text-[#2c8b59]" />
                            </Link>

                        </div>

                    </div>

                    <div className='pl-5 rounded-xl "w-[412px] h-[50px] bg-slate-400 flex items-center justify-between mt-1 pr-5'>
                        <div className='flex'>
                            
                        <div className='sm:flex items-center gap-2'>
                             <p className='text-[#134574] ml-2 '>eokereke47@gmail.com</p>
                                <Link to='/staff-leave-details' className='ml-2 text-[#FFF] underline text-xs '>View More</Link>
                            </div>
                        </div>

                        <div className='flex gap-4'>
                            <Link className="flex bg-slate-300 rounded-xl  sm:w-32 items-center justify-center gap-2">
                                <p className='text-[#2c8b59] sm:pl-4 hidden sm:block'>Approved</p>
                                <TiTick size={26} className="text-[#2c8b59]" />
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