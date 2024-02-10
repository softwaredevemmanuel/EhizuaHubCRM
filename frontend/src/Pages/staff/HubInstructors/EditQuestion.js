import React, { useState, useEffect } from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom'
import StaffLogin from "../StaffLogin";
import toastr from 'toastr';
import ReactLoading from "react-loading";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditQuestion = () => {
    const [user, setUser] = useState(false)
    const [question, setQuestion] = useState('');
    const [loading, setLoading] = useState(false); // New state for loading indicator
    const [ans1, setAns1] = useState('');
    const [ans2, setAns2] = useState('');
    const [ans3, setAns3] = useState('');
    const [ans4, setAns4] = useState('');
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [correctAns, setCorrectAns] = useState('');

    const [mainTopic, setMainTopic] = useState('');
    const [subTopic, setSubTopic] = useState('');
    const [selectedQuestion, setSelectedQuestion] = useState([]);
    const { course: courseParams } = useParams()
    const { topic: topicParams } = useParams()
    const { question: questionParams } = useParams()

    const tutorCourse = courseParams.trim()

const content = selectedQuestion[0]
    useEffect(() => {
        let staffToken = JSON.parse(localStorage.getItem('StaffToken'));
        if (staffToken && staffToken.token) {
            setUser(true);

        }
    }, []);

    useEffect(() => {
        if (content) {
            setMainTopic(content.mainTopic || '');
            setSubTopic(content.subTopic || '');
            setQuestion(content.question || '');
            setAns1(content.ans1 || '');
            setAns2(content.ans2 || '');
            setAns3(content.ans3 || '');
            setAns4(content.ans4 || '');
            setId(content.id || '');
            setCorrectAns(content.correctAns || '');

        }
    }, [selectedQuestion]);


    useEffect(() => {
        async function fetchQuestion() {
            try {
                const response = await axios.get('http://localhost:5000/api/hub-tutor/selected-question', {
                    headers: {
                        course: tutorCourse,
                        question: questionParams,
                        topic: topicParams,
                    },
                });
                setSelectedQuestion(response.data.question)

            } catch (error) {
                toastr.error('Error fetching curriculum data');
            }
        }

        fetchQuestion();

    }, [courseParams]);





    // ....................... Update Question API ...................
    const updateQuestion = () => {
        if (question && mainTopic && subTopic) {
            setLoading(true); // Start loading indicator

            axios.put(`http://localhost:5000/api/hub-tutor/update-question/${id}`, {
                email: email,
                course: tutorCourse,
                mainTopic: mainTopic,
                subTopic: subTopic,
                question: question,
                ans1: ans1,
                ans2: ans2,
                ans3: ans3,
                ans4: ans4,
                correctAns: correctAns,


            })
                .then(response => {
                    toastr.success(response.data.message);
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
        updateQuestion();
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
                        <p className='text-[#F13178] text-[20px] mt-2 font-extrabold' >{courseParams}</p>

                        <Link to={`/hi-question-list/${tutorCourse}`} className='mt-2'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>

                    </div>

                    <div className='border-[#F13178] border-b '></div>

                    {loading && (
                        <div className=" z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                            <ReactLoading type={"bars"} color={"#ffffff"} height={100} width={100} />
                        </div>
                    )}



                    <form className='bg-slate-200 sm:h-fit rounded-md pb-8 ' onSubmit={handleSubmit}>

                        <div className='sm:flex gap-4 mt-6 px-8 text-[#134574]'>
                            <p className='text-sm w-[240px] pt-2 font-bold'>Main-Topic</p>
                            <input
                                className='rounded-md w-full h-[40px] outline-none pl-4'
                                value={mainTopic}
                                onChange={(event) => setMainTopic(event.target.value)}
                                readOnly
                            />
                               
                            <p className='text-sm font-bold w-[210px] pt-4 sm:pt-2'> Sub-Topic</p>
                            <input
                                className='rounded-md w-full h-[40px] outline-none pl-4'
                                value={subTopic}
                                onChange={(event) => setSubTopic(event.target.value)}
                                readOnly
                            />
                            
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

export default EditQuestion