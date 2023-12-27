import React, { useState } from "react";
import { IoArrowBackOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import StaffLogin from "./StaffLogin";


const StaffSalaryAdvance = () => {
  const [user, setUser] = useState(false)

  return (
    <div className="">
      {user ? (
        <StaffLogin />
      ) : (
        <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-screen">
          <div className='bg-[#C8D1DA] w-full pl-2 lg:py-10 py-6 lg:pr-[75px] md:pr-6 pr-3'>
            <div className="ml-2">
              <div className='text-[#F13178] flex justify-between'>
                <h1 className='text-[20px] font-bold '>SALARY ADVANCE</h1>
              </div>
              <p className="border-[#F13178] border-b mb-4 mr-[-75px]"> </p>

              <div className="flex flex-col gap-y-3 lg:ml-5">
                <div className="flex gap-4" >
                  <div className="md:grid-cols-2 text-[#134574]">
                    <p>Amount</p>
                    <input
                      type="text"
                      value='N30000'
                      readOnly
                      className='rounded-lg pl-4 py-4 mt-4 font-medium text-[#134574] focus:outline-none focus:border-none'
                    />
                  </div>
                  <div className="text-[#134574]">
                    <p>Percentage</p>
                    <select
                      className='rounded-lg pl-4 py-4 mt-4 font-medium text-[#134574] focus:outline-none focus:border-none'
                    >
                      <option className="">10 %</option>
                      <option>20 %</option>
                      <option>30 %</option>
                    </select>

                  </div>


                </div>

                <p className="text-[#134574]">Reason</p>

                <textarea
                  style={{ minHeight: '200px' }}
                  className='rounded-xl py-2 lg:pl-8 pl-4 lg:pr-10 pr-4 bg-[#ffffff] lg:leading-10 leading-8 resize-y focus:outline-none focus:border-none'
                  placeholder='Your text here...'
                ></textarea>



                <div className="flex justify-end">
                  <Link to="/report2">
                    <button className='border-2 lg:py-3 py-2 lg:px-10 px-4 rounded-md border-[#F13178] text-[#ffffff] bg-[#F13178] font-semibold'>
                      Apply
                    </button>
                  </Link>
                </div>
              </div>


            </div>
          </div>
        </div>
      )}
      {/* right section  */}



    </div>

  )
}

export default StaffSalaryAdvance