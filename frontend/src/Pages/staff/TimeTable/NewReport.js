import React, { useState, useEffect } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { LuRefreshCcw } from "react-icons/lu";
import { Link } from 'react-router-dom'
import axios from 'axios';
import toastr from 'toastr';
import ReactLoading from "react-loading";
import StaffLogin from "../StaffLogin";
import { useParams } from 'react-router-dom';



const NewReport = () => {
    const [user, setUser] = useState(false)
    const [loading, setLoading] = useState(false);
    const [reload, setReload] = useState('');
    const [staffLocation, setStaffLocation] = useState('');
    const [topic, setTopic] = useState('');
    const [newTopic, setNewTopic] = useState('');
    const [newTopicComment, setNewTopicComment] = useState('');
    const [classProgress, setClassProgress] = useState('');
    const [classDate, setClassDate] = useState('');
    const [courseStudents, setCourseStudents] = useState([]);
    const { course: courseParams } = useParams();
    const { start: startParams } = useParams();
    const { end: endParams } = useParams();
    const [courses, setCourse] = useState([]);



    const [selectedCourseStudent, setSelectedCourseStudent] = useState([]);
    const [selectedCourseTopic, setSelectedCourseTopic] = useState([]);


    const handleStudentCheckboxChange = (course) => {
        if (selectedCourseStudent.includes(course)) {
            setSelectedCourseStudent(selectedCourseStudent.filter((selectedHubCourse) => selectedHubCourse !== course));

        } else {
            setSelectedCourseStudent([...selectedCourseStudent, course]);
        }
    };
    const handleTopicCheckboxChange = (course) => {
        if (selectedCourseTopic.includes(course)) {
            setSelectedCourseTopic(selectedCourseTopic.filter((selectedHubTopic) => selectedHubTopic !== course));

        } else {
            setSelectedCourseTopic([...selectedCourseTopic, course]);
        }
    };



    const handleSubmit = event => {
        event.preventDefault();
        createReport();
    };

    const createReport = () => {
        if (classDate && selectedCourseStudent.length >= 1) {
            setLoading(true);

            axios
                .post('http://localhost:5000/api/hub-tutor/class-report', {

                    classDate: classDate,
                    startTime: startParams,
                    endTime: endParams,
                    topicArray: selectedCourseTopic,
                    newTopic: newTopic,
                    newTopicComment: newTopicComment,
                    classProgress: classProgress,
                    location: staffLocation,
                    course: courseParams,
                    studentsArray: selectedCourseStudent

                })
                .then((response) => {
                    toastr.success(response.data.message);
                })
                .catch((error) => {
                    toastr.error(error.response.data.message);
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            toastr.warning('Please fill in all required fields.');
        }
    };


    useEffect(() => {
        let staffToken = JSON.parse(localStorage.getItem('StaffToken'));
        if (staffToken && staffToken.token) {
            setUser(true);
            setStaffLocation(staffToken.location)

        }
    }, []);


    // Fetch Course Students
    useEffect(() => {
        setLoading(true)
        async function fetchCourseStudents() {
            try {
                const response = await axios.get('http://localhost:5000/api/hub-tutor/students', {
                    headers: {
                        course: courseParams,
                        location: staffLocation
                    }
                });
                setCourseStudents(response.data.students);
                setLoading(false)
            } catch (error) {
                toastr.error('Error retrieving Courses');
            }
        }

        fetchCourseStudents();
    }, [reload, courseParams, staffLocation]);


    // Fetch course curriculum
    useEffect(() => {
        setLoading(true)
        async function fetchCourseCurriculum() {
            try {
                const response = await axios.get('http://localhost:5000/api/hub-tutor/course-curriculum', {
                    headers: {
                        course: courseParams
                    }
                });
                setCourse(response.data.content);

                setLoading(false)
            } catch (error) {
                toastr.error('Error retrieving Courses');
            }
        }

        fetchCourseCurriculum();
    }, [reload]);



    const Refresh = () => {
        if (reload === '') {
            setReload('reload')

        } else {
            setReload('')

        }
    }
    const uniqueMainTopics = [...new Set(courses.map((item) => item.mainTopic))];




    return (

        <div className="">
            {!user ? (
                <StaffLogin />
            ) : (

                <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full pb-12 ">

                    <div className="flex gap-2 justify-between">

                        <p className='text-[#F13178]  mt-6 font-extrabold' > {courseParams} Class Report</p>
                        <Link to='/staff-time-table' className='mt-6'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>


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
                                <p className=''>Refresh</p>

                                <LuRefreshCcw size={24} />
                            </div>
                        </button>

                    </div>

                    <div>
                        <form className='bg-slate-200 sm:h-full rounded-md pb-8' onSubmit={handleSubmit}>

                            <div className='sm:flex gap-4 mt-2 px-8'>

                                <div className='w-full'>

                                    <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'> Date <span className="text-red-500">*</span></p>
                                    <input
                                        type='date'
                                        className='rounded-md w-full h-[40px] outline-none pl-4'
                                        value={classDate}
                                        onChange={(event) => setClassDate(event.target.value)}
                                    />
                                </div>

                                <div className='w-full flex gap-2'>

                                    <div className="w-full">
                                        <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'> Start Time </p>
                                        <input
                                            readOnly
                                            className='rounded-md w-full h-[40px] outline-none pl-4'
                                            value={startParams}
                                        />
                                    </div>
                                    <div className="w-full">
                                        <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'> End Time </p>
                                        <input
                                            readOnly
                                            className='rounded-md w-full h-[40px] outline-none pl-4'
                                            value={endParams}
                                        />
                                    </div>

                                </div>

                            </div>
                            <div className='sm:flex gap-4 mt-2 px-8'>

                                <div className='w-full'>

                                    <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'>Topic</p>
                                    <select
                                        className='rounded-md w-full h-[40px] text-gray-600 pl-2 outline-none'
                                        value={topic}
                                        onChange={(event) => setTopic(event.target.value)}
                                    >
                                        <option value=''>Select Topic</option>
                                        <option value='New Topic'>Create New Topic</option>
                                        <option value='Curriculum'>From Curriculum</option>

                                    </select>

                                </div>
                                <div className='w-full'>

                                    <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'>General Student Progress</p>
                                    <select
                                        className='rounded-md w-full h-[40px] text-gray-600 pl-2 outline-none'
                                        value={classProgress}
                                        onChange={(event) => setClassProgress(event.target.value)}
                                    >
                                        <option value=''>Select Progress</option>
                                        <option value='Excellent'>Excellent</option>
                                        <option value='Very Good'>Very Good</option>
                                        <option value='Good'> Good</option>
                                        <option value='Satisfactory'>Satisfactory</option>
                                        <option value='Needs Improvement'>Needs Improvement</option>

                                    </select>

                                </div>


                            </div>

                            {topic == 'Curriculum' && (

                                <div className='gap-4 mt-8 px-4 text-xs border border-slate-100 mx-4 text-slate-600 h-[140px]'>
                                    <div className='overflow-x-auto mt-1'>
                                        <div className="h-[120px]">

                                            {uniqueMainTopics.map((mainTopic, mainIndex) => (
                                                <div key={mainIndex}>
                                                    <p className="flex text-center items-center justify-center font-bold">{mainTopic}</p>
                                                    {courses
                                                        .filter((item) => item.mainTopic === mainTopic)
                                                        .map((subContent, subIndex) => (
                                                            <div key={subIndex} className="grid grid-cols-2 sm:grid-cols-4">
                                                                {subContent.subTopic.split(', ').map((topic, topicIndex) => (
                                                                    <p key={topicIndex}>
                                                                        <input type="checkbox"
                                                                            value={topic}
                                                                            checked={selectedCourseTopic.includes(topic)}
                                                                            onChange={() => handleTopicCheckboxChange(topic)} />
                                                                        {topic}

                                                                    </p>

                                                                ))}
                                                            </div>
                                                        ))}
                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                </div>
                            )}


                            {topic == 'New Topic' && (
                                <div className="mt-4">
                                    <p className="flex text-center items-center justify-center text-slate-500">New Comment</p>

                                    <div className='sm:flex gap-4 mt-2 sm:mt-2 px-2 border border-slate-100 mx-8'>
                                        <div className='w-full'>

                                            <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'> New Topic <span className="text-red-500">*</span></p>
                                            <input
                                                type='text'
                                                className='rounded-md w-full h-[40px] outline-none pl-4'
                                                value={newTopic}
                                                onChange={(event) => setNewTopic(event.target.value)}
                                            />
                                        </div>
                                        <div className='w-full'>

                                            <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'>Comment <span className="text-red-500">*</span></p>
                                            <textarea
                                                placeholder='Reason for the new Topic'
                                                className='rounded-md w-full h-[40px] outline-none pl-4'
                                                value={newTopicComment}
                                                onChange={(event) => setNewTopicComment(event.target.value)}
                                            />

                                        </div>
                                    </div>
                                </div>
                            )}




                            <div className='grid'>


                                <div className='gap-4 mt-2 px-8'>

                                    <div className='text-gray-600 mt-2'>
                                        <label className='w-full text-sm font-bold'>Select Student Attendance:</label>
                                        <div className="grid grid-cols-3">
                                            {courseStudents.map((student, index) => (
                                                <div key={index} className="flex items-center">
                                                    <input
                                                        type='checkbox'
                                                        value={student.student}
                                                        checked={selectedCourseStudent.includes(`${student.firstName} ${student.lastName}`)}
                                                        onChange={() => handleStudentCheckboxChange(`${student.firstName} ${student.lastName}`)}
                                                    />
                                                    <label htmlFor={`course-${index}`} className="text-xs pl-2">{student.firstName} {student.lastName}</label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>



                                </div>
                                <div className='flex pt-5'>


                                </div>
                            </div>



                            <div className='flex gap-8 justify-center px-8'>

                                <button
                                    className=' bg-[#F13178] px-4 py-1  text-white   rounded-md  mt-6  flex items-center text-center justify-center font-bold'
                                    type='submit'
                                >
                                    Save
                                </button>
                            </div>





                        </form>
                    </div>









                </div>


            )}


        </div>

    )

}

export default NewReport