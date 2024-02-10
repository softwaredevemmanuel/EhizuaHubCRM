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



const ReportList = () => {
    const [user, setUser] = useState(false)
    const [loading, setLoading] = useState(false);
    const [reload, setReload] = useState('');
    const [staffLocation, setStaffLocation] = useState('');
    const [classReport, setClassReport] = useState([]);
    const { course: courseParams } = useParams();




console.log(classReport)


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

                        <p className='text-[#F13178] mt-6 font-extrabold' >{courseParams} Class Report</p>
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



                    <div className='bg-slate-200  h-[520px]  sm:px-1'>
                        <div className='overflow-x-auto mt-1'>
                            <div className='p-1 h-[500px]'>

                                <table className="w-[1000px] bg-white border border-gray-500 mb-8">
                                    <thead>
                                        <tr className='text-[#134574] bg-slate-400'>
                                            <th className="border p-2">DATE</th>
                                            <th className="border p-2">S.TIME</th>
                                            <th className="border p-2">E.TIME</th>
                                            <th className="border p-2">TOPIC</th>
                                            <th className="border p-2">DETAILS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {classReport.map((report, index) => (
                                            <tr key={index} className='hover:bg-gray-200'>
                                                <td className="border p-3">{report.classDate}</td>
                                                <td className="border p-3">{report.startTime}</td>
                                                <td className="border p-3">{report.endTime}</td>
                                                <td className="border p-3">{report.topic}</td>                                          
                                                <td className="border p-3">
                                                    <Link to={`/class-report-details/${report.id}/${report.course}`}>
                                                        <p className='text-green-600 underline'>View More</p>
                                                    </Link></td>

                                            </tr>
                                            
                                            
                                        ))}
                                    </tbody>

                                </table>


                            </div>
                        </div>


                    </div>





                </div>



            )}


        </div>

    )

}

export default ReportList