import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import TopNav from "./TopNav";
import axios from 'axios';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import ReactLoading from "react-loading";

const StudentLogin = () => {
    const [user, setUser] = useState(false);
    const [schools, setSchools] = useState([]);
    const [selectedSchool, setSelectedSchool] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        // Fetch tutors when the component mounts
        async function fetchTutors() {
            try {
                const response = await axios.get('http://localhost:5000/api/school_pupils/partner-schools');
                setSchools(response.data.message);
            } catch (error) {
                toastr.error('Error retrieving Partner schools');
            }
        }

        fetchTutors();
    }, []);

    return (
        <div className="overflow-y-scroll w-full h-screen hide-bar">

            <div className="relative z-0 w-full bg-[#C8D1DA] px-5 flex flex-col gap-3 pb-12">

                <TopNav />

                <div className="bg-[#C8D1DA] px-5 flex flex-col gap-3">
                    <div className="flex justify-between  text-white py-3 items-start border-b  border-slate-100">

                        <div className="pt-[20px]">
                            <p className="text-[2rem] font-bold">Welcome Emmanuel Okereke</p>
                            <p class='text-[#DD137B] scrolling-text'>Please Login with your Student Id to continue</p>
                        </div>
                    </div>

                    {loading && (
                        <div className=" z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                            <ReactLoading type={"bars"} color={"#ffffff"} height={100} width={100} />
                        </div>
                    )}

                    <form action="" className="bg-[#134574] mt-8  px-3 gap-4 py-[80px] relative rounded-[8px] w-full flex flex-col text-white justify-center items-center">

                            <div className="flex flex-col justify-center w-full max-w-[348px]">
                                <select
                                    className="w-full max-w-[348px] px-3 rounded-[4px] py-2 text-gray-600 outline-none"
                                    value={selectedSchool}
                                    onChange={(event) => setSelectedSchool(event.target.value)}
                                >
                                    <option> Select School </option>
                                    {schools.map((school, index) => (
                                        <option key={index} value={`${school.schoolName}`}>
                                            {school.schoolName}
                                        </option>
                                    ))}
                                </select>
                            </div>

                    
                        <div className="flex flex-col justify-center w-full max-w-[348px]">
                            <label className="text-[0.9rem] font-light" htmlFor="">Student Id</label>
                            <input
                                className="w-full max-w-[348px] px-3 rounded-[4px] py-2 text-gray-600 outline-none"
                                placeholder="G78-Eh-03"
                            />
                        </div>

                        <div className="w-full max-w-[348px] flex justify-between">
                            <div></div>
                            <a className="text-[0.9rem]" href="/forgotpassword">Forgot Id?</a>
                        </div>
                        <Link className="px-3 bg-[#DD137B] max-w-[143px] w-full text-center rounded-[4px] py-2 font-bold">Login</Link>
                    </form>
                </div>




            </div>
        </div>

        // <div className="bg-[#C8D1DA] px-5 flex flex-col gap-3">
        //     <div className="flex justify-between  text-white py-3 items-start border-b  border-[#DD137B]">

        //         <div className="pt-[20px]">
        //             <p className="text-[2rem] font-bold">Welcome Emmanuel Okereke</p>
        //             <p class='text-[#DD137B] scrolling-text'>Please Login with your staff Id to continue</p>
        //         </div>
        //     </div>
        //     <form action="" className="bg-[#134574] mt-16  px-3 gap-4 py-[80px] relative rounded-[8px] w-full flex flex-col text-white justify-center items-center">
        //         <img className="absolute rounded-full top-[-50px]" src={user1} alt="" />
        //         <div className="flex flex-col justify-center w-full max-w-[348px]">
        //             <label className="text-[0.9rem] font-light" htmlFor="">Student Id</label>
        //             <input className="w-full max-w-[348px] px-3 rounded-[4px] py-2 text-gray-600" type="email" placeholder="G78-Eh-03" name="" id="" />
        //         </div>

        //         <div className="w-full max-w-[348px] flex justify-between">
        //             <div></div>
        //             <a className="text-[0.9rem]" href="/forgotpassword">Forgot Id?</a>
        //         </div>
        //         <Link className="px-3 bg-[#DD137B] max-w-[143px] w-full text-center rounded-[4px] py-2 font-bold">Login</Link>
        //     </form>
        // </div>
    )
}

export default StudentLogin