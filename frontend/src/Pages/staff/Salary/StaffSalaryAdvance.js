import { Fragment, useRef, useState } from 'react'
import { GiReceiveMoney } from "react-icons/gi";
import { Link } from 'react-router-dom'
import StaffLogin from "../StaffLogin";

import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

const StaffSalaryAdvance = () => {
  const [user, setUser] = useState(false)
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const [open, setOpen] = useState(false)

  const cancelButtonRef = useRef(null)

  const ViewEligibility = () => {
    setOpen(true)
  }

  return (
    <div className="">
      {user ? (
        <StaffLogin />
      ) : (
        <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full pb-12">
            <div className='flex justify-between'>
              <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >SALARY ADVANCE & LOAN</p>
            </div>

            <div className='border-[#F13178] border-b '></div>

            {/* <Transition.Root show={open} as={Fragment}>
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
                              Loan Eligibility
                            </Dialog.Title>
                            <div className="mt-2">
                              <p className="text-sm text-gray-500"> 
                                  1. You most have been employed for more than 3 years 
                              </p>
                              <p className="text-sm text-gray-500"> 
                                  2. You cant take a loan whose repayment plan is more than 30% of your salary 
                              </p>
                              <p className="text-sm text-gray-500"> 
                                  3. The repayment plan amount will be deducted from your monthy salary
                              </p>
                              <p className="text-sm text-gray-500"> 
                                  4. During the peroid of loan, salary advance request will not be granted
                              </p>
                     
                            </div>
                          </div>
                        </div>
                        <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                          <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                            onClick={() => setOpen(false)}
                          >
                            Close
                          </button>
                     
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition.Root>

            <div className='flex gap-4'>
              <p className='text-[#134574] font-bold'>Question Type</p>

              <select
                value={selectedOption}
                onChange={handleSelectChange}
                className='rounded-lg h-[30px] w-[200px] text-slate-500 outline-none bg-slate-200 px-4'>
                <option value=''>Salary Advance</option>
                <option value='theory'>Loan</option>
              </select>

            </div>

            {!selectedOption ? (
              <div className=" bg-slate-400 w-full px-4">
                <div className="grid grid-cols-2 gap-4" >

                  <div className=" text-[#134574] items-center sm:p-4 gap-4 mt-2">
                    <p className=" font-bold">Amount</p>
                    <input
                      type="text"
                      value='N30000'
                      readOnly
                      className='rounded-md w-full pl-4 py-2 font-medium text-[#134574] focus:outline-none focus:border-none'
                    />
                  </div>
                  <div className="text-[#134574] items-center sm:p-4 mt-2">
                    <p className=" font-bold">Percentage</p>
                    <select
                      className='rounded-md w-full pl-4 py-2 font-medium text-[#134574] focus:outline-none focus:border-none'
                    >
                      <option className="">10 %</option>
                      <option>20 %</option>
                      <option>30 %</option>
                    </select>

                  </div>


                </div>

                <div className="pt-4 sm:px-4">

                  <p className="text-[#134574] font-bold">Reason</p>

                  <textarea
                    className='w-full h-[200px] rounded-xl py-2  pl-4 lg:pr-10 pr-4 bg-[#ffffff] lg:leading-10 leading-8 resize-y focus:outline-none focus:border-none'
                    placeholder='Your text here...'
                  />

                </div>



                <div className="flex justify-end p-8">
                  <button className='border-2 lg:py-1 py-2 lg:px-10 px-4 rounded-md border-[#F13178] text-[#ffffff] bg-[#F13178] font-semibold'>
                    Apply
                  </button>
                </div>
              </div>
            ) : (
              <div className=" bg-slate-400 w-full px-4">
                <div className="flex items-center justify-center">
                <button onClick={ViewEligibility} className="mt-2 text-[#134574] text-sm underline font-bold">
                  <p>View Eligibility and Terms and Conditions</p>
                </button>
                </div>
                <div className="grid grid-cols-2 gap-4" >

                  <div className=" text-[#134574] items-center sm:p-4 gap-4 mt-2">
                    <p className=" font-bold">Loan Amount</p>
                    <input
                      type="text"
                      className='rounded-md w-full pl-4 py-2 font-medium text-[#134574] focus:outline-none focus:border-none'
                    />
                  </div>
                  <div className="text-[#134574] items-center sm:p-4 mt-2">
                    <p className=" font-bold">Duration</p>
                    <select
                      className='rounded-md w-full pl-4 py-2 font-medium text-[#134574] focus:outline-none focus:border-none'
                    >
                      <option className="">Select Payment Plan</option>
                      <option>6 months</option>
                      <option>12 months</option>
                      <option>18 months</option>
                      <option>24 months</option>
                    </select>

                  </div>
                </div>
                
                <div className="flex items-center justify-center mt-4 text-slate-200">
                 <p>AMOUNT TO BE DEDUCTED MONTLY</p>
                </div>
                <div className="flex items-center justify-center ">
                  <input 
                    readOnly 
                    value='N20000' 
                    className='w-[300px] h-[100px] text-5xl pl-4 py-2 font-medium text-[#134574] focus:outline-none focus:border-none text-center'

                  />
                </div>

                <div className="pt-4 sm:px-4">

                  <p className="text-[#134574] font-bold">Reason</p>

                  <textarea
                    className='w-full h-[200px] rounded-xl py-2  pl-4 lg:pr-10 pr-4 bg-[#ffffff] lg:leading-10 leading-8 resize-y focus:outline-none focus:border-none'
                    placeholder='Your text here...'
                  />

                </div>



                <div className="flex justify-end p-8">
                  <button className='border-2 lg:py-1 py-2 lg:px-10 px-4 rounded-md border-[#F13178] text-[#ffffff] bg-[#F13178] font-semibold'>
                    Apply
                  </button>
                </div>
              </div>
            )} */}

<div className="p-1">
            <p className="text-4xl text-center text-slate-600">Coming up soon....</p>
          </div>


          </div>
      )
      }
      {/* right section  */}



    </div >

  )
}

export default StaffSalaryAdvance