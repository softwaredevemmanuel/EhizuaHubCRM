import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";



const Loan = () => {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleMouseEnter = () => {
        setShowTooltip(true);
    };

    const handleMouseLeave = () => {
        setShowTooltip(false);
    };

    return (
        <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-screen">
            <div className='flex justify-between '>
                <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Loan</p>

            </div>
            <div className='border-[#F13178] border-b '></div>

            {/* <div className='bg-slate-200  h-[520px] rounded-lg sm:px-1'>
                <div className='overflow-x-auto mt-1'>
                    <div className='p-1 h-[500px]'>

                        <table className="w-[1000px] bg-gray-300 border border-gray-500 mb-8">
                            <thead>
                                <tr className='text-[#134574] bg-slate-400'>
                                    <th className="border p-2">Full Name</th>
                                    <th className="border p-2">Staff Code</th>
                                    <th className="border p-2">Amount</th>
                                    <th className="border p-2">Plan</th>
                                    <th className="border p-2">Type</th>
                                    <th className="border p-2">Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr className='hover:bg-gray-200'>
                                    <td className="border p-3">
                                        <div
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <Link to="/loan-details/hr">
                                                Okereke Emmanuel
                                            </Link>
                                        </div>
                                        {showTooltip && (
                                            <div className="tooltip absolute bg-gray-600 text-white mt-2 ml-4  p-1" >
                                                <p className='text-xs'>Brief Description on Hover</p>
                                            </div>
                                        )}
                                    </td>

                                    <td className="border p-3"> Hg758JU</td>
                                    <td className="border p-3"> N1,000,000</td>
                                    <td className="border p-3">12 Months</td>
                                    <td className="border p-3">Loan</td>
                                    <td className="border  p-3 bg-yellow-500">Pending</td>
                                </tr>
                                <tr className='hover:bg-gray-200'>
                                    <td className="border p-3"> Okereke Emmanuel</td>
                                    <td className="border p-3"> Hg758JU</td>
                                    <td className="border p-3"> N50,000</td>
                                    <td className="border p-3">1 Month</td>
                                    <td className="border p-3">Salary Advance</td>
                                    <td className="border p-3 bg-green-400">Approved</td>
                                </tr>

                            </tbody>

                        </table>


                    </div>
                </div>




            </div> */}

<div className="p-1">
            <p className="text-4xl text-center text-slate-600">Coming up soon....</p>
          </div>



        </div>



    )
}

export default Loan