import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoMdMailUnread } from "react-icons/io";
import { MdOutlineMarkEmailRead } from "react-icons/md";

const StaffReport = () => {

    return (
        <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full pb-12">
            <div className="w-full  bg-[#C8D1DA] flex flex-col gap-3">
                <div className='flex justify-between '>
                    <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Staff Weekly Report</p>

                </div>
            </div>
            <div className='border-[#F13178] border-b '></div>
            <div className='grid sm:grid-cols-2 gap-2'>
                <div className='pt-2 flex gap-4'>
                    <p className='text-[#134574] font-bold'>Location</p>

                    <select type='date' className='rounded-lg h-[30px] w-[200px] text-slate-500 outline-none bg-slate-200 px-4' >
                        <option>Select locations</option>
                        <option>Ehizua Hub Awoyaya</option>
                    </select>

                </div>
                <div className='pt-2 flex gap-4'>
                    <p className='text-[#134574] font-bold'>Date</p>
                    <select type='date' className='rounded-lg h-[30px] w-[200px] text-slate-500 outline-none bg-slate-200 px-4' >
                        <option> January </option>
                        <option> February </option>
                        <option> March </option>
                        <option> April </option>
                        <option> May </option>
                        <option> June </option>
                        <option> July </option>
                        <option> August </option>
                        <option> September </option>
                        <option> October </option>
                        <option> November </option>
                        <option> December </option>
                    </select>

                </div>
            </div>

            <div className='bg-slate-200  h-[520px] rounded-lg sm:px-1'>
                <div className='overflow-x-auto mt-1'>
                    <div className='p-1 h-[500px]'>

                        <table className="w-[1000px] bg-gray-300 border border-gray-500 mb-8">
                            <thead>
                                <tr className='text-[#134574] bg-slate-400'>
                                    <th className="border p-2">No</th>
                                    <th className="border p-2">Full-Name</th>
                                    <th className="border p-2">Position</th>
                                    <th className="border p-2">Week 1</th>
                                    <th className="border p-2">Week 2</th>
                                    <th className="border p-2">Week 3</th>
                                    <th className="border p-2">Week 4</th>
                                    <th className="border p-2">Week 5</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr className='hover:bg-gray-200'>
                                    <td className="border p-3"> 1</td>
                                    <td className="border p-3">
                                        <Link to='/staff-report/hr'>
                                             Okereke Emmanuel

                                        </Link> 
                                    </td>
                                    <td className="border p-3"> Full Stack Instructor</td>
                                    <td className="border p-3">
                                        <Link>
                                            <MdOutlineMarkEmailRead size={26} className='text-[#134574]' />
                                        </Link>
                                    </td>
                                    <td className="border p-3">
                                        <Link>
                                            <MdOutlineMarkEmailRead size={26} className='text-[#134574]' />
                                        </Link>
                                    </td>
                                    <td className="border p-3">
                                        <Link>
                                            <MdOutlineMarkEmailRead size={26} className='text-[#134574]' />
                                        </Link>
                                    </td>
                                    <td className="border p-3">
                                        <Link className='flex gap-2 items-center'>
                                            <p className='text-xs text-[#F13178]'>New</p> <IoMdMailUnread size={26} className='text-[#F13178]' />
                                        </Link>
                                    </td>
                                    <td className="border p-3">
                                        <Link className='flex gap-2 items-center'>
                                            <p className='text-xs text-[#F13178]'>New</p> <IoMdMailUnread size={26} className='text-[#F13178]' />
                                        </Link>
                                    </td>


                                </tr>
                                <tr className='hover:bg-gray-200'>
                                    <td className="border p-3"> 1</td>
                                    <td className="border p-3"> Okereke Emmanuel</td>
                                    <td className="border p-3"> Full Stack Instructor</td>
                                    <td className="border p-3">
                                        <Link>
                                            <MdOutlineMarkEmailRead size={26} className='text-[#134574]' />
                                        </Link>
                                    </td>
                                    <td className="border p-3">
                                        <Link>
                                            <MdOutlineMarkEmailRead size={26} className='text-[#134574]' />
                                        </Link>
                                    </td>
                                    <td className="border p-3">
                                        <Link>
                                            <MdOutlineMarkEmailRead size={26} className='text-[#134574]' />
                                        </Link>
                                    </td>
                                    <td className="border p-3">
                                        <Link className='flex gap-2 items-center'>
                                            <p className='text-xs text-[#F13178]'>New</p> <IoMdMailUnread size={26} className='text-[#F13178]' />
                                        </Link>
                                    </td>
                                    <td className="border p-3">
                                        <Link className='flex gap-2 items-center'>
                                            <p className='text-xs text-[#F13178]'>New</p> <IoMdMailUnread size={26} className='text-[#F13178]' />
                                        </Link>
                                    </td>


                                </tr>
                              
                                <tr className='hover:bg-gray-200'>
                                    <td className="border p-3"> 1</td>
                                    <td className="border p-3"> Okereke Emmanuel</td>
                                    <td className="border p-3"> Full Stack Instructor</td>
                                    <td className="border p-3">
                                        <Link>
                                            <MdOutlineMarkEmailRead size={26} className='text-[#134574]' />
                                        </Link>
                                    </td>
                                    <td className="border p-3">
                                        <Link>
                                            <MdOutlineMarkEmailRead size={26} className='text-[#134574]' />
                                        </Link>
                                    </td>
                                    <td className="border p-3">
                                        <Link>
                                            <MdOutlineMarkEmailRead size={26} className='text-[#134574]' />
                                        </Link>
                                    </td>
                                    <td className="border p-3">
                                        <Link className='flex gap-2 items-center'>
                                            <p className='text-xs text-[#F13178]'>New</p> <IoMdMailUnread size={26} className='text-[#F13178]' />
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
                </div>


            </div>



        </div>



    )
}

export default StaffReport