import React from 'react'
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development'
import { IoMdMailUnread } from "react-icons/io";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid'
import { IoIosArrowRoundBack } from "react-icons/io";


import { useState } from "react";
import AdminLogin from "../../AdminLogin"

const StaffReport = () => {


    const [user, setUser] = useState(false)

    return (
        <div className="">
            {user ? (
                <AdminLogin />

            ) : (
                <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full pb-12">

                    <div className='flex justify-between'>
                        <nav className="flex mt-3" aria-label="Breadcrumb">
                            <ol role="list" className="flex items-center space-x-4">
                                <li>
                                    <div>
                                        <Link to="/dashboard" className="text-[#F13178] hover:text-[#134574]">
                                            <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                                            <span className="sr-only">Home</span>
                                        </Link>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-[#F13178]" aria-hidden="true" />
                                        <Link to='/staff-report-list/hr' className="ml-4 text-xs font-bold text-[#F13178] hover:text-[#134574]">
                                            ALL-REPORT
                                        </Link>
                                        <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-[#F13178]" aria-hidden="true" />
                                       
                                    </div>

                                </li>

                            </ol>
                        </nav>
                        <Link to='/staff-report-list/hr' className='mt-3'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>

                    </div>
                    <div className='border-[#F13178] border-b '></div>

                    <div className='flex items-center justify-center'>
                        <p className='text-[#F13178] text-3xl'>Staff Report</p>
                    </div>

                    <div className='pt-2 flex gap-4'>
                        <p className='text-[#134574] font-bold'>Sort Month By</p>

                        <select type='date' className='rounded-lg h-[30px] w-[200px] text-slate-500 outline-none bg-slate-200 px-4' >
                            <option>Accending</option>
                            <option>Decending</option>
                        </select>

                    </div>

                    <div className='p-1'>

                        <table className="w-full bg-white border border-gray-500 mb-8">
                            <thead>
                                <tr className='text-[#134574] bg-slate-400'>
                                    <th className="border p-2">Months</th>

                                    <th className="border p-2">Week 1</th>
                                    <th className="border p-2">Week 2</th>
                                    <th className="border p-2">Week 3</th>
                                    <th className="border p-2">Week 4</th>
                                    <th className="border p-2">Week 5</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr className='hover:bg-gray-200'>
                                    <td className="border p-3"> January</td>

                                    <td className="border p-3">
                                        <Link to="/staff-report-details/hr" className="flex items-center gap-2 text-[#134574]">
                                            <p>Reviewed</p>
                                            <MdOutlineMarkEmailRead size={16} />
                                        </Link>
                                    </td>
                                    <td className="border p-3">
                                        <Link to="/staff-report-details/hr" className="flex items-center gap-2 text-[#134574]">
                                            <p>Reviewed</p>
                                            <MdOutlineMarkEmailRead size={16} />
                                        </Link>
                                    </td>
                                    <td className="border p-3">
                                        <Link to="/staff-report-details/hr" className="flex items-center gap-2 text-[#134574]">
                                            <p>Reviewed</p>
                                            <MdOutlineMarkEmailRead size={16} />
                                        </Link>
                                    </td>
                                    <td className="border p-3">
                                        <Link to="/staff-report-details/hr" className="flex items-center gap-2 text-[#134574]">
                                            <p>Reviewed</p>
                                            <MdOutlineMarkEmailRead size={16} />
                                        </Link>
                                    </td>
                                    <td className="border p-3">
                                        <Link className='flex gap-2 items-center'>
                                            <p className='text-xs text-[#F13178]'>New</p> <IoMdMailUnread size={26} className='text-[#F13178]' />
                                        </Link>
                                    </td>


                                </tr>

                            </tbody>

                        </table>


                    </div>
                    
                    <div className='p-1'>

                        <table className="w-full bg-white border border-gray-500 mb-8">
                            <thead>
                                <tr className='text-[#134574] bg-slate-400'>
                                    <th className="border p-2">Months</th>

                                    <th className="border p-2">Week 1</th>
                                    <th className="border p-2">Week 2</th>
                                    <th className="border p-2">Week 3</th>
                                    <th className="border p-2">Week 4</th>
                                    <th className="border p-2">Week 5</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr className='hover:bg-gray-200'>
                                    <td className="border p-3"> February</td>

                                    <td className="border p-3">
                                        <Link className="flex items-center gap-2 text-[#134574]">
                                            <p>Reviewed</p>
                                            <MdOutlineMarkEmailRead size={16} />
                                        </Link>
                                    </td>
                                    <td className="border p-3">
                                        <Link className="flex items-center gap-2 text-[#134574]">
                                            <p>Reviewed</p>
                                            <MdOutlineMarkEmailRead size={16} />
                                        </Link>
                                    </td>
                                    <td className="border p-3">
                                        <Link className="flex items-center gap-2 text-[#134574]">
                                            <p>Reviewed</p>
                                            <MdOutlineMarkEmailRead size={16} />
                                        </Link>
                                    </td>
                                    <td className="border p-3">
                                        <Link className="flex items-center gap-2 text-[#134574]">
                                            <p>Reviewed</p>
                                            <MdOutlineMarkEmailRead size={16} />
                                        </Link>
                                    </td>
                                    <td className="border p-3">
                                        {/* <Link className='flex gap-2 items-center'>
                                            <p className='text-xs text-[#F13178]'>New</p> <IoMdMailUnread size={26} className='text-[#F13178]' />
                                        </Link> */}
                                    </td>


                                </tr>

                            </tbody>

                        </table>


                    </div>

                    <div className='p-1'>

                        <table className="w-full bg-white border border-gray-500 mb-8">
                            <thead>
                                <tr className='text-[#134574] bg-slate-400'>
                                    <th className="border p-2">Months</th>

                                    <th className="border p-2">Week 1</th>
                                    <th className="border p-2">Week 2</th>
                                    <th className="border p-2">Week 3</th>
                                    <th className="border p-2">Week 4</th>
                                    <th className="border p-2">Week 5</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr className='hover:bg-gray-200'>
                                    <td className="border p-3"> March</td>

                                    <td className="border p-3">
                                        {/* <Link className="flex items-center gap-2 text-[#134574]">
                                            <p>Reviewed</p>
                                            <MdOutlineMarkEmailRead size={16} />
                                        </Link> */}
                                    </td>
                                    <td className="border p-3">
                                        {/* <Link className="flex items-center gap-2 text-[#134574]">
                                            <p>Reviewed</p>
                                            <MdOutlineMarkEmailRead size={16} />
                                        </Link> */}
                                    </td>
                                    <td className="border p-3">
                                        {/* <Link className="flex items-center gap-2 text-[#134574]">
                                            <p>Reviewed</p>
                                            <MdOutlineMarkEmailRead size={16} />
                                        </Link> */}
                                    </td>
                                    <td className="border p-3">
                                        {/* <Link className="flex items-center gap-2 text-[#134574]">
                                            <p>Reviewed</p>
                                            <MdOutlineMarkEmailRead size={16} />
                                        </Link> */}
                                    </td>
                                    <td className="border p-3">
                                        {/* <Link className='flex gap-2 items-center'>
                                            <p className='text-xs text-[#F13178]'>New</p> <IoMdMailUnread size={26} className='text-[#F13178]' />
                                        </Link> */}
                                    </td>


                                </tr>

                            </tbody>

                        </table>


                    </div>
                </div>





            )}
            {/* right section  */}



        </div>
    )
}

export default StaffReport