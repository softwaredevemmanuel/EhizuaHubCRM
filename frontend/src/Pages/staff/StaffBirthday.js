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
                        <div className='flex justify-between'>
                            <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Birthdays</p>
                        </div>

                        <div className='border-[#F13178] border-b '></div>
                        <select type='date' className='rounded-lg h-[30px] w-[200px] text-slate-500 outline-none bg-slate-200 px-4'>
                            <option>January</option>
                            <option>February</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option>
                            <option>October</option>
                            <option>November</option>
                            <option>December</option>
                        </select>


                        <div className='pl-5 rounded-xl "w-[412px] h-[50px] text-[#134574] bg-slate-400 flex items-center font-bold justify-between mt-5 pr-5'>
                            <div className='flex'>

                                <p className=' ml-2'>Emmanuel</p>
                                <p className=' ml-2'>Okereke</p>
                            </div>
                            <p className=' text-end '>3rd</p>
                        </div>
                        <div className='pl-5 rounded-xl "w-[412px] h-[50px] text-[#134574] bg-slate-400 flex items-center font-bold justify-between mt-5 pr-5'>
                            <div className='flex'>

                                <p className=' ml-2'>Emmanuel</p>
                                <p className=' ml-2'>Okereke</p>
                            </div>
                            <p className=' text-end '>15th</p>
                        </div>
                        <div className='pl-5 rounded-xl "w-[412px] h-[50px] text-[#134574] bg-slate-400 flex items-center font-bold justify-between mt-5 pr-5'>
                            <div className='flex'>

                                <p className=' ml-2'>Emmanuel</p>
                                <p className=' ml-2'>Okereke</p>
                            </div>
                            <p className=' text-end '>20th</p>
                        </div>
                        <div className='pl-5 rounded-xl "w-[412px] h-[50px] text-[#134574] bg-slate-400 flex items-center font-bold justify-between mt-5 pr-5'>
                            <div className='flex'>

                                <p className=' ml-2'>Emmanuel</p>
                                <p className=' ml-2'>Okereke</p>
                            </div>
                            <p className=' text-end '>24th</p>
                        </div>


                    </div>


                </div>
            )}
            {/* right section  */}



        </div>

    )

}

export default StaffBirthday