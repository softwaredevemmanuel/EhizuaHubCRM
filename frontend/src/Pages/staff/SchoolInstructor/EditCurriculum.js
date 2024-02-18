import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";
import { useParams } from 'react-router-dom';
import StaffLogin from "../StaffLogin";
import toastr from 'toastr';
import ReactLoading from "react-loading";
import { FaMinusCircle } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";




const EditCurriculum = () => {
    const [user, setUser] = useState(false)
    const [content, setContent] = useState([]);
    const { course: courseParam } = useParams();
    const { topic: topicParam } = useParams();
    const [loading, setLoading] = useState(false); // New state for loading indicator
    const tutorCourse = courseParam.trim()
    const [mainTopic, setMainTopic] = useState('');
    const [subTopic, setSubTopic] = useState('');
    const [id, setId] = useState('');
    const [reload, setReload] = useState('');
    const [code, setCode] = useState('');
    const [courseCode, setCourseCode] = useState([]);

    const subTopicArray = subTopic.split(', ')

    const [inputs, setInputs] = useState(['']);

    const handleAddInput = () => {
        setInputs([...inputs, '']); // Add a new empty input field to the inputs array
    };

    const handleRemoveInput = (index) => {
        const newInputs = [...inputs];
        newInputs.splice(index, 1); // Remove the input field at the specified index
        setInputs(newInputs);
    };

    const handleChange = (index, value) => {
        const newInputs = [...inputs];
        newInputs[index] = value;
        setInputs(newInputs);
    };

    const contentCurriculum = content.find((item) => item.mainTopic == topicParam);


    useEffect(() => {
        let staffToken = JSON.parse(localStorage.getItem('StaffToken'));
        if (staffToken && staffToken.token) {
            setUser(true);

        }
    }, []);

    useEffect(() => {
        if (contentCurriculum) {
            setMainTopic(contentCurriculum.mainTopic || '');
            setSubTopic(contentCurriculum.subTopic);
            setId(contentCurriculum.id);
            setInputs(subTopicArray || ['']);
            setCode(contentCurriculum.courseCode || '');

        }
    }, [contentCurriculum]);


    useEffect(() => {
        async function fetchCurriculum() {
            try {
                setLoading(true)
                const response = await axios.get('http://localhost:5000/api/school-tutor/course-curriculum', {
                    headers: {
                        course: tutorCourse
                    },
                });

                setContent(response.data.content);
                setLoading(false)


            } catch (error) {
                toastr.error('Error retrieving content');
            }
        }


        fetchCurriculum();
    }, [courseParam, reload]);

    useEffect(() => {
        async function fetchCourseCode() {
                try {

                    const response = await axios.get('http://localhost:5000/api/school-tutor/school-courses', {
                        headers: {
                            course: tutorCourse,
                        },
                    });

                    const courseCodeArray = response.data.message[0].courseCode.split(', ').map(code => code.trim());
                    setCourseCode(courseCodeArray);

                } catch (error) {
                    toastr.error('Error retrieving Course Code');
                }
        }

        fetchCourseCode();
    }, [tutorCourse]);


    const UpdateCurriculum = () => {
        if (mainTopic && inputs) {
            setLoading(true); // Start loading indicator

            axios.put(`http://localhost:5000/api/school-tutor/update-curriculum/${id}`, {
                course: tutorCourse,
                mainTopic: mainTopic,
                subTopicArray: inputs,
                courseCode: code,

            })
                .then(response => {
                    toastr.success(response.data.message);
                })
                .catch(error => {
                    toastr.error(error.response.data.message);
                })
                .finally(() => {
                    setLoading(false); // Stop loading indicator

                });
        } else {
            toastr.warning('Please fill in all required fields.');
        }
    };


    const handleSubmit = event => {
        event.preventDefault();
        UpdateCurriculum();
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
                <StaffLogin />
            ) : (
                <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full pb-8">
                    <div className='flex justify-between '>
                        <p className='text-[#F13178] text-sm mt-8 font-extrabold' >Edit Curriculum</p>
                        <Link to={`/si-course-curriculum/${tutorCourse}`} className='mt-6'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>

                    </div>
                    <div className='border-[#F13178] border-b'></div>

                    {loading && (
                        <div className=" z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                            <ReactLoading type={"bars"} color={"#ffffff"} height={100} width={100} />
                        </div>
                    )}
                    <div className="flex gap-2 justify-end">
                        <button onClick={Refresh}>
                            <div className='flex gap-2 text-gray-500 text-sm justify-center'>

                                <p className='hidden sm:block'>Refresh</p>
                                <LuRefreshCcw size={20} />

                            </div>
                        </button>

                    </div>

                    <form className='bg-slate-200 sm:h-fit rounded-md pb-8' onSubmit={handleSubmit}>
                        <div className='sm:flex gap-4 mt-6 px-8 text-[#134574]'>
                            <div className='w-full'>

                                <p className='text-sm w-[180px] pt-2 font-bold'>Course</p>
                                <input
                                    type='text'
                                    readOnly value={tutorCourse}
                                    className='rounded-md w-full h-[40px] outline-none pl-4 bg-slate-300 text-slate-500 cursor-not-allowed'
                                />
                            </div>

                            <div className='w-full'>

                                <p className='text-sm font-bold w-[210px] pt-4 sm:pt-2'> Main-Topic</p>
                                <input
                                    type='text'
                                    placeholder='e.g Introduction to HTML'
                                    className='rounded-md w-full h-[40px] outline-none pl-4'
                                    value={mainTopic}
                                    onChange={(event) => setMainTopic(event.target.value)}
                                />
                            </div>
                        </div>


                        <div className='gap-4 sm:mt-2 px-8 text-[#134574]'>
                            <div className='flex gap-8 justify-between mt-4'>

                                <p className='text-sm font-bold w-[80px] pt-4 sm:pt-2'>Sub-Topic</p>

                                <Link onClick={handleAddInput} className='flex gap-2 justify-center items-center'>
                                    <p className='text-xs'>New Sub Topic</p>
                                    <FaPlusCircle className='text-green-600' />
                                </Link>
                            </div>

                        </div>
                        <div className='gap-4 px-8 text-[#134574]'>
                            {inputs.map((input, index) => (
                                <div key={index} className=" flex input-container gap-4">
                                    <input
                                        type='text'
                                        className='outline-none w-full rounded-md h-[40px] pl-4 pt-1 mt-2'
                                        value={input}
                                        onChange={(e) => handleChange(index, e.target.value)}
                                        placeholder={`Sub-Topic ${index + 1}`} // Placeholder text for input field
                                    />

                                    {index > 0 && (
                                        <div className='flex justify-center items-center'>
                                            <Link onClick={() => handleRemoveInput(index)}>
                                                <FaMinusCircle className='text-red-600' /> {/* Minus icon for removing input field */}
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            ))}

                        </div>
                        <div className='px-8 mt-2 text-[#134574]'>

                            <p className='text-sm font-bold w-[180px] pt-4 sm:pt-2'>Assign Course Code</p>
                            <select
                                value={code}
                                onChange={(event) => setCode(event.target.value)}
                                className='outline-none rounded-md h-[40px] pl-4 pt-1 mt-2 w-[180px] text-slate-500'

                            >
                                <option value=''>Select a sub Topic</option>
                                {courseCode.map((cCode, index) => (
                                    <option key={index} value={cCode}>
                                        {cCode}
                                    </option>
                                ))}
                            </select>
                        </div>



                        <div className='flex gap-8 justify-center px-8'>

                            <button className=' bg-[#F13178] px-2 w-full sm:w-[120px] text-white md:text-[15px]  rounded-lg  mt-6 text-[11px] flex items-center text-center justify-center gap-4 font-bold h-[40px]'>
                                Update
                            </button>
                        </div>





                    </form>






                    <div className="grid grid-cols-2 lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-white max-w-[980px] w-fit pb-44">

                    </div>



                </div>


            )}
        </div>
    )
}

export default EditCurriculum