import { useState } from "react";
import StudentLogin from "../StudentLogin";
import TopNav from "../TopNav";
import { Link } from "react-router-dom";
import { TiTick } from "react-icons/ti";

const StudentMemo = () => {
    const [user, setUser] = useState(false)

    return (
        <div className="overflow-y-scroll w-full h-screen hide-bar">
        {user ? (
                <StudentLogin />
            ) : (
                <div className="relative z-0 w-full bg-[#C8D1DA] px-5 flex flex-col gap-3">

                    <TopNav />

                    <div className='p-1'>
                        <table className="w-full bg-white border border-gray-500 mb-8">
                            <thead>
                                <tr className='text-[#134574] bg-slate-400'>
                                    <th className="border p-2">Title</th>
                                    <th className="border p-2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='hover:bg-gray-200'>
                                    <td className="border p-3">
                                        <Link to='/student-memo-details'>
                                            General Meeting Notice
                                        </Link>
                                    </td>
                                    <td className="border p-3  items-center justify-center flex">
                                        <Link className="flex bg-[#F2DD25] rounded-xl sm:w-40 lg:w-40 items-center justify-center">
                                            <p className='hidden sm:block'>Acknowledge</p>
                                            <TiTick size={22} className="" />
                                        </Link>
                                    </td>

                                </tr>
                                <tr className='hover:bg-gray-200'>
                                    <td className="border p-3">
                                        <Link to='/student-memo-details'>
                                            General Meeting Notice
                                        </Link>
                                    </td>

                                    <td className="border p-3 items-center justify-center flex">
                                        <div className="flex bg-[#16DA70] rounded-xl sm:w-40 lg:w-40 items-center justify-center">
                                            <p className='hidden sm:block'>Acknowledged</p>
                                            <TiTick size={22} className="" />
                                        </div>
                                    </td>

                                </tr>
                                <tr className='hover:bg-gray-200'>
                                    <td className="border p-3">
                                        <Link to='/student-memo-details'>
                                            General Meeting Notice
                                        </Link>
                                    </td>
                                    <td className="border p-3  items-center justify-center flex">
                                        <Link className="flex bg-[#F2DD25] rounded-xl sm:w-40 lg:w-40 items-center justify-center">
                                            <p className='hidden sm:block'>Acknowledge</p>
                                            <TiTick size={22} className="" />
                                        </Link>
                                    </td>

                                </tr>
                                <tr className='hover:bg-gray-200'>
                                    <td className="border p-3">
                                        <Link to='/student-memo-details'>
                                            General Meeting Notice
                                        </Link>
                                    </td>

                                    <td className="border p-3 items-center justify-center flex">
                                        <div className="flex bg-[#16DA70] rounded-xl sm:w-40 lg:w-40 items-center justify-center">
                                            <p className='hidden sm:block'>Acknowledged</p>
                                            <TiTick size={22} className="" />
                                        </div>
                                    </td>

                                </tr>
                                <tr className='hover:bg-gray-200'>
                                    <td className="border p-3">
                                        <Link to='/student-memo-details'>
                                            General Meeting Notice
                                        </Link>
                                    </td>
                                    <td className="border p-3  items-center justify-center flex">
                                        <Link className="flex bg-[#F2DD25] rounded-xl sm:w-40 lg:w-40 items-center justify-center">
                                            <p className='hidden sm:block'>Acknowledge</p>
                                            <TiTick size={22} className="" />
                                        </Link>
                                    </td>

                                </tr>
                                <tr className='hover:bg-gray-200'>
                                    <td className="border p-3">
                                        <Link to='/student-memo-details'>
                                            General Meeting Notice
                                        </Link>
                                    </td>

                                    <td className="border p-3 items-center justify-center flex">
                                        <div className="flex bg-[#16DA70] rounded-xl sm:w-40 lg:w-40 items-center justify-center">
                                            <p className='hidden sm:block'>Acknowledged</p>
                                            <TiTick size={22} className="" />
                                        </div>
                                    </td>

                                </tr>
                                <tr className='hover:bg-gray-200'>
                                    <td className="border p-3">
                                        <Link to='/student-memo-details'>
                                            General Meeting Notice
                                        </Link>
                                    </td>
                                    <td className="border p-3  items-center justify-center flex">
                                        <Link className="flex bg-[#F2DD25] rounded-xl sm:w-40 lg:w-40 items-center justify-center">
                                            <p className='hidden sm:block'>Acknowledge</p>
                                            <TiTick size={22} className="" />
                                        </Link>
                                    </td>

                                </tr>
                                <tr className='hover:bg-gray-200'>
                                    <td className="border p-3">
                                        <Link to='/student-memo-details'>
                                            General Meeting Notice
                                        </Link>
                                    </td>

                                    <td className="border p-3 items-center justify-center flex">
                                        <div className="flex bg-[#16DA70] rounded-xl sm:w-40 lg:w-40 items-center justify-center">
                                            <p className='hidden sm:block'>Acknowledged</p>
                                            <TiTick size={22} className="" />
                                        </div>
                                    </td>

                                </tr>
                                <tr className='hover:bg-gray-200'>
                                    <td className="border p-3">
                                        <Link to='/student-memo-details'>
                                            General Meeting Notice
                                        </Link>
                                    </td>
                                    <td className="border p-3  items-center justify-center flex">
                                        <Link className="flex bg-[#F2DD25] rounded-xl sm:w-40 lg:w-40 items-center justify-center">
                                            <p className='hidden sm:block'>Acknowledge</p>
                                            <TiTick size={22} className="" />
                                        </Link>
                                    </td>

                                </tr>
                                <tr className='hover:bg-gray-200'>
                                    <td className="border p-3">
                                        <Link to='/student-memo-details'>
                                            General Meeting Notice
                                        </Link>
                                    </td>

                                    <td className="border p-3 items-center justify-center flex">
                                        <div className="flex bg-[#16DA70] rounded-xl sm:w-40 lg:w-40 items-center justify-center">
                                            <p className='hidden sm:block'>Acknowledged</p>
                                            <TiTick size={22} className="" />
                                        </div>
                                    </td>

                                </tr>
                                <tr className='hover:bg-gray-200'>
                                    <td className="border p-3">
                                        <Link to='/student-memo-details'>
                                            General Meeting Notice
                                        </Link>
                                    </td>
                                    <td className="border p-3  items-center justify-center flex">
                                        <Link className="flex bg-[#F2DD25] rounded-xl sm:w-40 lg:w-40 items-center justify-center">
                                            <p className='hidden sm:block'>Acknowledge</p>
                                            <TiTick size={22} className="" />
                                        </Link>
                                    </td>

                                </tr>
                                <tr className='hover:bg-gray-200'>
                                    <td className="border p-3">
                                        <Link to='/student-memo-details'>
                                            General Meeting Notice
                                        </Link>
                                    </td>

                                    <td className="border p-3 items-center justify-center flex">
                                        <div className="flex bg-[#16DA70] rounded-xl sm:w-40 lg:w-40 items-center justify-center">
                                            <p className='hidden sm:block'>Acknowledged</p>
                                            <TiTick size={22} className="" />
                                        </div>
                                    </td>

                                </tr>
                                <tr className='hover:bg-gray-200'>
                                    <td className="border p-3">
                                        <Link to='/student-memo-details'>
                                            General Meeting Notice
                                        </Link>
                                    </td>
                                    <td className="border p-3  items-center justify-center flex">
                                        <Link className="flex bg-[#F2DD25] rounded-xl sm:w-40 lg:w-40 items-center justify-center">
                                            <p className='hidden sm:block'>Acknowledge</p>
                                            <TiTick size={22} className="" />
                                        </Link>
                                    </td>

                                </tr>
                                <tr className='hover:bg-gray-200'>
                                    <td className="border p-3">
                                        <Link to='/student-memo-details'>
                                            General Meeting Notice
                                        </Link>
                                    </td>

                                    <td className="border p-3 items-center justify-center flex">
                                        <div className="flex bg-[#16DA70] rounded-xl sm:w-40 lg:w-40 items-center justify-center">
                                            <p className='hidden sm:block'>Acknowledged</p>
                                            <TiTick size={22} className="" />
                                        </div>
                                    </td>

                                </tr>
                                <tr className='hover:bg-gray-200'>
                                    <td className="border p-3">
                                        <Link to='/student-memo-details'>
                                            General Meeting Notice
                                        </Link>
                                    </td>
                                    <td className="border p-3  items-center justify-center flex">
                                        <Link className="flex bg-[#F2DD25] rounded-xl sm:w-40 lg:w-40 items-center justify-center">
                                            <p className='hidden sm:block'>Acknowledge</p>
                                            <TiTick size={22} className="" />
                                        </Link>
                                    </td>

                                </tr>
                                <tr className='hover:bg-gray-200'>
                                    <td className="border p-3">
                                        <Link to='/student-memo-details'>
                                            General Meeting Notice
                                        </Link>
                                    </td>

                                    <td className="border p-3 items-center justify-center flex">
                                        <div className="flex bg-[#16DA70] rounded-xl sm:w-40 lg:w-40 items-center justify-center">
                                            <p className='hidden sm:block'>Acknowledged</p>
                                            <TiTick size={22} className="" />
                                        </div>
                                    </td>

                                </tr>
                                <tr className='hover:bg-gray-200'>
                                    <td className="border p-3">
                                        <Link to='/student-memo-details'>
                                            General Meeting Notice
                                        </Link>
                                    </td>
                                    <td className="border p-3  items-center justify-center flex">
                                        <Link className="flex bg-[#F2DD25] rounded-xl sm:w-40 lg:w-40 items-center justify-center">
                                            <p className='hidden sm:block'>Acknowledge</p>
                                            <TiTick size={22} className="" />
                                        </Link>
                                    </td>

                                </tr>
                                <tr className='hover:bg-gray-200'>
                                    <td className="border p-3">
                                        <Link to='/student-memo-details'>
                                            General Meeting Notice
                                        </Link>
                                    </td>

                                    <td className="border p-3 items-center justify-center flex">
                                        <div className="flex bg-[#16DA70] rounded-xl sm:w-40 lg:w-40 items-center justify-center">
                                            <p className='hidden sm:block'>Acknowledged</p>
                                            <TiTick size={22} className="" />
                                        </div>
                                    </td>

                                </tr>
                                <tr className='hover:bg-gray-200'>
                                    <td className="border p-3">
                                        <Link to='/student-memo-details'>
                                            General Meeting Notice
                                        </Link>
                                    </td>
                                    <td className="border p-3  items-center justify-center flex">
                                        <Link className="flex bg-[#F2DD25] rounded-xl sm:w-40 lg:w-40 items-center justify-center">
                                            <p className='hidden sm:block'>Acknowledge</p>
                                            <TiTick size={22} className="" />
                                        </Link>
                                    </td>

                                </tr>
                                <tr className='hover:bg-gray-200'>
                                    <td className="border p-3">
                                        <Link to='/student-memo-details'>
                                            General Meeting Notice
                                        </Link>
                                    </td>

                                    <td className="border p-3 items-center justify-center flex">
                                        <div className="flex bg-[#16DA70] rounded-xl sm:w-40 lg:w-40 items-center justify-center">
                                            <p className='hidden sm:block'>Acknowledged</p>
                                            <TiTick size={22} className="" />
                                        </div>
                                    </td>

                                </tr>
                                <tr className='hover:bg-gray-200'>
                                    <td className="border p-3">
                                        <Link to='/student-memo-details'>
                                            General Meeting Notice
                                        </Link>
                                    </td>
                                    <td className="border p-3  items-center justify-center flex">
                                        <Link className="flex bg-[#F2DD25] rounded-xl sm:w-40 lg:w-40 items-center justify-center">
                                            <p className='hidden sm:block'>Acknowledge</p>
                                            <TiTick size={22} className="" />
                                        </Link>
                                    </td>

                                </tr>
                                <tr className='hover:bg-gray-200'>
                                    <td className="border p-3">
                                        <Link to='/student-memo-details'>
                                            General Meeting Notice
                                        </Link>
                                    </td>

                                    <td className="border p-3 items-center justify-center flex">
                                        <div className="flex bg-[#16DA70] rounded-xl sm:w-40 lg:w-40 items-center justify-center">
                                            <p className='hidden sm:block'>Acknowledged</p>
                                            <TiTick size={22} className="" />
                                        </div>
                                    </td>

                                </tr>

                            </tbody>
                        </table>
                    </div>





                </div>
            )}
        </div>
    );

}

export default StudentMemo