import React from 'react'
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development'
import { FaCirclePlus } from "react-icons/fa6";



import { useState } from "react";
import AdminLogin from "../../AdminLogin"

const Memo = () => {


  const [user, setUser] = useState(false)

  return (
    <div className="">
      {user ? (
        <AdminLogin />

      ) : (
        <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-screen">
          <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">

            <div className='flex justify-between '>
            <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Staff Memo</p>


              <Link to='/create-memo' className=" bg-[#F13178] px-2 mt-4 text-center items-center rounded-[6px] font-bold flex justify-center h-[40px]">
                <div className="flex items-center justify-center">
                  <p className="text-white pl-2">New Memo</p>
                  <FaCirclePlus size={28} className="pl-2 mr-2 text-white" />

                </div>
              </Link>


            </div>
          </div>
          <div className='border-[#F13178] border-b '></div>


          <Link to="/memo-details" className='pl-5 rounded-xl "w-[412px] h-[50px] bg-[#134574] flex items-center justify-between mt-1 pr-5'>
            <div className='flex'>
              <p className='text-white ml-2 text-md'>Notice of general meeting</p>
            </div>

            <div className='flex gap-4'>
              <p className='text-white sm:pl-4 hidden sm:block'>Ehizua Hub Awoyaya</p>
            </div>

          </Link>

          <Link to="/memo-details" className='pl-5 rounded-xl "w-[412px] h-[50px] bg-[#134574] flex items-center justify-between mt-1 pr-5'>
            <div className='flex'>
              <p className='text-white ml-2 text-md'>Notice of general meeting</p>
            </div>

            <div className='flex gap-4'>
              <p className='text-white sm:pl-4 hidden sm:block'>Ehizua Hub Awoyaya</p>
            </div>

          </Link>

          <Link to="/memo-details" className='pl-5 rounded-xl "w-[412px] h-[50px] bg-[#134574] flex items-center justify-between mt-1 pr-5'>
            <div className='flex'>
              <p className='text-white ml-2 text-md'>Notice of general meeting</p>
            </div>

            <div className='flex gap-4'>
              <p className='text-white sm:pl-4 hidden sm:block'>Ehizua Hub Awoyaya</p>
            </div>

          </Link>

          <div className="grid grid-cols-2 lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-white max-w-[980px] w-fit pb-44">

          </div>



        </div>
      )}
      {/* right section  */}



    </div>
  )
}

export default Memo