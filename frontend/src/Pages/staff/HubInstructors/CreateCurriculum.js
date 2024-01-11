import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom'


const CreateCurriculum = () => {
  return (
    <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full">
      <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
        <div className='flex justify-between '>
        </div>
      </div>

      <div className='flex justify-between '>
        <p className='text-[#F13178] text-[20px] mt-2 font-extrabold' >Create Curriculum</p>
        <Link to='/hub-instructor' className='mt-2'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>

      </div>

      <div className='border-[#F13178] border-b '></div>

      <form className='bg-slate-200 sm:h-fit rounded-md pb-8 '>
        <div className='sm:flex gap-4 mt-6 px-8 text-[#134574]'>
          <p className='text-sm w-[180px] pt-2 font-bold'>Course</p>
          <input type='text' readOnly value='Full Stack Web Development' className='rounded-md w-full h-[40px] outline-none pl-4' />
          <p className='text-sm font-bold w-[210px] pt-4 sm:pt-2'> Main-Topic</p>
          <input type='text' placeholder='e.g Introduction to HTML' className='rounded-md w-full h-[40px] outline-none pl-4' />
        </div>


        <p className=' mx-8 sm:mx-32 text-gray-500 mt-8 underline '>Seperate each sub-topic with a comma </p>
        <div className='sm:flex gap-4 sm:mt-2 px-8 text-[#134574]'>
          <p className='text-sm font-bold w-[80px] pt-4 sm:pt-2'>Sub-Topic</p>
          <textarea placeholder='Topic1, Topic2, Topic3, Topic4, Topic6' className='outline-none w-full rounded-md h-[80px] pl-4 pt-2' />

        </div>




        <div className='flex gap-8 justify-center px-8'>

          <button className=' bg-[#F13178] px-2 w-full sm:w-[120px] text-white md:text-[15px]  rounded-lg  mt-6 text-[11px] flex items-center text-center justify-center gap-4 font-bold h-[40px]'>
            Create
          </button>
        </div>





      </form>





      <div className="grid grid-cols-2 lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-white max-w-[980px] w-fit pb-44">


      </div>



    </div>
  )
}

export default CreateCurriculum