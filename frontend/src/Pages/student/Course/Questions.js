import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Question = () => {
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




    // Get the content parameter from the URL using useParams
    const { id: contentParam } = useParams();
    const { course: courseParams } = useParams();

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
    const contentItem = content.find((item) => item.id == contentParam);

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
        // event.preventDefault();
        setStartTest(false)
        setMyTime('00:00:00')
        localStorage.removeItem('StartTest');
        localStorage.removeItem('futureTime');
        localStorage.removeItem('TestInfo');
        setDisable(false)
        setSubTopic('')

        const selectedQuestions = [];

        question.forEach((questionContent, index) => {
            const selectedValue = document.querySelector(`input[name=question${index}]:checked`)?.value;
            if (selectedValue) {
                selectedQuestions.push({
                    sub_topic: subTopic,
                    course: course,
                    email: email,
                    question: questionContent.question,
                    ans: selectedValue,
                });
            }
        });

        try {

            const response = await axios.post('http://localhost:5000/api/students/submit_questions', selectedQuestions);

            setSuccess(response.data.message);
            const submitResponse = await axios.get('http://localhost:5000/api/students/check_test_score', {
                headers: {
                    sub_topic: subTopic,
                    course: course,
                    email: email,
                    totalQuestions: totalQuestions

                },

            });

            setSubmitSuccess(submitResponse.data.message);
            setQuestions([])
            setSubTopic('')



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
                setError(error.response.data.message);

                setStartTest(false)
                setMyTime('00:00:00')
                localStorage.removeItem('StartTest');
                localStorage.removeItem('futureTime');
                setDisable(false)
                setSubTopic('')

            }
            if (error.response.data.retake) {
                setRetake(error.response.data.retake);

                setStartTest(false)
                setMyTime('00:00:00')
                localStorage.removeItem('StartTest');
                localStorage.removeItem('futureTime');
                setDisable(false)
                setSubTopic('')

            }
        }
    }

    return (
        <div>
            <div>
                <button onClick={RunTimer} disabled={disable} >Start</button>


                {storedFutureTime ? (
                    <>
                        <h2>Time Remaining</h2>
                        <h1>{myTime}</h1>
                    </>
                ) : (

                    <div>
                        <h1>{myTime}</h1>
                    </div>


                )}

            </div>

            <div>

                {loading && <p>Loading...</p>}
                {contentItem && (
                    <div>

                        <h2>{contentItem.subTopic} Questions</h2>
                        <div>

                            <form onSubmit={submitQuestion}>

                                {subTopic && <h3>Assessment Test</h3>}

                                {question.map((questionContent, index) => (
                                    <div key={index}>
                                        <div>
                                            <p>{questionContent.question}</p>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name={`question${index}`}
                                                    value={questionContent.ans1}
                                                />
                                                {questionContent.ans1}
                                            </label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name={`question${index}`}
                                                    value={questionContent.ans2}
                                                />
                                                {questionContent.ans2}
                                            </label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name={`question${index}`}
                                                    value={questionContent.ans3}
                                                />
                                                {questionContent.ans3}
                                            </label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name={`question${index}`}
                                                    value={questionContent.ans4}
                                                />
                                                {questionContent.ans4}
                                            </label>
                                        </div>
                                    </div>
                                ))}
                                {subTopic && question.length > 0 && (
                                    <button type='submit' onClick={submitQuestion}>Submit</button>
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
    );
};

export default Question;
