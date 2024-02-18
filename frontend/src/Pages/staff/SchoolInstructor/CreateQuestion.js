import React, { useState, useEffect } from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom'
import StaffLogin from "../StaffLogin";
import toastr from 'toastr';
import ReactLoading from "react-loading";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CreateQuestion = () => {
    const [user, setUser] = useState(false)
    const [selectedOption, setSelectedOption] = useState('');
    const [question, setQuestion] = useState('');
    const [loading, setLoading] = useState(false); // New state for loading indicator
    const [ans1, setAns1] = useState('');
    const [ans2, setAns2] = useState('');
    const [ans3, setAns3] = useState('');
    const [ans4, setAns4] = useState('');
    const [email, setEmail] = useState('');
    const [correctAns, setCorrectAns] = useState('');
    const [main_topic, set_MainTopic] = useState('');
    const [sub_topic, set_SubTopic] = useState('');
    const [mainTopic, setMainTopic] = useState([]);
    const [subTopic, setSubTopic] = useState([]);
    const { course: courseParams } = useParams()

    const tutorCourse = courseParams.trim()


    useEffect(() => {
        let staffToken = JSON.parse(localStorage.getItem('StaffToken'));
        if (staffToken && staffToken.token) {
            setUser(true);

        }
    }, []);

    useEffect(() => {
        async function fetchMainTopic() {

            try {
                const response = await axios.get('http://localhost:5000/api/school-tutor/maintopic', {
                    headers: {
                        course: tutorCourse,
                    },
                });
                setMainTopic(response.data.message)

            } catch (error) {
                toastr.error('Error fetching curriculum data');
            }
        }

        fetchMainTopic();

    }, [courseParams]);



    useEffect(() => {
        async function fetchSubTopic() {
            try {
                if (main_topic !== '') { // Check if a topic is selected
                    const response = await axios.get('http://localhost:5000/api/school-tutor/subtopic', {
                        headers: {
                            course: tutorCourse,
                            main_topic: main_topic
                        },
                    });

                    setSubTopic(response.data.subTopics);
                }
            } catch (error) {
                toastr.error('Error fetching curriculum data');
            }
        }

        fetchSubTopic();
    }, [main_topic]); // Include 'topic' in the dependency array



    // ....................... Create Question API ...................
    const createQuestion = () => {
        if (question && main_topic && sub_topic) {
            setLoading(true); // Start loading indicator

            axios.post("http://localhost:5000/api/school-tutor/create-questions", {
                email: email,
                course: tutorCourse,
                mainTopic: main_topic,
                subTopic: sub_topic,
                question: question,
                ans1: ans1,
                ans2: ans2,
                ans3: ans3,
                ans4: ans4,
                correctAns: correctAns,


            })
                .then(response => {
                    toastr.success(response.data.message);

                    // Clear input fields after successful submission
                    setQuestion('');
                    setAns1('');
                    setAns2('');
                    setAns3('');
                    setAns4('');
                    setCorrectAns('');
                })
                .catch(error => {
                    toastr.error(error.response.data.error);


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
        createQuestion();
    };

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };



    return (
        <div className="">
            {!user ? (
                <StaffLogin />
            ) : (
                <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full">
                    <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
                        <div className='flex justify-between '>
                        </div>
                    </div>

                    <div className='flex justify-between '>
                        <p className='text-[#F13178] text-sm mt-4 font-extrabold' >{courseParams}</p>

                        <Link to='/school-instructor' className='mt-2'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>

                    </div>

                    <div className='border-[#F13178] border-b '></div>

                    {loading && (
                        <div className=" z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                            <ReactLoading type={"bars"} color={"#ffffff"} height={100} width={100} />
                        </div>
                    )}

                    <div className='flex gap-4'>
                        <p className='text-[#134574] font-bold'>Question Type</p>

                        <select
                            value={selectedOption}
                            onChange={handleSelectChange}
                            className='rounded-lg h-[30px] w-[200px] text-slate-500 outline-none bg-slate-200 px-4'>
                            <option value=''>Objective</option>
                            <option value='theory'>Theory</option>
                        </select>

                    </div>

                    {!selectedOption ? (
                        <form className='bg-slate-200 sm:h-fit rounded-md pb-8 ' onSubmit={handleSubmit}>

                            <div className='sm:flex gap-4 mt-6 px-8 text-[#134574]'>
                                <p className='text-sm w-[240px] pt-2 font-bold'>Main-Topic</p>
                                <select
                                    className='rounded-md w-full h-[40px] outline-none pl-4'
                                    value={main_topic}
                                    onChange={(event) => set_MainTopic(event.target.value)}
                                >
                                    <option value=''>Select the Main Topic</option>
                                    {mainTopic.map((mainTopic, index) => (
                                        <option key={index} value={mainTopic.mainTopic}>
                                            {mainTopic.mainTopic}
                                        </option>
                                    ))}
                                </select>
                                <p className='text-sm font-bold w-[210px] pt-4 sm:pt-2'> Sub-Topic</p>
                                <select
                                    className='rounded-md w-full h-[40px] outline-none pl-4'
                                    value={sub_topic}
                                    onChange={(event) => set_SubTopic(event.target.value)}
                                >
                                    <option value=''>Select a sub Topic</option>
                                    {subTopic.map((subTopic, index) => (
                                        <option key={index} value={subTopic}>  {/* Set the value attribute */}
                                            {subTopic}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className='flex items-center justify-center'>
                                <p className='font-bold w-fit pt-4 sm:pt-2 text-[#134574] mt-6  text-lg'>Question</p>

                            </div>

                            <div className='sm:flex gap-4 mt-2 px-8 text-[#134574]'>
                                <textarea
                                    placeholder='Enter Question'
                                    className='rounded-md w-full h-[40px] outline-none pl-4'
                                    value={question}
                                    onChange={(event) => setQuestion(event.target.value)} />
                            </div>
                            <div className='sm:flex gap-4 mt-6 px-8 text-[#134574]'>
                                <p className='text-sm w-[180px] pt-2 font-bold'>Option A</p>
                                <input
                                    type='text'
                                    className='rounded-md w-full h-[40px] outline-none pl-4'
                                    value={ans1}
                                    onChange={(event) => setAns1(event.target.value)}
                                />
                                <p className='text-sm font-bold w-[180px] pt-4 sm:pt-2'>Option B</p>
                                <input
                                    type='text'
                                    className='rounded-md w-full h-[40px] outline-none pl-4'
                                    value={ans2}
                                    onChange={(event) => setAns2(event.target.value)}
                                />
                            </div>

                            <div className='sm:flex gap-4 mt-6 px-8 text-[#134574]'>
                                <p className='text-sm w-[180px] pt-2 font-bold'>Option C</p>
                                <input
                                    type='text'
                                    className='rounded-md w-full h-[40px] outline-none pl-4'
                                    value={ans3}
                                    onChange={(event) => setAns3(event.target.value)} />
                                <p className='text-sm font-bold w-[180px] pt-4 sm:pt-2'>Option D</p>
                                <input
                                    type='text'
                                    className='rounded-md w-full h-[40px] outline-none pl-4'
                                    value={ans4}
                                    onChange={(event) => setAns4(event.target.value)}
                                />
                            </div>
                            <div className='flex items-center justify-center'>
                                <p className='font-bold w-fit pt-4 sm:pt-2 text-[#134574] mt-6  text-lg'>Correct Answer</p>

                            </div>
                            <div className='sm:flex gap-4 mt-2 px-8 text-[#134574]'>
                                <select
                                    className='rounded-md w-full h-[40px] outline-none pl-4'
                                    value={correctAns}
                                    onChange={(event) => setCorrectAns(event.target.value)}
                                >
                                    <option value='' disabled>Select correct answer</option>
                                    <option value={ans1}>Option A</option>
                                    <option value={ans2}>Option B</option>
                                    <option value={ans3}>Option C</option>
                                    <option value={ans4}>Option D</option>
                                </select>
                            </div>


                            <div className='flex gap-8 justify-center px-8'>

                                <button className=' bg-[#F13178] px-2 w-full sm:w-[120px] text-white md:text-[15px]  rounded-lg  mt-6 text-[11px] flex items-center text-center justify-center gap-4 font-bold h-[40px]'>
                                    Create
                                </button>
                            </div>





                        </form>
                    ) : (
                        <form className='bg-slate-200 sm:h-fit rounded-md pb-8 ' onSubmit={handleSubmit}>

                            <div className='sm:flex gap-4 mt-6 px-8 text-[#134574]'>
                                <p className='text-sm w-[240px] pt-2 font-bold'>Main-Topic</p>
                                <select
                                    className='rounded-md w-full h-[40px] outline-none pl-4'
                                    value={main_topic}
                                    onChange={(event) => set_MainTopic(event.target.value)}
                                >
                                    <option value=''>Select the Main Topic</option>
                                    {mainTopic.map((mainTopic, index) => (
                                        <option key={index} value={mainTopic.mainTopic}>
                                            {mainTopic.mainTopic}
                                        </option>
                                    ))}
                                </select>
                                <p className='text-sm font-bold w-[210px] pt-4 sm:pt-2'> Sub-Topic</p>
                                <select
                                    className='rounded-md w-full h-[40px] outline-none pl-4'
                                    value={sub_topic}
                                    onChange={(event) => set_SubTopic(event.target.value)}
                                >
                                    <option value=''>Select a sub Topic</option>
                                    {subTopic.map((subTopic, index) => (
                                        <option key={index} value={subTopic}>  {/* Set the value attribute */}
                                            {subTopic}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className='flex items-center justify-center'>
                                <p className='font-bold w-fit pt-4 sm:pt-2 text-[#134574] mt-6  text-lg'>Question</p>

                            </div>
                            <div className='sm:flex gap-4 mt-2 px-8 text-[#134574]'>
                                <textarea
                                    placeholder='Enter Question'
                                    className='rounded-md w-full h-[80px] outline-none pl-4 pt-2'
                                    value={question}
                                    onChange={(event) => setQuestion(event.target.value)}
                                />
                            </div>


                            <div className='flex gap-8 justify-center px-8'>

                                <button className=' bg-[#F13178] px-2 w-full sm:w-[120px] text-white md:text-[15px]  rounded-lg  mt-6 text-[11px] flex items-center text-center justify-center gap-4 font-bold h-[40px]'>
                                    Create
                                </button>
                            </div>





                        </form>
                    )}







                    <div className="grid grid-cols-2 lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-white max-w-[980px] w-fit pb-44">


                    </div>



                </div>
            )}


        </div>
    )
}

export default CreateQuestion