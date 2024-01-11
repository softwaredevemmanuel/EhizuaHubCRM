import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom'
import { TiCameraOutline } from "react-icons/ti";



const UpdateStudent = () => {
    return (
        <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full">
            <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
                <div className='flex justify-between '>
                </div>
            </div>

            <div className='flex justify-between '>
                <p className='text-[#F13178] text-[20px] mt-2 font-extrabold' >Update School Student Details</p>
                <Link to='/school-student-details/hr' className='mt-2'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>

            </div>

            <div className='border-[#F13178] border-b '></div>

            <form className='bg-slate-200 h-full rounded-md pb-8 mb-12'>
          
                <div className='sm:flex gap-4 mt-4 px-8'>
                    <div className='w-full'>
                        <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'> First Name</p>
                        <input type='text' className='rounded-md w-full h-[40px] outline-none pl-4 mt-2' />
                    </div>
                    <div className='w-full'>
                        <p className='text-sm text-gray-600 w-[180px] pt-2'>Middle Name</p>
                        <input type='text' className='rounded-md w-full h-[40px] outline-none pl-4 mt-2' />
                    </div>
                </div>
                <div className='sm:flex gap-4 mt-2 px-8'>
                    <div className='w-full'>
                        <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'> Last Name</p>
                        <input type='text' className='rounded-md w-full h-[40px] outline-none pl-4 mt-2' />
                    </div>
                    <div className='w-full'>
                        <p className='text-sm text-gray-600 w-[180px] pt-2'>Class</p>
                        <input type='text' className='rounded-md w-full h-[40px] outline-none pl-4 mt-2' />
                    </div>
                </div>
                <div className='sm:flex gap-4 mt-2 px-8'>
                    <div className='w-full'>
                        <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'> Email</p>
                        <input type='text' className='rounded-md w-full h-[40px] outline-none pl-4 mt-2' />
                    </div>
                    <div className='w-full'>
                        <p className='text-sm text-gray-600 w-[180px] pt-2'>Password</p>
                        <input type='text' className='rounded-md w-full h-[40px] outline-none pl-4 mt-2' />
                    </div>
                </div>

            
              
                <div className='sm:flex gap-4 mt-2 sm:mt-2 px-8'>
                    <p className='text-sm text-gray-600 w-[80px] pt-2'>Courses:</p>

                    <div className='grid grid-cols-2 w-full lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3'>
                        <div className=' items-center justify-center text-center'>
                            <p className='text-sm text-gray-600 pt-4 sm:pt-2 w-full'>Animation</p>
                            <input type='checkbox' className='rounded-md w-full h-[20px] outline-none' />
                        </div>


                        <div className=' items-center justify-center text-center'>
                            <p className='text-sm text-gray-600  pt-4 sm:pt-2 w-full'>Python</p>
                            <input type='checkbox' className='rounded-md w-full h-[20px] outline-none' />
                        </div>

                        <div className=' items-center justify-center text-center'>
                            <p className='text-sm text-gray-600 pt-4 sm:pt-2 '>Web Development</p>
                            <input type='checkbox' className='rounded-md w-full h-[20px] outline-none ' />
                        </div>

                    </div>



                </div>


                <div className='sm:flex gap-4 mt-6 px-8'>
                    <div className='w-full'>
                        <p className='text-sm text-gray-600 w-full pt-4 sm:pt-2'> Parent / Guidance Phone Number</p>
                        <input type='text' className='rounded-md w-full h-[40px] outline-none pl-4 mt-2' />
                    </div>
                    <div className='w-full'>
                        <p className='text-sm text-gray-600 w-full pt-2'>Parents / Guidance Home Address</p>
                        <textarea type='text' className='rounded-md w-full h-[40px] outline-none pl-4 mt-2' />
                    </div>
                </div>


                <div className='flex gap-8 justify-center px-8'>

                    <button className=' bg-[#F13178] px-2 w-full sm:w-[180px] text-white md:text-[15px]  rounded-lg  mt-6 text-[11px] flex items-center text-center justify-center gap-4 font-bold h-[40px]'>
                        Update
                    </button>
                </div>

            </form>



        </div>
    )
}

export default UpdateStudent