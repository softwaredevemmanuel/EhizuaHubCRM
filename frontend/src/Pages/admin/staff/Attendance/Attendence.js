import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";



const Attendance = () => {
    const data = [
        [' 1', 'Okereke Emmanuel', '08:40 AM', '05:10 PM'],
        [' 2', 'Okereke Emmanuel', '08:40 AM', '05:10 PM'],
        [' 3', 'Okereke Emmanuel', '08:40 AM', '05:10 PM'],
        [' 4', 'Okereke Emmanuel', '08:40 AM', '05:10 PM'],
        [' 5', 'Okereke Emmanuel', '08:40 AM', '05:10 PM'],
        [' 6', 'Okereke Emmanuel', '08:40 AM', '05:10 PM'],
        [' 7', 'Okereke Emmanuel', '08:40 AM', '05:10 PM'],
        [' 8', 'Okereke Emmanuel', '08:40 AM', '05:10 PM'],
        [' 9', 'Okereke Emmanuel', '08:40 AM', '05:10 PM'],
        [' 10', 'Okereke Emmanuel', '08:40 AM', '05:10 PM'],
        [' 11', 'Okereke Emmanuel', '08:40 AM', '05:10 PM'],

    ];

    return (
        <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3  pb-8">
            <div className="w-full  bg-[#C8D1DA] flex flex-col gap-3">
                <div className='flex justify-between '>
                    <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Staff Attendance</p>
                    <Link to='/staff-memo/hr' className='mt-8'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>

                </div>
            </div>
            <div className='border-[#F13178] border-b '></div>

            <div className='grid sm:grid-cols-2 gap-2'>
                <div className='pt-8 flex gap-4'>
                <p className='text-[#134574] font-bold'>Location</p>

                    <select type='date' className='rounded-lg h-[30px] w-[200px] text-slate-500 outline-none bg-slate-200 px-4' >
                        <option>Select locations</option>
                        <option>Ehizua Hub Awoyaya</option>
                    </select>

                </div>
                <div className='pt-8 flex gap-4'>
                    <p className='text-[#134574] font-bold'>Date</p>
                    <input type='date' className='rounded-lg h-[30px] w-[200px] text-slate-500 outline-none bg-slate-200 px-4' />

                </div>
            </div>



            <div className='p-1 h-[500px]'>

                <table className="w-full bg-white border border-gray-500 mb-8">
                    <thead>
                        <tr className='text-[#134574] bg-slate-400'>
                            <th className="border p-2 ">No</th>
                            <th className="border p-2 ">FULL NAME</th>
                            <th className="border p-2">CHECK IN</th>
                            <th className="border p-2">CHECK OUT</th>

                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index} className='hover:bg-gray-200'>
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex} className="border p-3">
                                        <Link to="/staff-attendance-details/hr">
                                            {cell}
                                        </Link>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>

                </table>


            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-white max-w-[980px] w-fit pb-44">


            </div>



        </div>



    )
}

export default Attendance