import React from 'react'
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development'
import { IoMailUnreadOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";



import { useState } from "react";
import AdminLogin from "../AdminLogin"

const Complaints = () => {

    const [user, setUser] = useState(false)

    return (
        <div className="">
            {user ? (
                <AdminLogin />

            ) : (
                <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-screen">
                <div className="w-full  bg-[#C8D1DA] flex flex-col gap-3">
                    <div className='flex justify-between '>
                        <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Staff Complaints</p>

                    </div>
                </div>
                <div className='border-[#F13178] border-b '></div>


                <div className=" grid md:grid-cols-3 bg-slate-200 p-2 gap-1">
                    <div className='sm:mt-2 md:mt-0'>
                        <p className=' text-center text-[#134574] bg-slate-300'>New</p>

                        <div className=' h-[300px] gap-2'>
                            <Link to="">
                                <div className='bg-slate-400 h-[145px] items-center justify-center'>
                                    <p className=' text-center text-white pt-2'>3 new message</p>

                                    <IoMailUnreadOutline size={38} className='text-white mx-auto' />


                                </div>
                            </Link>

                            <Link>
                                <div className='bg-slate-400 h-[150px] mt-1 grid grid-cols-2 gap-1 p-1 text-[#134574]'>
                                    <div className='bg-slate-300 rounded-sm'>
                                    <p className=' text-center '>Total Complaints</p>
                                    <p className=' text-center  font-bold'>10</p>
                                    </div>
                                    <div className='bg-slate-300 rounded-sm'>
                                    <p className=' text-center '>Open Ticket</p>
                                    <p className=' text-center  font-bold'>4</p>
                                    </div>
                                    <div className='bg-slate-300 rounded-sm'>
                                    <p className=' text-center '>Resolved </p>
                                    <p className=' text-center  font-bold'>5</p>
                                    </div>
                                   

                                </div>
                            </Link>


                        </div>
                    </div>


                    <Link className="mt-4 md:mt-0">
                        <p className=' text-center text-[#FFF] bg-[#F13178]'>Complaints in View</p>
                        <div className='bg-slate-500 h-[300px] pt-2 overflow-y-auto'>
                            <div className='bg-slate-300 p-1 mx-1 rounded-lg text-[#F13178] mb-2'>
                                <div className='flex justify-between px-2'>
                                    <p className='font-bold'>ID: 8920182</p>
                                    <Link>
                                    <IoMailUnreadOutline size={20} className=' mx-auto' />
                                    </Link>

                                </div>

                                <p className='px-2 text-sm'> I dont have access to the hub</p>
                            </div>
                          
            
                            <div className='bg-slate-300 p-1 mx-1 rounded-lg text-[#134574] mb-2'>
                                <div className='flex justify-between px-2'>
                                    <p className='font-bold'>ID: 8920182</p>
                                    <Link>
                                        <p className=' underline text-green-800 text-sm '>View Details</p>
                                    </Link>

                                </div>

                                <p className='px-2 text-sm'> I dont have access to the hub</p>
                            </div>
                            <div className='bg-slate-300 p-1 mx-1 rounded-lg text-[#134574] mb-2'>
                                <div className='flex justify-between px-2'>
                                    <p className='font-bold'>ID: 8920182</p>
                                    <Link>
                                        <p className=' underline text-green-800 text-sm '>View Details</p>
                                    </Link>

                                </div>

                                <p className='px-2 text-sm'> I dont have access to the hub</p>
                            </div>
                            <div className='bg-slate-300 p-1 mx-1 rounded-lg text-[#134574] mb-2'>
                                <div className='flex justify-between px-2'>
                                    <p className='font-bold'>ID: 8920182</p>
                                    <Link>
                                        <p className=' underline text-green-800 text-sm '>View Details</p>
                                    </Link>

                                </div>

                                <p className='px-2 text-sm'> I dont have access to the hub</p>
                            </div>
                            <div className='bg-slate-300 p-1 mx-1 rounded-lg text-[#134574] mb-2'>
                                <div className='flex justify-between px-2'>
                                    <p className='font-bold'>ID: 8920182</p>
                                    <Link>
                                        <p className=' underline text-green-800 text-sm '>View Details</p>
                                    </Link>

                                </div>

                                <p className='px-2 text-sm'> I dont have access to the hub</p>
                            </div>

                        </div>
                    </Link>

                    <Link className="mt-4 md:mt-0">
                        <p className=' text-center text-[#FFF] bg-[#134574] '>Resolved Complaints</p>
                        <div className='bg-slate-500 h-[300px] pt-2 overflow-y-auto'>
                            <div className='bg-slate-300 p-1 mx-1 rounded-lg text-[#134574] mb-2'>
                                <div className='flex justify-between px-2'>
                                    <p className='font-bold'>ID: 8920182</p>
                                    <Link>
                                        <p className=' underline text-[#134574] text-sm '>View Details</p>
                                    </Link>

                                </div>
                                <div className='flex gap-1 px-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <CiStar />
                                <CiStar />

                                </div>

                            </div>
                            <div className='bg-slate-300 p-1 mx-1 rounded-lg text-[#134574] mb-2'>
                                <div className='flex justify-between px-2'>
                                    <p className='font-bold'>ID: 8920182</p>
                                    <Link>
                                        <p className=' underline text-[#134574] text-sm '>View Details</p>
                                    </Link>

                                </div>
                                <div className='flex gap-1 px-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <CiStar />
                                <CiStar />

                                </div>

                            </div>
                            <div className='bg-slate-300 p-1 mx-1 rounded-lg text-[#134574] mb-2'>
                                <div className='flex justify-between px-2'>
                                    <p className='font-bold'>ID: 8920182</p>
                                    <Link>
                                        <p className=' underline text-[#134574] text-sm '>View Details</p>
                                    </Link>

                                </div>
                                <div className='flex gap-1 px-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <CiStar />
                                <CiStar />

                                </div>

                            </div>
                            <div className='bg-slate-300 p-1 mx-1 rounded-lg text-[#134574] mb-2'>
                                <div className='flex justify-between px-2'>
                                    <p className='font-bold'>ID: 8920182</p>
                                    <Link>
                                        <p className=' underline text-[#134574] text-sm '>View Details</p>
                                    </Link>

                                </div>
                                <div className='flex gap-1 px-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <CiStar />
                                <CiStar />

                                </div>

                            </div>
                            <div className='bg-slate-300 p-1 mx-1 rounded-lg text-[#134574] mb-2'>
                                <div className='flex justify-between px-2'>
                                    <p className='font-bold'>ID: 8920182</p>
                                    <Link>
                                        <p className=' underline text-[#134574] text-sm '>View Details</p>
                                    </Link>

                                </div>
                                <div className='flex gap-1 px-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <CiStar />
                                <CiStar />

                                </div>

                            </div>
                            <div className='bg-slate-300 p-1 mx-1 rounded-lg text-[#134574] mb-2'>
                                <div className='flex justify-between px-2'>
                                    <p className='font-bold'>ID: 8920182</p>
                                    <Link>
                                        <p className=' underline text-[#134574] text-sm '>View Details</p>
                                    </Link>

                                </div>
                                <div className='flex gap-1 px-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <CiStar />
                                <CiStar />

                                </div>

                            </div>

                        </div>
                    </Link>





                </div>


                <div className="grid grid-cols-2 lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-white max-w-[980px] w-fit pb-44">




                </div>



            </div>
            )}
            {/* right section  */}



        </div>
    )
}

export default Complaints