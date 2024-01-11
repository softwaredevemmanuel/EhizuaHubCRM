import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";

import { FaCirclePlus } from "react-icons/fa6";

import pic from "../../../assets/Ehizua-Hub.png"
import staff from "../../../assets/profile-34.png"


import { Dialog, Transition } from '@headlessui/react'

import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";



const OfficeLocationDetails = () => {
    const [open, setOpen] = useState(false)


    const [isOpen, setIsOpen] = useState(false);
    const [isPosition, setIsPosition] = useState(false);

    const showlocations = () => {
        setIsOpen(!isOpen);
        setIsPosition(!false);
    }


    const ViewStaff = () => {
        setOpen(true)
    }


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
        <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full pb-12">
            <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
                <div className='flex justify-between '>
                    <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Office Overview</p>
                    <Link to='/office-locations/hr' className='mt-8'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>

                </div>
            </div>
            <div className='border-[#F13178] border-b '></div>

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
            <div className='w-full flex justify-end mt-2'>
                <button to='' className="bg-[#F13178] px-2 rounded-md font-bold flex h-[30px] mx-1 items-center">
                        <p className="text-white pl-2 text-sm">Position </p>
                        <FaCirclePlus size={24} className="pl-2 mr-2 text-white" />
                </button>

                <button to='' className="bg-[#F13178] px-2 rounded-md font-bold flex h-[30px] mx-1 items-center">
                        <p className="text-white pl-2 text-sm">Staff</p>
                        <FaCirclePlus size={24} className="pl-2 mr-2 text-white" />
                </button>
            </div>



            <div className='text-[#134574] bg-slate-400 h-full rounded-lg pb-1'>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
                    <div className="grid grid-cols-2 rounded-md text-[#134574] gap-1 max-w-[980px] w-full m-1 bg-slate-500 p-1 h-[140px] mb-auto">
                        <div className='flex justify-center items-center gap-3 bg-slate-400 h-[40px] '>
                            <p className=' font-extrabold'>8</p>
                            <p>Positions</p>
                        </div>
                        <div className='flex justify-center items-center gap-3 bg-slate-400 h-[40px] '>
                            <p className=' font-extrabold'>8</p>
                            <p>Positions</p>
                        </div>

                        <div className='flex justify-center items-center gap-3 bg-slate-400 h-[40px]'>
                            <p className=' font-extrabold'>20</p>
                            <p>Staff</p>
                        </div>
                        <div className='flex justify-center items-center gap-3 bg-slate-400 h-[40px]'>
                            <p className=' font-extrabold'>20</p>
                            <p>Staff</p>
                        </div>

                        <div className='flex justify-center items-center gap-3 bg-slate-400 h-[40px]'>
                            <p className=' font-extrabold text-red-700'>2</p>
                            <p className='text-red-700'>Vacancy</p>
                        </div>
                        <div className='flex justify-center items-center gap-3 bg-slate-400 h-[40px]'>
                            <p className=' font-extrabold'>0</p>
                            <p>On Leave</p>
                        </div>

                    </div>

                    <div className='w-full sm:col-span-2 px-4 sm:px-2 md:pr-2 bg-[#2b6091] text-white text-sm'>
                        <p className='font-bold text-center justify-center pt-2'>School Details</p>
                        <div className='flex gap-2'>
                            <IoLocationOutline className='mt-3' />
                            <p className='pt-2 font-bold'>Address: </p>
                            <p className='pt-2'>6 Honorable Fatai Eletu Street, Container Bus stop Awoyaya, Lagos State </p>
                        </div>
                        <div className='flex gap-2'>
                            <MdOutlineAttachEmail className='mt-3' />
                            <p className='pt-2 font-bold'>Email Address: </p>
                            <p className='pt-2'>eokereke47@gmail.com </p>
                        </div>
                        <div className='flex gap-2'>
                            <FaPhoneAlt className='mt-3' />
                            <p className='pt-2 font-bold'>Phone Number: </p>
                            <p className='pt-2'>08037819461 </p>
                        </div>

                    </div>
                </div>


            </div>

            <div className='flex items-center justify-center '>
                <p className='text-[#134574] text-[20px] mt-8 font-extrabold' >Staff</p>

            </div>
            <div className='border-slate-100 border-b '></div>


            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-slate-100 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                                    <div>

                                        <div className=" text-center text-[#134574]">
                                            <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-[#134574]">
                                                Staff Details
                                            </Dialog.Title>
                                            <img src={staff} alt='item.Image' className=' w-[75px] top-[-39px]' />

                                            <div className="mt-2 flex gap-2">
                                                <p className="text-sm">Name:</p>
                                                <p className="text-sm">Okereke Emmanuel</p>
                                            </div>
                                            <div className="mt-2 flex gap-2">
                                                <p className="text-sm">Position:</p>
                                                <p className="text-sm">FullStack / Python Instructor</p>
                                            </div>
                                            <div className="mt-2 flex gap-2">
                                                <p className="text-sm">Phone Number:</p>
                                                <p className="text-sm">08037819461</p>
                                            </div>
                                            <div className="mt-2 flex gap-2">
                                                <p className="text-sm">Email:</p>
                                                <p className="text-sm">eokereke47@gmail.com</p>
                                            </div>
                                            <div className="mt-2 flex gap-2">
                                                <p className="text-sm">Date of Birth:</p>
                                                <p className="text-sm">7th October</p>
                                            </div>

                                        </div>
                                    </div>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>






            <button onClick={ViewStaff} className='pl-5 rounded-xl "w-[412px] h-[50px] bg-slate-400 flex items-center justify-between mt-1 pr-5'>
                <div className='flex'>
                    <p className='text-[#134574] ml-2 text-md'>Okereke Emmanuel</p>
                </div>

                <div className='flex gap-4'>
                    <p className='text-[#134574] sm:pl-4 hidden sm:block'>Fullstack Web Development Instructor</p>
                </div>

            </button>

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



        </div>



    )
}

export default OfficeLocationDetails