import React from 'react'
import { Link } from 'react-router-dom'
import { FaLaptopCode } from "react-icons/fa";
import { MdAnimation } from "react-icons/md";
import { LuAxis3D } from "react-icons/lu";
import { IoAnalytics } from "react-icons/io5";

import { FaDatabase } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import { CiViewList } from "react-icons/ci";
import { FaUserGraduate } from "react-icons/fa";
import { FaChalkboardUser } from "react-icons/fa6";





const HubInstructorCourse = () => {

  return (
    <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full pb-12">
      <div className='flex justify-between '>
        <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Hub Courses</p>
      </div>

      <div className='border-[#F13178] border-b '></div>


      <div className='bg-slate-400 w-full md:w-full sm:flex gap-2 p-2  rounded-lg  mt-2'>

        <MdAnimation size={88} className='text-slate-500 sm:w-1/5 w-full' />

        <div className='w-full sm:w-1/5 text-[#134574] sm:py-8 mb-2 sm:mb-0'>
          <p className='font-extrabold text-center sm:text-start'>2D Animation</p>
          <p className='text-xs text-center sm:text-start'>Mr Emmanuel</p>

        </div>

        <div className='w-full sm:w-3/5 text-[#134574]'>

          <div className='grid grid-cols-3 gap-2'>

            <Link to='/hi-create-curriculum' className=" bg-slate-500 px-2 w-full text-center items-center rounded-[6px]  flex justify-center">
              <div className="flex items-center justify-center">
                <p className="text-white pl-2 text-xs">Curriculum</p>
                <FaCirclePlus size={28} className="pl-2 text-white" />

              </div>
            </Link>


            <Link to='/hi-create-content' className=" bg-slate-500 px-2 w-full text-center items-center rounded-[6px]  flex justify-center">
              <div className="flex items-center justify-center">
                <p className="text-white pl-2 text-xs">Content</p>
                <FaCirclePlus size={28} className="pl-2 text-white" />

              </div>
            </Link>


            <Link to='/hi-create-question' className=" bg-slate-500 px-2 w-full text-center items-center rounded-[6px]  flex justify-center">
              <div className="flex items-center justify-center">
                <p className="text-white pl-2 text-xs">Question</p>
                <FaCirclePlus size={28} className="pl-2 text-white" />

              </div>
            </Link>

            <Link to='/hi-course-curriculum' className=" bg-slate-500 px-2 w-full text-center items-center rounded-[6px]  flex justify-center">
              <div className="flex items-center justify-center">
                <p className="text-white pl-2 text-xs">Curriculum</p>
                <CiViewList size={28} className="pl-2  text-white" />

              </div>
            </Link>

            <Link to='/hi-content-list' className=" bg-slate-500 px-2 w-full text-center items-center rounded-[6px]  flex justify-center">
              <div className="flex items-center justify-center">
                <p className="text-white pl-2 text-xs">Content</p>
                <CiViewList size={28} className="pl-2 text-white" />

              </div>
            </Link>

            <Link to='/hi-question-list' className=" bg-slate-500 px-2 w-full text-center items-center rounded-[6px]  flex justify-center">
              <div className="flex items-center justify-center">
                <p className="text-white pl-2 text-xs">Question</p>
                <CiViewList size={28} className="pl-2 text-white" />

              </div>
            </Link>
            <Link to='/hi-student-list' className=" bg-slate-500 px-2 w-full text-center items-center rounded-[6px]  flex justify-center">
              <div className="flex items-center justify-center">
                <p className="text-white pl-2 text-xs">8</p>
                <p className="text-white pl-2 text-xs">Graduated</p>
                <FaUserGraduate size={22} className="pl-2 text-white" />

              </div>
            </Link>
            <Link to='/hi-student-list' className=" bg-slate-500 px-2 w-full text-center items-center rounded-[6px]  flex justify-center">
              <div className="flex items-center justify-center">
                <p className="text-white pl-2 text-xs">10</p>
                <p className="text-white pl-2 text-xs">In View</p>
                <FaChalkboardUser size={28} className="pl-2 text-white" />

              </div>
            </Link>


          </div>


        </div>



      </div>


      <div className='border-slate-200 border-b mt-2'></div>
      <div className='flex justify-between '>
        <p className='text-[#F13178] text-[20px] mt-2 font-extrabold' >Other Courses</p>

      </div>

      <div className='bg-slate-400 w-full md:w-full sm:flex gap-2 p-2  rounded-lg  mt-2'>

        <LuAxis3D size={58} className='text-slate-500 sm:w-1/5 w-full' />

        <div className='w-full sm:w-1/5 text-[#134574] items-center justify-center'>
          <p className='p-1 font-extrabold text-center sm:text-start'>3D Animation</p>
          <p className='p-1 text-xs'>Mr Emmanuel</p>

        </div>

        <div className='w-full sm:w-3/5 text-[#134574]'>

          <div className='grid grid-cols-3 gap-2'>


            <Link to='/hi-course-curriculum' className=" bg-slate-500 px-2 w-full text-center items-center rounded-[6px]  flex justify-center">
              <div className="flex items-center justify-center">
                <p className="text-white pl-2 text-xs">Curriculum</p>
                <CiViewList size={28} className="pl-2  text-white" />

              </div>
            </Link>

            <Link to='/hi-content-list' className=" bg-slate-500 px-2 w-full text-center items-center rounded-[6px]  flex justify-center">
              <div className="flex items-center justify-center">
                <p className="text-white pl-2 text-xs">Content</p>
                <CiViewList size={28} className="pl-2 text-white" />

              </div>
            </Link>

            <Link to='/hi-question-list' className=" bg-slate-500 px-2 w-full text-center items-center rounded-[6px]  flex justify-center">
              <div className="flex items-center justify-center">
                <p className="text-white pl-2 text-xs">Question</p>
                <CiViewList size={28} className="pl-2 text-white" />

              </div>
            </Link>

          </div>


        </div>



      </div>
      <div className='bg-slate-400 w-full md:w-full sm:flex gap-2 p-2  rounded-lg  mt-2'>

        <FaLaptopCode size={58} className='text-slate-500 sm:w-1/5 w-full' />

        <div className='w-full sm:w-1/5 text-[#134574] items-center justify-center'>
          <p className='p-1 font-extrabold text-center sm:text-start'>Frontend</p>
          <p className='p-1 text-xs'>Mr Emmanuel</p>

        </div>

        <div className='w-full sm:w-3/5 text-[#134574]'>

          <div className='grid grid-cols-3 gap-2'>


            <Link to='/hi-course-curriculum' className=" bg-slate-500 px-2 w-full text-center items-center rounded-[6px]  flex justify-center">
              <div className="flex items-center justify-center">
                <p className="text-white pl-2 text-xs">Curriculum</p>
                <CiViewList size={28} className="pl-2  text-white" />

              </div>
            </Link>

            <Link to='/hi-content-list' className=" bg-slate-500 px-2 w-full text-center items-center rounded-[6px]  flex justify-center">
              <div className="flex items-center justify-center">
                <p className="text-white pl-2 text-xs">Content</p>
                <CiViewList size={28} className="pl-2 text-white" />

              </div>
            </Link>

            <Link to='/hi-question-list' className=" bg-slate-500 px-2 w-full text-center items-center rounded-[6px]  flex justify-center">
              <div className="flex items-center justify-center">
                <p className="text-white pl-2 text-xs">Question</p>
                <CiViewList size={28} className="pl-2 text-white" />

              </div>
            </Link>

          </div>


        </div>



      </div>

      <div className='bg-slate-400 w-full md:w-full sm:flex gap-2 p-2  rounded-lg  mt-2'>

        <FaDatabase size={58} className='text-slate-500 sm:w-1/5 w-full' />

        <div className='w-full sm:w-1/5 text-[#134574] items-center justify-center'>
          <p className='p-1 font-extrabold text-center sm:text-start'>Backend</p>
          <p className='p-1 text-xs'>Mr Emmanuel</p>

        </div>

        <div className='w-full sm:w-3/5 text-[#134574]'>

          <div className='grid grid-cols-3 gap-2'>


            <Link to='/hi-course-curriculum' className=" bg-slate-500 px-2 w-full text-center items-center rounded-[6px]  flex justify-center">
              <div className="flex items-center justify-center">
                <p className="text-white pl-2 text-xs">Curriculum</p>
                <CiViewList size={28} className="pl-2  text-white" />

              </div>
            </Link>

            <Link to='/hi-content-list' className=" bg-slate-500 px-2 w-full text-center items-center rounded-[6px]  flex justify-center">
              <div className="flex items-center justify-center">
                <p className="text-white pl-2 text-xs">Content</p>
                <CiViewList size={28} className="pl-2 text-white" />

              </div>
            </Link>

            <Link to='/hi-question-list' className=" bg-slate-500 px-2 w-full text-center items-center rounded-[6px]  flex justify-center">
              <div className="flex items-center justify-center">
                <p className="text-white pl-2 text-xs">Question</p>
                <CiViewList size={28} className="pl-2 text-white" />

              </div>
            </Link>

          </div>


        </div>



      </div>
      <div className='bg-slate-400 w-full md:w-full sm:flex gap-2 p-2  rounded-lg  mt-2'>

        <FaLaptopCode size={58} className='text-slate-500 sm:w-1/5 w-full' />

        <div className='w-full sm:w-1/5 text-[#134574] items-center justify-center'>
          <p className='p-1 font-extrabold text-center sm:text-start'>Fullstack Web Development</p>
          <p className='p-1 text-xs'>Mr Emmanuel</p>

        </div>

        <div className='w-full sm:w-3/5 text-[#134574]'>

          <div className='grid grid-cols-3 gap-2'>


            <Link to='/hi-course-curriculum' className=" bg-slate-500 px-2 w-full text-center items-center rounded-[6px]  flex justify-center">
              <div className="flex items-center justify-center">
                <p className="text-white pl-2 text-xs">Curriculum</p>
                <CiViewList size={28} className="pl-2  text-white" />

              </div>
            </Link>

            <Link to='/hi-content-list' className=" bg-slate-500 px-2 w-full text-center items-center rounded-[6px]  flex justify-center">
              <div className="flex items-center justify-center">
                <p className="text-white pl-2 text-xs">Content</p>
                <CiViewList size={28} className="pl-2 text-white" />

              </div>
            </Link>

            <Link to='/hi-question-list' className=" bg-slate-500 px-2 w-full text-center items-center rounded-[6px]  flex justify-center">
              <div className="flex items-center justify-center">
                <p className="text-white pl-2 text-xs">Question</p>
                <CiViewList size={28} className="pl-2 text-white" />

              </div>
            </Link>

          </div>


        </div>



      </div>
      <div className='bg-slate-400 w-full md:w-full sm:flex gap-2 p-2  rounded-lg  mt-2'>

        <IoAnalytics size={58} className='text-slate-500 sm:w-1/5 w-full' />

        <div className='w-full sm:w-1/5 text-[#134574] items-center justify-center'>
          <p className='p-1 font-extrabold text-center sm:text-start'>Data Analysis</p>
          <p className='p-1 text-xs'>Mr Emmanuel</p>

        </div>

        <div className='w-full sm:w-3/5 text-[#134574]'>

          <div className='grid grid-cols-3 gap-2'>


            <Link to='/hi-course-curriculum' className=" bg-slate-500 px-2 w-full text-center items-center rounded-[6px]  flex justify-center">
              <div className="flex items-center justify-center">
                <p className="text-white pl-2 text-xs">Curriculum</p>
                <CiViewList size={28} className="pl-2  text-white" />

              </div>
            </Link>

            <Link to='/hi-content-list' className=" bg-slate-500 px-2 w-full text-center items-center rounded-[6px]  flex justify-center">
              <div className="flex items-center justify-center">
                <p className="text-white pl-2 text-xs">Content</p>
                <CiViewList size={28} className="pl-2 text-white" />

              </div>
            </Link>

            <Link to='/hi-question-list' className=" bg-slate-500 px-2 w-full text-center items-center rounded-[6px]  flex justify-center">
              <div className="flex items-center justify-center">
                <p className="text-white pl-2 text-xs">Question</p>
                <CiViewList size={28} className="pl-2 text-white" />

              </div>
            </Link>

          </div>


        </div>



      </div>




    </div>



  )
}


export default HubInstructorCourse