import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaCirclePlus } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";

import frontend from '../../../../assets/frontend.png'




const CourseDiscount = () => {

  return (
    <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full pb-8">
      <div className="w-full  bg-[#C8D1DA] flex flex-col gap-3">
        <div className='flex justify-between '>
          <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Course Discount</p>
          <Link to='/student-course/hr' className='mt-8'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>

        </div>
      </div>
      <div className='border-[#F13178] border-b'></div>

      <div className='sm:flex justify-end'>

    

        <Link to="/create-course-discount/hr" className="bg-[#F13178] px-2 text-center items-center rounded-lg font-bold flex justify-center h-[30px] w-fit sm:mt-0 mt-2">
          <div className="flex">
            <p className="text-white pl-2">New </p>
            <FaCirclePlus size={26} className="pl-2 mr-2 text-white" />

          </div>
        </Link>
      </div>



      
      <div className='bg-[#134574] h-full rounded-lg'>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
          <img src={frontend} className="w-full sm:w-[300px] max-w-full max-h-full p-1 md:my-auto" />
          <div className='w-full sm:col-span-2 px-4 sm:px-0 md:pr-2'>
            <p className='text-white font-bold text-center justify-center pt-2'>Frontend Web Development</p>
            <p className='text-slate-300 pt-2 '>Frontend web development involves creating the user interface and user experience of a website or web application. Frontend developers focus on designing</p>
            <p className='text-slate-300 pt-2 text-xs'>Old Price: <span className='line-through'>₦300,000.00</span></p>
            <p className='text-slate-300 pt-2 text-xs'>Percentage Discount: 90%</p>
            <p className='text-slate-300 pt-2 text-xs'>Discount Price: ₦ 30,000.00</p>


            <div className='flex items-end justify-end pt-4 pb-4'>
              <Link to="/update-course-discount/hr" className="bg-[#F13178] px-2 text-center items-center rounded-lg flex justify-center h-[30px] w-fit sm:mt-0 mt-2">
                <div className="flex">
                  <p className="text-white pl-2 font-bold">Edit </p>
                  <CiEdit size={28} className="pl-2 mr-2 text-white " />

                </div>
              </Link>
            </div>


          </div>
        </div>


      </div>
      
      <div className='bg-[#134574] h-full rounded-lg'>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
          <img src={frontend} className="w-full sm:w-[300px] max-w-full max-h-full p-1 md:my-auto" />
          <div className='w-full sm:col-span-2 px-4 sm:px-0 md:pr-2'>
            <p className='text-white font-bold text-center justify-center pt-2'>Frontend Web Development</p>
            <p className='text-slate-300 pt-2 '>Frontend web development involves creating the user interface and user experience of a website or web application. Frontend developers focus on designing</p>
            <p className='text-slate-300 pt-2 text-xs'>Old Price: <span className='line-through'>₦300,000.00</span></p>
            <p className='text-slate-300 pt-2 text-xs'>Percentage Discount: 90%</p>
            <p className='text-slate-300 pt-2 text-xs'>Discount Price: ₦ 30,000.00</p>


            <div className='flex items-end justify-end pt-4 pb-4'>
            <Link to="/update-course-discount/hr" className="bg-[#F13178] px-2 text-center items-center rounded-lg flex justify-center h-[30px] w-fit sm:mt-0 mt-2">
                <div className="flex">
                  <p className="text-white pl-2 font-bold">Edit </p>
                  <CiEdit size={28} className="pl-2 mr-2 text-white " />

                </div>
              </Link>
            </div>


          </div>
        </div>


      </div>




      <div className="grid grid-cols-2 lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-white max-w-[980px] w-fit pb-44">

      </div>



    </div>



  )
}

export default CourseDiscount