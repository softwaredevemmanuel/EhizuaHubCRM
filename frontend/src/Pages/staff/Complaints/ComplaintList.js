import React, { useState } from "react";
import { IoArrowBackOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import StaffLogin from "../StaffLogin";
import { TiTick } from "react-icons/ti";
import { LiaTimesCircleSolid } from "react-icons/lia";
import { FaCirclePlus } from "react-icons/fa6";
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid'


const Complaints = () => {
    const [user, setUser] = useState(false)

    return (
        <div className="">
            {user ? (
                <StaffLogin />
            ) : (
                <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-screen">
                    <div className='flex justify-between'>
                        <nav className="flex mt-6" aria-label="Breadcrumb">
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
                                        <div className="ml-4 text-xs font-bold text-[#F13178]">
                                            COMPLAINTS
                                        </div>

                                    </div>

                                </li>

                            </ol>
                        </nav>
                    </div>

                    <div className='border-[#F13178] border-b '></div>

                    <div className="flex justify-end">
                        <Link to='/staff-new_complaints' className=" bg-[#F13178] text-white px-2 w-fit  text-center items-center rounded-lg py-1 font-bold flex gap-4 justify-center">
                            <div className="flex items-center justify-center">
                                <p className="pl-2">New Complaint</p>
                                <FaCirclePlus size={28} className="pl-2 mr-2" />
                            </div>
                        </Link>
                    </div>

                    <div className='p-1'>
                        <table className="w-full bg-white border border-gray-500 mb-8">
                            <thead>
                                <tr className='text-[#134574] bg-slate-400'>
                                    <th className="border p-2">Title</th>
                                    <th className="border p-2">Process</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='hover:bg-gray-200'>
                                    <td className="border p-3"> Unable to log in into my account</td>

                                    <td className="border p-3 bg-green-400 items-center justify-center flex">
                                        <Link className="gap-2 text-[#134574]">
                                            <p>Open</p>

                                        </Link>
                                    </td>

                                </tr>
                                <tr className='hover:bg-gray-200'>
                                    <td className="border p-3"> Unable to log in into my account</td>

                                    <td className="border p-3 bg-red-400 items-center justify-center flex">
                                        <Link className="gap-2 text-[#134574]">
                                            <p className="text-center">Closed</p>


                                        </Link>
                                    </td>

                                </tr>

                            </tbody>
                        </table>
                    </div>

                </div>
            )
            }
            {/* right section  */}



        </div >

    )
}

export default Complaints