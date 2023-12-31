import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
import { Link } from 'react-router-dom'

import StaffLogin from "./StaffLogin";

const StaffMemo = () => {
  const [user, setUser] = useState(false)

  return (

    <div className="">
      {user ? (
        <StaffLogin />
      ) : (

        <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-screen">
          <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
            <div className='flex justify-between '>
              <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >All Memo</p>

            </div>

            <div className='border-[#F13178] border-b '></div>


            <div className='pl-5 rounded-xl "w-[412px] h-[50px] text-[#134574] bg-slate-400 flex items-center font-bold justify-between mt-5 pr-5'>
              <div className='flex'>
                <p className=''>1</p>
                <Link to='/staff-memo-details' className=' ml-2'>General Meeting Notice</Link>
              </div>
              <Link className="flex bg-[#F2DD25] rounded-xl sm:w-40 lg:w-40 items-center justify-center">
                <p className='hidden sm:block'>Acknowledge</p>
                <TiTick size={22} className="" />
              </Link>

            </div>

            <div className='pl-5 rounded-xl "w-[412px] h-[50px] text-[#134574] bg-slate-400  flex items-center font-bold justify-between mt-5 pr-5'>
              <div className='flex'>
                <p className=''>2</p>
                <Link to='/staff-memo-details' className=' ml-2'>General Meeting Notice</Link>
              </div>
              <Link className="flex bg-[#16DA70] rounded-xl sm:w-40 lg:w-40 items-center justify-center">
                <p className='hidden sm:block'>Acknowledged</p>
                <TiTick size={22} className="" />
              </Link>

            </div>

            <div className='pl-5 rounded-xl "w-[412px] h-[50px] text-[#134574] bg-slate-400  flex items-center font-bold justify-between mt-5 pr-5'>
              <div className='flex'>
                <p className=''>3</p>
                <Link to='/staff-memo-details' className=' ml-2'>General Meeting Notice</Link>
              </div>
              <Link className="flex bg-[#16DA70] rounded-xl sm:w-40 lg:w-40 items-center justify-center">
                <p className='hidden sm:block'>Acknowledged</p>
                <TiTick size={22} />
              </Link>

            </div>

            <div className='pl-5 rounded-xl "w-[412px] h-[50px] text-[#134574] bg-slate-400  flex items-center font-bold justify-between mt-5 pr-5'>
              <div className='flex'>
                <p className=''>4</p>
                <Link to='/staff-memo-details' className=' ml-2'>General Meeting Notice</Link>
              </div>
              <Link className="flex bg-[#16DA70] rounded-xl sm:w-40 lg:w-40 items-end justify-center">
                <p className=' hidden sm:block'>Acknowledged</p>
                <TiTick size={22} className="" />
              </Link>

            </div>


          </div>


        </div>
      )}
      {/* right section  */}



    </div>

  )

}

export default StaffMemo