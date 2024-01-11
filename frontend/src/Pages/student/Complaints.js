
import { useState } from "react";
import StudentLogin from "./StudentLogin";
import TopNav from "./TopNav";
import frontend from '../../assets/frontend.png'
import { Link } from "react-router-dom";



const TestSection = () => {
    const [user, setUser] = useState(false);


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
                                    <th className="border p-2">Process</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='hover:bg-gray-200'>
                                    <td className="border p-3"> Unable to log in into my account</td>

                                    <td className="border p-3 bg-green-400 items-center justify-center flex">
                                        <Link className="gap-2 text-[#134574]">
                                            <p>Open</p>

                                        </Link>
                                    </td>

                                </tr>
                                <tr className='hover:bg-gray-200'>
                                    <td className="border p-3"> Unable to log in into my account</td>

                                    <td className="border p-3 bg-red-400 items-center justify-center flex">
                                        <Link className="gap-2 text-[#134574]">
                                            <p className="text-center">Closed</p>


                                        </Link>
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

export default TestSection

