import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import StudentLogin from '../StudentLogin';
import TopNav from '../TopNav';
import ReactLoading from "react-loading";
import { useNavigate } from 'react-router-dom';
import toastr from 'toastr';



const Question = () => {
    const [user, setUser] = useState(false);
    const [content, setContent] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [subTopic, setSubTopic] = useState('');
    const [course, setCourse] = useState('');
    const [email, setEmail] = useState('');
    const [question, setQuestions] = useState([]);
    const [success, setSuccess] = useState('');
    const [submitSuccess, setSubmitSuccess] = useState('');
    const [retake, setRetake] = useState(true);
    const [totalQuestions, setTotalQuestions] = useState('');
    const [disable, setDisable] = useState(true);
    const [testRunning, setTestRunning] = useState(false);
    const navigate = useNavigate();




    // Get the content parameter from the URL using useParams
    const { id: idParam } = useParams();
    const { course: courseParams } = useParams();

    useEffect(() => {
        let studentToken = JSON.parse(localStorage.getItem('StudentToken'));

        // Check if staffToken exists and has the 'token' property
        if (studentToken && studentToken.token) {
            setUser(true);
        }
    }, []);

    // Get Student course Content
    useEffect(() => {
        async function fetchCourseContent() {
            try {
                let localEmail = JSON.parse(localStorage.getItem('User'));
                const response = await axios.get('http://localhost:5000/api/students/student-course-content', {
                    headers: {
                        courses: courseParams
                    },
                });
                setContent(response.data.content);
                setLoading(false);
                setCourse(courseParams)
                setEmail(localEmail.email)
            } catch (error) {
                setError('Error retrieving content');
                setLoading(false);
            }
        }


        fetchCourseContent();

    }, [courseParams]);

    // Get the details of the content that corresponds with the id
    const contentItem = content.find((item) => item.id == idParam);

    // Set and get time before taking the test
    const [currentTime, setCurrentTime] = useState(new Date());
    const [myTime, setMyTime] = useState('')
    const [startTest, setStartTest] = useState(localStorage.getItem('StartTest'))
    const storedFutureTime = localStorage.getItem('futureTime');
    const formattedTime = currentTime.toLocaleTimeString();



    // Start counting in seconds once the Test starts
    useEffect(() => {

        if (startTest) {

            const intervalId = setInterval(() => {
                setCurrentTime(new Date());
            }, 1000);

            // Cleanup the interval on component unmount
            return () => clearInterval(intervalId);
        }
    }, [currentTime, storedFutureTime]);



    // Function to subtract two time strings in the format HH:mm:ss
    function subtractTimes(time1, time2) {
        // Convert time strings to seconds
        const seconds1 = timeStringToSeconds(time1);
        const seconds2 = timeStringToSeconds(time2);

        // Calculate the difference in seconds
        const differenceSeconds = seconds1 - seconds2;

        // Convert the difference back to HH:mm:ss format
        const result = secondsToTimeString(differenceSeconds);

        return result;
    }

    // Function to convert time string to seconds
    function timeStringToSeconds(timeString) {
        if (storedFutureTime) {
            const [hours, minutes, seconds] = timeString.split(':').map(Number);
            return hours * 3600 + minutes * 60 + seconds;
        }

    }

    // Function to convert seconds to time string
    function secondsToTimeString(seconds) {
        const hours = Math.floor(seconds / 3600);
        const remainingSeconds = seconds % 3600;
        const minutes = Math.floor(remainingSeconds / 60);
        const remainingMinutes = remainingSeconds % 60;
        const formattedResult = `${padZero(hours)}:${padZero(minutes)}:${padZero(remainingMinutes)}`;
        return formattedResult;
    }

    // Function to pad single-digit numbers with a leading zero
    function padZero(num) {
        return num < 10 ? `0${num}` : num;
    }

    // Example usage
    const time1 = storedFutureTime;
    const time2 = formattedTime;


    // Check Time Status before displaying Questions
    useEffect(() => {
        const result = subtractTimes(time1, time2);
        function timeStringToSeconds(timeString) {
            const [hours, minutes, seconds] = timeString.split(':').map(Number);
            return hours * 3600 + minutes * 60 + seconds;
        }

        const timeInSeconds = timeStringToSeconds(result);

        if (!Number.isInteger(timeInSeconds) || timeInSeconds <= 0) {
            // Timer has reached zero, do nothing
            setStartTest(false)
            setMyTime('00:00:00')
            localStorage.removeItem('StartTest');
            localStorage.removeItem('futureTime');
            setDisable(false)
            setSubTopic('')
            if (timeInSeconds == 0) {
                submitQuestion()
                localStorage.removeItem('TestInfo');

            }
            return;

        } else {
            setMyTime(result)
            fetchQuestion();

        }
    }, [currentTime, storedFutureTime]);



    // Start Timmer
    const RunTimer = () => {
        setTestRunning(true)
        const futureTime = new Date(currentTime.getTime() + 10 * 30000); // 1 minutes in milliseconds
        localStorage.setItem('futureTime', futureTime.toLocaleTimeString());

        localStorage.setItem('StartTest', JSON.stringify({
            startTest: true,

        }));
        setStartTest(true)
        setDisable(true)
        if (contentItem) {
            setSubTopic(contentItem.subTopic)
            localStorage.setItem('TestInfo', JSON.stringify({
                SubTopic: contentItem.subTopic,
                TestCourse: course,
                TestEmail: email

            }));

        }

    }

    // Submit Questions
    const submitQuestion = async event => {
        setLoading(true)
        // event.preventDefault();
        setStartTest(false)
        setMyTime('00:00:00')
        localStorage.removeItem('StartTest');
        localStorage.removeItem('futureTime');
        localStorage.removeItem('TestInfo');
        setDisable(false)
        // setSubTopic('')
        setTestRunning(false)


        const selectedValueArray = []

        question.forEach((questionContent, index) => {
            const selectedValue = document.querySelector(`input[name=question${index}]:checked`)?.value;
            selectedValueArray.push(selectedValue)
            console.log(selectedValueArray)


        });

        try {
            let localEmail = JSON.parse(localStorage.getItem('User'));

            const response = await axios.post('http://localhost:5000/api/students/submit_questions', {
                selectedValueArray,
                course: courseParams,
                subTopic,
                email: localEmail.email
            }

            );

            // toastr.success(response.data.message);
            const submitResponse = await axios.get('http://localhost:5000/api/students/check_test_score', {
                headers: {
                  subTopic,
                  course: course,
                  email: localEmail.email,
                  totalQuestions : totalQuestions
          
                },
          
              });
              toastr.success(submitResponse.data.message);


            setQuestions([])
            setSubTopic('')
            setLoading(false)
            navigate(`/${courseParams}/details/${idParam}`)





        } catch (error) {
            console.error('Error sending questions:', error);
        }
    };



    // Fetch Questions
    async function fetchQuestion() {

        try {
            let localStorageTestInfo = JSON.parse(localStorage.getItem('TestInfo'));

            if (subTopic) {

                const response = await axios.get('http://localhost:5000/api/students/questions', {

                    headers: {
                        sub_topic: subTopic,
                        course: course,
                        email: email
                    },


                });
                setQuestions(response.data.questions);
                setTotalQuestions(response.data.totalQuestions)

            } else {
                const response = await axios.get('http://localhost:5000/api/students/questions', {
                    headers: {
                        sub_topic: localStorageTestInfo.SubTopic,
                        course: localStorageTestInfo.TestCourse,
                        email: localStorageTestInfo.TestEmail,
                    },


                });
                setQuestions(response.data.questions);
                setTotalQuestions(response.data.totalQuestions)
                setSubTopic(localStorageTestInfo.SubTopic)
            }



        } catch (error) {
            if (error.response.data.message) {
                toastr.error(error.response.data.message);

                setStartTest(false)
                setMyTime('00:00:00')
                localStorage.removeItem('StartTest');
                localStorage.removeItem('futureTime');
                setDisable(false)
                setSubTopic('')
                setTestRunning(false)
            }


            if (error.response.data.retake) {
                toastr.success(error.response.data.retake);

                setStartTest(false)
                setMyTime('00:00:00')
                localStorage.removeItem('StartTest');
                localStorage.removeItem('futureTime');
                setDisable(false)
                setSubTopic('')
                setTestRunning(false)

            }
        }
    }

    return (
        <div className="overflow-y-scroll w-full h-screen hide-bar">
            {!user ? (
                <StudentLogin />
            ) : (
                <div className="relative z-0 w-full bg-white px-1 sm:px-5 flex flex-col gap-3">

                    <TopNav previousPageName="Course Content" currentPageName="Questions" pageLink={`/${courseParams}/details/${idParam}`} />

                    {contentItem && (
                        <p className='text-center text-slate-500 font-bold '>{contentItem.subTopic} Questions</p>

                    )}

                    {loading && (
                        <div className=" z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                            <ReactLoading type={"bars"} color={"#ffffff"} height={100} width={100} />
                        </div>
                    )}


                    <div className='bg-slate-300 flex justify-between py-2 px-4 rounded-sm'>
                        {!testRunning ? (

                            <button
                                onClick={RunTimer}
                                disabled={disable}
                                className='text-green-700 font-extrabold text-xl bg-slate-200 px-2 rounded-md '
                            >
                                Start
                            </button>
                        ) : (
                            <button
                                className='text-slate-400 font-extrabold  bg-slate-200 px-2 rounded-md cursor-not-allowed'
                            >
                                Running...
                            </button>
                        )}


                        {storedFutureTime ? (
                            <div className='text-white font-extrabold text-xl flex gap-4 justify-center items-center'>
                                <p className='text-xs text-center'>Time Remaining</p>
                                <p className='text-red-500 bg-white px-2'>{myTime}</p>
                            </div>
                        ) : (

                            <div className='text-green-700 font-extrabold text-xl bg-slate-200 px-2 rounded-md' >
                                <h1>{myTime}</h1>
                            </div>


                        )}

                    </div>

                    <div>

                        {(contentItem && storedFutureTime) && (
                            <div>
                                <div>

                                    <form onSubmit={submitQuestion} className='pb-12'>

                                        {question.map((questionContent, index) => (
                                            <div key={index} className='mt-4'>
                                                <div>
                                                    <p className='font-bold'>{index + 1}. {questionContent.question}</p>
                                                    <ul className='ml-6'>
                                                        <li>
                                                            <label className='flex gap-2'>
                                                                A.
                                                                <input
                                                                    type="radio"
                                                                    name={`question${index}`}
                                                                    value={questionContent.ans1}
                                                                />
                                                                {questionContent.ans1}
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <label className='flex gap-2'>
                                                                B.
                                                                <input
                                                                    type="radio"
                                                                    name={`question${index}`}
                                                                    value={questionContent.ans2}
                                                                />
                                                                {questionContent.ans2}
                                                            </label>
                                                        </li>

                                                        <li>
                                                            <label className='flex gap-2'>
                                                                C.
                                                                <input
                                                                    type="radio"
                                                                    name={`question${index}`}
                                                                    value={questionContent.ans3}
                                                                />
                                                                {questionContent.ans3}
                                                            </label>
                                                        </li>

                                                        <li>
                                                            <label className='flex gap-2'>
                                                                D.
                                                                <input
                                                                    type="radio"
                                                                    name={`question${index}`}
                                                                    value={questionContent.ans4}
                                                                />
                                                                {questionContent.ans4}
                                                            </label>
                                                        </li>
                                                    </ul>




                                                </div>
                                            </div>
                                        ))}
                                        {subTopic && question.length > 0 && (
                                            <div className='flex justify-center items-center'>

                                                <button
                                                    type='submit'
                                                    onClick={submitQuestion}
                                                    className='bg-[#DE1D80] text-white font-bold w-[140px] py-1 rounded-md '
                                                >
                                                    Submit
                                                </button>
                                            </div>
                                        )}
                                    </form>


                                    {success && <p style={{ color: 'green' }}>{success}</p>}
                                    {error && <p style={{ color: 'red' }}>{error}</p>}
                                    {submitSuccess && <p style={{ color: 'green' }}>{submitSuccess}</p>}
                                    {retake && <p style={{ color: 'green' }}>{retake}</p>}



                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Question;
