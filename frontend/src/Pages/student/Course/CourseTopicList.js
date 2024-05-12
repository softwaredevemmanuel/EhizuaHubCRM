import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import StudentLogin from '../StudentLogin';
import TopNav from '../TopNav';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import toastr from 'toastr';
import ReactLoading from "react-loading";

const CourseTopicList = () => {
    const [user, setUser] = useState(false);
    const { course: courseParams } = useParams();
    const [content, setContent] = useState([]);
    const [testStatus, setTestStatus] = useState([]);
    const [loading, setLoading] = useState(false);



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
                setLoading(false)

            } catch (error) {
                toastr.error('Error retrieving content');
                setLoading(false)

            }
        }

        fetchCourseContent();

    }, [courseParams]);

    // Check if a topic test has been taken
    useEffect(() => {
        setLoading(true)
        async function fetchTestStatus() {
            let localEmail = JSON.parse(localStorage.getItem('User'));


            try {

                const response = await axios.get('http://localhost:5000/api/students/test-status', {
                    headers: {
                        course: courseParams,
                        email: localEmail.email,
                    },
                });

                setTestStatus(response.data.message);
                setLoading(false)
                console.log(response.data.message)

            } catch (error) {
                toastr.error('Error retrieving content');
                setLoading(false)

            }
        }

        fetchTestStatus();

    }, []);



    const uniqueMainTopics = [...new Set(content.map((item) => item.mainTopic))];

console.log(testStatus)
    return (
        <div className="overflow-y-scroll w-full h-screen hide-bar">
            {!user ? (
                <StudentLogin />
            ) : (
                <div className="relative z-0 w-full bg-white px-5 flex flex-col gap-3">

                    <TopNav />
                    <p className='text-center sm:text-xl font-bold text-slate-600'>{courseParams}</p>

                    {loading && (
                        <div className=" z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                            <ReactLoading type={"bars"} color={"#ffffff"} height={100} width={100} />
                        </div>
                    )}

                    <div className='bg-slate-200  h-[520px] rounded-lg sm:px-8 mb-12'>
                        <div className='overflow-x-auto mt-4'>
                            <div className='p-4 h-[500px]'>
                                {uniqueMainTopics.map((mainTopic, mainIndex) => (
                                    <div key={mainIndex}>
                                        <p className='text-[#F13178] font-bold pt-4'> {mainTopic}</p>
                                        {content
                                            .filter((item) => item.mainTopic === mainTopic)
                                            .map((subContent, subIndex) => (
                                                <div key={subIndex}>
                                                    <Link to={`/${courseParams}/details/${subContent.id}`}>
                                                        <ul className='px-4 list-disc mt-2 text-[#134574]'>

                                                            <li>
                                                                <div className="flex items-center justify-between hover:bg-gray-300 rounded-md">
                                                                    <p>{subContent.subTopic}</p>

                                                                    {testStatus.filter((test) => test.subTopic === subContent.subTopic)
                                                                        .map((subTest, testIndex) => (

                                                                            <div key={testIndex} className="bg-slate-100 rounded-md px-1 text-white text-xs font-bold">
                                                                                {subTest.percentageScore >= 70 && (

                                                                                    <p className='text-green-600'>{subTest.percentageScore}% A</p>
                                                                                )}
                                                                                {(subTest.percentageScore >= 60 && subTest.percentageScore < 70) && (

                                                                                    <p className='text-green-600'>{subTest.percentageScore}% B</p>
                                                                                )}
                                                                                {(subTest.percentageScore >= 50 && subTest.percentageScore < 60) && (

                                                                                    <p className='text-slate-600'>{subTest.percentageScore}% C</p>
                                                                                )}
                                                                                {(subTest.percentageScore >= 40 && subTest.percentageScore < 50) && (

                                                                                    <p className='text-yellow-600'>{subTest.percentageScore}% D</p>
                                                                                )}
                                                                                {(subTest.percentageScore >= 30 && subTest.percentageScore < 40) && (

                                                                                    <p className='text-red-500'>{subTest.percentageScore}% E</p>
                                                                                )}
                                                                                {subTest.percentageScore <= 30 && (

                                                                                    <p className='text-red-600'>{subTest.percentageScore}%</p>
                                                                                )}
                                                                            </div>
                                                                        ))}
                                                                </div>

                                                            </li>
                                                        </ul>
                                                    </Link>
                                                </div>

                                            ))}

                                    </div>
                                ))}


                            </div>
                        </div>


                    </div>
                </div>
            )}
        </div>
    )
}

export default CourseTopicList