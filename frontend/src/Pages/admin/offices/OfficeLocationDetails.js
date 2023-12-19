import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";

import { IoIosArrowDropdown } from "react-icons/io";
import { FaPlus } from "react-icons/fa";

import pic from "../../../assets/profile-34.png"


import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import Ehizuahub from '../../../assets/Ehizua-Hub.png'


const OfficeLocationDetails = () => {
    const [open, setOpen] = useState(false)


    const [isOpen, setIsOpen] = useState(false);
    const [isPosition, setIsPosition] = useState(false);

    const showlocations = () => {
        setIsOpen(!isOpen);
        setIsPosition(!false);
    }


    const ViewStaff =()=>{
        setOpen(true)
    }

    return (
        <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full pb-12">
            <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
                <div className='flex justify-between '>
                    <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Office Overview</p>
                    <Link to='/office-locations/hr' className='mt-8'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>

                </div>
            </div>
            <div className='border-[#F13178] border-b '></div>

            <div className='bg-[#134574] h-full rounded-lg pb-4'>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
                    <img src={Ehizuahub} className="w-full sm:w-[300px] max-w-full max-h-full p-1 md:my-auto" />
                    <div className='w-full sm:col-span-2 px-4 sm:px-0 md:pr-2'>
                        <p className='text-white font-bold text-center justify-center pt-2'>Ehizua Hub Awoyaya</p>
                        <p className='text-slate-300 pt-2 '></p>
                        <p className='text-slate-300 pt-2 text-xs'>Duration: 12 Weeks</p>
                        <p className='text-slate-300 pt-2 text-xs'>Course Fee: ₦ 300,000.00</p>
                    </div>
                </div>


            </div>

            <div className='flex justify-between '>
                    <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Staff</p>

                </div>
                <div className='border-[#F13178] border-b '></div>


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
                                            <img src={pic} alt='item.Image' className=' w-[75px] top-[-39px]' />

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



            {/* <div className=' grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-center mt-8 gap-2'>
                <button onClick={ViewStaff} className='bg-[#134574] w-fit relative  flex flex-col h-[160px] px-[10px] rounded-[20px] items-center mt-12'>
                    <img src={pic} alt='item.Image' className='absolute w-[75px] top-[-39px]' />
                    <p className='text-white font-medium text-sm pt-16'>Okereke Emmanuel</p>
                    <p className='text-white font-medium text-xs text-center'>Full Stack Web Instructor / Python</p>
                </button>
                
            </div> */}

          <button onClick={ViewStaff} className='pl-5 rounded-xl "w-[412px] h-[50px] bg-[#134574] flex items-center justify-between mt-1 pr-5'>
            <div className='flex'>
              <p className='text-white ml-2 text-md'>Okereke Emmanuel</p>
            </div>

            <div className='flex gap-4'>
              <p className='text-white sm:pl-4 hidden sm:block'>Fullstack Web Development Instructor</p>
            </div>

          </button>

          <button onClick={ViewStaff} className='pl-5 rounded-xl "w-[412px] h-[50px] bg-[#134574] flex items-center justify-between mt-1 pr-5'>
            <div className='flex'>
              <p className='text-white ml-2 text-md'>Okereke Emmanuel</p>
            </div>

            <div className='flex gap-4'>
              <p className='text-white sm:pl-4 hidden sm:block'>Fullstack Web Development Instructor</p>
            </div>

          </button>

          <button onClick={ViewStaff} className='pl-5 rounded-xl "w-[412px] h-[50px] bg-[#134574] flex items-center justify-between mt-1 pr-5'>
            <div className='flex'>
              <p className='text-white ml-2 text-md'>Okereke Emmanuel</p>
            </div>

            <div className='flex gap-4'>
              <p className='text-white sm:pl-4 hidden sm:block'>Fullstack Web Development Instructor</p>
            </div>

          </button>



        </div>



    )
}

export default OfficeLocationDetails