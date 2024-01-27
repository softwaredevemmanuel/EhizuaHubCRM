import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development'
import { FaCirclePlus } from "react-icons/fa6";
import axios from 'axios';
import ReactLoading from "react-loading";
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import AdminLogin from "./AdminLogin";



const History = () => {
    const [admin, setAdmin] = useState(false)
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(false);


    let user_token = JSON.parse(localStorage.getItem('User'));

    useEffect(() => {
        let staffToken = JSON.parse(localStorage.getItem('StaffToken'));
        if (staffToken && staffToken.token) {
            setAdmin(true);

        }
    }, []);

    useEffect(() => {
        // Fetch tutors when the component mounts
        async function fetchHistory() {
            try {
                setLoading(true);
                const response = await axios.get('http://localhost:5000/api/auth/history', {
                    headers: {
                        token: user_token.Token,
                    }
                });
                setHistory(response.data.message);
            } catch (error) {
                if (error.response.data.error === "Token expired") {

                    toastr.error("Session expired. Please login again");
                    setTimeout(() => {
                        localStorage.clear();
                        window.location.reload();
                    }, 2000);
                } else {
                    toastr.error('Error retrieving Offices');
                    setLoading(false)
                }
            } finally {
                setLoading(false); // Set loading to false regardless of success or failure
            }
        }

        fetchHistory();
    }, []);


    return (
        <div>
            {!admin ? (
                <AdminLogin />
            ) : (

                <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full">
                    <div className="w-full  bg-[#C8D1DA] flex flex-col gap-3">
                        <div className='flex justify-between '>
                            <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Admin History Activites</p>

                        </div>
                    </div>
                    <div className='border-[#F13178] border-b '></div>



                    {loading && (
                        <div className=" z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                            <ReactLoading type={"bars"} color={"#ffffff"} height={100} width={100} />
                        </div>
                    )}



                    {history && history.map((data, index) => {
                        // Parse the createdAt date string
                        const createdAtDate = new Date(data.createdAt);

                        // Format the date
                        const day = createdAtDate.getDate().toString().padStart(2, '0');
                        const month = (createdAtDate.getMonth() + 1).toString().padStart(2, '0');
                        const year = createdAtDate.getFullYear();
                        const hours = createdAtDate.getHours() % 12 || 12;
                        const minutes = createdAtDate.getMinutes().toString().padStart(2, '0');
                        const ampm = createdAtDate.getHours() < 12 ? 'am' : 'pm';

                        // Create the formatted string
                        const formattedCreatedAt = `${day}-${month}-${year}, ${hours}:${minutes}${ampm}`;

                        return (
                            <div key={index}>
                                <div className='pl-5 rounded-sm sm:rounded-md w-full bg-slate-400 sm:flex items-center justify-between mt-1 pr-5 gap-2'>
                                    <div className='flex'>
                                        <p className='text-slate-600 sm:ml-2 text-md'>{data.title}</p>
                                    </div>

                                    <div className="flex gap-2 pb-2 sm:pb-0">
                                        <p className="text-slate-500">Admin</p>
                                        <div className="text-sm sm:border sm:border-slate-500 px-2 rounded-sm mt-1 mb-1">
                                            <div className="flex text-slate-500 gap-2">
                                                <p className=''>{data.userEmail}</p>
                                                <p className=''> {data.fullName}</p>
                                            </div>
                                            <div className='gap-4 flex'>
                                                <p className='text-slate-500'> {formattedCreatedAt}</p>
                                                {data.details ?(
                                                    <button className='text-white'> View More</button>

                                                ):(
                                                    <p className=''> </p>

                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='border-slate-100 border-b pt-4'></div>
                            </div>
                        );
                    })}


                    <div className="grid grid-cols-2 lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-white max-w-[980px] w-fit pb-44">


                    </div>



                </div>

            )}

        </div>


    )
}

export default History