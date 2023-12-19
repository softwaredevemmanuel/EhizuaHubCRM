import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom'
import { TiCameraOutline } from "react-icons/ti";



const CreateSchoolStudent = () => {
    return (
        <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full">
            <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
                <div className='flex justify-between '>
                </div>
            </div>

            <div className='flex justify-between '>
                <p className='text-[#F13178] text-[20px] mt-2 font-extrabold' >Register School Student / Pupil</p>
                <Link to='/partner-schools/hr' className='mt-2'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>

            </div>

            <div className='border-[#F13178] border-b '></div>

            <form className='bg-slate-200  h-full rounded-md pb-8'>
                <div className='sm:flex gap-4 mt-6 px-8'>
                    <p className='text-sm text-gray-600 w-[80px] pt-2'>School:</p>
                    <select type='text' placeholder='School Name' className='rounded-md w-full h-[40px] outline-none pl-4 text-gray-400' >
                        <option> Select School</option>
                        <option> Living Spring Secondary School</option>
                    </select>

                </div>

                <div className='sm:flex gap-4  sm:mt-6 px-8'>
                    <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'>First Name:</p>
                    <input type='text' className='rounded-md w-full h-[40px] outline-none pl-4' />
                    <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'>Last Name: </p>
                    <input type='test' className='rounded-md w-full h-[40px] outline-none pl-4' />


                </div>


                <div className='lg:flex'>
                    <div className='sm:flex gap-4  sm:mt-6 px-8 md:w-[550px]'>
                        <p className='text-sm text-gray-600 w-[80px] pt-4 sm:pt-2'>Class:</p>
                        <select type='text' className='rounded-md w-full h-[40px] outline-none pl-4 text-gray-400' >
                            <option>Select Class</option>
                            <option>Primary 1</option>
                            <option>Primary 2</option>
                        </select>

                    </div>
                    
                    <div className='grid grid-cols-2 w-full gap-12'>
                        <div className='sm:flex gap-4  sm:mt-6 pl-8'>
                            <p className='text-sm text-gray-600 pt-4 sm:pt-2'>Session:</p>
                            <select type='text' className='rounded-md w-full h-[40px] outline-none pl-4 text-gray-400' >
                                <option>Select Class</option>
                                <option>Primary 1</option>
                                <option>Primary 2</option>
                            </select>

                        </div>
                        <div className='sm:flex gap-4  sm:mt-6 pr-8'>
                            <p className='text-sm text-gray-600 pl-2 pt-4 sm:pt-2'>Term:</p>
                            <select type='text' className='rounded-md w-full h-[40px] outline-none pl-4 text-gray-400' >
                                <option>Select Class</option>
                                <option>Primary 1</option>
                                <option>Primary 2</option>
                            </select>

                        </div>


                    </div>


                </div>



                <div className='sm:flex gap-4 mt-2 sm:mt-6 px-8'>
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

                <div className='border-slate-400 border-b pt-8'></div>
                <p className='text-slate-400 text-[20px] mt-2 font-extrabold text-center' >
                    Optional <span className='text-base font-normal'>(Parents or Guidance Information)</span>
                </p>


                <div className='sm:flex gap-4  sm:mt-6 px-8'>
                    <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'>Email:</p>
                    <input type='text' placeholder='example@gmail.com' className='rounded-md w-full h-[40px] outline-none pl-4' />
                    <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'>Phone: </p>
                    <input type='number' placeholder='Eg 08012345678' className='rounded-md w-full h-[40px] outline-none pl-4' />
                </div>


                <div className='flex gap-8 justify-center px-8'>

                    <button className=' bg-[#F13178] px-2 w-full sm:w-[180px] text-white md:text-[15px]  rounded-lg  mt-6 text-[11px] flex items-center text-center justify-center gap-4 font-bold h-[40px]'>
                        Register
                    </button>
                </div>


            </form>





            <div className="grid grid-cols-2 lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-white max-w-[980px] w-fit pb-44">


            </div>



        </div>
    )
}

export default CreateSchoolStudent