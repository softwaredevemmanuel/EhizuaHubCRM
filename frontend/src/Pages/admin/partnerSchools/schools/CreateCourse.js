import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom'
import { TiCameraOutline } from "react-icons/ti";



const CreateCourse = () => {
    return (
        <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-screen">
            <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
                <div className='flex justify-between '>
                </div>
            </div>

            <div className='flex justify-between '>
                <p className='text-[#F13178] text-[20px] mt-2 font-extrabold' >Create Course</p>
                <Link to='/partner-schools/hr' className='mt-2'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>

            </div>

            <div className='border-[#F13178] border-b '></div>

            <form className='bg-slate-200 h-fit rounded-md pb-4'>
                <div className='sm:flex gap-4 mt-6 px-8'>
                    <p className='text-sm text-gray-600 w-[80px] pt-2'>Name</p>
                    <input type='text' placeholder='eg Fullstack Web Development' className='rounded-md w-full h-[40px] outline-none pl-4' />

                </div>



                <div className='flex gap-8 justify-center px-8'>

                    <button className=' bg-[#F13178] px-2 w-full sm:w-[180px] text-white md:text-[15px]  rounded-lg  mt-6 text-[11px] flex items-center text-center justify-center gap-4 font-bold h-[40px]'>
                        Create
                    </button>
                </div>





            </form>





            <div className="grid grid-cols-2 lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-white max-w-[980px] w-fit pb-44">


            </div>



        </div>
    )
}

export default CreateCourse