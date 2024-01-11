import React from 'react'
import { Link } from 'react-router-dom'
import { FaCirclePlus } from "react-icons/fa6";


const SchoolStudents = () => {


    const data = [
        [' 1', 'Okereke Emmanuel', 'JSS 1', 'Animation', '2023', 'First Term', 'WEB001'],
        [' 2', 'Okereke Emmanuel', 'JSS 1', 'Animation', '2023', 'First Term', 'WEB001'],
        [' 3', 'Okereke Emmanuel', 'JSS 1', 'Animation', '2023', 'First Term', 'WEB001'],
        [' 4', 'Okereke Emmanuel', 'JSS 1', 'Animation', '2023', 'First Term', 'WEB001'],
        [' 5', 'Okereke Emmanuel', 'JSS 1', 'Animation', '2023', 'First Term', 'WEB001'],
        [' 7', 'Okereke Emmanuel', 'JSS 1', 'Animation', '2023', 'First Term', 'WEB001'],
        [' 8', 'Okereke Emmanuel', 'JSS 1', 'Animation', '2023', 'First Term', 'WEB001'],
        [' 9', 'Okereke Emmanuel', 'JSS 1', 'Animation', '2023', 'First Term', 'WEB001'],
        [' 10', 'Okereke Emmanuel', 'JSS 1', 'Animation', '2023', 'First Term', 'WEB001'],
        [' 11', 'Okereke Emmanuel', 'JSS 1', 'Animation', '2023', 'First Term', 'WEB001'],
        [' 12', 'Okereke Emmanuel', 'JSS 1', 'Animation', '2023', 'First Term', 'WEB001'],
        [' 13', 'Okereke Emmanuel', 'JSS 1', 'Animation', '2023', 'First Term', 'WEB001'],

    ];

    return (
        <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full">
            <div className="w-full  bg-[#C8D1DA] flex flex-col gap-3">
                <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >School Students</p>

            </div>
            <div className='border-[#F13178] border-b '></div>




            <div className='grid sm:grid-cols-2 gap-2'>
                <div className='pt-1 flex gap-4'>
                    <p className='text-[#134574] font-bold'>School</p>

                    <select type='date' className='rounded-lg h-[30px] w-[200px] text-slate-500 outline-none bg-slate-200 px-4' >
                        <option>Select School</option>
                        <option>Ehizua Hub Awoyaya</option>
                    </select>

                </div>
                <div className='pt-1 flex gap-4'>
                    <p className='text-[#134574] font-bold'>Class</p>

                    <select type='date' className='rounded-lg h-[30px] w-[200px] text-slate-500 outline-none bg-slate-200 px-4' >
                        <option>Select Class</option>
                        <option>Tutor</option>
                    </select>

                </div>
            </div>

            <div className='mt-4'>
                <form className='flex gap-4'>
                    <p className='text-[#134574] font-bold'>Code</p>

                    <select type='date' className='rounded-lg h-[30px] w-[200px] text-slate-500 outline-none bg-slate-200 px-4' >
                        <option>Assign Course Code</option>
                        <option>WEB001</option>
                    </select>
                    <input type='submit' className='bg-[#F13178] rounded-md px-2 text-white' />
                </form>


            </div>

            <p className='text-center justify-center text-[#134574] font-extrabold text-lg pt-2'>Student List</p>


            <div className='bg-slate-200  h-[520px] rounded-lg sm:px-1'>
                <div className='overflow-x-auto mt-1'>
                    <div className='p-1 h-[500px]'>

                        <table className="w-[1000px] bg-white border border-gray-500 mb-8">
                            <thead>
                                <tr className='text-[#134574] bg-slate-400'>
                                    <th className="border p-2">No</th>
                                    <th className="border p-2">Full-Name</th>
                                    <th className="border p-2">Class</th>
                                    <th className="border p-2">Course</th>
                                    <th className="border p-2">Year</th>
                                    <th className="border p-2">Term</th>
                                    <th className="border p-2">Course Code</th>

                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row, index) => (
                                    <tr key={index} className='hover:bg-gray-200'>
                                        {row.map((cell, cellIndex) => (
                                            <td key={cellIndex} className="border p-3">
                                                <Link to="/si-student-details">
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

export default SchoolStudents