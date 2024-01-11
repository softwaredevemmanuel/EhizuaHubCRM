import React, { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import StaffLogin from "../StaffLogin";


const StaffLeave = () => {
  const [user, setUser] = useState(false)

  const data = [
    [' 2', '08/08/23', '08/08/25', 'I will be  attending an event at Landmark event center, Devfest', '', 'Pending',],
    [' 2', '08/08/23', '08/08/25', 'I will be  attending an event at Landmark event center, Devfest', '', 'Approved',],
    [' 2', '08/08/23', '08/08/25', 'I will be  attending an event at Landmark event center, Devfest', '', 'Approved',],
    [' 2', '08/08/23', '08/08/25', 'I will be  attending an event at Landmark event center, Devfest', '', 'Approved',],
    [' 2', '08/08/23', '08/08/25', 'I will be  attending an event at Landmark event center, Devfest', '', 'Rejected',],
    [' 2', '08/08/23', '08/08/25', 'I will be  attending an event at Landmark event center, Devfest', '', 'Approved',],
    [' 2', '08/08/23', '08/08/25', 'I will be  attending an event at Landmark event center, Devfest', '', 'Rejected',],
    [' 2', '08/08/23', '08/08/25', 'I will be  attending an event at Landmark event center, Devfest', '', 'Rejected',],
    [' 2', '08/08/23', '08/08/25', 'I will be  attending an event at Landmark event center, Devfest', '', 'Approved',],
    [' 2', '08/08/23', '08/08/25', 'I will be  attending an event at Landmark event center, Devfest', '', 'Rejected',],
    [' 2', '08/08/23', '08/08/25', 'I will be  attending an event at Landmark event center, Devfest', '', 'Approved',],

  ];
  // Add this function to determine the color class based on cell value
  const getColorClass = (cellValue) => {
    switch (cellValue) {
      case 'Pending':
        return 'bg-yellow-400'; // Adjust the color as needed
      case 'Approved':
        return 'bg-green-400'; // Adjust the color as needed
      case 'Rejected':
        return 'bg-red-400'; // Adjust the color as needed
      default:
        return ''; // No background color for other cases
    }
  };

  return (
    <div className="">
      {user ? (
        <StaffLogin />
      ) : (
        <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full pb-12">
          <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
            <div className='flex justify-between '>
              <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Leave</p>
            </div>
          </div>
          <div className='border-[#F13178] border-b '></div>

          <div className="flex justify-end text-white">
            {/* <Link to='/staff-leave-form' className=" bg-slate-500 px-2 w-fit  text-center items-center rounded-lg py-1 font-bold flex gap-4 justify-center">
              <div className="flex items-center justify-center">
                <p className="pl-2">Apply for Leave</p>
                <FaCirclePlus size={28} className="pl-2 mr-2" />
              </div>
            </Link> */}
            <p className="text-[#134574] font-bold">Waiting For Leave Approval....</p>
          </div>


          <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3  lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[10px] text-white max-w-[980px] w-full pb-2 bg-slate-600 p-2" >
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


          </div>


          <div className='bg-slate-200  h-[520px]  sm:px-1'>
            <div className='overflow-x-auto mt-1'>
              <div className='p-1 h-[500px]'>

                <table className="w-[1000px] bg-white border border-gray-500 mb-8">
                  <thead>
                    <tr className='text-[#134574] bg-slate-400'>
                      <th className="border p-2">No of Days</th>
                      <th className="border p-2">FROM</th>
                      <th className="border p-2">TO</th>
                      <th className="border p-2">PURPOSE OF LEAVE</th>
                      <th className="border p-2">SUPPORTING DOCUMENT</th>
                      <th className="border p-2">ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((row, index) => (
                      <tr key={index} className='hover:bg-gray-200'>
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex} className={`border p-3 ${getColorClass(cell)}`}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>

                </table>


              </div>
            </div>


          </div>




        </div>
      )}



    </div>

  )
}

export default StaffLeave
