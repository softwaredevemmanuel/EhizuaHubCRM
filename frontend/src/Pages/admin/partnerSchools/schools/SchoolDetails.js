import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaDownload } from "react-icons/fa";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { TbCurrencyNaira } from "react-icons/tb";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { GiDuration } from "react-icons/gi";



import frontend from '../../../../assets/frontend.png'




const SchoolDetails = () => {
    const data = [
        [' 2', 'Okereke Emmanuel', 'jss 1', 'Web Development', 'Example@gmail.com', 'Password123', '2023 - Second Term'],
        [' 3', 'Okereke Emmanuel', 'jss 1', 'Web Development', 'Example@gmail.com', 'Password123', '2023 - Second Term'],
        [' 1', 'Okereke Emmanuel', 'jss 1', 'Web Development', 'Example@gmail.com', 'Password123', '2023 - Second Term'],
        [' 4', 'Okereke Emmanuel', 'jss 1', 'Web Development', 'Example@gmail.com', 'Password123', '2023 - Second Term'],
        [' 5', 'Okereke Emmanuel', 'jss 1', 'Web Development', 'Example@gmail.com', 'Password123', '2023 - Second Term'],
        [' 7', 'Okereke Emmanuel', 'jss 1', 'Web Development', 'Example@gmail.com', 'Password123', '2023 - Second Term'],
        [' 8', 'Okereke Emmanuel', 'jss 1', 'Web Development', 'Example@gmail.com', 'Password123', '2023 - Second Term'],
        [' 9', 'Okereke Emmanuel', 'jss 1', 'Web Development', 'Example@gmail.com', 'Password123', '2023 - Second Term'],
        [' 10', 'Okereke Emmanuel', 'jss 1', 'Web Development', 'Example@gmail.com', 'Password123', '2023 - Second Term'],
        [' 11', 'Okereke Emmanuel', 'jss 1', 'Web Development', 'Example@gmail.com', 'Password123', '2023 - Second Term'],
        [' 12', 'Okereke Emmanuel', 'jss 1', 'Web Development', 'Example@gmail.com', 'Password123', '2023 - Second Term'],
        [' 13', 'Okereke Emmanuel', 'jss 1', 'Web Development', 'Example@gmail.com', 'Password123', '2023 - Second Term'],

    ];

    return (
        <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full pb-8">
            <div className="w-full  bg-[#C8D1DA] flex flex-col gap-3">
                <div className='flex justify-between '>
                    <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Living Spring Secondary School</p>
                    <Link to='/student-course/hr' className='mt-8'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>

                </div>
            </div>
            <div className='border-[#F13178] border-b'></div>

            <div className='sm:flex justify-between'>

                <button className=" px-2 text-center items-center rounded-lg font-bold flex justify-center h-[40px] w-fit">
                    <div className="flex">
                        <p className="text-[#F13178] pl-2">Instructor Details </p>
                        <LiaChalkboardTeacherSolid size={28} className="pl-2 mr-2 text-[#F13178]" />

                    </div>
                </button>

                <button className="bg-[#F13178] px-2 text-center items-center rounded-lg font-bold flex justify-center h-[40px] w-fit sm:mt-0 mt-2">
                    <div className="flex">
                        <p className="text-white pl-2">Download Curriculum </p>
                        <FaDownload size={28} className="pl-2 mr-2 text-white" />

                    </div>
                </button>
            </div>



            <div className='bg-[#134574] h-full rounded-lg pb-4'>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
                    <img src={frontend} className="w-full sm:w-[300px] max-w-full max-h-full p-1 md:my-auto" />
                    <div className='w-full sm:col-span-2 px-4 sm:px-0 md:pr-2'>
                        <p className='text-white font-bold text-center justify-center pt-2'>School Details</p>
                        <div className='flex gap-2 text-slate-300'>
                            <IoLocationOutline className='mt-3' />
                            <p className='pt-2'>Address: </p>
                            <p className='text-slate-300 pt-2'>6 Honorable Fatai Eletu Street, Container Bus stop Awoyaya, Lagos State </p>
                        </div>
                        <div className='flex gap-2 text-slate-300'>
                            <MdOutlineAttachEmail className='mt-3' />
                            <p className='pt-2'>Email Address: </p>
                            <p className='text-slate-300 pt-2'>eokereke47@gmail.com </p>
                        </div>
                        <div className='flex gap-2 text-slate-300'>
                            <FaPhoneAlt className='mt-3' />
                            <p className='pt-2'>Phone Number: </p>
                            <p className='text-slate-300 pt-2'>08037819461 </p>
                        </div>
                        <div className='flex gap-2 text-slate-300'>
                            <MdOutlineLibraryBooks className='mt-3' />
                            <p className='pt-2'>Courses: </p>
                            <p className='text-slate-300 pt-2'>Animation, Web Development, Robotics </p>
                        </div>
                        <div className='flex gap-2 text-slate-300'>
                            <GiDuration className='mt-3' />
                            <p className='pt-2'>Duration: </p>
                            <p className='text-slate-300 pt-2'>1 x a Week </p>
                        </div>
                        <div className='flex gap-2 text-slate-300'>
                            <TbCurrencyNaira className='mt-3' />
                            <p className='pt-2'>Fee Per Child: </p>
                            <p className='text-slate-300 pt-2'> ₦20,000 </p>
                        </div>
                        <div className='flex gap-2 text-slate-300'>
                            <MdOutlineVerifiedUser className='mt-3' />
                            <p className='pt-2'>Is-Verified: </p>
                            <p className='text-green-400 pt-2'> Yes </p>
                        </div>


                    </div>
                </div>


            </div>
            <div className='md:flex gap-8 pt-4'>
                <p className='pt-1 text-[#F13178]'>Sort By</p>
                <div className='flex gap-2'>
                    <select className=' rounded-lg h-[30px]  w-[200px] text-slate-500 outline-none'>
                        <option> Class </option>
                        <option> Primary 1 </option>
                    </select>
                    <select className='rounded-lg h-[30px] w-[200px] text-slate-500 outline-none'>
                        <option> Course </option>
                        <option> Primary 1 </option>
                    </select>
                    <select className='rounded-lg h-[30px] w-[200px] text-slate-500 outline-none'>
                        <option> Session </option>
                        <option> Primary 1 </option>
                    </select>
                </div>

            </div>

            <p className='text-center justify-center text-[#F13178] font-extrabold text-lg pt-2'>List of Students</p>

            <div className='bg-slate-200  h-[520px] rounded-lg sm:px-1'>
                <div className='overflow-x-auto mt-1'>
                    <div className='p-1 h-[500px]'>

                        <table className="w-[900px] bg-white border border-gray-500 mb-8">
                            <thead>
                                <tr>
                                    <th className="border p-2  left-0 bg-white z-10">No</th>
                                    <th className="border p-2  left-0 bg-white z-10">Full-Name</th>
                                    <th className="border p-2">Course</th>
                                    <th className="border p-2">Verified</th>
                                    <th className="border p-2">Email</th>
                                    <th className="border p-2">Password</th>
                                    <th className="border p-2">Term</th>

                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row, index) => (
                                    <tr key={index} className=''>
                                        {row.map((cell, cellIndex) => (
                                            <td key={cellIndex} className="border p-3">
                                                {cell}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>


                    </div>
                </div>


            </div>



            <div className="grid grid-cols-2 lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-white max-w-[980px] w-fit pb-44">

            </div>



        </div>



    )
}

export default SchoolDetails