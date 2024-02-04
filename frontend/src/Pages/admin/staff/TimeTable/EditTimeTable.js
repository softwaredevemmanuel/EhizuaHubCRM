import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { LuRefreshCcw } from "react-icons/lu";
import axios from 'axios';
import toastr from 'toastr';
import ReactLoading from "react-loading";
import AdminLogin from "../../AdminLogin";

const EditTimeTable = () => {
    const [user, setUser] = useState(false)
    const [selectedMondayHubCourses, setSelectedMondayHubCourses] = useState([]);
    const [selectedTuesdayHubCourses, setSelectedTuesdayHubCourses] = useState([]);
    const [selectedWednesdayHubCourses, setSelectedWednesdayHubCourses] = useState([]);
    const [selectedThursdayHubCourses, setSelectedThursdayHubCourses] = useState([]);
    const [selectedFridayHubCourses, setSelectedFridayHubCourses] = useState([]);
    const [selectedSaturdayHubCourses, setSelectedSaturdayHubCourses] = useState([]);
    const [courseBreak, setCourseBreak] = useState('');
    const [allHubCourses, setHubAllCourse] = useState([]);
    const [timeTableList, setTimeTableList] = useState([]);
    const [selectedStartTime, setSelectedStartTime] = useState('');
    const [selectedEndTime, setSelectedEndTime] = useState('');
    const [loading, setLoading] = useState(false);
    const [reload, setReload] = useState('');
  


    let adminUser = JSON.parse(localStorage.getItem('User'));

    // Get the content parameter from the URL using useParams
    const { _id: idParam } = useParams();
    const { location: locationParam } = useParams();
    const contentItem = timeTableList.find((item) => item._id == idParam);


    useEffect(() => {
        let staffToken = JSON.parse(localStorage.getItem('StaffToken'));
        if (staffToken && staffToken.token) {
            setUser(true);

        }
    }, []);

    useEffect(() => {
        if (contentItem) {
            setSelectedStartTime(contentItem.startTime)
            setSelectedEndTime(contentItem.endTime || '');
            setSelectedMondayHubCourses(contentItem.monday.split(', ') || '');
            setSelectedTuesdayHubCourses(contentItem.tuesday.split(', ') || '');
            setSelectedWednesdayHubCourses(contentItem.wednesday.split(', ') || '');
            setSelectedThursdayHubCourses(contentItem.thursday.split(', ') || '');
            setSelectedFridayHubCourses(contentItem.friday.split(', ') || '');
            setSelectedSaturdayHubCourses(contentItem.saturday.split(', ') || '');

        }
    }, [contentItem]);



    // Fetch Hub Courses
    useEffect(() => {
        setLoading(true)
        async function fetchHubCourses() {
            try {
                const response = await axios.get('http://localhost:5000/api/auth/upskill_courses', {
                    headers: {
                        location: locationParam,
                        
                    }
                });
                setHubAllCourse(response.data.message);
                setLoading(false)
            } catch (error) {
                toastr.error('Error retrieving Courses');
            }
        }

        fetchHubCourses();
    }, [reload]);

    // Fetch Hub Time Table
    useEffect(() => {
        setLoading(true)
        async function fetchTimeTable() {
            try {
                const response = await axios.get('http://localhost:5000/api/auth/time-table', {
                    headers: {
                        location: locationParam
                    }
                });
                setTimeTableList(response.data.message);
                setLoading(false)
            } catch (error) {
                toastr.error('Error retrieving Courses');
            }
        }

        fetchTimeTable();
    }, [reload]);


    const handleMondayCourses = (course) => {
        if (selectedMondayHubCourses.includes(course)) {
            setSelectedMondayHubCourses(selectedMondayHubCourses.filter((selectedMondayHubCourse) => selectedMondayHubCourse !== course));

        } else {
            setSelectedMondayHubCourses([...selectedMondayHubCourses, course]);

        }
    };
    const handleTuesdayCourses = (course) => {
        if (selectedTuesdayHubCourses.includes(course)) {
            setSelectedTuesdayHubCourses(selectedTuesdayHubCourses.filter((selectedTuesdayHubCourse) => selectedTuesdayHubCourse !== course));

        } else {
            setSelectedTuesdayHubCourses([...selectedTuesdayHubCourses, course]);
        }
    };
    const handleWednesdayCourses = (course) => {
        if (selectedWednesdayHubCourses.includes(course)) {
            setSelectedWednesdayHubCourses(selectedWednesdayHubCourses.filter((selectedWednesdayHubCourse) => selectedWednesdayHubCourse !== course));

        } else {
            setSelectedWednesdayHubCourses([...selectedWednesdayHubCourses, course]);
        }
    };
    const handleThursdayCourses = (course) => {
        if (selectedThursdayHubCourses.includes(course)) {
            setSelectedThursdayHubCourses(selectedThursdayHubCourses.filter((selectedThursdayHubCourse) => selectedThursdayHubCourse !== course));

        } else {
            setSelectedThursdayHubCourses([...selectedThursdayHubCourses, course]);
        }
    };
    const handleFridayCourses = (course) => {
        if (selectedFridayHubCourses.includes(course)) {
            setSelectedFridayHubCourses(selectedFridayHubCourses.filter((selectedFridayHubCourse) => selectedFridayHubCourse !== course));

        } else {
            setSelectedFridayHubCourses([...selectedFridayHubCourses, course]);
        }
    };
    const handleSaturdayCourses = (course) => {
        if (selectedSaturdayHubCourses.includes(course)) {
            setSelectedSaturdayHubCourses(selectedSaturdayHubCourses.filter((selectedSaturdayHubCourse) => selectedSaturdayHubCourse !== course));

        } else {
            setSelectedSaturdayHubCourses([...selectedSaturdayHubCourses, course]);
        }
    };




    const updateTimeTable = () => {
        let adminEmail = JSON.parse(localStorage.getItem('User'));
        setLoading(true); 
        axios.put(`http://localhost:5000/api/auth/time-table/${idParam}`, {
            adminEmail: adminEmail.email,
            startTime: selectedStartTime,
            endTime: selectedEndTime,
            mondayArray: selectedMondayHubCourses,
            tuesdayArray: selectedTuesdayHubCourses,
            wednesdayArray: selectedWednesdayHubCourses,
            thursdayArray: selectedThursdayHubCourses,
            fridayArray: selectedFridayHubCourses,
            saturdayArray: selectedSaturdayHubCourses,
            location: locationParam,
            courseBreak: courseBreak


        })
            .then(response => {
                toastr.success(response.data.message);

                if (reload == 'reload') {
                    setReload('')

                } else {
                    setReload('reload')
                }
                setLoading(false); // Stop loading indicator

            })
            .catch(error => {
                toastr.error(error.response.data.message);
                setLoading(false); // Stop loading indicator

            })

    };

    const handleSubmit = (event) => {
        event.preventDefault();
        updateTimeTable();
    };

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
                <AdminLogin />
            ) : (

                <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full pb-12">
                    <div className='flex justify-between '>
                        <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Edit Time Table</p>

                    </div>

                    <div className='border-[#F13178] border-b '></div>

                    {loading && (
                        <div className=" z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                            <ReactLoading type={"bars"} color={"#ffffff"} height={100} width={100} />
                        </div>
                    )}
                    <div className="flex gap-2 justify-end">
                        <button onClick={Refresh}>
                            <div className='flex gap-2 text-gray-500'>

                                <LuRefreshCcw size={24} />
                                <p className='hidden sm:block'>Refresh</p>
                            </div>
                        </button>

                    </div>



                    <form onSubmit={handleSubmit}>
                        <div className="border border-slate-100 mt-4 px-2">
                            <div className="flex justify-between">
                                <div className="flex gap-4 ">
                                    <div>
                                        <p>Start</p>

                                        <input
                                            type="time"
                                            className="px-4 bg-slate-100 rounded-md"
                                            value={selectedStartTime}
                                            onChange={(event) => setSelectedStartTime(event.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <p>End</p>
                                        <input
                                            type="time"
                                            className="px-4 bg-slate-100 rounded-md"
                                            value={selectedEndTime}
                                            onChange={(event) => setSelectedEndTime(event.target.value)}
                                        />
                                    </div>
                                </div>


                            </div>

                            <div>
                                <div className="border border-slate-500 mt-4">
                                    <p className="flex items-center text-center justify-center font-bold text-xl text-[#134574]">Monday</p>
                                    <div className='text-gray-600 mt-2'>
                                        <div className="grid grid-cols-4 border border-slate-200">
                                            {allHubCourses.map((course, index) => (
                                                <div key={index} className="border-r border-slate-500 pl-2">

                                                    <input
                                                        type='checkbox'
                                                        id={`hubCourse-${index}`}
                                                        value={course.course}
                                                        checked={selectedMondayHubCourses.includes(course.course)}
                                                        onChange={() => handleMondayCourses(course.course)}
                                                        className="pr-4"
                                                    />
                                                    <label htmlFor={`course-${index}`} className="pl-1">{course.course}</label>
                                                </div>
                                            ))}
                                            <div className="border-r border-slate-500 pl-2 flex">
                                                <input
                                                    type="checkbox"
                                                    value='Break'
                                                    onChange={() => handleMondayCourses("Break")}
                                                />
                                                <label className="pl-1">Break</label>


                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="border border-slate-500 mt-4">
                                    <p className="flex items-center text-center justify-center font-bold text-xl text-[#134574]">Tuesday</p>
                                    <div className='text-gray-600 mt-2'>
                                        <div className="grid grid-cols-4 border border-slate-200">
                                            {allHubCourses.map((course, index) => (
                                                <div key={index} className="border-r border-slate-500 pl-2">

                                                    <input
                                                        type='checkbox'
                                                        id={`hubCourse-${index}`}
                                                        value={course.course}
                                                        checked={selectedTuesdayHubCourses.includes(course.course)}
                                                        onChange={() => handleTuesdayCourses(course.course)}
                                                        className="pr-4"
                                                    />
                                                    <label htmlFor={`course-${index}`} className="pl-1">{course.course}</label>
                                                </div>
                                            ))}
                                            <div className="border-r border-slate-500 pl-2 flex">
                                                <input
                                                    type="checkbox"
                                                    value='Break'
                                                    onChange={() => handleTuesdayCourses("Break")}
                                                />
                                                <label className="pl-1">Break</label>


                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="border border-slate-500 mt-4">
                                    <p className="flex items-center text-center justify-center font-bold text-xl text-[#134574]">Wednesday</p>
                                    <div className='text-gray-600 mt-2'>
                                        <div className="grid grid-cols-4 border border-slate-200">
                                            {allHubCourses.map((course, index) => (
                                                <div key={index} className="border-r border-slate-500 pl-2">

                                                    <input
                                                        type='checkbox'
                                                        id={`hubCourse-${index}`}
                                                        value={course.course}
                                                        checked={selectedWednesdayHubCourses.includes(course.course)}
                                                        onChange={() => handleWednesdayCourses(course.course)}
                                                        className="pr-4"
                                                    />
                                                    <label htmlFor={`course-${index}`} className="pl-1">{course.course}</label>
                                                </div>
                                            ))}
                                            <div className="border-r border-slate-500 pl-2 flex">
                                                <input
                                                    type="checkbox"
                                                    value='Break'
                                                    onChange={() => handleWednesdayCourses("Break")}
                                                />
                                                <label className="pl-1">Break</label>


                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="border border-slate-500 mt-4">
                                    <p className="flex items-center text-center justify-center font-bold text-xl text-[#134574]">Thursday</p>
                                    <div className='text-gray-600 mt-2'>
                                        <div className="grid grid-cols-4 border border-slate-200">
                                            {allHubCourses.map((course, index) => (
                                                <div key={index} className="border-r border-slate-500 pl-2">

                                                    <input
                                                        type='checkbox'
                                                        id={`hubCourse-${index}`}
                                                        value={course.course}
                                                        checked={selectedThursdayHubCourses.includes(course.course)}
                                                        onChange={() => handleThursdayCourses(course.course)}
                                                        className="pr-4"
                                                    />
                                                    <label htmlFor={`course-${index}`} className="pl-1">{course.course}</label>
                                                </div>
                                            ))}
                                            <div className="border-r border-slate-500 pl-2 flex">
                                                <input
                                                    type="checkbox"
                                                    value='Break'
                                                    onChange={() => handleThursdayCourses("Break")}
                                                />
                                                <label className="pl-1">Break</label>


                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="border border-slate-500 mt-4">
                                    <p className="flex items-center text-center justify-center font-bold text-xl text-[#134574]">Friday</p>
                                    <div className='text-gray-600 mt-2'>
                                        <div className="grid grid-cols-4 border border-slate-200">
                                            {allHubCourses.map((course, index) => (
                                                <div key={index} className="border-r border-slate-500 pl-2">

                                                    <input
                                                        type='checkbox'
                                                        id={`hubCourse-${index}`}
                                                        value={course.course}
                                                        checked={selectedFridayHubCourses.includes(course.course)}
                                                        onChange={() => handleFridayCourses(course.course)}
                                                        className="pr-4"
                                                    />
                                                    <label htmlFor={`course-${index}`} className="pl-1">{course.course}</label>
                                                </div>
                                            ))}
                                            <div className="border-r border-slate-500 pl-2 flex">
                                                <input
                                                    type="checkbox"
                                                    value='Break'
                                                    onChange={() => handleFridayCourses("Break")}
                                                />
                                                <label className="pl-1">Break</label>


                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="border border-slate-500 mt-4">
                                    <p className="flex items-center text-center justify-center font-bold text-xl text-[#134574]">Saturday</p>
                                    <div className='text-gray-600 mt-2'>
                                        <div className="grid grid-cols-4 border border-slate-200">
                                            {allHubCourses.map((course, index) => (
                                                <div key={index} className="border-r border-slate-500 pl-2">

                                                    <input
                                                        type='checkbox'
                                                        id={`hubCourse-${index}`}
                                                        value={course.course}
                                                        checked={selectedSaturdayHubCourses.includes(course.course)}
                                                        onChange={() => handleSaturdayCourses(course.course)}
                                                        className="pr-4"
                                                    />
                                                    <label htmlFor={`course-${index}`} className="pl-1">{course.course}</label>
                                                </div>
                                            ))}
                                            <div className="border-r border-slate-500 pl-2 flex">
                                                <input
                                                    type="checkbox"
                                                    value='Break'
                                                    onChange={() => handleSaturdayCourses("Break")}
                                                />
                                                <label className="pl-1">Break</label>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="flex justify-center pb-8">
                                <button
                                    className=" bg-[#F13178] mt-8 px-2 text-center items-center rounded-md font-bold flex justify-center h-[30px]">
                                    <div className="flex items-center justify-center">
                                        <p className="text-white pl-2">Update</p>
                                    </div>
                                </button>

                            </div>



                        </div>
                    </form>




                </div>


            )}


        </div>

    )

}

export default EditTimeTable