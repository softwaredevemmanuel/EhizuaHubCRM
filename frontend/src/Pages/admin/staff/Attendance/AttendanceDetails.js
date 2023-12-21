import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";



const AttendanceDetails = () => {
    const data = [
        [' 21', 'Thursday', '08:40 AM', '05:10 PM'],
        [' 20', 'Wednesday', '08:40 AM', '05:10 PM'],
        [' 19', 'Tuesady', '08:40 AM', '05:10 PM'],
        [' 18', 'Monday', '08:40 AM', '05:10 PM'],
        [' 17', 'Sunday', '', ''],
        [' 16', 'Saturday', '', ''],
        [' 15', 'Friday', '08:40 AM', '05:10 PM'],
        [' 14', 'Thursday', '08:40 AM', '05:10 PM'],
        [' 13', 'Wednesday', '08:40 AM', '05:10 PM'],
        [' 12', 'Tuesdat', '08:40 AM', '05:10 PM'],
        [' 11', 'Monday', '08:40 AM', '05:10 PM'],

    ];

    return (
        <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3  pb-8">
            <div className="w-full  bg-[#C8D1DA] flex flex-col gap-3">
                <div className='flex justify-between '>
                    <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Okereke Emmanuel </p>
                    <Link to='/staff-attendance/hr' className='mt-8'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>

                </div>
            </div>
            <div className='border-[#F13178] border-b '></div>

            <div className='pt-8 flex gap-4'>
                <p className='text-[#134574] font-bold'>Select Date</p>
                <select type='date' className='rounded-lg h-[30px] w-[200px] text-slate-500 outline-none bg-slate-200 px-4'>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                </select>

            </div>

            <div className='p-1 h-[500px]'>

                <table className="w-full bg-white border border-gray-500 mb-8">
                    <thead>
                        <tr className='text-[#134574] bg-slate-400'>
                            <th className="border p-2 ">DATE</th>
                            <th className="border p-2 ">DAYS</th>
                            <th className="border p-2">CHECK IN</th>
                            <th className="border p-2">CHECK OUT</th>

                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index} className='hover:bg-gray-200'>
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
            <div className="grid grid-cols-2 lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-white max-w-[980px] w-fit pb-44">


            </div>



        </div>



    )
}

export default AttendanceDetails