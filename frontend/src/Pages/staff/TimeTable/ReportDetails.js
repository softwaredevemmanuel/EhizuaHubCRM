import React, { useState, useEffect } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { LuRefreshCcw } from "react-icons/lu";
import { VscNewFile } from "react-icons/vsc";
import { Link } from 'react-router-dom'
import axios from 'axios';
import toastr from 'toastr';
import ReactLoading from "react-loading";
import StaffLogin from "../StaffLogin";
import { useParams } from 'react-router-dom';



const ReportDetails = () => {
    const [user, setUser] = useState(false)
    const [loading, setLoading] = useState(false);
    const [reload, setReload] = useState('');
    const [staffLocation, setStaffLocation] = useState('');
    const [classReport, setClassReport] = useState([]);
    const { course: courseParams } = useParams();

    // Get the content parameter from the URL using useParams
    const { _id: idParam } = useParams();
    const contentItem = classReport.find((item) => item.id == idParam);

    console.log(contentItem)


    useEffect(() => {
        let staffToken = JSON.parse(localStorage.getItem('StaffToken'));
        if (staffToken && staffToken.token) {
            setUser(true);
            setStaffLocation(staffToken.location)

        }
    }, []);



    // Fetch Class Report
    useEffect(() => {
        setLoading(true)
        let staffToken = JSON.parse(localStorage.getItem('StaffToken'));

        async function fetchClassReport() {
            try {
                const response = await axios.get('http://localhost:5000/api/hub-tutor/class-report', {
                    headers: {
                        course: courseParams,
                        location: staffToken.location
                    }
                });
                setClassReport(response.data.content);

                setLoading(false)
            } catch (error) {
                toastr.error('Error retrieving Courses');
            }
        }

        fetchClassReport();
    }, [reload]);





    const Refresh = () => {
        if (reload === '') {
            setReload('reload')

        } else {
            setReload('')

        }
    }




    return (

        <div className="">
            {!user ? (
                <StaffLogin />
            ) : (

                <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full pb-12 ">

                    <div className="flex gap-2 justify-between">

                        <p className='text-[#F13178] mt-6 font-extrabold' >{courseParams} Class Report Details</p>
                        <Link to='/staff-time-table' className='mt-6'><IoIosArrowRoundBack size={34} className="text-[#F13178]" /></Link>


                    </div>


                    <div className='border-[#F13178] border-b '></div>


                    {loading && (
                        <div className=" z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                            <ReactLoading type={"bars"} color={"#ffffff"} height={100} width={100} />
                        </div>
                    )}


                    <div className="flex gap-2 mt-1 justify-end">

                        <button onClick={Refresh}>
                            <div className='flex gap-2 text-gray-500'>
                                <p className='text-sm'>Refresh</p>

                                <LuRefreshCcw size={20} />
                            </div>
                        </button>

                    </div>

                    {contentItem && (

                        <div className="bg-slate-200 px-8 text-slate-600 text-sm pb-8">
                            <div className="flex gap-4 mt-4 bg-slate-100 p-2 rounded-md">
                                <p>Date: </p>
                                <p>{contentItem.classDate}</p>

                            </div>
                            <div className="flex gap-2 mt-4 bg-slate-100 p-2 rounded-md">
                                <p>Start Time: </p>
                                <p>{contentItem.startTime}</p>

                            </div>
                            <div className="flex gap-2 mt-4 bg-slate-100 p-2 rounded-md">
                                <p>End Time: </p>
                                <p>{contentItem.endTime}</p>

                            </div>
                            <div className="flex gap-2 mt-4 bg-slate-100 p-2 rounded-md">
                                <p>Topic: </p>
                                <p>{contentItem.topic}</p>

                            </div>
                            <div className="flex gap-2 mt-4 bg-slate-100 p-2 rounded-md">
                                <p>New Topic: </p>
                                <p>{contentItem.newTopic}</p>

                            </div>
                            <div className="flex gap-2 mt-4 bg-slate-100 p-2 rounded-md">
                                <p>New Topic Comment: </p>
                                <p>{contentItem.newTopicComment}</p>

                            </div>
                            <div className="flex gap-2 mt-4 bg-slate-100 p-2 rounded-md">
                                <p>Class Progress: </p>
                                <p>{contentItem.classProgress}</p>

                            </div>
                            <div className="flex gap-2 mt-4 bg-slate-100 p-2 rounded-md">
                                <p>Students Attended: </p>
                                <p>{contentItem.studentsAttended}</p>

                            </div>

                        </div>
                    )}





                </div>





            )}


        </div>

    )

}

export default ReportDetails