import React from 'react'
import { Link } from 'react-router-dom'
import { FaCirclePlus } from "react-icons/fa6";


const StaffSalary = () => {


    const data = [
        [' 1', 'Okereke Emmanuel', '09015', 'N 1,200,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000',],
        [' 2', 'Okereke Emmanuel', '09015', 'N 1,200,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000',],
        [' 3', 'Okereke Emmanuel', '09015', 'N 1,200,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000',],
        [' 4', 'Okereke Emmanuel', '09015', 'N 1,200,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000',],
        [' 5', 'Okereke Emmanuel', '09015', 'N 1,200,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000',],
        [' 7', 'Okereke Emmanuel', '09015', 'N 1,200,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000',],
        [' 8', 'Okereke Emmanuel', '09015', 'N 1,200,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000',],
        [' 9', 'Okereke Emmanuel', '09015', 'N 1,200,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000',],
        [' 10', 'Okereke Emmanuel', '09012', 'N 1,200,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000',],
        [' 11', 'Okereke Emmanuel', '09015', 'N 1,200,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000',],
        [' 12', 'Okereke Emmanuel', '09015', 'N 1,200,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000',],
        [' 13', 'Okereke Emmanuel', '09015', 'N 1,200,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000', 'N100,000',]
    ];

    return (
        <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full">
            <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
                <div className='flex justify-between '>
                    <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Salary Expenditures</p>

                </div>
            </div>
            <div className='border-[#F13178] border-b '></div>



            {/* <div className='grid sm:grid-cols-2 gap-2 '>
                <div className='pt-1 flex gap-4'>
                    <p className='text-[#134574] font-bold'>Location</p>

                    <select type='date' className='rounded-lg h-[30px] w-[200px] text-slate-500 outline-none bg-slate-200 px-4' >
                        <option>Select locations</option>
                        <option>Ehizua Hub Awoyaya</option>
                    </select>

                </div>
    

            </div>
            <div className='grid sm:grid-cols-2 bg-slate-400  p-1 text-slate-700 gap-1'>
                <div className='border border-slate-200 flex gap-4 p-1 w-fit '>
                    <p>Total Income:</p>
                    <p>N50,000,000</p>
                </div>
                <div className='border border-slate-200 flex gap-4 p-1 w-fit'>
                    <p>Total Expenditures:</p>
                    <p>N5,000,000</p>
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
                                    <th className="border p-2">Staff Id</th>
                                    <th className="border p-2">Annual Salary</th>
                                    <th className="border p-2">January</th>
                                    <th className="border p-2">Febuary</th>
                                    <th className="border p-2">March</th>
                                    <th className="border p-2">April</th>
                                    <th className="border p-2">May</th>
                                    <th className="border p-2">June</th>
                                    <th className="border p-2">July</th>
                                    <th className="border p-2">August</th>
                                    <th className="border p-2">September</th>
                                    <th className="border p-2">October</th>
                                    <th className="border p-2">November</th>
                                    <th className="border p-2">December</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row, index) => (
                                    <tr key={index} className='hover:bg-gray-200 text-slate-700'>
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

            </div> */}

<div className="p-1">
            <p className="text-4xl text-center text-slate-600">Coming up soon....</p>
          </div>



        </div>



    )
}

export default StaffSalary