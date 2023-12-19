import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom'
import StaffLogin from "./StaffLogin";


const StaffLeaveApplication = () => {
  const [user, setUser] = useState(false)

  return (
    <div className="">
      {user ? (
        <StaffLogin />
      ) : (
        <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full">
        <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
            <div className='flex justify-between '>
                <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Leave Application</p>
                <Link to='/staff_leave' className='mt-8'><IoIosArrowRoundBack size={38} className="text-[#F13178]"/></Link>

            </div>
              <p className="border-[#F13178] border-b mb-4 mr-[-75px]"> </p>

                <div>
                    <p>Leave Type</p>
                    <select
                      className='rounded-xl pl-4 py-4 mt-4 font-medium text-[#000000] focus:outline-none focus:border-none'
                    >
                      <option className="">Casual</option>
                      <option>Maternity</option>
                      <option>Sick</option>
                    </select>

                </div>
              
              <div className="flex flex-col gap-y-3 lg:ml-5">
                <div className="grid md:grid-cols-2" >
                  <div className="md:grid-cols-2">
                    <p>Start Date</p>
                    <input
                      type="date"
                      className='rounded-xl pl-4 py-4 mt-4 font-medium text-[#000000] focus:outline-none focus:border-none'
                    />
                  </div>
                  <div>
                    <p>End Date</p>
                    <input
                      type="date"
                      className='rounded-xl pl-4 py-4 mt-4 font-medium text-[#000000] focus:outline-none focus:border-none'
                    />

                  </div>


                </div>

                <p>Message</p>

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
        
      )}
      {/* right section  */}



    </div>

  )
}

export default StaffLeaveApplication