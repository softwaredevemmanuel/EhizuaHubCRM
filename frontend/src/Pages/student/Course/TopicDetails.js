import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import StudentLogin from '../StudentLogin';
import TopNav from '../TopNav';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import toastr from 'toastr';
import ReactLoading from "react-loading";

const TopicDetails = () => {
    const [user, setUser] = useState(false);
    const { course: courseParams } = useParams();
    const [content, setContent] = useState([]);
    const [loading, setLoading] = useState(true);
    const [course, setCourse] = useState('');
    const [question, setQuestions] = useState(false);
    const [showDetails, setShowDetails] = useState(true);
    const [score, setScore] = useState('');
    const [scoreSubTopic, setScoreSubTopic] = useState('');
    const [calcScore, setCalcScore] = useState('');
    const [numberOfQuestion, setNumberOfQuestion] = useState('');

    // Get the content parameter from the URL using useParams
    const { id: contentParam } = useParams();


    useEffect(() => {
        let studentToken = JSON.parse(localStorage.getItem('StudentToken'));

        // Check if staffToken exists and has the 'token' property
        if (studentToken && studentToken.token) {
            setUser(true);
        }
    }, []);

    useEffect(() => {
        setLoading(true)

        async function fetchCourseContent() {
            try {
                const response = await axios.get('http://localhost:5000/api/students/student-course-content', {
                    headers: {
                        courses: courseParams
                    },
                });
                setContent(response.data.content);
                setLoading(false);
                setCourse(courseParams)
            } catch (error) {
                toastr.error('Error retrieving content');
                setLoading(false);
            }
        }

        fetchCourseContent();

    }, [courseParams]);

    async function fetchScore() {
        setLoading(true)

        try {
            let localEmail = JSON.parse(localStorage.getItem('User'));
            const response = await axios.get('http://localhost:5000/api/students/student-score', {
                headers: {
                    course: courseParams,
                    email: localEmail.email,
                    subTopic: scoreSubTopic
                },
            });
            setScore(response.data.message);
            setLoading(false)

        } catch (error) {
            toastr.error('Error retrieving content');
            setLoading(false);
        }
    }

    const handleScore = event => {
        event.preventDefault();
        fetchScore();
    };

    const contentItem = content.find((item) => item.id == contentParam);



    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            if (contentItem) {
                try {

                    const response = await axios.get('http://localhost:5000/api/students/verify-questions', {
                        headers: {
                            courses: courseParams,
                            mainTopic: contentItem.mainTopic,
                            subTopic: contentItem.subTopic,
                        },
                    });
                    if ((response.data.content).length > 0) {
                        setQuestions(true);
                        setNumberOfQuestion((response.data.content).length)

                    }
                } catch (error) {
                    toastr.error('Error retrieving content');
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchData();
    }, [contentItem]);


       // Check Score
       const checkScore = async event => {
        let localEmail = JSON.parse(localStorage.getItem('User'));
   
        try {
            const response = await axios.get('http://localhost:5000/api/students/check_test_score', {
                headers: {
                    subtopic: calcScore,
                    course: courseParams,
                    email: localEmail.email,
                    totalQuestions: numberOfQuestion

                },

            });


            toastr.success(response.data.message);


        } catch (error) {
            console.error('Error sending questions:', error);
        }
    };

    const handleCalcScore = event => {
        event.preventDefault();
        checkScore();
    };

    return (
        <div className="overflow-y-scroll w-full h-screen hide-bar">
            {!user ? (
                <StudentLogin />
            ) : (
                <div className="relative z-0 w-full bg-white px-1 sm:px-5 flex flex-col gap-3">

                    <TopNav currentPageName = "Course Content" previousPageName="Course Topics" pageLink={`/${courseParams}/content-list`}/>
                    <p className='text-center sm:text-xl font-bold text-slate-600'>{courseParams}</p>
                    {contentItem && (
                        <div className='flex text-center items-center'>

                            <p className='sm:text-xl font-bold text-slate-600'>{contentItem.subTopic}</p>

                        </div>

                    )}



                    {loading && (
                        <div className=" z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                            <ReactLoading type={"bars"} color={"#ffffff"} height={100} width={100} />
                        </div>
                    )}

                    <div>

                        <div className='md:flex'>
                            {(contentItem && contentItem.videoUrl) && (

                                <div className="video-container flex justify-center w-full md:w-5/6 bg-[#134574]">

                                    <video controls className='w-[700px]'>
                                        <source src={contentItem.videoUrl} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>

                                </div>
                            )}

                            <div className={contentItem && contentItem.videoUrl ? ' w-full  md:w-1/6 md:bg-slate-100 md:border border-slate-300 flex md:flex-col gap-[5px] p-4 sm:ml-1' : 'w-full bg-slate-100 flex justify-end gap-2 items-center '}>

                                {question ? (
                                    <div className='flex justify-center items-center '>

                                        <Link
                                            to={`/questions/${course}/${contentItem.id}`}
                                            className='font-bold text-slate-600  text-xs bg-slate-300 px-2 flex text-center rounded-md py-1 '
                                        >
                                            Take Test
                                        </Link>

                                    </div>
                                ) : (
                                    <div className='flex justify-center  items-center pt-1 pb-1'>

                                        <p className='font-bold text-slate-700 text-sm bg-slate-300 px-2 rounded-md '>No test Available</p>
                                    </div>
                                )}


                                {contentItem && (
                                    <form onSubmit={handleScore}>
                                        
                                        {question ? (
                                            <div className='flex justify-center'>
                                                {!score && (

                                                    <button
                                                        type='submit'
                                                        value={contentItem.subTopic}
                                                        onClick={(event) => setScoreSubTopic(event.target.value)}
                                                        className='font-bold text-slate-600 text-xs bg-slate-300 px-2 rounded-md py-1 mt-1 mb-1'
                                                    >
                                                        View Score

                                                    </button>
                                                )}

                                                {score && (

                                                    <button
                                                        type='submit'
                                                        value=''
                                                        onClick={(event) => setScore(event.target.value)}
                                                        className='font-bold text-white text-xs bg-[#F13178] px-2 rounded-md py-1 mt-1 mb-1'
                                                    >
                                                        <p>Hide  {score && (
                                                            `${score}%`
                                                        )}
                                                        </p>

                                                    </button>
                                                )}
                                            </div>
                                        ) : (
                                            <p></p>
                                        )}



                                    </form>

                                )} 
                                {score &&(

                                <div className='flex justify-center font-bold text-xs'>
                                    <Link 
                                    to={`/test-details/${course}/${contentItem.id}/${contentItem.subTopic}`}
                                    className='bg-slate-300 px-2 py-1 text-slate-600 rounded-md'>Test Details</Link>
                                </div>
                                )}
                            </div>

                        </div>

                        <div className='' >

                            <div className=''>
                                {(contentItem && contentItem.videoUrl) && (

                                    <p className='text-center text-xs mt-1'>Or click
                                        <span>
                                            <a href={contentItem.videoUrl} target="_blank" rel="noopener noreferrer " className=' text-blue-700 underline pl-2 pr-2'>HERE</a>
                                        </span>
                                        to open video in a new tab
                                    </p>
                                )}
                                {contentItem && (

                                    <div dangerouslySetInnerHTML={{ __html: contentItem.content }} />
                                )}


                            </div>

                        </div>
                    </div>



                    <div>

                    </div>



                </div>
            )}
        </div>
    )
}

export default TopicDetails