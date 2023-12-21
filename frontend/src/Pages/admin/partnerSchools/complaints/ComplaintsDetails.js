import React from 'react'
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development'
import { IoIosArrowRoundBack } from "react-icons/io";
import { useState } from "react";
import AdminLogin from "../../AdminLogin"

const ComplaintsDetails = () => {


    const [user, setUser] = useState(false)

    return (
        <div className="">
            {user ? (
                <AdminLogin />

            ) : (
                <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-screen">
                    <div className="w-full  bg-[#C8D1DA] flex flex-col gap-3">
                        <div className='flex justify-between '>
                            <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Chat</p>
                            <Link to='/school-complaints/hr' className='mt-8'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>

                        </div>
                    </div>
                    <div className='border-[#F13178] border-b '></div>



                    <div className='flex flex-row gap-12 md:gap-52 lg:gap-60'>


                    </div>
                    <div className='grid grid-cols-2 gap-2'>
                        <div className='pl-5 rounded-md "w-[412px] h-[40px] bg-slate-400 flex items-center justify-between pr-5'>
                            <div className='flex'>
                                <div className='sm:flex gap-4 '>
                                    <p className='text-[#134574] ml-2 text-sm font-bold'>ID: 8920182</p>

                                    <p className='px-2 text-sm text-[#134574]'> Title: Unable to Login</p>
                                </div>
                            </div>


                        </div>
                        <div className=''>

                        </div>
                        <div className=''>

                        </div>

                        <div className='pl-5 rounded-md "w-[412px] h-[40px] bg-slate-400 flex items-center justify-between pr-5'>
                            <div className='flex'>
                                <div className='sm:flex gap-4 '>
                                    <p className='text-[#134574] ml-2 text-sm font-bold'>ID: 8920182</p>

                                    <p className='px-2 text-sm text-[#134574]'> Title: Unable to Login</p>
                                </div>
                            </div>


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

export default ComplaintsDetails