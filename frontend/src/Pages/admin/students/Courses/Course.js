import React from 'react'
import { Link } from 'react-router-dom'
import { FaLaptopCode } from "react-icons/fa";
import { MdAnimation } from "react-icons/md";
import { LuAxis3D } from "react-icons/lu";
import { IoAnalytics } from "react-icons/io5";

import { FaDatabase } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";


const Course = () => {

  return (
    <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-screen">
      <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
        <div className='flex justify-between '>
          <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Course & Curriculum</p>

        </div>
      </div>

      <div className='border-[#F13178] border-b '></div>
      <div className="flex justify-end">
        <Link to="/create-student-course/hr" className="bg-[#F13178] px-2 text-center items-center rounded-[6px] font-bold flex justify-center h-[40px] w-fit">
          <div className="flex">
            <p className="text-white pl-2">Create Course </p>
            <FaCirclePlus size={28} className="pl-2 mr-2 text-white" />

          </div>
        </Link>
      </div>



      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 '>
        <Link to='/course-details/hr' className='bg-[#134574] w-full md:w-full flex gap-2 p-2  rounded-lg  mt-4'>
          <MdAnimation size={58} className='text-[#F13178] w-1/3' />
          <div className='w-2/3'>
            <p className='p-1 text-white font-extrabold'>2D Animation</p>
            <p className='p-1 text-white text-xs pt-4'>₦ 300,000</p>
            <p className='p-1 text-white text-xs'>24 Weeks </p>
          </div>



        </Link>
        <Link to='/course-details/hr' className='bg-[#134574] w-full md:w-full flex gap-2 p-2 rounded-lg  mt-4'>
          <LuAxis3D size={58} className='text-[#F13178] w-1/3' />
          <div className='w-2/3'>
            <p className='p-1 text-white font-extrabold'>3D Animation</p>
            <p className='p-1 text-white text-xs pt-4'>₦ 300,000</p>
            <p className='p-1 text-white text-xs'>24 Weeks </p>
          </div>
        </Link>

        <Link to='/course-details/hr' className='bg-[#134574] w-full md:w-full flex gap-2 p-2 rounded-lg  mt-4'>
          <FaLaptopCode size={58} className='text-[#F13178] w-1/3' />
          <div className='w-2/3'>
            <p className='p-1 text-white font-extrabold'>Frontend</p>
            <p className='p-1 text-white text-xs pt-4'>₦ 300,000</p>
            <p className='p-1 text-white text-xs'>24 Weeks </p>
          </div>

        </Link>

        <Link to='/course-details/hr' className='bg-[#134574] w-full md:w-full flex gap-2 p-2 rounded-lg  mt-4'>
          <FaDatabase size={58} className='text-[#F13178] w-1/3' />
          <div className='w-2/3'>
            <p className='p-1 text-white font-extrabold'>Backend</p>
            <p className='p-1 text-white text-xs pt-4'>₦ 300,000</p>
            <p className='p-1 text-white text-xs'>24 Weeks </p>
          </div>

        </Link>
        <Link to='/course-details/hr' className='bg-[#134574] w-full md:w-full flex gap-2 p-2 rounded-lg  mt-4'>
          <FaLaptopCode size={58} className='text-[#F13178] w-1/3' />
          <div className='w-2/3'>
            <p className='p-1 text-white font-extrabold'>Fullstack Web Development</p>
            <p className='p-1 text-white text-xs pt-4'>₦ 300,000</p>
            <p className='p-1 text-white text-xs'>24 Weeks </p>
          </div>

        </Link>
        <Link to='/course-details/hr' className='bg-[#134574] w-full md:w-full flex gap-2 p-2 rounded-lg  mt-4'>
          <IoAnalytics size={58} className='text-[#F13178] w-1/3' />
          <div className='w-2/3'>
            <p className='p-1 text-white font-extrabold'>Data Analysis</p>
            <p className='p-1 text-white text-xs pt-4'>₦ 300,000</p>
            <p className='p-1 text-white text-xs'>24 Weeks </p>
          </div>
        </Link>



      </div>



    </div>



  )
}

export default Course