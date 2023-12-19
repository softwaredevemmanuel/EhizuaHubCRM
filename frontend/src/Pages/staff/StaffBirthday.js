import React, { useState } from "react";

import StaffLogin from "./StaffLogin";

const StaffBirthday = () => {
    const [user, setUser] = useState(false)

    return (

        <div className="">
            {user ? (
                <StaffLogin />
            ) : (

                <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-screen">
                    <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
                        <div className='flex justify-between '>
                            <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Birthdays</p>
                            <button className='mt-8'>Back</button>

                        </div>

                        <div className='border-[#F13178] border-b '></div>
                        <p className='text-[#134574] font-extrabold'> December Celebrants</p>


                        <div className='pl-5 rounded-xl "w-[412px] h-[50px] bg-[#134574] flex items-center font-bold justify-between mt-5 pr-5'>
                            <div className='flex'>
                                <p className='text-white'>1</p>
                                <p className='text-white ml-2'>Emmanuel</p>
                                <p className='text-white ml-2'>Okereke</p>
                            </div>
                            <p className=' text-white text-end '>3rd</p>
                        </div>
                        <div className='pl-5 rounded-xl "w-[412px] h-[50px] bg-[#134574] flex items-center font-bold justify-between mt-5 pr-5'>
                            <div className='flex'>
                                <p className='text-white'>2</p>
                                <p className='text-white ml-2'>Emmanuel</p>
                                <p className='text-white ml-2'>Okereke</p>
                            </div>
                            <p className=' text-white text-end '>15th</p>
                        </div>
                        <div className='pl-5 rounded-xl "w-[412px] h-[50px] bg-[#134574] flex items-center font-bold justify-between mt-5 pr-5'>
                            <div className='flex'>
                                <p className='text-white'>3</p>
                                <p className='text-white ml-2'>Emmanuel</p>
                                <p className='text-white ml-2'>Okereke</p>
                            </div>
                            <p className=' text-white text-end '>20th</p>
                        </div>
                        <div className='pl-5 rounded-xl "w-[412px] h-[50px] bg-[#134574] flex items-center font-bold justify-between mt-5 pr-5'>
                            <div className='flex'>
                                <p className='text-white'>4</p>
                                <p className='text-white ml-2'>Emmanuel</p>
                                <p className='text-white ml-2'>Okereke</p>
                            </div>
                            <p className=' text-white text-end '>24th</p>
                        </div>
                        

                    </div>


                </div>
            )}
            {/* right section  */}



        </div>

    )

}

export default StaffBirthday