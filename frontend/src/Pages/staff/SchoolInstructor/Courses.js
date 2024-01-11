import React from 'react'
import { Link } from 'react-router-dom'
import { FaLaptopCode } from "react-icons/fa";
import { MdAnimation } from "react-icons/md";
import { LuAxis3D } from "react-icons/lu";
import { IoAnalytics } from "react-icons/io5";

import { FaDatabase } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { CiViewList } from "react-icons/ci";
import { FaChalkboardUser } from "react-icons/fa6";



const SchoolInstructorCourse = () => {

  return (
    <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-screen">
      <div className='flex justify-between '>
        <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >School Courses</p>

      </div>

      <div className='border-[#F13178] border-b '></div>


      <div className='bg-slate-400 w-full md:w-full sm:flex gap-2 p-2  rounded-lg  mt-2'>
        
        <MdAnimation size={58} className='text-slate-500 sm:w-1/5 w-full' />

        <div className='w-full sm:w-1/5 text-[#134574] items-center justify-center'>
        <p className='p-1 font-extrabold text-center sm:text-start'>2D Animation</p>
          <p className='p-1 text-xs'>Mr Emmanuel</p>

        </div>

        <div className='w-full sm:w-3/5 text-[#134574]'>

          <div className='grid grid-cols-3 gap-2'>

            <Link to='' className=" bg-slate-500 px-2 w-full text-center items-center rounded-[6px]  flex justify-center">
              <div className="flex items-center justify-center">
                <p className="text-white pl-2 text-xs">Curriculum</p>
                <FaCirclePlus size={28} className="pl-2 text-white" />

              </div>
            </Link>


            <Link to='' className=" bg-slate-500 px-2 w-full text-center items-center rounded-[6px]  flex justify-center">
              <div className="flex items-center justify-center">
                <p className="text-white pl-2 text-xs">Content</p>
                <FaCirclePlus size={28} className="pl-2 text-white" />

              </div>
            </Link>
            

            <Link to='' className=" bg-slate-500 px-2 w-full text-center items-center rounded-[6px]  flex justify-center">
              <div className="flex items-center justify-center">
                <p className="text-white pl-2 text-xs">Question</p>
                <FaCirclePlus size={28} className="pl-2 text-white" />

              </div>
            </Link>

            <Link to='' className=" bg-slate-500 px-2 w-full text-center items-center rounded-[6px]  flex justify-center">
              <div className="flex items-center justify-center">
                <p className="text-white pl-2 text-xs">Curriculum</p>
                <CiViewList size={28} className="pl-2  text-white" />

              </div>
            </Link>

            <Link to='' className=" bg-slate-500 px-2 w-full text-center items-center rounded-[6px]  flex justify-center">
              <div className="flex items-center justify-center">
                <p className="text-white pl-2 text-xs">Content</p>
                <CiViewList size={28} className="pl-2 text-white" />

              </div>
            </Link>

            <Link to='' className=" bg-slate-500 px-2 w-full text-center items-center rounded-[6px]  flex justify-center">
              <div className="flex items-center justify-center">
                <p className="text-white pl-2 text-xs">Question</p>
                <CiViewList size={28} className="pl-2 text-white" />

              </div>
            </Link>
            <Link to='/si-students' className=" bg-slate-500 px-2 w-full text-center items-center rounded-[6px]  flex justify-center">
              <div className="flex items-center justify-center">
                <p className="text-white pl-2 text-xs">View Student</p>
                <FaChalkboardUser size={28} className="pl-2 text-white" />

              </div>
            </Link>

          </div>


        </div>



      </div>


      <div className='border-slate-200 border-b '></div>
      <div className='flex justify-between '>
        <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Other Courses</p>

      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 '>
        <Link to='/course-details/hr' className='bg-slate-400 w-full md:w-full flex gap-2 p-2  rounded-lg  mt-4'>
          <MdAnimation size={58} className='text-slate-500 w-1/3' />
          <div className='w-2/3 text-[#134574]'>
            <p className='p-1 font-extrabold'>2D Animation</p>
            <p className='p-1 text-xs'>Mr Emmanuel</p>

          </div>



        </Link>
        <Link to='/course-details/hr' className='bg-slate-400 w-full md:w-full flex gap-2 p-2 rounded-lg  mt-4'>
          <LuAxis3D size={58} className='text-slate-500 w-1/3' />
          <div className='w-2/3 text-[#134574]'>
            <p className='p-1 font-extrabold'>3D Animation</p>
            <p className='p-1 text-xs'>Mr Emmanuel</p>
          </div>
        </Link>

        <Link to='/course-details/hr' className='bg-slate-400 w-full md:w-full flex gap-2 p-2 rounded-lg  mt-4'>
          <FaLaptopCode size={58} className='text-slate-500 w-1/3' />
          <div className='w-2/3 text-[#134574]'>
            <p className='p-1 font-extrabold'>Frontend</p>
            <p className='p-1 text-xs'>Mr Emmanuel</p>

          </div>

        </Link>

        <Link to='/course-details/hr' className='bg-slate-400 w-full md:w-full flex gap-2 p-2 rounded-lg  mt-4'>
          <FaDatabase size={58} className='text-slate-500 w-1/3' />
          <div className='w-2/3 text-[#134574]'>
            <p className='p-1 font-extrabold'>Backend</p>
            <p className='p-1 text-xs'>Mr Emmanuel</p>

          </div>

        </Link>
        <Link to='/course-details/hr' className='bg-slate-400 w-full md:w-full flex gap-2 p-2 rounded-lg  mt-4'>
          <FaLaptopCode size={58} className='text-slate-500 w-1/3' />
          <div className='w-2/3 text-[#134574]'>
            <p className='p-1 font-extrabold'>Fullstack Web Development</p>
            <p className='p-1 text-xs'>Mr Emmanuel</p>

          </div>

        </Link>
        <Link to='/course-details/hr' className='bg-slate-400 w-full md:w-full flex gap-2 p-2 rounded-lg  mt-4'>
          <IoAnalytics size={58} className='text-slate-500 w-1/3' />
          <div className='w-2/3 text-[#134574]'>
            <p className='p-1 font-extrabold'>Data Analysis</p>
            <p className='p-1 text-xs'>Mr Emmanuel</p>

          </div>
        </Link>



      </div>



    </div>



  )
}

export default SchoolInstructorCourse
