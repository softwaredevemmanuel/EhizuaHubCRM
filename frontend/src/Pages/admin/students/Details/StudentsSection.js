import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";

import { IoIosArrowDropdown } from "react-icons/io";
import { FaCirclePlus } from "react-icons/fa6";

import pic from "../../../../assets/profile-34.png"


import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'


const StudentsSection = () => {
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

    return (
        <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full pb-12">
            <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
                <div className='flex justify-between '>
                    <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Student Section</p>
                    <Link to='/student-center/hr' className='mt-8'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>

                </div>
            </div>
            <div className='border-[#F13178] border-b '></div>

            <div className='flex px-6 items-center justify-between'>
                <div className='relative m-2'>
                    <div className='flex items-center justify-center gap-2'>
                        <div className=' text-[#F13178] flex items-center   font-bold md:gap-2 '><p className='text-[15px] ml-[-15px]'>Sort By courses</p> <IoIosArrowDropdown className='pt-[2px]' onClick={showlocations} size={20} /></div>

                    </div>
                    {isOpen && (
                        <ul className='list-none flex flex-col  text-start gap-1 justify-start mt-1 left-[55%] font-medium ml-[-10px] transition-[0.2s] rounded-lg translate-x-[-50%] pl-3 absolute z-20 bg-white text-black w-[140px] py-1'>
                            <li className='cursor-pointer'>Animations</li>
                            <li className='cursor-pointer'>Frontend</li>
                            <li className='cursor-pointer'>Backend</li>
                            <li className='cursor-pointer'>Full Stack</li>
                            <li className='cursor-pointer'>Data Science</li>
                            <li className='cursor-pointer'>Ui/Ux</li>
                        </ul>)}
                </div>

                <div className='bg-[#F13178] flex items-center px-2  md:w-[180px] text-white md:h-[52px] h-[45px] rounded-lg'>
                    <Link to='/register-student/hr' className='md:text-[15px]  text-[11px] flex items-center gap-4 font-bold'>
                        Register Student 
                        <FaCirclePlus className=" text-white text-[15px] md:text-[20px] " />
                    </Link>
                </div>
            </div>

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

                                        <div className=" text-center">
                                            <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                Staff Details
                                            </Dialog.Title>
                                            <img src={pic} alt='item mage' className=' w-[75px] top-[-39px]' />

                                            <div className="mt-2 flex gap-2">
                                                <p className="text-sm text-gray-500">Name:</p>
                                                <p className="text-sm text-gray-500">Okereke Emmanuel</p>
                                            </div>
                                            <div className="mt-2 flex gap-2">
                                                <p className="text-sm text-gray-500">Position:</p>
                                                <p className="text-sm text-gray-500">FullStack / Python Instructor</p>
                                            </div>
                                            <div className="mt-2 flex gap-2">
                                                <p className="text-sm text-gray-500">Phone Number:</p>
                                                <p className="text-sm text-gray-500">08037819461</p>
                                            </div>
                                            <div className="mt-2 flex gap-2">
                                                <p className="text-sm text-gray-500">Email:</p>
                                                <p className="text-sm text-gray-500">eokereke47@gmail.com</p>
                                            </div>
                                            <div className="mt-2 flex gap-2">
                                                <p className="text-sm text-gray-500">Date of Birth:</p>
                                                <p className="text-sm text-gray-500">7th October</p>
                                            </div>

                                        </div>
                                    </div>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>



            <div className=' grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-center mt-8 gap-2'>
                <Link to='/student-details/hr' className='bg-[#134574] w-fit relative  flex flex-col h-[160px] px-[10px] rounded-[20px] items-center mt-12'>
                    <img src={pic} alt='item mage' className='absolute w-[75px] top-[-39px]' />
                    <p className='text-white font-medium text-sm pt-16'>Okereke Emmanuel</p>
                    <p className='text-white font-medium text-xs text-center'>Python</p>
                </Link>
                <Link to='/student-details/hr' className='bg-[#134574] w-fit relative  flex flex-col h-[160px] px-[10px] rounded-[20px] items-center mt-12'>
                    <img src={pic} alt='item mage' className='absolute w-[75px] top-[-39px]' />
                    <p className='text-white font-medium text-sm pt-16'>Okereke Emmanuel</p>
                    <p className='text-white font-medium text-xs text-center'>Python</p>
                </Link>
                <Link to='/student-details/hr' className='bg-[#134574] w-fit relative  flex flex-col h-[160px] px-[10px] rounded-[20px] items-center mt-12'>
                    <img src={pic} alt='item mage' className='absolute w-[75px] top-[-39px]' />
                    <p className='text-white font-medium text-sm pt-16'>Okereke Emmanuel</p>
                    <p className='text-white font-medium text-xs text-center'>Python</p>
                </Link>
                <Link to='/student-details/hr' className='bg-[#134574] w-fit relative  flex flex-col h-[160px] px-[10px] rounded-[20px] items-center mt-12'>
                    <img src={pic} alt='item mage' className='absolute w-[75px] top-[-39px]' />
                    <p className='text-white font-medium text-sm pt-16'>Okereke Emmanuel</p>
                    <p className='text-white font-medium text-xs text-center'>Python</p>
                </Link>
                <Link to='/student-details/hr' className='bg-[#134574] w-fit relative  flex flex-col h-[160px] px-[10px] rounded-[20px] items-center mt-12'>
                    <img src={pic} alt='item mage' className='absolute w-[75px] top-[-39px]' />
                    <p className='text-white font-medium text-sm pt-16'>Okereke Emmanuel</p>
                    <p className='text-white font-medium text-xs text-center'>Python</p>
                </Link>
                <Link to='/student-details/hr' className='bg-[#134574] w-fit relative  flex flex-col h-[160px] px-[10px] rounded-[20px] items-center mt-12'>
                    <img src={pic} alt='item mage' className='absolute w-[75px] top-[-39px]' />
                    <p className='text-white font-medium text-sm pt-16'>Okereke Emmanuel</p>
                    <p className='text-white font-medium text-xs text-center'>Python</p>
                </Link>
                <Link to='/student-details/hr' className='bg-[#134574] w-fit relative  flex flex-col h-[160px] px-[10px] rounded-[20px] items-center mt-12'>
                    <img src={pic} alt='item mage' className='absolute w-[75px] top-[-39px]' />
                    <p className='text-white font-medium text-sm pt-16'>Okereke Emmanuel</p>
                    <p className='text-white font-medium text-xs text-center'>Python</p>
                </Link>
                <Link to='/student-details/hr' className='bg-[#134574] w-fit relative  flex flex-col h-[160px] px-[10px] rounded-[20px] items-center mt-12'>
                    <img src={pic} alt='item mage' className='absolute w-[75px] top-[-39px]' />
                    <p className='text-white font-medium text-sm pt-16'>Okereke Emmanuel</p>
                    <p className='text-white font-medium text-xs text-center'>Python</p>
                </Link>
                <Link to='/student-details/hr' className='bg-[#134574] w-fit relative  flex flex-col h-[160px] px-[10px] rounded-[20px] items-center mt-12'>
                    <img src={pic} alt='item mage' className='absolute w-[75px] top-[-39px]' />
                    <p className='text-white font-medium text-sm pt-16'>Okereke Emmanuel</p>
                    <p className='text-white font-medium text-xs text-center'>Python</p>
                </Link>
                <Link to='/student-details/hr' className='bg-[#134574] w-fit relative  flex flex-col h-[160px] px-[10px] rounded-[20px] items-center mt-12'>
                    <img src={pic} alt='item mage' className='absolute w-[75px] top-[-39px]' />
                    <p className='text-white font-medium text-sm pt-16'>Okereke Emmanuel</p>
                    <p className='text-white font-medium text-xs text-center'>Python</p>
                </Link>
                <Link to='/student-details/hr' className='bg-[#134574] w-fit relative  flex flex-col h-[160px] px-[10px] rounded-[20px] items-center mt-12'>
                    <img src={pic} alt='item mage' className='absolute w-[75px] top-[-39px]' />
                    <p className='text-white font-medium text-sm pt-16'>Okereke Emmanuel</p>
                    <p className='text-white font-medium text-xs text-center'>Python</p>
                </Link>
       
            </div>



        </div>



    )
}

export default StudentsSection