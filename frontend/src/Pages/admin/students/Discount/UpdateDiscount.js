import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";



const UpdateCourseDiscount = () => {

    return (
        <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full pb-8">
            <div className="w-full  bg-[#C8D1DA] flex flex-col gap-3">
                <div className='flex justify-between '>
                    <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Update Discount Course</p>
                    <Link to='/course-discount/hr' className='mt-8'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>

                </div>
            </div>
            <div className='border-[#F13178] border-b '></div>

            <div className=' grid sm:grid-cols-2 gap-4 sm:gap-8'>
                <div className=''>
                    <label className='text-[#134574] '>Course Name</label>
                    <select className='pl-4 h-[40px] w-full rounded-md outline-none mt-1'>
                        <option>Select an option</option>
                        <option>FullStack Web Development</option>
                        <option>Animation</option>
                    </select>
                </div>
                <div className=''>
                    <label className='text-[#134574] '>Office Location</label>
                    <select className='pl-4 h-[40px] w-full rounded-md outline-none mt-1'>
                        <option>Select an option</option>
                        <option>All</option>
                        <option>Ehizua Hub Awoyaya</option>
                    </select>
                </div>
            </div>

            <div className='grid sm:grid-cols-2 gap-4 sm:gap-8'>
                <div className=''>
                    <label className='text-[#134574] '>Percentage Discount</label>
                    <input type='number' className='pl-4 h-[40px] w-full rounded-md outline-none mt-1' />
                </div>
                <div className=''>
                    <label className='text-[#134574] '>Duration</label>
                    <input readOnly value={`12 Weeks`} className='pl-4 h-[40px] w-full rounded-md outline-none mt-1' />
                </div>
            </div>

            <div className=' mt-4'>

                <table className="w-full bg-white border border-gray-500 mb-4">
                    <thead>
                        <tr className='text-[#134574] bg-slate-400'>
                            <th className="border p-2 ">Course Price</th>
                            <th className="border p-2">Percentage Discount</th>
                            <th className="border p-2">Promo Price</th>

                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td className="border p-3">
                                <Link to="/school-student-details/hr">
                                    300,000
                                </Link>
                            </td>
                            <td className="border p-3">
                                <Link to="/school-student-details/hr">
                                    300,000
                                </Link>
                            </td>
                            <td className="border p-3">
                                <Link to="/school-student-details/hr">
                                    300,000
                                </Link>
                            </td>
                        </tr>
                    </tbody>

                </table>


            </div>


            <div>
                <label className='text-[#134574] '>Course Details</label>
                <textarea placeholder='Message' className='pl-4 h-[100px] w-full rounded-md outline-none mt-1' />
            </div>



            <div>
                <label className='text-[#134574] '>Upload Image</label>
                <input type='file' multiple className='pl-4 h-[40px] w-full rounded-md outline-none mt-1' />
            </div>

            <div className="flex justify-center">
                <button className="bg-[#F13178] px-2 mt-4 text-center items-center rounded-[6px] font-bold flex justify-center h-[40px] w-[200px]">
                    <div className="flex">
                        <p className="text-white px-2">Update</p>
                    </div>
                </button>
            </div>







        </div>



    )
}

export default UpdateCourseDiscount