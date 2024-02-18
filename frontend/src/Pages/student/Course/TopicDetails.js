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
                    sub_topic: scoreSubTopic
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


    return (
        <div className="overflow-y-scroll w-full h-screen hide-bar">
            {!user ? (
                <StudentLogin />
            ) : (
                <div className="relative z-0 w-full bg-white px-5 flex flex-col gap-3">

                    <TopNav />
                    <p className='text-center sm:text-xl font-bold text-slate-600'>{courseParams}</p>
                    {contentItem && (

                        <p className='sm:text-xl font-bold text-slate-600'>{contentItem.subTopic}</p>

                    )}


                    {loading && (
                        <div className=" z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                            <ReactLoading type={"bars"} color={"#ffffff"} height={100} width={100} />
                        </div>
                    )}

                    <div>
                        {/* {showDetails && (
                            <div>
                                <h1>Details Page</h1>


                                {contentItem && (
                                    <form onSubmit={handleScore}>
                                        {question ?(

                                        <button
                                            type='submit'
                                            value={contentItem.subTopic}
                                            onClick={(event) => setScoreSubTopic(event.target.value)}>
                                            {score ? (
                                                `${score}%`
                                            ) : (
                                                'View Score'
                                            )}
                                        </button>
                                        ):(
                                            <p>No Score</p>
                                        )}
                                        {score && (
                                            <button
                                                type='submit'
                                                value=''
                                                onClick={(event) => setScore(event.target.value)}> hide
                                            </button>
                                        )}

                                    </form>

                                )}
                            </div>

                        )} */}

                        <div>

                            {contentItem && (
                                <div>

                                    <h2>{contentItem.mainTopic}</h2>
                                    <h2>{contentItem.subTopic}</h2>
                                    <p>{contentItem.content}</p>
                                    {question ? (
                                        <div>

                                            <Link to={`/questions/${course}/${contentItem.id}`}>Take Test</Link>

                                        </div>
                                    ) : (
                                        <p>No test Available</p>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="video-container flex justify-center ">
                        <video controls className='w-[700px]'>
                            <source src='https://mp4-c.udemycdn.com/2018-02-06_01-14-34-c4851e5c5122cb46f977f4cfc22ed883/WebHD_720p.mp4?Expires=1708296922&Signature=JQTlFgAyv-yfJAoQE3l-tO5WEcRYQyzQwHgXgBnSo1j8sP0i5ZiSZhIi06DnPyDAXZF2aReNZU2yoH4n5r9A3m4WWuN9pCI5zuRP~A1Z~t3dQn6yZ4xAY2HcAcRoT5rps~EecJdsR~Alv9Cm7o73Y2ztcTE774gCoDV-8BfC3HzN~PggDwhgVh9zzzLwRfMpKW9f219OTy7SiXpg5w13RrkBGULz5FxGCWphw7MMmohx-Am9dXvdJLjtO385qMCXc9zHHRGWbBljUoAXJQTorY9na4U4bJwcdvBw4y4op1MX5VWMzbENzMOu92piEbCZeahOX7p8eqHQWq-H0VSVWQ__&Key-Pair-Id=K3MG148K9RIRF4' type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <div>

                    </div>



                </div>
            )}
        </div>
    )
}

export default TopicDetails