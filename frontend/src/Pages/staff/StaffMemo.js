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
          <div className='flex justify-between '>
            <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >All Memo</p>

          </div>

          <div className='border-[#F13178] border-b '></div>
          <div className='p-1'>
            <table className="w-full bg-white border border-gray-500 mb-8">
              <thead>
                <tr className='text-[#134574] bg-slate-400'>
                  <th className="border p-2">Title</th>
                  <th className="border p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className='hover:bg-gray-200'>
                <td className="border p-3"> 
                    <Link to='/staff-memo-details'>
                      General Meeting Notice
                    </Link>
                  </td>
                  <td className="border p-3  items-center justify-center flex">
                    <Link className="flex bg-[#F2DD25] rounded-xl sm:w-40 lg:w-40 items-center justify-center">
                      <p className='hidden sm:block'>Acknowledge</p>
                      <TiTick size={22} className="" />
                    </Link>
                  </td>

                </tr>
                <tr className='hover:bg-gray-200'>
                  <td className="border p-3"> 
                    <Link to='/staff-memo-details'>
                      General Meeting Notice
                    </Link>
                  </td>

                  <td className="border p-3 items-center justify-center flex">
                    <div className="flex bg-[#16DA70] rounded-xl sm:w-40 lg:w-40 items-center justify-center">
                      <p className='hidden sm:block'>Acknowledged</p>
                      <TiTick size={22} className="" />
                    </div>
                  </td>

                </tr>

              </tbody>
            </table>
          </div>


        </div>


      )}
      {/* right section  */}



    </div>

  )

}

export default StaffMemo