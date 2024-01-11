import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";




import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid'

import AdminLogin from "../../AdminLogin"

const ReportDetails = () => {
    const [user, setUser] = useState(false)



    return (
        <div className="">
            {user ? (
                <AdminLogin />

            ) : (
                <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full pb-12">
                    <div className='flex justify-between'>
                        <nav className="flex mt-3" aria-label="Breadcrumb">
                            <ol role="list" className="flex items-center space-x-4">
                                <li>
                                    <div>
                                        <Link to="/dashboard" className="text-[#F13178] hover:text-[#134574]">
                                            <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                                            <span className="sr-only">Home</span>
                                        </Link>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-[#F13178]" aria-hidden="true" />
                                        <Link to='/staff-report/hr' className="ml-4 text-xs font-bold text-[#F13178] hover:text-[#134574]">
                                            ALL-REPORT
                                        </Link>
                                        <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-[#F13178]" aria-hidden="true" />
                                        <div className="ml-4 text-xs font-bold text-[#F13178]">
                                            REPORT-DETAILS
                                        </div>
                                    </div>

                                </li>

                            </ol>
                        </nav>
                        <Link to='/staff-report/hr' className='mt-3'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>

                    </div>

                    <div className='border-[#F13178] border-b '></div>




                    <div className="flex text-[#134574] items-center  justify-center mt-2">
                        <p className=" text-3xl font-bold">Weekly Report</p>
                     
                    </div>



                    <p className='rounded-xl py-2 lg:pl-8 pl-4 lg:pr-10 pr-4 lg:leading-10 leading-8 bg-slate-100 text-[#134574]'>
                        <br/>
                        1. Weekly Goals: Let's start the week by setting clear objectives. Please review your individual and team goals and ensure alignment with our overall department objectives.<br /><br />
                        2. Team Meeting: We will have a team meeting today at [Time] to discuss any pressing issues, share updates, and address any questions or concerns. Be prepared to share your progress and upcoming tasks.<br /><br />
                        3. Project Milestones: Several projects are reaching critical milestones this week. Make sure you're on track and communicate any roadblocks or assistance needed.<br /><br />
                        4. Client Communication: For client-facing teams, please ensure prompt and proactive communication with clients to maintain strong relationships.<br /><br />
                        5. Upcoming Deadlines: Check for any upcoming deadlines and plan your work accordingly to avoid last-minute rushes.<br /><br />
                        6. Let's make this week a successful one by working together, supporting one another, and staying focused on our goals. Have a great Monday and a productive week ahead!<br /><br />
                    </p>


                    <div className='pb-8'>
                        <p className='text-[#F13178] pt-8 font-bold mb-2'>Comment</p>
                        <textarea type='text' placeholder='Add comment here' className='h-[80px] w-full rounded-md outline-none p-6 text-neutral-700'
                        />
                        <p className='text-[#F13178] pt-8 font-bold mb-2'>Review</p>

                        <div className='flex gap-1'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaRegStar />
                        <FaRegStar />

                        </div>

                        <div className='flex gap-4 mt-4 justify-center'>
                            <button className="flex bg-[#F13178] rounded-md  w-fit px-4 items-center justify-center">
                                <p className='text-white'>Submit</p>
                            </button>

                        
                        </div>

                    </div>

                    <div className='flex justify-center'>
                        <p className='text-2xl text-[#F13178]'>Report has been Reviewed </p>
                    </div>




                </div>
            )}
            {/* right section  */}



        </div>
    )
}

export default ReportDetails