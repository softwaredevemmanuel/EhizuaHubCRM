import React from 'react'
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development'
import { FaCirclePlus } from "react-icons/fa6";



import { useState } from "react";
import AdminLogin from "../../AdminLogin"

const PartnerSchools = () => {


  const [user, setUser] = useState(false)

  return (
    <div className="">
      {user ? (
        <AdminLogin />

      ) : (
        <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-screen">
          <div className="w-full  bg-[#C8D1DA] flex flex-col gap-3">

            <div className='flex justify-between '>
              <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Partner Schools Section</p>



            </div>
          </div>
          <div className='border-[#F13178] border-b '></div>


          <div className='grid grid-cols-3'>
            <Link to='/create-school/hr' className=" bg-[#F13178] px-2 mt-4 text-center items-center rounded-[6px] font-bold flex justify-center h-[40px] w-fit">
              <div className="flex items-center justify-center">
                <p className="text-white pl-2">Register School</p>
                <FaCirclePlus size={28} className="pl-2 mr-2 text-white" />

              </div>
            </Link>
            <Link to='/create-school-student/hr' className=" bg-[#F13178] px-2 mt-4 text-center items-center rounded-[6px] font-bold flex justify-center h-[40px] w-fit">
              <div className="flex items-center justify-center">
                <p className="text-white pl-2">Register Student</p>
                <FaCirclePlus size={28} className="pl-2 mr-2 text-white" />

              </div>
            </Link>
            <Link to='/create-school-course/hr' className=" bg-[#F13178] px-2 mt-4 text-center items-center rounded-[6px] font-bold flex justify-center h-[40px] w-fit">
              <div className="flex items-center justify-center">
                <p className="text-white pl-2">Register Course</p>
                <FaCirclePlus size={28} className="pl-2 mr-2 text-white" />

              </div>
            </Link>
          </div>

          <div className=' bg-slate-200 h-fit px-2 pb-4 rounded-md'>
            <Link to="/school-details/hr" className='pl-5 rounded-md "w-[412px] h-[50px] bg-[#134574] flex items-center justify-between mt-2 pr-5'>
              <div className='flex'>
                <p className='text-white ml-2 text-md'>Living Spring Secondary School</p>
              </div>

              <div className='flex gap-4'>
                <p className='text-white sm:pl-4 hidden sm:block'>Awoyaya Bus stop</p>
              </div>

            </Link>
            <Link to="/school-details/hr" className='pl-5 rounded-md "w-[412px] h-[50px] bg-[#134574] flex items-center justify-between mt-2 pr-5 '>
              <div className='flex'>
                <p className='text-white ml-2 text-md'>Living Spring Secondary School</p>
              </div>

              <div className='flex gap-4'>
                <p className='text-white sm:pl-4 hidden sm:block'>Awoyaya Bus stop</p>
              </div>

            </Link>
            <Link to="/school-details/hr" className='pl-5 rounded-md "w-[412px] h-[50px] bg-[#134574] flex items-center justify-between mt-2 pr-5'>
              <div className='flex'>
                <p className='text-white ml-2 text-md'>Living Spring Secondary School</p>
              </div>

              <div className='flex gap-4'>
                <p className='text-white sm:pl-4 hidden sm:block'>Awoyaya Bus stop</p>
              </div>

            </Link>
          </div>



        </div>
      )}
      {/* right section  */}



    </div>
  )
}

export default PartnerSchools