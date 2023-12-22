import React from 'react'
import { Link } from 'react-router-dom'
import { FaCirclePlus } from "react-icons/fa6";
import { MdArrowDropDown } from "react-icons/md";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useState } from 'react'


const EhizuaStaff = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isPosition, setIsPosition] = useState(false);

    const showPositions = () => {
        setIsPosition(!isPosition);
        setIsOpen(false);

    };

    const showLocations = () => {
        setIsOpen(!isOpen);
        setIsPosition(false);

    };

    const data = [
        [' 1', 'Okereke Emmanuel', '09015653022', 'Yes', 'Example@gmail.com'],
        [' 2', 'Okereke Emmanuel', '09015653022', 'Yes', 'Example@gmail.com'],
        [' 3', 'Okereke Emmanuel', '09015653022', 'Yes', 'Example@gmail.com'],
        [' 4', 'Okereke Emmanuel', '09015653022', 'Yes', 'Example@gmail.com'],
        [' 5', 'Okereke Emmanuel', '09015653022', 'Yes', 'Example@gmail.com'],
        [' 7', 'Okereke Emmanuel', '09015653022', 'Yes', 'Example@gmail.com'],
        [' 8', 'Okereke Emmanuel', '09015653022', 'Yes', 'Example@gmail.com'],
        [' 9', 'Okereke Emmanuel', '09015653022', 'Yes', 'Example@gmail.com'],
        [' 10', 'Okereke Emmanuel', '09015653022', 'Yes', 'Example@gmail.com'],
        [' 11', 'Okereke Emmanuel', '09015653022', 'Yes', 'Example@gmail.com'],
        [' 12', 'Okereke Emmanuel', '09015653022', 'Yes', 'Example@gmail.com'],
        [' 13', 'Okereke Emmanuel', '09015653022', 'Yes', 'Example@gmail.com'],

    ];

    return (
        <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full">
            <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
                <div className='flex justify-between '>
                    <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >List of Staff</p>

                </div>
            </div>
            <div className='border-[#F13178] border-b '></div>

            <div className='flex justify-end items-end'>
                <Link to='/register-staff/hr' className=" bg-[#F13178] px-2 text-center items-center rounded-lg font-bold flex justify-center h-[40px]">
                    <div className="flex items-center justify-center">
                        <p className="text-white pl-2">Create</p>
                        <FaCirclePlus size={28} className="pl-2 mr-2 text-white" />

                    </div>
                </Link>
            </div>



            <div className='grid sm:grid-cols-2 gap-2'>
                <div className='pt-1 flex gap-4'>
                    <p className='text-[#134574] font-bold'>Location</p>

                    <select type='date' className='rounded-lg h-[30px] w-[200px] text-slate-500 outline-none bg-slate-200 px-4' >
                        <option>Select locations</option>
                        <option>Ehizua Hub Awoyaya</option>
                    </select>

                </div>
                <div className='pt-1 flex gap-4'>
                    <p className='text-[#134574] font-bold'>Position</p>

                    <select type='date' className='rounded-lg h-[30px] w-[200px] text-slate-500 outline-none bg-slate-200 px-4' >
                        <option>Sort by position</option>
                        <option>Tutor</option>
                    </select>

                </div>
            </div>

            <p className='text-center justify-center text-[#134574] font-extrabold text-lg pt-2'>Staff List</p>

            <div className='bg-slate-200  h-[520px] rounded-lg sm:px-1'>
                <div className='overflow-x-auto mt-1'>
                    <div className='p-1 h-[500px]'>

                        <table className="w-[1000px] bg-white border border-gray-500 mb-8">
                            <thead>
                                <tr className='text-[#134574] bg-slate-400'>
                                    <th className="border p-2">No</th>
                                    <th className="border p-2">Full-Name</th>
                                    <th className="border p-2">Course</th>
                                    <th className="border p-2">Verified</th>
                                    <th className="border p-2">Email</th>

                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row, index) => (
                                    <tr key={index} className='hover:bg-gray-200'>
                                        {row.map((cell, cellIndex) => (
                                            <td key={cellIndex} className="border p-3">
                                                <Link to="/school-student-details/hr">
                                                    {cell}
                                                </Link>
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

export default EhizuaStaff