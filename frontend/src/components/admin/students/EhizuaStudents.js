import React from 'react'
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development'
import hub3 from "../../../assets/hub 3.png"
const EhizuaStudents = () => {
  return (

      <section className="flex-col overflow-hidden  flex md:flex-row justify-between w-full h-full">
        <div className="w-full lg:ml-72  lg:h-[1000px] h-[1500px] md:h-[1200px] bg-[#C8D1DA] pl-6 flex flex-col gap-3">
          <div>
            <div className='flex items-center justify-center  gap-4 md:ml-[-20px] px-4' >
              <h2 className='text-[30px] w-full  lg:text-[34px] md:ml-[-16px] pt-7 pb-1 lg:pb-0  text-[#F13178] ml-[-20px] font-bold' >Location</h2>


            </div>
            <div className='border-b-2 mt-3  md:ml-[-10px] ml-1   border-[#F13178]'></div>
          </div>


          <div>
            <h2 className='text-[#F13178] font-bold  lg:pt-3 md:ml-[-16px] pl-1 lg:text-[27px] text-[25px]'>Hub Location</h2>

            <div className=' pl-1 pt-7 lg:gap-[5px] lg:ml-[-16px] sm:grid-cols-2 sigh overflow-x-hidden md:ml-[-18px] md:gap-[-30px] md:grid-cols-2 gap-[30px] items-center grid grid-cols-1 lg:grid-cols-3'>

              <Link to="/all-students/hr" className='bg-[#2E5881] px-5 gap-7 flex items-center h-[150px] rounded-[14px] md:w-[250px] w-[320px]'>
                <img className='w-[80px]' src={hub3} alt="" />
                <div className='text-white  text-[16px] font-bold'>
                  <h3>EHIZUA HUB</h3>
                  <h3>AWOYAYA</h3>
                </div>
              </Link>

              <Link to="/all-students/hr" className='bg-[#2E5881] px-5 flex items-center gap-7 h-[150px] rounded-[14px] md:w-[250px] w-[320px]'>
                <img className='w-[80px]' src={hub3} alt="" />
                <div className='text-white text-[16px] font-bold'>
                  <h3>EHIZUA HUB</h3>
                  <h3>AWOYAYA</h3>
                </div>
              </Link>

              <Link to="/all-students/hr" className='bg-[#2E5881] flex items-center  gap-7  px-5 h-[150px] rounded-[14px] md:w-[250px] w-[320px]'>
                <img className='w-[80px]' src={hub3} alt="" />
                <div className='text-white text-[16px] font-bold'>
                  <h3>EHIZUA HUB</h3>
                  <h3>AWOYAYA</h3>
                </div>
              </Link>


            </div>

          </div>
        </div>

      </section>

  )
}

export default EhizuaStudents