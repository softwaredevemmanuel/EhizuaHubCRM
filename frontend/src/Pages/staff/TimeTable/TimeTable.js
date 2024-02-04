import React, { useState, useEffect } from "react";
import { IoMdTime } from "react-icons/io";
import { LuRefreshCcw } from "react-icons/lu";
import { Link } from 'react-router-dom'
import axios from 'axios';
import toastr from 'toastr';
import ReactLoading from "react-loading";
import StaffLogin from "../StaffLogin";


const TimeTable = () => {
    const [user, setUser] = useState(false)

    const [allHubCourses, setHubAllCourse] = useState([]);
    const [timeTableList, setTimeTableList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [reload, setReload] = useState('');
    const [cancelFirstRow, setCancelFirstRow] = useState(true);
    const [staffLocation, setStaffLocation] = useState('');
    const [displayType, setDisplayType] = useState('Horizontal');



    useEffect(() => {
        let staffToken = JSON.parse(localStorage.getItem('StaffToken'));
        if (staffToken && staffToken.token) {
            setUser(true);
            setStaffLocation(staffToken.location)

        }
    }, []);

  

    // Fetch Hub Courses
    useEffect(() => {
        setLoading(true)
        async function fetchHubCourses() {
            try {
                const response = await axios.get('http://localhost:5000/api/auth/upskill_courses', {
                    headers: {
                        location: staffLocation
                    }
                });
                setHubAllCourse(response.data.message);
                setLoading(false)
            } catch (error) {
                toastr.error('Error retrieving Courses');
            }
        }

        fetchHubCourses();
    }, [staffLocation, reload]);

    // Fetch Hub Time Table
    useEffect(() => {
        setLoading(true)
        async function fetchTimeTable() {
            try {
                const response = await axios.get('http://localhost:5000/api/auth/time-table', {
                    headers: {
                        location: staffLocation
                    }
                });
                setTimeTableList(response.data.message);
                setLoading(false)
            } catch (error) {
                toastr.error('Error retrieving Courses');
            }
        }

        fetchTimeTable();
    }, [reload, staffLocation]);

 







    const Refresh = () => {
        if (reload === '') {
            setReload('reload')

        } else {
            setReload('')

        }
    }

  



    useEffect(() => {

    }, [displayType])
    return (

        <div className="">
            {!user ? (
                <StaffLogin />
            ) : (

                <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full pb-12 ">
                    <div className='flex justify-between '>
                        <div className="flex gap-2">

                            <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Time Table</p>
                            <div className='pt-1 flex gap-4 mt-8'>
                                <select
                                    className='rounded-lg text-slate-500 outline-none bg-slate-300 px-4'
                                    value={displayType}
                                    onChange={(event) => setDisplayType(event.target.value)}
                                >
                                    <option value='Horizontal'>Horizontal</option>
                                    <option value='Vertical'>Vertical</option>

                                </select>


                            </div>
                        </div>

                    </div>


                    <div className='border-[#F13178] border-b '></div>

                    {loading && (
                        <div className=" z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                            <ReactLoading type={"bars"} color={"#ffffff"} height={100} width={100} />
                        </div>
                    )}

                   

                    <div className="sm:flex justify-between">
                      
                        <div className="flex gap-2 mt-1 justify-center">
                            {(staffLocation !== '' && allHubCourses.length > 1) && (
                                <div className="flex gap-2">
                                    <button onClick={Refresh}>
                                        <div className='flex gap-2 text-gray-500'>
                                            <p className=''>Refresh</p>

                                            <LuRefreshCcw size={24} />
                                        </div>
                                    </button>


                                    
                                </div>

                            )}
                        </div>

                    </div>




                    {displayType == "Vertical" ? (

                                <div className='overflow-x-auto mt-1'>
                
                                    
                                    <div className="flex w-[1000px]">

                                        {cancelFirstRow && (
                                            <div className="grid  text-[#134574] items-center gap-1">
                                                <div className="bg-slate-400 border-r border-white h-[80px]  flex items-center pl-2 font-bold w-[60px] pr-2 justify-center">
                                                    <p><IoMdTime /></p>
                                                </div>
                                                <div className="bg-slate-400 border-r border-white h-[80px] flex items-center pl-2 font-bold w-[60px] pr-2 justify-center">
                                                    <p>Mon</p>
                                                </div>
                                                <div className=" bg-slate-400 border-r border-white h-[80px] flex items-center pl-2 font-bold w-[60px] pr-2 justify-center">
                                                    <p>Tue</p>
                                                </div>
                                                <div className="bg-slate-400 border-r border-white h-[80px] flex items-center pl-2 font-bold w-[60px] pr-2 justify-center">
                                                    <p>Wed</p>
                                                </div>
                                                <div className="bg-slate-400 border-r border-white h-[80px] flex items-center pl-2 font-bold w-[60px] pr-2 justify-center">
                                                    <p>Thu</p>
                                                </div>
                                                <div className="bg-slate-400 border-r border-white h-[80px] flex items-center pl-2 font-bold w-[60px] pr-2 justify-center">
                                                    <p>Fri</p>
                                                </div>
                                                <div className="bg-slate-400 border-r border-white h-[80px] flex items-center pl-2 font-bold w-[60px] pr-2 justify-center">
                                                    <p>Sat</p>
                                                </div>
                                            </div>
                                        )}




                                            <div className="flex">
                                                {timeTableList && timeTableList.map((timeTable, index) => (

                                                    <div key={index}>

                                                            <div className="grid text-[#134574] bg-slate-200 items-center border border-slate-100 gap-1 text-sm">
                                                                <div className="border border-white flex flex-col items-center pl-2 h-[80px] w-[300px] pr-2 justify-center">
                                                                    <p>{timeTable.startTime} - {timeTable.endTime}</p>
                                                                </div>
                                                                <div className="border border-white flex flex-col items-center pl-2 h-[80px] w-[300px] pr-2 justify-center">
                                                                    <p>{timeTable.monday}</p>
                                                                </div>
                                                                <div className="border border-white flex flex-col items-center pl-2 h-[80px] w-[300px] pr-2 justify-center">
                                                                    <p>{timeTable.tuesday}</p>
                                                                </div>
                                                                <div className="border border-white flex flex-col items-center pl-2 h-[80px] w-[300px] pr-2 justify-center">
                                                                    <p>{timeTable.wednesday}</p>
                                                                </div>
                                                                <div className="border border-white flex flex-col items-center pl-2 h-[80px] w-[300px] pr-2 justify-center">
                                                                    <p>{timeTable.thursday}</p>
                                                                </div>
                                                                <div className="border border-white flex flex-col items-center pl-2 h-[80px] w-[300px] pr-2 justify-center">
                                                                    <p>{timeTable.friday}</p>
                                                                </div>
                                                                <div className="border border-white flex flex-col items-center pl-2 h-[80px] w-[300px] pr-2 justify-center">
                                                                    <p>{timeTable.saturday}</p>
                                                                </div>
                                                            </div>

                                                    </div>

                                                ))}

                                            </div>
                                         

                                    </div>




                                </div>
                     
                    ) : (



                                <div className="overflow-x-auto mt-1">
                                    <div className="w-[1000px]">
                                        <div className="grid grid-cols-7 text-[#134574] bg-slate-400 h-[40px] items-center">
                                            <div className="border-r border-white h-[40px] flex items-center pl-2 font-bold">
                                                <p> Time</p>
                                            </div>
                                            <div className="border-r border-white h-[40px] flex items-center pl-2 font-bold">
                                                <p> Monday</p>
                                            </div>
                                            <div className="border-r border-white h-[40px] flex items-center pl-2 font-bold">
                                                <p> Tuesday</p>
                                            </div>
                                            <div className="border-r border-white h-[40px] flex items-center pl-2 font-bold">
                                                <p> Wednesday</p>
                                            </div>
                                            <div className="border-r border-white h-[40px] flex items-center pl-2 font-bold">
                                                <p> Thursday</p>
                                            </div>
                                            <div className="border-r border-white h-[40px] flex items-center pl-2 font-bold">
                                                <p> Friday</p>
                                            </div>
                                            <div className="border-r border-white h-[40px] flex items-center pl-2 font-bold">
                                                <p> Saturday</p>
                                            </div>
                                        </div>

                                
                                    </div>
                                    {timeTableList && timeTableList.map((timeTable, index) => (

                                        <div key={index} className="w-[1000px]">

                                                <div className="grid grid-cols-7 text-[#134574] bg-slate-200 items-center border border-slate-100 text-sm">
                                                    <div className="border border-white flex flex-col items-center pl-2 h-full">
                                                        <p>{timeTable.startTime} - {timeTable.endTime}</p>
                                                    </div>
                                                    <div className="border border-white flex flex-col items-center pl-2 h-full">
                                                        <p>{timeTable.monday}</p>
                                                    </div>
                                                    <div className="border border-white flex flex-col items-center pl-2 h-full">
                                                        <p>{timeTable.tuesday}</p>
                                                    </div>
                                                    <div className="border border-white flex flex-col items-center pl-2 h-full">
                                                        <p>{timeTable.wednesday}</p>
                                                    </div>
                                                    <div className="border border-white flex flex-col items-center pl-2 h-full">
                                                        <p>{timeTable.thursday}</p>
                                                    </div>
                                                    <div className="border border-white flex flex-col items-center pl-2 h-full">
                                                        <p>{timeTable.friday}</p>
                                                    </div>
                                                    <div className="border border-white flex flex-col items-center pl-2 h-full">
                                                        <p>{timeTable.saturday}</p>
                                                    </div>
                                                </div>

                                        </div>

                                    ))}

                                </div>
                 
                    )}


                    {(allHubCourses.length < 1) && (

                        <div>
                            <div className="flex justify-center mt-12 ">
                                <p className="font-bold text-[#F13178] ">No Courses Created for {staffLocation}</p>

                            </div>
                       
                        </div>
                    )}





                </div>


            )}


        </div>

    )

}

export default TimeTable