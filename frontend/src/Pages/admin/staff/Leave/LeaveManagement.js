import React from 'react'
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development'
// import { IoIosArrowRoundBack } from "react-icons/io";


import { useState } from "react";
import AdminLogin from "../../AdminLogin"

const LeaveManagement = () => {

    const [user, setUser] = useState(false)

    return (
        <div className="">
            {user ? (
                <AdminLogin />

            ) : (
                <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-screen">
                    <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
                        <div className='flex justify-between '>
                            <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Ehizua Hub Awoyaya</p>
                            {/* <Link to='/staff-leave-location' className='mt-8'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link> */}

                        </div>
                    </div>
                    <div className='border-[#F13178] border-b '></div>


                    <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3  lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-[#134574] max-w-[980px] w-full p-8 mt-4 bg-slate-200">


                        <Link to="/all-leave" className="bg-slate-500 max-w-[195px] px-1 lg:max-w-[263px] w-full text-center items-center rounded-[6px] py-1 font-bold flex flex-col justify-center">
                            <div className="grid md:grid-cols-2 gap-1">
                                <p className="text-6xl text-[#F13178] bg-slate-400">10</p>
                                <div>
                                    <p className="p-2 bg-slate-400">Leave Requests</p>
                                </div>
                            </div>
                        </Link>


                        <Link to="/declined-leave" className="bg-slate-500 max-w-[195px] px-1 lg:max-w-[263px] w-full text-center items-center rounded-[6px] py-1 font-bold flex flex-col justify-center">
                            <div className="grid md:grid-cols-2 gap-1">
                                <p className="text-6xl text-[#C70202] bg-slate-400">3</p>
                                <div>
                                    <p className="p-2 bg-slate-400">Declined Leave</p>
                                </div>  </div>
                        </Link>


                        <Link to="/pending-leave" className="bg-slate-500 max-w-[195px] px-1 lg:max-w-[263px] w-full text-center items-center rounded-[6px] py-1 font-bold flex flex-col justify-center">
                            <div className="grid md:grid-cols-2 gap-1">
                                <p className="text-6xl text-[#CEAE04] bg-slate-400">1</p>
                                <div>
                                    <p className="p-2 bg-slate-400">Pending Leave</p>
                                </div>
                            </div>
                        </Link>

                        <Link to="/approved-leave" className="bg-slate-500 max-w-[195px] px-1 lg:max-w-[263px] w-full text-center items-center rounded-[6px] py-1 font-bold flex flex-col justify-center">
                            <div className="grid md:grid-cols-2 gap-1">
                                <p className="text-6xl text-[#16DA70] bg-slate-400 ">3</p>
                                <div>
                                    <p className="p-2 bg-slate-400">Approved Leave</p>
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

export default LeaveManagement