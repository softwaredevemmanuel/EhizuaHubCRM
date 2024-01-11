import React, { useState } from "react";
import { Link } from 'react-router-dom'
import StaffLogin from "../StaffLogin";
import { IoIosArrowRoundBack } from "react-icons/io";
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid'

const ItemRequest = () => {
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
                                        <Link to='/staff_inventory' className="ml-1 sm:ml-4 text-xs font-bold text-[#F13178] hover:text-[#134574]">
                                            INVENTORY
                                        </Link>
                                        <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-[#F13178]" aria-hidden="true" />
                                        <div className="ml-1 sm:ml-4 text-xs font-bold text-[#F13178]">
                                            NEW REQUEST
                                        </div>
                                    </div>

                                </li>

                            </ol>
                        </nav>
                        {/* <Link to='/staff_inventory' className='mt-3'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link> */}

                    </div>

                    <div className='border-[#F13178] border-b '></div>

                    <div className=" bg-slate-400 w-full">

                        <div className=" text-[#134574] items-center p-4 gap-4 mt-2">
                            <p className=" font-bold">Item</p>
                            <input
                                type="text"
                                placeholder="name"
                                className='rounded-lg pl-4 py-2 font-medium text-[#134574] focus:outline-none focus:border-none w-full'
                            />
                        </div>




                        <div className="p-4">

                            <p className="text-[#134574] font-bold">Message</p>

                            <textarea
                                className='w-full h-[200px] rounded-md py-2 lg:px-8 pl-4 lg:pr-10 pr-4 bg-[#ffffff] lg:leading-10 leading-8 resize-y focus:outline-none focus:border-none'
                                placeholder='Your text here...'
                            />

                        </div>



                        <div className="flex justify-end p-8">

                            <button className='border-2 lg:py-1 py-2 lg:px-10 px-4 rounded-md border-[#F13178] text-[#ffffff] bg-[#F13178] font-semibold'>
                                Request
                            </button>
                        </div>
                    </div>


                </div>
            )
            }
            {/* right section  */}



        </div >

    )
}

export default ItemRequest