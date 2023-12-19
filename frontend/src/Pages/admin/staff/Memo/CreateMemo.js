import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";



const CreateMemo = () => {

    return (
        <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-screen">
            <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
                <div className='flex justify-between '>
                    <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Create Memo</p>
                    <Link to='/staff-memo/hr' className='mt-8'><IoIosArrowRoundBack size={38} className="text-[#F13178]"/></Link>

                </div>
            </div>
            <div className='border-[#F13178] border-b '></div>

            <div className='grid sm:grid-cols-2 gap-4'>
                <div>
                    <input type='text' placeholder='Title' className='h-12 pl-4 rounded-md w-full sm:w-auto outline-none' />
                </div>
                <div>
                    <select className='h-12 pl-4 rounded-md w-full sm:w-auto outline-none'>
                        <option>General</option>
                        <option>Ehizua Hub Awoyaya</option>
                    </select>
                </div>
            </div>


            <div>
                <textarea placeholder='Message' className='pl-4 pt-4 h-[200px] w-full rounded-md outline-none' />
            </div>

            <div className="flex justify-end">
                <button className="bg-[#F13178] px-2 mt-4 text-center items-center rounded-[6px] font-bold flex justify-center h-[40px] w-fit">
                    <div className="flex">
                        <p className="text-white pl-2">Create Memo </p>
                    </div>
                </button>
            </div>




            <div className="grid grid-cols-2 lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-white max-w-[980px] w-fit pb-44">

            </div>



        </div>



    )
}

export default CreateMemo