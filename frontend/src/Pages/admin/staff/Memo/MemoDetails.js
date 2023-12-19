import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";
import { useState } from 'react'


const MemoDetails = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isPosition, setIsPosition] = useState(false);

    const showPositions = () => {
        setIsPosition(!isPosition);
        setIsOpen(false);

    };

    const showLocations = () => {
        setIsOpen(!isOpen);
        setIsPosition(false);

    };



    return (
        <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full">
            <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
                <div className='flex justify-between '>
                    <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Memo Details</p>
                    <Link to='/staff-memo/hr' className='mt-8'><IoIosArrowRoundBack size={38} className="text-[#F13178]"/></Link>

                </div>
            </div>
            <div className='border-[#F13178] border-b '></div>

            <p className='rounded-xl py-2 lg:pl-8 pl-4 lg:pr-10 pr-4 lg:leading-10 leading-8 bg-slate-100 text-[#134574]'>
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



            <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Viewed Memo</p>

            <table className="w-[750px] md:w-[600px] lg:w-[900px] bg-slate-100 border border-gray-500">
                <thead>
                    <tr className='text-[#134574]'>
                        <th className="border p-2  left-0 ">NO</th>
                        <th className="border p-2  left-0 ">Full-Name</th>
                        <th className="border p-2">Phone</th>
                        <th className="border p-2">Location</th>
                        <th className="border p-2">Action</th>

                    </tr>
                </thead>
                <tbody>
                <tr className='text-[#134574]'>
                        <td className="border p-3"> 1</td>
                        <td className="border p-3"> Okereke Emmanuel</td>
                        <td className="border p-3"> 08037819461</td>
                        <td className="border p-3"> Ehizua Hub Awoyaya</td>
                        <td className="border p-3 "> 
                            <div className='bg-[#16DA70]  rounded-md'>
                                <p className='text-white text-center'>Acknowledged</p>
                            </div>
                            
                        </td>
                    </tr>
                    <tr className='text-[#134574]'>
                        <td className="border p-3"> 1</td>
                        <td className="border p-3"> Okereke Emmanuel</td>
                        <td className="border p-3"> 08037819461</td>
                        <td className="border p-3"> Ehizua Hub Awoyaya</td>
                        <td className="border p-3"> </td>
                    </tr>
                    <tr className='text-[#134574]'>
                        <td className="border p-3"> 1</td>
                        <td className="border p-3"> Okereke Emmanuel</td>
                        <td className="border p-3"> 08037819461</td>
                        <td className="border p-3"> Ehizua Hub Awoyaya</td>
                        <td className="border p-3"> </td>
                    </tr>
                    <tr className='text-[#134574]'>
                        <td className="border p-3"> 1</td>
                        <td className="border p-3"> Okereke Emmanuel</td>
                        <td className="border p-3"> 08037819461</td>
                        <td className="border p-3"> Ehizua Hub Awoyaya</td>
                        <td className="border p-3"> </td>
                    </tr>
                </tbody>
            </table>
            <div className="grid grid-cols-2 lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-white max-w-[980px] w-fit pb-44">


            </div>



        </div>



    )
}

export default MemoDetails