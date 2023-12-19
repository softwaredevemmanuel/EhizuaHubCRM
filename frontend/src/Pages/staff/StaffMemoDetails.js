import React, { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom'
import StaffLogin from "./StaffLogin";


const StaffMemoDetails = () => {
    const [user, setUser] = useState(false)

    return (
        <div className="">
            {user ? (
                <StaffLogin />
            ) : (
                <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full">
                    <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
                        <div className='flex justify-between '>
                            <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >General  Meeting Notice</p>
                            <Link to='/staff_memo_list' className='mt-8'><IoIosArrowRoundBack size={38} className="text-[#F13178]"/></Link>

                        </div>
                    </div>
                    <div className='border-[#F13178] border-b '></div>
                    <div className="flex flex-col gap-y-3 lg:ml-5 pb-20">

                        <p className='rounded-xl py-2 lg:pl-8 pl-4 lg:pr-10 pr-4  bg-[#ffffff] lg:leading-10 leading-8'>
                            Dear Team, <br /><br />
                            I hope you all had a rejuvenating weekend. As we kick off another productive week, I'd like to share some important updates and priorities for the days ahead.<br /><br />
                            1. Weekly Goals: Let's start the week by setting clear objectives. Please review your individual and team goals and ensure alignment with our overall department objectives.<br /><br />
                            2. Team Meeting: We will have a team meeting today at [Time] to discuss any pressing issues, share updates, and address any questions or concerns. Be prepared to share your progress and upcoming tasks.<br /><br />
                            3. Project Milestones: Several projects are reaching critical milestones this week. Make sure you're on track and communicate any roadblocks or assistance needed.<br /><br />
                            4. Client Communication: For client-facing teams, please ensure prompt and proactive communication with clients to maintain strong relationships.<br /><br />
                            5. Upcoming Deadlines: Check for any upcoming deadlines and plan your work accordingly to avoid last-minute rushes.<br /><br />
                            6. Let's make this week a successful one by working together, supporting one another, and staying focused on our goals. Have a great Monday and a productive week ahead!<br /><br />
                            Best regards.
                        </p>


                        <div className="flex justify-end">
                            <Link>
                                <button className='border-2 lg:py-3 py-2 lg:px-10 px-4 rounded-md border-[#F13178] text-[#ffffff] bg-[#F13178] font-semibold'>
                                    Acknowledge Read
                                </button>
                            </Link>
                        </div>
                    </div>


                </div>
            )}
            {/* right section  */}



        </div>

    )
}

export default StaffMemoDetails
