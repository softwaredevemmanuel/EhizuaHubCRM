import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom'
import { TiCameraOutline } from "react-icons/ti";



const CreateSchool = () => {
    return (
        <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full">
            <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
                <div className='flex justify-between '>
                </div>
            </div>

            <div className='flex justify-between '>
                <p className='text-[#F13178] text-[20px] mt-2 font-extrabold' >Register School</p>
                <Link to='/partner-schools/hr' className='mt-2'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>

            </div>

            <div className='border-[#F13178] border-b '></div>

            <form className='bg-slate-200 sm:h-[800px] rounded-md pb-8'>
                <div className='sm:flex gap-4 mt-6 px-8'>
                    <p className='text-sm text-gray-600 w-[80px] pt-2'>Name</p>
                    <input type='text' placeholder='School Name' className='rounded-md w-full h-[40px] outline-none pl-4' />

                </div>

                

                <div className='sm:flex gap-4 mt-2 sm:mt-6 px-8'>
                    <p className='text-sm text-gray-600 w-[80px] pt-2'>Courses</p>

                    <div className='grid grid-cols-2 w-full lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3'>
                        <div className=' items-center justify-center text-center'>
                            <p className='text-sm text-gray-600 pt-4 sm:pt-2 w-full'>Animation</p>
                            <input type='checkbox' className='rounded-md w-full h-[20px] outline-none' />
                         </div>


                        <div className=' items-center justify-center text-center'>
                            <p className='text-sm text-gray-600  pt-4 sm:pt-2 w-full'>Python</p>
                            <input type='checkbox' className='rounded-md w-full h-[20px] outline-none'  />
                        </div>

                        <div className=' items-center justify-center text-center'>
                            <p className='text-sm text-gray-600 pt-4 sm:pt-2 '>Web Development</p>
                            <input type='checkbox' className='rounded-md w-full h-[20px] outline-none ' />
                        </div>

                        <div className=' items-center justify-center text-center'>
                            <p className='text-sm text-gray-600 pt-4 sm:pt-2 w-full'>Lego Robotics</p>
                            <input type='checkbox' className='rounded-md w-full h-[20px] outline-none ' />
                        </div>

                        <div className=' items-center justify-center text-center'>
                            <p className='text-sm text-gray-600 pt-4 sm:pt-2 w-full'>Arduino Robotics</p>
                            <input type='checkbox' className='rounded-md w-full h-[20px] outline-none ' />
                        </div>
                        <div className=' items-center justify-center text-center'>
                            <p className='text-sm text-gray-600 pt-4 sm:pt-2 w-full'>Photography</p>
                            <input type='checkbox' className='rounded-md w-full h-[20px] outline-none ' />
                        </div>

                    </div>



                </div>

                <div className='sm:flex gap-4 mt-2 sm:mt-6 px-8'>
                    <p className='text-sm text-gray-600 w-[80px] pt-2'>Days</p>

                    <div className='grid grid-cols-3 w-full md:flex '>
                        <div className=' items-center justify-center text-center md:w-full'>
                            <p className='text-sm text-gray-600 pt-4 sm:pt-2 w-full'>Monday</p>
                            <input type='checkbox' className='rounded-md w-full h-[20px] outline-none' />
                         </div>


                        <div className=' items-center justify-center text-center md:w-full'>
                            <p className='text-sm text-gray-600  pt-4 sm:pt-2 w-full'>Tuesday</p>
                            <input type='checkbox' className='rounded-md w-full h-[20px] outline-none'  />
                        </div>

                        <div className=' items-center justify-center text-center md:w-full'>
                            <p className='text-sm text-gray-600 pt-4 sm:pt-2 w-full'>Wednesday</p>
                            <input type='checkbox' className='rounded-md w-full h-[20px] outline-none ' />
                        </div>

                        <div className=' items-center justify-center text-center md:w-full'>
                            <p className='text-sm text-gray-600 pt-4 sm:pt-2 w-full'>Thursday</p>
                            <input type='checkbox' className='rounded-md w-full h-[20px] outline-none ' />
                        </div>

                        <div className=' items-center justify-center text-center md:w-full'>
                            <p className='text-sm text-gray-600 pt-4 sm:pt-2 w-full'>Friday</p>
                            <input type='checkbox' className='rounded-md w-full h-[20px] outline-none ' />
                        </div>
                        <div className=' items-center justify-center text-center md:w-full'>
                            <p className='text-sm text-gray-600 pt-4 sm:pt-2 w-full'>Saturday</p>
                            <input type='checkbox' className='rounded-md w-full h-[20px] outline-none ' />
                        </div>

                    </div>



                </div>
                <div className='sm:flex gap-4  sm:mt-6 px-8'>
                    <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'>Email</p>
                    <input type='text' placeholder='example@gmail.com' className='rounded-md w-full h-[40px] outline-none pl-4' />
                    <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'>Phone </p>
                    <input type='number' placeholder='Eg 08012345678' className='rounded-md w-full h-[40px] outline-none pl-4' />


                </div>
                <div className='sm:flex gap-4 sm:mt-6 px-8'>

                    <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'>Duration</p>
                    <select type='text' className='rounded-md w-full h-[40px] text-gray-600 pl-2 outline-none'>
                        <option>Select</option>
                        <option> 1 x Weeks</option>
                        <option> 2 x Weeks</option>
                        <option> 3 x Weeks</option>
                    </select>
                    <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'>Fee</p>
                    <input type='number' placeholder='Course Fee Per Child' className='rounded-md w-full h-[40px] outline-none pl-4' />

                </div>
                <div className='sm:flex gap-4 sm:mt-6 px-8'>
                    <p className='text-sm text-gray-600 w-[80px] pt-4 sm:pt-2'>Address</p>
                    <textarea placeholder='School Address' className='outline-none w-full rounded-md h-[80px] pl-4 pt-2' />

                </div>



                <div className='flex gap-4 mt-6 px-8'>
                    <p className='text-sm text-gray-600  pt-2'>Display Picture</p>
                    <button className=' bg-[#F13178] px-2  text-white md:text-[15px]  rounded-lg text-[11px] flex items-center gap-4 font-bold h-[40px]'>
                        Take Picture
                        <TiCameraOutline className=" text-white text-[15px] md:text-[20px] " />
                    </button>

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

export default CreateSchool