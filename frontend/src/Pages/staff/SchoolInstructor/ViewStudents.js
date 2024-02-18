import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import StaffLogin from '../StaffLogin';
import toastr from 'toastr';
import ReactLoading from "react-loading";
import { LuRefreshCcw } from "react-icons/lu";


const SchoolStudents = () => {
    const [user, setUser] = useState(false)
    const [email, setEmail] = useState('')
    const [selectedSchool, setSelectedSchool] = useState('');
    const [schools, setSchools] = useState('')
    const [reload, setReload] = useState('')
    const [classArray, setClassArray] = useState([]);
    const [sessionArray, setSessionArray] = useState([]);
    const [uniqueClassArray, setUniqueClassArray] = useState([]);
    const [selectClass, setSelectClass] = useState('');
    const [selectSession, setSelectSession] = useState('');
    const [courseCodeString, setCourseCodeString] = useState('');
    const [courseCode, setCourseCode] = useState('');
    const [studentArray2, setStudentArray2] = useState([]);
    const { course: courseParam } = useParams();
    const { email: emailParam } = useParams();
    const [loading, setLoading] = useState(false); // New state for loading indicator


    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('User'));
        setEmail(user.email)

        let staffToken = JSON.parse(localStorage.getItem('StaffToken'));
        if (staffToken && staffToken.token) {
            setUser(true);

        }
    }, []);

    // Fetch School Assigned to a Tutor
    useEffect(() => {
        setLoading(true)
        async function fetchSchools() {
            try {

                const response = await axios.get('http://localhost:5000/api/school-tutor/assigned-school', {
                    headers: {
                        email: emailParam
                    },
                });

                setSchools(response.data.schools); // Value is a String of schools
                setLoading(false)


            } catch (error) {
                toastr.error('Error retrieving content');
                setLoading(false)

            }
        }


        fetchSchools();
    }, [emailParam]);

    const schoolArray = schools.split(', ')


    // Fetch Session List
    useEffect(() => {
        setLoading(true)

        async function fetchSession() {
            try {
                const response = await axios.get('http://localhost:5000/api/school-tutor/session', {
                    headers: {
                        school: selectedSchool,
                        course: courseParam,
                    },
                });
                setSessionArray(response.data.student);
                setLoading(false)


            } catch (error) {
                toastr.error(`No Session registered for ${selectedSchool}`);
                setSessionArray([])
                setLoading(false)

            }
        }


        fetchSession();
    }, [selectedSchool, reload]);
    const uniqueSessionArray = [...new Set(sessionArray.map(item => item.year))];


    // Fetch Class List
    useEffect(() => {
        setLoading(true)

        async function fetchClassList() {
            try {
                const response = await axios.get('http://localhost:5000/api/school-tutor/class-list', {
                    headers: {
                        school: selectedSchool,
                        course: courseParam,
                        session: selectSession,

                    },
                });
                setClassArray(response.data.studentClass);
                setLoading(false)


            } catch (error) {
                toastr.error(`No class registered for ${selectedSchool}`);
                setLoading(false)

            }
        }


        fetchClassList();
    }, [selectSession, reload]);


    useEffect(() => {
        if (classArray) {

            setUniqueClassArray([...new Set(classArray.map(item => item.level))]);
        }

    }, [classArray])

    
    // Fetch Course Code to Assign to students
    useEffect(() => {
        setLoading(true)

        async function fetchCourseCode() {
            try {

                const response = await axios.get('http://localhost:5000/api/school-tutor/fetch-course_code', {
                    headers: {
                        course: courseParam
                    },
                });

                setCourseCodeString(response.data.courseCodeString);
                setLoading(false)

            } catch (error) {
                toastr.error('Error retrieving content');
                setLoading(false)

            }
        }


        fetchCourseCode();
    }, [courseParam, reload]);
    const courseCodeArray = courseCodeString.split(', ')



    //  Use Effect to get list of students based of class selected
    useEffect(() => {
        async function fetchClassStudent() {
            try {
                const response = await axios.get('http://localhost:5000/api/school-tutor/fetch-students-by-classes', {
                    headers: {
                        studentClass: selectClass,
                        school: selectedSchool,
                        course: courseParam,
                        session: selectSession
                    },
                });
                setStudentArray2(response.data.student);

            } catch (error) {
                toastr.error('Error retrieving content');
            }
        }


        fetchClassStudent();
    }, [selectClass, selectedSchool, courseParam, reload]);



    const handleAssignCourseCode = (event) => {
        event.preventDefault();

        const studentIds = studentArray2.map(student => student.id);

        axios.get("http://localhost:5000/api/school-tutor/update-course-code", {
            headers: {
                studentIds,
                courseCode,
                selectedSchool
            }
        })
            .then(response => {
                toastr.success(response.data.studentIdArray);
                setReload('reloaded')
            })
    }


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
                <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full">
                    <div className="w-full  bg-[#C8D1DA] flex gap-3 justify-between">
                        <p className='text-[#F13178] text-[20px] mt-8 font-extrabold text-sm' >School Students</p>
                        <Link to='/school-instructor' className='mt-6'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>


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
                                <p className='text-xs'>Refresh</p>

                                <LuRefreshCcw size={18} />
                            </div>
                        </button>

                    </div>

                    <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
                        <div className='pt-1 gap-4'>
                            <p className='text-[#134574] font-bold text-sm'>School</p>

                            <select
                                className='rounded-lg h-[30px] w-full text-slate-500 outline-none bg-slate-200 px-4'
                                value={selectedSchool}
                                onChange={(event) => setSelectedSchool(event.target.value)}
                            >
                                <option>Select School</option>
                                {schoolArray.map((contents, mainIndex) => (
                                    <option key={mainIndex} value={contents}>
                                        {contents}
                                    </option>
                                ))}
                            </select>

                        </div>
                        <div className='pt-1  gap-4'>
                            <p className='text-[#134574] font-bold text-sm'>Select Session</p>

                            <select
                                className='rounded-lg h-[30px] w-full text-slate-500 outline-none bg-slate-200 px-4'
                                value={selectSession}
                                onChange={(event) => setSelectSession(event.target.value)}
                            >

                                <option>Select Session</option>
                                {uniqueSessionArray.map((contents, mainIndex) => (
                                    <option key={mainIndex} value={contents}>
                                        {contents}
                                    </option>
                                ))}
                            </select>

                        </div>

                        <div className='pt-1 gap-4'>
                            <p className='text-[#134574] font-bold text-sm'>Class</p>

                            <select
                                className='rounded-lg h-[30px] w-full text-slate-500 outline-none bg-slate-200 px-4'
                                value={selectClass}
                                onChange={(event) => setSelectClass(event.target.value)}
                            >

                                <option>Select Class</option>
                                {uniqueClassArray.map((contents, mainIndex) => (
                                    <option key={mainIndex} value={contents}>
                                        {contents}
                                    </option>
                                ))}
                            </select>

                        </div>

                        <div className='pt-1'>
                            <form className=' gap-4 text-sm' onSubmit={handleAssignCourseCode}>
                                <p className='text-[#134574] font-bold'>{courseParam} Course Code</p>
                                <div className=''>

                                    <select
                                        className='rounded-lg h-[30px] w-full text-slate-500 outline-none bg-slate-200 px-4'
                                        value={courseCode}
                                        onChange={(event) => setCourseCode(event.target.value)}
                                    >

                                        <option>Assign Course Code</option>
                                        {courseCodeArray.map((content, mainIndex) => (
                                            <option key={mainIndex} value={content}>
                                                {content}
                                            </option>
                                        ))}
                                    </select>
                                    <div className='flex items-center justify-center mt-2'>

                                        <button
                                            className='bg-[#F13178] rounded-md px-2 text-white ml-2'>
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>


                        </div>
                    </div>


                    <p className='text-center justify-center text-[#134574] font-extrabold text-lg pt-2'>Student List</p>


                    <div className='bg-slate-200  h-[520px] rounded-lg sm:px-1'>
                        <div className='overflow-x-auto mt-1'>
                            <div className='p-1 h-[500px]'>
                                <div className="w-[1000px] bg-white border border-gray-500 mb-8">
                                    <div className='text-[#134574] bg-slate-400 flex'>
                                        <p className="border p-2 w-[50px]">No</p>
                                        <p className="border p-2 w-[360px]">Full-Name</p>
                                        <p className="border p-2 w-[100px]">Class</p>
                                        <p className="border p-2 w-[300px]">Course</p>
                                        <p className="border p-2 w-[140px]">Year</p>
                                        <p className="border p-2 w-[160px]">Term</p>
                                        <p className="border p-2 w-[160px]">Course Code</p>

                                    </div>
                                    {studentArray2.length > 0 ? (
                                        <div>
                                            {studentArray2 && studentArray2.map((tutor, index) => (

                                                <Link className='text-[#134574] flex hover:bg-gray-200'>
                                                    <p className="border p-2 w-[50px]">{index + 1}</p>
                                                    <p className="border p-2 w-[360px]">{tutor.firstName} {tutor.lastName} </p>
                                                    <p className="border p-2 w-[100px]">{tutor.level}</p>
                                                    <p className="border p-2 w-[300px]">{tutor.courses}</p>
                                                    <p className="border p-2 w-[140px]">{tutor.year}</p>
                                                    <p className="border p-2 w-[160px]">{tutor.term}</p>
                                                    <p className="border p-2 w-[160px]">{tutor.courseCode}</p>

                                                </Link>
                                            ))}

                                        </div>
                                    ) : (
                                        <div>
                                            {classArray && classArray.map((tutor, index) => (

                                                <Link className='text-[#134574] flex hover:bg-gray-200'>
                                                    <p className="border p-2 w-[50px]">{index + 1}</p>
                                                    <p className="border p-2 w-[360px]">{tutor.firstName} {tutor.lastName}</p>
                                                    <p className="border p-2 w-[100px]">{tutor.level}</p>
                                                    <p className="border p-2 w-[300px]">{tutor.courses}</p>
                                                    <p className="border p-2 w-[140px]">{tutor.year}</p>
                                                    <p className="border p-2 w-[160px]">{tutor.term}</p>
                                                    <p className="border p-2 w-[160px]">{tutor.courseCode}</p>

                                                </Link>
                                            ))}

                                        </div>
                                    )}



                                </div>



                            </div>
                        </div>


                    </div>


                    <div className="grid grid-cols-2 lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-white max-w-[980px] w-fit pb-44">

                    </div>



                </div>


            )}
        </div>

    )
}

export default SchoolStudents