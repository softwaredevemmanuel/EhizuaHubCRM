import { Fragment, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";

import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid'

import AdminLogin from "../../AdminLogin"

const ComplaintsDetails = () => {
    const [user, setUser] = useState(false)
    const [open, setOpen] = useState(false)
  
    const cancelButtonRef = useRef(null)
  
    const CloseTicket = () => {
      setOpen(true)
    }


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
                          <Link to='/school-new-complaints/hr' className="ml-4 text-xs font-bold text-[#F13178] hover:text-[#134574]">
                            SCHOOL-COMPLAINTS 
                          </Link>
                          <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-[#F13178]" aria-hidden="true" />
                          <div className="ml-4 text-xs font-bold text-[#F13178]">
                            COMPLAINTS HISTORY
                          </div>
                        </div>
                        
                      </li>
    
                    </ol>
                  </nav>
                  <Link to='/school-new-complaints/hr' className='mt-3'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link> 
    
                </div>
    
                <div className='border-[#F13178] border-b '></div>
    
    
    
                <Transition.Root show={open} as={Fragment}>
                  <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
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
                          <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                            <div className="sm:flex sm:items-start">
                              <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                              </div>
                              <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                  Close Complaints
                                </Dialog.Title>
                                <div className="mt-2">
                                  <textarea placeholder='Enter a Text Here' className='w-full bg-slate-200 rounded-md p-2 focus:outline-none focus:border-none' />
                                  <p className="text-sm text-gray-500">
                                    Are you satisfied with how your complaints was resolved? Kindly drop a comment and leave us a review? 
                                  </p>
                                  <div className="flex items-center mt-4">
                                    <p className='pr-4'>Rating</p>
    
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaRegStar />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                              <button
                                type="button"
                                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                onClick={() => setOpen(false)}
                              >
                                Close Ticket
                              </button>
                              <button
                                type="button"
                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                onClick={() => setOpen(false)}
                                ref={cancelButtonRef}
                              >
                                Cancel
                              </button>
                            </div>
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition.Root>
    
                <div className="grid sm:grid-cols-2" >
    
                  <div className="sm:flex text-[#134574] items-center gap-4 mt-2">
                    <p className=" font-bold">Subject</p>
                    <input
                      type="text"
                      placeholder="Title"
                      className='rounded-lg pl-4 py-2 font-medium text-[#134574] focus:outline-none focus:border-none w-full'
                    />
                  </div>
                  <div className="sm:flex text-[#134574] items-center pt-2 gap-4 sm:pl-4">
                    <p className=" font-bold">Priority</p>
                    <select
                      className='rounded-lg pl-4 py-2 font-medium text-[#134574] focus:outline-none focus:border-none w-full'
                    >
                      <option> Medium </option>
                      <option> High </option>
                      <option> Low </option>
                    </select>
    
                  </div>
    
    
                </div>
                <div className="flex justify-end">
                  <button onClick={CloseTicket} className="bg-[#F13178]  font-bold rounded-md px-4 text-white p-1">
                    <div className="flex gap-2 items-center">
                      <p>Close Ticket</p>
                      <FaTimesCircle />
                    </div>
    
                  </button>
                </div>
    
                <div className=" bg-slate-400 w-full">
    
    
                  <div className="sm:flex p-1 sm:p-4 sm:gap-4">
    
                    <p className="text-[#134574] font-bold">You</p>
    
                    <textarea
                      className='w-full h-[200px] rounded-md py-2 lg:px-8 lg:mx-4 pl-4 lg:pr-10 pr-4 bg-[#ffffff] lg:leading-10 leading-8 resize-y focus:outline-none focus:border-none'
                      placeholder='Your text here...'
                    />
    
                  </div>
    
                </div>
                <div className='border-slate-200 border-b '></div>
    
    
                <div className=" bg-slate-400 w-full">
    
    
                  <div className="sm:flex p-1 sm:p-4 gap-4">
    
                    <p className="text-[#134574] font-bold">Admin</p>
    
                    <textarea
                      className='w-full h-[200px] rounded-md py-2 lg:px-8 lg:mx-4 pl-4 lg:pr-10 pr-4 bg-[#ffffff] lg:leading-10 leading-8 resize-y focus:outline-none focus:border-none'
                      placeholder='Your text here...'
                    />
    
                  </div>
                </div>
    
                <div className='border-slate-200 border-b '></div>
                <div className=" flex text-[#134574]">
                  <p className=" font-bold ">Reply</p>
    
                </div>
    
                <div className=" bg-slate-400 w-full">
    
    
                  <div className="flex p-2">
    
                    <textarea
                      className='w-full h-[200px] rounded-md py-2 lg:px-8  pl-4 lg:pr-10 pr-4 bg-[#ffffff] lg:leading-10 leading-8 resize-y focus:outline-none focus:border-none'
                      placeholder='Your text here...'
                    />
    
                  </div>
    
    
    
                  <div className="flex justify-between p-8">
                    <input type="file" />
    
                    <button className='border-2 lg:py-1 py-2 lg:px-10 px-4 rounded-md border-[#F13178] text-[#ffffff] bg-[#F13178] font-semibold'>
                      Submit
                    </button>
                  </div>
                </div>
    
    
    
    
              </div>
            )}
            {/* right section  */}



        </div>
    )
}

export default ComplaintsDetails