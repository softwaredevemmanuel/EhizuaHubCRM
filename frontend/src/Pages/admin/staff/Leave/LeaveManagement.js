import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development'
import AdminLogin from "../../AdminLogin"
import toastr from 'toastr';
import { LuRefreshCcw } from "react-icons/lu";
import ReactLoading from "react-loading";

const LeaveManagement = () => {
  const [user, setUser] = useState(false)
  const [leaveRequest, setLeaveRequest] = useState([]);
  const [reload, setReload] = useState('');
  const [loading, setLoading] = useState(false);

  const Refresh = () => {
    if (reload === '') {
      setReload('reload')

    } else {
      setReload('')

    }
  }

  useEffect(() => {
    let staffToken = JSON.parse(localStorage.getItem('StaffToken'));
    if (staffToken && staffToken.token) {
      setUser(true);

    }
  }, []);


  useEffect(() => {
    // Fetch tutors when the component mounts
    setLoading(true)
    async function fetchLeave() {
      try {
        const response = await axios.get('http://localhost:5000/api/auth/staff-leave-request');
        setLeaveRequest(response.data.leave);
        setLoading(false)
      } catch (error) {
        toastr.error('Error retrieving tutors');
        setLoading(false)

      }
    }

    fetchLeave();
  }, [reload]);

  const pendingArray = leaveRequest.filter(item => item.isApproved === 0);
  const approvedArray = leaveRequest.filter(item => item.isApproved === 1);
  const rejectedArray = leaveRequest.filter(item => item.isApproved === 2);
  const pending = pendingArray.length
  const approved = approvedArray.length
  const rejected = rejectedArray.length
  const allLeave = leaveRequest.length



  return (
    <div className="">
      {!user ? (
        <AdminLogin />

      ) : (
        <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-screen">
          <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
            <div className='flex justify-between '>
              <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Ehizua Hub Awoyaya</p>
              {/* <Link to='/staff-leave-location' className='mt-8'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link> */}

            </div>
          </div>
          <div className='border-[#F13178] border-b '></div>

          {loading && (
            <div className=" z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
              <ReactLoading type={"bars"} color={"#ffffff"} height={100} width={100} />
            </div>
          )}


          <div className='flex justify-end'>
            <button onClick={Refresh}>
              <div className='flex gap-2 text-gray-500'>
                <p className=''>Refresh</p>

                <LuRefreshCcw size={24} />
              </div>
            </button>
          </div>

          {/* <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3  lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[10px] text-white max-w-[980px] w-full pb-2 bg-slate-600 p-2" >
            <div className="bg-slate-400 max-w-[195px] px-2 lg:max-w-[263px] w-full  rounded-[6px] py-1 flex flex-col justify-center">
              <div className="">
                <p className="font-bold text-[#134574] text-center ">Annual Leave 2024</p>
                <p className="text-sm text-[#134574] text-center">19 Dec 2023 - 12 Jan 2024</p>
              </div>
            </div>
            <Link className="bg-slate-400 max-w-[195px] px-2 lg:max-w-[263px] w-full  rounded-[6px] py-1 font-bold flex flex-col justify-center">
              <div className="flex items-center">
                <p className="text-3xl text-[#134574] w-1/3 text-center">10</p>
                <div className="w-2/3">
                  <p className="p-2 text-[#134574]">Allocated Leave</p>
                </div>
              </div>
            </Link>


            <Link className="bg-slate-400 max-w-[195px] px-2 lg:max-w-[263px] w-full  rounded-[6px] py-1 font-bold flex flex-col justify-center">
              <div className="flex items-center">
                <p className="text-3xl  w-1/3 text-center text-red-500">3</p>
                <div className="w-2/3">
                  <p className="p-2 text-red-500">Declined Leave</p>
                </div>  </div>
            </Link>


            <Link className="bg-slate-400 max-w-[195px] px-2 lg:max-w-[263px] w-full  rounded-[6px] py-1 font-bold flex flex-col justify-center">
              <div className="flex items-center">
                <p className="text-3xl  w-1/3 text-center text-yellow-300">1</p>
                <div className="w-2/3">
                  <p className="p-2  text-yellow-300">Pending Leave</p>
                </div>
              </div>
            </Link>

            <Link className="bg-slate-400 max-w-[195px] px-2 lg:max-w-[263px] w-full  rounded-[6px] py-1 font-bold flex flex-col justify-center">
              <div className="flex items-center">
                <p className="text-3xl  w-1/3 text-center text-green-400">3</p>
                <div className="w-2/3">
                  <p className="p-2 text-green-400">Approved Leave</p>
                </div>
              </div>
            </Link>
            <Link className="bg-slate-400 max-w-[195px] px-2 lg:max-w-[263px] w-full  rounded-[6px] py-1 font-bold flex flex-col justify-center">
              <div className="flex items-center">
                <p className="text-3xl  w-1/3 text-center">6</p>
                <div className="w-2/3">
                  <p className="p-2 ">Days Remaining</p>
                </div>
              </div>
            </Link>


          </div> */}

          <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3  lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-[#134574] max-w-[980px] w-full p-8 mt-4 bg-slate-200">


            <Link to="/all-leave" className="bg-slate-500 max-w-[195px] px-1 lg:max-w-[263px] w-full text-center items-center rounded-[6px] py-1 font-bold flex flex-col justify-center">
              <div className="grid md:grid-cols-2 gap-1">
                <p className="text-6xl text-[#F13178] bg-slate-400">{allLeave}</p>
                <div>
                  <p className="p-2 bg-slate-400">Leave Requests</p>
                </div>
              </div>
            </Link>


            <Link to="/declined-leave" className="bg-slate-500 max-w-[195px] px-1 lg:max-w-[263px] w-full text-center items-center rounded-[6px] py-1 font-bold flex flex-col justify-center">
              <div className="grid md:grid-cols-2 gap-1">
                <p className="text-6xl text-[#C70202] bg-slate-400">{rejected}</p>
                <div>
                  <p className="p-2 bg-slate-400">Declined Leave</p>
                </div>  </div>
            </Link>


            <Link to="/pending-leave" className="bg-slate-500 max-w-[195px] px-1 lg:max-w-[263px] w-full text-center items-center rounded-[6px] py-1 font-bold flex flex-col justify-center">
              <div className="grid md:grid-cols-2 gap-1">
                <p className="text-6xl text-[#CEAE04] bg-slate-400">{pending}</p>
                <div>
                  <p className="p-2 bg-slate-400">Pending Leave</p>
                </div>
              </div>
            </Link>

            <Link to="/approved-leave" className="bg-slate-500 max-w-[195px] px-1 lg:max-w-[263px] w-full text-center items-center rounded-[6px] py-1 font-bold flex flex-col justify-center">
              <div className="grid md:grid-cols-2 gap-1">
                <p className="text-6xl text-[#16DA70] bg-slate-400 ">{approved}</p>
                <div>
                  <p className="p-2 bg-slate-400">Approved Leave</p>
                </div>
              </div>
            </Link>


          </div>


          <div className="grid grid-cols-2 lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-white max-w-[980px] w-fit pb-44">




          </div>



        </div>
      )}
      {/* right section  */}



    </div>
  )
}

export default LeaveManagement