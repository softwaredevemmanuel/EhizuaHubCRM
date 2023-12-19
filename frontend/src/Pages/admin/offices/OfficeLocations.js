import React from 'react'
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development'
import { FaCirclePlus } from "react-icons/fa6";


const OfficeLocations = () => {
  return (
    <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full">
      <div className="w-full  bg-[#C8D1DA] flex flex-col gap-3">
        <div className='flex justify-between '>
          <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Office Locations</p>

        </div>
      </div>
      <div className='border-[#F13178] border-b '></div>


      <div className='flex justify-between'>
        <p className='text-[#F13178] text-[20px] font-extrabold' >Hub</p>
        <Link to='/create-office/hr' className=" bg-[#F13178] px-2 text-center items-center rounded-lg font-bold flex justify-center h-[40px]">
          <div className="flex items-center justify-center">
            <p className="text-white pl-2">New</p>
            <FaCirclePlus size={28} className="pl-2 mr-2 text-white" />

          </div>
        </Link>

      </div>



      <Link to="/office-staff/hr" className='pl-5 rounded-xl "w-[412px] h-[50px] bg-[#134574] flex items-center justify-between mt-1 pr-5'>
        <div className='flex'>
          <p className='text-white ml-2 text-md'>Ehizua Hub Awoyaya</p>
        </div>

        <div className='flex gap-4'>
          <p className='text-white sm:pl-4 hidden sm:block'>No 6 Honorable Fatai Eletu Street</p>
        </div>

      </Link>

      <Link to="/office-staff/hr" className='pl-5 rounded-xl "w-[412px] h-[50px] bg-[#134574] flex items-center justify-between mt-1 pr-5'>
        <div className='flex'>
          <p className='text-white ml-2 text-md'>Ehizua Hub Igbinedion</p>
        </div>

        <div className='flex gap-4'>
          <p className='text-white sm:pl-4 hidden sm:block'>Airport road Opposite TVC</p>
        </div>

      </Link>



      <div className='border-[#F13178] border-b pt-4'></div>

      <div className='flex justify-between'>
        <p className='text-[#F13178] text-[20px] font-extrabold' >Ehizua Enterprise</p>
        <Link to='/create-enterprise/hr' className=" bg-[#F13178] px-2 text-center items-center rounded-lg font-bold flex justify-center h-[40px]">
          <div className="flex items-center justify-center">
            <p className="text-white pl-2">New</p>
            <FaCirclePlus size={28} className="pl-2 mr-2 text-white" />

          </div>
        </Link>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3  lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-white max-w-[980px] w-full pb-8">
        <Link to="/office-staff/hr" className="bg-[#134574] max-h-60 max-w-[195px] px-2 lg:max-w-[263px] w-full  rounded-[6px] py-4 font-bold flex flex-col">
          <div className="flex flex-col">
            <div className='text-center'>
              <p className="">Ehizua Hub Awoyaya</p>
            </div>
            <p className='pt-4 text-xs'>Airport road Opposite TVC</p>
          </div>
        </Link>



      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-white max-w-[980px] w-fit pb-44">


      </div>



    </div>
  )
}

export default OfficeLocations