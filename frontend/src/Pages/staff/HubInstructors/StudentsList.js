import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";


const StudentsList = () => {

    const data = [
        [' 1', 'Okereke Emmanuel', '09015653022', 'Yes', 'Example@gmail.com', 'completed'],
        [' 2', 'Okereke Emmanuel', '09015653022', 'Yes', 'Example@gmail.com', 'completed'],
        [' 3', 'Okereke Emmanuel', '09015653022', 'Yes', 'Example@gmail.com', 'not completed'],
        [' 4', 'Okereke Emmanuel', '09015653022', 'Yes', 'Example@gmail.com', 'not completed'],
        [' 5', 'Okereke Emmanuel', '09015653022', 'Yes', 'Example@gmail.com', 'not completed'],
        [' 7', 'Okereke Emmanuel', '09015653022', 'Yes', 'Example@gmail.com', 'completed'],
    

    ];

    return (
        <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full pb-12">
                <div className='flex justify-between '>
                    <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Student Section</p>

            </div>
            <div className='border-[#F13178] border-b '></div>
            
                <div className='pt-2 flex gap-4'>
                <p className='text-[#134574] font-bold'>Filter</p>

                    <select type='date' className='rounded-md h-[30px] w-[200px] text-slate-500 outline-none bg-slate-200 px-4' >
                        <option>Select</option>
                        <option>All</option>
                        <option>Graduated Student</option>
                        <option>Current Student</option>
                        <option>Owing</option>
                        <option>Fully Paid</option>
                        <option>Suspended</option>
                    </select>

                </div>
              
            
           
            <div className='bg-slate-200  h-fit  sm:px-1'>
                <div className='overflow-x-auto mt-1'>
                    <div className='p-1 h-[500px]'>

                        <table className="w-[1000px] bg-white border border-gray-500 mb-8">
                            <thead>
                                <tr className='text-[#134574] bg-slate-400'>
                                    <th className="border p-2">No</th>
                                    <th className="border p-2">Full-Name</th>
                                    <th className="border p-2">Phone</th>
                                    <th className="border p-2">Verified</th>
                                    <th className="border p-2">Email</th>
                                    <th className="border p-2">Payment Details</th>

                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row, index) => (
                                    <tr key={index} className='hover:bg-gray-200'>
                                        {row.map((cell, cellIndex) => (
                                            <td key={cellIndex} className="border p-3">
                                                <Link to="/hi-student-details">
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



        </div>



    )
}

export default StudentsList