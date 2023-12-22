import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom'
import { TiCameraOutline } from "react-icons/ti";



const RegisterStaff = () => {
  return (
    <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full">
      <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
        <div className='flex justify-between '>
        </div>
      </div>

      <div className='flex justify-between '>
        <p className='text-[#F13178] text-[20px] mt-2 font-extrabold' >Register Staff</p>
        <Link to='/ehizua-staff/hr' className='mt-2'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>

      </div>

      <div className='border-[#F13178] border-b '></div>

      <form className='bg-slate-200 sm:h-[800px] rounded-md pb-8'>
        <div className='sm:flex gap-4 mt-6 px-8'>
          <p className='text-sm text-gray-600 w-[180px] pt-2'>Name</p>
          <input type='text' placeholder='First Name' className='rounded-md w-full h-[40px] outline-none pl-4' />
          <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'> Name</p>
          <input type='text' placeholder='Last Name' className='rounded-md w-full h-[40px] outline-none pl-4' />
        </div>

        <div className='sm:flex gap-4 mt-2 sm:mt-6 px-8'>
          <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'> Name</p>
          <input type='text' placeholder='Middle Name' className='rounded-md w-full h-[40px] outline-none pl-4' />
          <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'>Phone</p>
          <input type='number' placeholder='Staff Phone Number' className='rounded-md w-full h-[40px] outline-none pl-4' />

        </div>
        <div className='sm:flex gap-4  sm:mt-6 px-8'>
          <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'>Email</p>
          <input type='text' placeholder='example@gmail.com' className='rounded-md w-full h-[40px] outline-none pl-4' />
          <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'>Position</p>
          <select type='text' className='rounded-md w-full h-[40px] text-gray-600 pl-2 outline-none'>
            <option>Select</option>
            <option>FullStack Web Development</option>
          </select>

        </div>

        <div className='grid grid-cols-2'>
          <div className='sm:flex gap-4 mt-6 px-8'>
            <p className='text-sm text-gray-600 pt-2'>Hub Instructor</p>
            <input type='checkbox' className='rounded-md w-[30px] h-[30px] outline-none pl-4' />
            <p className='text-sm text-gray-600 pt-2'>School Instructor</p>
            <input type='checkbox' className='rounded-md w-[30px] h-[30px] outline-none pl-4' />

          </div>
          <div className='flex pt-5'>
            <p className='text-sm text-gray-600 w-[120px] pt-4 sm:pt-2 px-3'>Leave</p>
            <select type='text' className='rounded-md w-full h-[40px] text-gray-600 pl-2 outline-none mr-8'>
              <option>Select</option>
              <option>32 Weeks</option>
            </select>

          </div>
        </div>

        <div className='sm:flex gap-4  sm:mt-6 px-8'>
          <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'>DOB</p>
          <input type='date' className='rounded-md w-full h-[40px] outline-none pl-4 text-gray-600' />
          <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'>Salary</p>
          <input type='number'  className='rounded-md w-full h-[40px] outline-none pl-4' />

        </div>

        <div className='sm:flex gap-4  sm:mt-6 px-8'>
          <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'>Bank</p>
          <input type='text' className='rounded-md w-full h-[40px] outline-none pl-4' />
          <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'>Number</p>
          <input type='number' placeholder='Account Number' className='rounded-md w-full h-[40px] outline-none pl-4' />

        </div>

        <div className='sm:flex gap-4 sm:mt-6 px-8'>
          <p className='text-sm text-gray-600 w-[80px] pt-4 sm:pt-2'>Address</p>
          <textarea placeholder='Students Home Address' className='outline-none w-full rounded-md h-[80px] pl-4 pt-2' />

        </div>

        <div className='sm:flex gap-4 mt-2 sm:mt-6 px-8'>
          <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'> Name</p>
          <input type='text' placeholder='Next of Kin Full Name' className='rounded-md w-full h-[40px] outline-none pl-4' />
          <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'>Phone</p>
          <input type='number' placeholder='Next Of Kin Phone Number' className='rounded-md w-full h-[40px] outline-none pl-4' />

        </div>
  
  
        <div className='sm:flex gap-4 sm:mt-6 px-8'>
          <p className='text-sm text-gray-600 w-[80px] pt-4 sm:pt-2'>Address</p>
          <textarea placeholder='Next Of Kin Home Address' className='outline-none w-full rounded-md h-[80px] pl-4 pt-2' />

        </div>


        <div className='flex gap-4 mt-6 px-8'>
          <p className='text-sm text-gray-600  pt-2'>Profile Picture</p>
          <input type='file' />


        </div>

        <div className='flex gap-8 justify-center px-8'>

          <button className=' bg-[#F13178] px-2 w-full sm:w-[180px] text-white md:text-[15px]  rounded-lg  mt-6 text-[11px] flex items-center text-center justify-center gap-4 font-bold h-[40px]'>
            Register
          </button>
        </div>





      </form>





      <div className="grid grid-cols-2 lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-white max-w-[980px] w-fit pb-44">


      </div>



    </div>
  )
}

export default RegisterStaff