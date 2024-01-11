import React, { useState } from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom'


const CreateQuestion = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };


    return (
        <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full">
            <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
                <div className='flex justify-between '>
                </div>
            </div>

            <div className='flex justify-between '>
                <p className='text-[#F13178] text-[20px] mt-2 font-extrabold' >Fullstack Web Development</p>

                <Link to='/hub-instructor' className='mt-2'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>

            </div>

            <div className='border-[#F13178] border-b '></div>
            <div className='flex gap-4'>
                <p className='text-[#134574] font-bold'>Question Type</p>

                <select
                    value={selectedOption}
                    onChange={handleSelectChange}
                    className='rounded-lg h-[30px] w-[200px] text-slate-500 outline-none bg-slate-200 px-4'>
                    <option value=''>Objective</option>
                    <option value='theory'>Theory</option>
                </select>

            </div>

            {!selectedOption ? (
                <form className='bg-slate-200 sm:h-fit rounded-md pb-8 '>

                    <div className='sm:flex gap-4 mt-6 px-8 text-[#134574]'>
                        <p className='text-sm w-[240px] pt-2 font-bold'>Main-Topic</p>
                        <select className='rounded-md w-full h-[40px] outline-none pl-4'>
                            <option>Select</option>
                            <option> Introduction</option>
                            <option> Introduction</option>
                        </select>
                        <p className='text-sm font-bold w-[210px] pt-4 sm:pt-2'> Sub-Topic</p>
                        <select className='rounded-md w-full h-[40px] outline-none pl-4'>
                            <option> Select</option>
                            <option> Introduction</option>
                            <option> Introduction</option>
                        </select>
                    </div>
                    <div className='flex items-center justify-center'>
                        <p className='font-bold w-fit pt-4 sm:pt-2 text-[#134574] mt-6  text-lg'>Question</p>

                    </div>

                    <div className='sm:flex gap-4 mt-2 px-8 text-[#134574]'>
                        <input type='text' placeholder='Enter Question' className='rounded-md w-full h-[40px] outline-none pl-4' />
                    </div>
                    <div className='sm:flex gap-4 mt-6 px-8 text-[#134574]'>
                        <p className='text-sm w-[180px] pt-2 font-bold'>Option A</p>
                        <input type='text' className='rounded-md w-full h-[40px] outline-none pl-4' />
                        <p className='text-sm font-bold w-[180px] pt-4 sm:pt-2'>Option B</p>
                        <input type='text' className='rounded-md w-full h-[40px] outline-none pl-4' />
                    </div>
                    <div className='sm:flex gap-4 mt-6 px-8 text-[#134574]'>
                        <p className='text-sm w-[180px] pt-2 font-bold'>Option C</p>
                        <input type='text' className='rounded-md w-full h-[40px] outline-none pl-4' />
                        <p className='text-sm font-bold w-[180px] pt-4 sm:pt-2'>Option D</p>
                        <input type='text' className='rounded-md w-full h-[40px] outline-none pl-4' />
                    </div>
                    <div className='flex items-center justify-center'>
                        <p className='font-bold w-fit pt-4 sm:pt-2 text-[#134574] mt-6  text-lg'>Correct Answer</p>

                    </div>
                    <div className='sm:flex gap-4 mt-2 px-8 text-[#134574]'>
                        <select className='rounded-md w-full h-[40px] outline-none pl-4'>
                            <option> Select</option>
                            <option> Introduction</option>
                            <option> Introduction</option>
                        </select>
                    </div>


                    <div className='flex gap-8 justify-center px-8'>

                        <button className=' bg-[#F13178] px-2 w-full sm:w-[120px] text-white md:text-[15px]  rounded-lg  mt-6 text-[11px] flex items-center text-center justify-center gap-4 font-bold h-[40px]'>
                            Create
                        </button>
                    </div>





                </form>
            ) : (
                <form className='bg-slate-200 sm:h-fit rounded-md pb-8 '>

                    <div className='sm:flex gap-4 mt-6 px-8 text-[#134574]'>
                        <p className='text-sm w-[240px] pt-2 font-bold'>Main-Topic</p>
                        <select className='rounded-md w-full h-[40px] outline-none pl-4'>
                            <option>Select</option>
                            <option> Introduction</option>
                            <option> Introduction</option>
                        </select>
                        <p className='text-sm font-bold w-[210px] pt-4 sm:pt-2'> Sub-Topic</p>
                        <select className='rounded-md w-full h-[40px] outline-none pl-4'>
                            <option> Select</option>
                            <option> Introduction</option>
                            <option> Introduction</option>
                        </select>
                    </div>
                    <div className='flex items-center justify-center'>
                        <p className='font-bold w-fit pt-4 sm:pt-2 text-[#134574] mt-6  text-lg'>Question</p>

                    </div>
                    <div className='sm:flex gap-4 mt-2 px-8 text-[#134574]'>
                        <textarea placeholder='Enter Question' className='rounded-md w-full h-[80px] outline-none pl-4 pt-2' />
                    </div>


                    <div className='flex gap-8 justify-center px-8'>

                        <button className=' bg-[#F13178] px-2 w-full sm:w-[120px] text-white md:text-[15px]  rounded-lg  mt-6 text-[11px] flex items-center text-center justify-center gap-4 font-bold h-[40px]'>
                            Create
                        </button>
                    </div>





                </form>
            )}







            <div className="grid grid-cols-2 lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-white max-w-[980px] w-fit pb-44">


            </div>



        </div>
    )
}

export default CreateQuestion