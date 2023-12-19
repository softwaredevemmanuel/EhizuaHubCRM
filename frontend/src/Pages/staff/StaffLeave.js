import React, { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import StaffLogin from "./StaffLogin";


const StaffLeave = () => {
  const [user, setUser] = useState(false)

  return (
    <div className="">
      {user ? (
        <StaffLogin />
      ) : (
        <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-screen">
          <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
            <div className='flex justify-between '>
              <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Leave</p>
            </div>
          </div>
          <div className='border-[#F13178] border-b '></div>


          <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3  lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-white max-w-[980px] w-full pb-8">

            
            <Link className="bg-[#134574] max-w-[195px] px-2 lg:max-w-[263px] w-full text-center items-center rounded-[6px] py-4 font-bold flex flex-col justify-center">
              <div className="grid md:grid-cols-2">
                <p className="text-6xl text-[#F13178]">10</p>
                <div>
                  <p className="p-2 ">Allocated Leave</p>
                </div>  
              </div>
            </Link>


            <Link className="bg-[#134574] max-w-[195px] px-2 lg:max-w-[263px] w-full text-center items-center rounded-[6px] py-4 font-bold flex flex-col justify-center">
              <div className="grid md:grid-cols-2">
                <p className="text-6xl text-[#C70202]">3</p>
                <div>
                  <p className="p-2">Declined Leave</p>
                </div>  </div>
            </Link>


            <Link className="bg-[#134574] max-w-[195px] px-2 lg:max-w-[263px] w-full text-center items-center rounded-[6px] py-4 font-bold flex flex-col justify-center">
              <div className="grid md:grid-cols-2">
                <p className="text-6xl text-[#CEAE04]">1</p>
                <div>
                  <p className="p-2">Pending Leave</p>
                </div>  </div>
            </Link>

            <Link className="bg-[#134574] max-w-[195px] px-2 lg:max-w-[263px] w-full text-center items-center rounded-[6px] py-4 font-bold flex flex-col justify-center">
              <div className="grid md:grid-cols-2">
                <p className="text-6xl text-[#16DA70]">3</p>
                <div>
                  <p className="p-2">Approved Leave</p>
                </div>  </div>
            </Link>


          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-white max-w-[980px] w-fit pb-44">

          <Link to='/staff-leave-form' className=" bg-[#F13178] max-w-[195px] px-2 lg:max-w-[263px] w-full text-center items-center rounded-[6px] py-4 font-bold flex gap-4 justify-center">
              <div className="flex items-center justify-center">
                <p className="text-white pl-2">Apply for Leave</p>
                <FaCirclePlus size={28} className="pl-2 mr-2" />

              </div>
            </Link>

          </div>



        </div>
      )}
      {/* right section  */}



    </div>

  )
}

export default StaffLeave
