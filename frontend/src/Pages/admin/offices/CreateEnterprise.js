import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";



const CreateEnterpriseLocation = () => {

    return (
        <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-screen">
            <div className="w-full  bg-[#C8D1DA] flex flex-col gap-3">
                <div className='flex justify-between '>
                    <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Create New Enterprise Location</p>
                    <Link to='/office-locations/hr' className='mt-8'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>

                </div>
            </div>
            <div className='border-[#F13178] border-b '></div>


            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                <div className='sm:col-span-2'>
                    <label className='text-[#134574] '>Office Location Name</label>
                    <input type='text' placeholder='E.g Process Engine Automation' className='pl-4 h-[40px] w-full rounded-md outline-none mt-1' />
                </div>
                <div>
                    <label className='text-[#134574] '>State</label>
                    <select className='pl-4 h-[40px] w-full rounded-md outline-none mt-1'>
                        <option> Select State</option>
                        <option> Abia</option>
                        <option> Adamawa</option>
                    </select>
                </div>
            </div>


            <div className='grid grid-cols-2 mt-2'>
                <div className=''>
                    <p className='text-[#134574] '>Office Phone Number</p>
                    <input type='number' placeholder='E.g 08012323456' className='pl-4 h-[40px] w-[120px] sm:w-[180px]  rounded-md outline-none mt-1' />

                </div>
                <div>
                    <p className='text-[#134574] '>Office Email</p>
                    <input type='email' placeholder='example@gmail.com' className='pl-4 h-[40px] w-[120px] sm:w-[180px] rounded-md outline-none mt-1' />

                </div>

            </div>

            <div>
                <label className='text-[#134574] '>Office Address</label>
                <textarea placeholder='Message' className='pl-4 h-[100px] w-full rounded-md outline-none mt-1 pt-4' />
            </div>

            <div>
                <label className='text-[#134574] '>Upload Image</label>
                <input type='file' multiple className='pl-4 h-[40px] w-full rounded-md outline-none mt-1' />
            </div>

            <div className="flex justify-start">
                <button className="bg-[#F13178] px-2 mt-4 text-center items-center rounded-[6px] font-bold flex justify-center h-[40px] w-fit">
                    <div className="flex">
                        <p className="text-white px-2">Create</p>
                    </div>
                </button>
            </div>




            <div className="grid grid-cols-2 lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-white max-w-[980px] w-fit pb-44">

            </div>



        </div>



    )
}

export default CreateEnterpriseLocation