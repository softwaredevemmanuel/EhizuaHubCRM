import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom'
import StaffLogin from "../StaffLogin";
import JoditEditor from 'jodit-react';
import axios from 'axios';
import toastr from 'toastr';
import { useNavigate } from 'react-router-dom';



const StaffLeaveApplication = () => {
  const [user, setUser] = useState(false)
  const [content, setContent] = useState('')
  const [leaveType, setLeaveType] = useState('')
  const [startDate, setStartDate] = useState('')
  const [returnDate, setReturnDate] = useState('')
  const [email, setEmail] = useState('')
  const editor = useRef(null);
  const navigate = useNavigate();



// ..................useEffect for checking localStorage and Verifying Login ..............
  useEffect(() => {
    let staffToken = JSON.parse(localStorage.getItem('StaffToken'));
    let localEmail = JSON.parse(localStorage.getItem('User'));
    if (staffToken && staffToken.token) {
      setUser(true);
      setEmail(localEmail.email)

    }
  }, []);





  function sendLeaveRequest() {
    axios
      .post('http://localhost:5000/api/staff/leave-application',

        {
          leaveType: leaveType,
          email: email,
          startDate: startDate,
          returnDate: returnDate,
          content: content

        })
      .then((response) => {
        toastr.success(response.data.message)
        navigate('/staff_leave')


      })
      .catch((error) => {

      });

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    sendLeaveRequest();
  };

  return (
    <div className="">
      {!user ? (
        <StaffLogin />
      ) : (
        <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-screen">
          <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
            <div className='flex justify-between '>
              <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Leave Application</p>
              <Link to='/staff_leave' className='mt-8'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>

            </div>
            <div className='border-[#F13178] border-b '></div>

            <form onSubmit={handleSubmit}>

              <div className="grid sm:grid-cols-3 text-slate-600 text-xs sm:text-base gap-4">
                <div>
                  <p>Leave Type</p>
                  <select
                    className='rounded-md pl-4 py-1 mt-4 font-medium w-full focus:outline-none focus:border-none'
                    value={leaveType}
                    onChange={(event)=>setLeaveType(event.target.value)}
                  >
                    <option value=''>Select</option>
                    <option value='casual'>Casual</option>
                    <option value='maternity'>Maternity</option>
                    <option value='sick'>Sick</option>
                  </select>

                </div>

                <div className="md:grid-cols-2">
                  <p>Start Date</p>
                  <input
                    type="date"
                    className='rounded-md pl-4 py-1 w-full mt-4 font-medium text-slate-600 focus:outline-none focus:border-none'
                    value={startDate}
                    onChange={(event)=>setStartDate(event.target.value)}
                  />
                </div>
                <div>
                  <p>Resumption Date</p>
                  <input
                    type="date"
                    className='rounded-md pl-4 py-1 w-full mt-4 font-medium text-slate-600 focus:outline-none focus:border-none'
                    value={returnDate}
                    onChange={(event)=>setReturnDate(event.target.value)}
                  />

                </div>
              </div>

              <p className="mt-4 text-slate-600 ">Message</p>

              <div className=' mt-1'>

                <JoditEditor
                  ref={editor}
                  value={content}
                  tabIndex={1} // tabIndex of textarea
                  onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                  onChange={newContent => { }}
                />

              </div>


              <div className="flex justify-end">
                  <button className='border-2  px-4 rounded-md border-[#F13178] text-[#ffffff] bg-[#F13178] font-semibold'>
                    Apply
                  </button>
              </div>

            </form>

          </div>
        </div>

      )}
    </div>

  )
}

export default StaffLeaveApplication