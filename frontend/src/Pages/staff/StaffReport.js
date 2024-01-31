import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { FaStarOfLife } from "react-icons/fa";

import StaffLogin from "./StaffLogin";


const StaffReport = () => {
  const [user, setUser] = useState(false)
  const [otherTopic, setOtherTopic] = useState('')

  useEffect(() => {
    let staffToken = JSON.parse(localStorage.getItem('StaffToken'));
    if (staffToken && staffToken.token) {
      setUser(true);

    }
  }, []);

  return (
    <div className="">
      {!user ? (
        <StaffLogin />
      ) : (
        <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full">
          <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
            <div className='flex justify-between '>
              <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Weekly Report</p>
            </div>
          </div>
          <div className='border-[#F13178] border-b '></div>

          <div className="grid grid-cols-3">
            <div className='pt-1 flex gap-4'>
              <p className='text-[#134574] font-bold'>Year</p>

              <select type='date' className='rounded-lg h-[30px] w-[200px] text-slate-500 outline-none bg-slate-200 px-4' >
                <option>Select</option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
                <option>2027</option>
                <option>2028</option>
              </select>

            </div>
            <div className='pt-1 flex gap-4'>
              <p className='text-[#134574] font-bold'>Month</p>

              <select type='date' className='rounded-lg h-[30px] w-[200px] text-slate-500 outline-none bg-slate-200 px-4' >
                <option>Select</option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>

            </div>
            <div className='pt-1 flex gap-4'>
              <p className='text-[#134574] font-bold'>Week</p>

              <select type='date' className='rounded-lg h-[30px] w-[200px] text-slate-500 outline-none bg-slate-200 px-4' >
                <option>Select Week</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>

            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className='pt-1 gap-4'>
              <p className='text-[#134574] font-bold'>Topic</p>

              <select 
                type='date' 
                className='rounded-lg h-[30px] w-full text-slate-500 outline-none bg-slate-200 px-4' 
                onChange={(event) => setOtherTopic(event.target.value)}
                >
                <option>Select</option>
                <option value='new_topic'>NEW TOPIC</option>
                <option>Introduction to html</option>
                <option>Introduction to html</option>
                <option>Introduction to html</option>
                <option>Introduction to html</option>
                <option>Introduction to html</option>

              </select>

            </div>
            {otherTopic == 'new_topic' && (
              <div className='pt-1 gap-4'>
                <div className="flex gap-4 items-center">
                <FaStarOfLife size={8} className="text-red-600"/>
                <p className='text-[#134574] font-bold'>New Topic</p>
                </div>

                <input type='text' className='rounded-lg h-[30px] w-full text-slate-500 outline-none bg-slate-200 px-4' />

              </div>
            )}

            {otherTopic == 'new_topic' && (


              <div className='pt-1 gap-4'>
                <div className="flex gap-4 items-center">
                <FaStarOfLife size={8} className="text-red-600"/>
                <p className='text-[#134574] font-bold'>Reason for change in topic</p>
                </div>
                <textarea className='rounded-lg  w-full text-slate-500 outline-none bg-slate-200 px-4'/>

              </div>

            )}

          </div>


          <div className="flex flex-col gap-y-3 lg:ml-5 pb-20">
            <input
              type="text"
              placeholder='Title'
              className='rounded-xl pl-4 w-full py-4 mt-4 font-medium text-[#000000] focus:outline-none focus:border-none'
            />
            <textarea
              style={{ minHeight: '600px' }}
              className='rounded-xl py-2 lg:pl-8 pl-4 lg:pr-10 pr-4 bg-[#ffffff] lg:leading-10 leading-8 resize-y focus:outline-none focus:border-none'
              placeholder='Your text here...'
            ></textarea>


            <div className="flex justify-end">
              <Link to="/report2">
                <button className='border-2 lg:py-3 py-2 lg:px-10 px-4 rounded-md border-[#F13178] text-[#ffffff] bg-[#F13178] font-semibold'>
                  Submit Report
                </button>
              </Link>
            </div>
          </div>


        </div>
      )}
      {/* right section  */}



    </div>

  )
}

export default StaffReport
