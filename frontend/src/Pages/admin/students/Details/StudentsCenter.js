import React from 'react'
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development'
import hub3 from "../../../../assets/Ehizua-Hub.png"

const StudentsCenter = () => {
  return (
    <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full">
      <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
        <div className='flex justify-between '>
        </div>
      </div>


      <p className='text-[#F13178] text-[20px] mt-2 font-extrabold' >Student Centers</p>

      <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3  lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-white max-w-[980px] w-full pb-8">


        <Link to="/student-section/hr" className="bg-[#134574] max-h-80 max-w-[195px] px-2 lg:max-w-[263px] w-full text-center items-center rounded-[6px] py-4 font-bold flex flex-col justify-center">
          <div className="flex flex-col items-center">
           
            <div>
              <p className="p-4">Ehizua Hub Awoyaya</p>
            </div>
          </div>
        </Link>
        <Link to="/student-section/hr" className="bg-[#134574] max-h-80 max-w-[195px] px-2 lg:max-w-[263px] w-full text-center items-center rounded-[6px] py-4 font-bold flex flex-col justify-center">
          <div className="flex flex-col items-center">
         
            <div>
              <p className="p-4">Ehizua Hub Awoyaya </p>
            </div>
          </div>
        </Link>
        <Link to="/student-section/hr" className="bg-[#134574] max-h-80 max-w-[195px] px-2 lg:max-w-[263px] w-full text-center items-center rounded-[6px] py-4 font-bold flex flex-col justify-center">
          <div className="flex flex-col items-center">
       
            <div>
              <p className="p-4">Ehizua Hub Awoyaya</p>
            </div>
          </div>
        </Link>
        <Link to="/student-section/hr" className="bg-[#134574] max-h-80 max-w-[195px] px-2 lg:max-w-[263px] w-full text-center items-center rounded-[6px] py-4 font-bold flex flex-col justify-center">
          <div className="flex flex-col items-center">
       
            <div>
              <p className="p-4">Ehizua Hub Awoyaya</p>
            </div>
          </div>
        </Link>
        <Link to="/student-section/hr" className="bg-[#134574] max-h-80 max-w-[195px] px-2 lg:max-w-[263px] w-full text-center items-center rounded-[6px] py-4 font-bold flex flex-col justify-center">
          <div className="flex flex-col items-center">
         
            <div>
              <p className="p-4">Ehizua Hub Awoyaya</p>
            </div>
          </div>
        </Link>


      </div>

   

      <div className="grid grid-cols-2 lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-white max-w-[980px] w-fit pb-44">


      </div>



    </div>
  )
}

export default StudentsCenter