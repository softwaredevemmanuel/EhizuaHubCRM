import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import StudentLogin from '../StudentLogin';
import TopNav from '../TopNav';
import ReactLoading from "react-loading";



const TestDetails = () => {
    const [user, setUser] = useState(false);
    const [loading, setLoading] = useState(false);
    const [question, setQuestions] = useState([]);
    const [totalQuestions, setTotalQuestions] = useState('');
    const [answer, setAnswer] = useState([]);
    const [testScore, setTestScore] = useState('');




    // Get the content parameter from the URL using useParams
    const { id: idParam } = useParams();
    const { course: courseParams } = useParams();
    const { subTopic: subTopicParams } = useParams();

    useEffect(() => {
        let studentToken = JSON.parse(localStorage.getItem('StudentToken'));

        // Check if staffToken exists and has the 'token' property
        if (studentToken && studentToken.token) {
            setUser(true);
        }
    }, []);




    // Fetch Questions and Answer
    useEffect(() => {
        async function fetchQuestion() {

            try {
                let localEmail = JSON.parse(localStorage.getItem('User'));

                const response = await axios.get('http://localhost:5000/api/students/review-questions', {

                    headers: {
                        subTopic: subTopicParams,
                        course: courseParams,
                        email: localEmail.email,
                    },


                });
                setQuestions(response.data.questions);
                setTotalQuestions(response.data.totalQuestions)
                setAnswer(response.data.answer)



            } catch (error) {

            }
        }
        fetchQuestion()

    }, [])

    // Fetch Test Score
    useEffect(() => {
        async function fetchScore() {

            try {
                let localEmail = JSON.parse(localStorage.getItem('User'));

                const response = await axios.get('http://localhost:5000/api/students/student-score', {

                    headers: {
                        subTopic: subTopicParams,
                        course: courseParams,
                        email: localEmail.email,
                    },


                });
                setTestScore(response.data.score);




            } catch (error) {

            }
        }
        fetchScore()

    }, [])


    // Iterate over the objects and assign them to corresponding stations
    const assignments = [];
    for (let i = 0; i < question.length; i++) {
        const obj = question[i];
        const station = answer[i];
        assignments.push({ [station]: obj });
    }

    const extractedKeys = assignments.map(obj =>
        Object.keys(obj)
    );
    const extractedValues = assignments.map(obj =>
        Object.values(obj)
    );


    return (
        <div className="overflow-y-scroll w-full h-screen hide-bar">
            {!user ? (
                <StudentLogin />
            ) : (
                <div className="relative z-0 w-full bg-white px-1 sm:px-5 flex flex-col gap-3">

                    <TopNav previousPageName="Course Content" currentPageName="Test Details" pageLink={`/${courseParams}/details/${idParam}`} />


                    <p className='text-center text-slate-500 font-bold '>Review  Questions</p>



                    {loading && (
                        <div className=" z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                            <ReactLoading type={"bars"} color={"#ffffff"} height={100} width={100} />
                        </div>
                    )}






                        <div className='flex'>
                            <div className='w-9/12'>
                                {extractedValues.map((keys, index) => (
                                    <div key={index}>
                                        {keys.map((key, i) => (
                                            <div key={i}>
                                                <p className='font-bold'>{index + 1}. {key.question}</p>
                                                <ul className='ml-6'>
                                                    <li>
                                                        <label className='flex gap-2'>
                                                            A.
                                                            <input
                                                                type="radio"
                                                                name={`question${index}`}
                                                                value={key.ans1}
                                                                checked={extractedKeys[index].includes(key.ans1)}
                                                                className={extractedKeys[index].includes(key.ans1) ? 'text-green-500' : ''}
                                                                disabled
                                                            />
                                                            {key.ans1}
                                                            {extractedKeys[index].includes(key.ans1) && extractedKeys[index] == key.correctAns && (
                                                                <p className='text-green-600'>correct</p>
                                                            )}
                                                            {extractedKeys[index].includes(key.ans1) && extractedKeys[index] != key.correctAns && (
                                                                <p className='text-red-600'>Wrong Answer</p>
                                                            )}
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className='flex gap-2'>
                                                            B.
                                                            <input
                                                                type="radio"
                                                                name={`question${index}`}
                                                                value={key.ans2}
                                                                checked={extractedKeys[index].includes(key.ans2)}
                                                                className={extractedKeys[index].includes(key.ans2) ? 'text-green-500' : ''}
                                                                disabled
                                                            />
                                                            {key.ans2}
                                                            {extractedKeys[index].includes(key.ans2) && extractedKeys[index] == key.correctAns && (
                                                                <p className='text-green-600'>correct</p>
                                                            )}
                                                            {extractedKeys[index].includes(key.ans2) && extractedKeys[index] != key.correctAns && (
                                                                <p className='text-red-600'>Wrong Answer</p>
                                                            )}
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className='flex gap-2'>
                                                            C.
                                                            <input
                                                                type="radio"
                                                                name={`question${index}`}
                                                                value={key.ans3}
                                                                checked={extractedKeys[index].includes(key.ans3)}
                                                                className={extractedKeys[index].includes(key.ans3) ? 'text-green-500' : ''}
                                                                disabled
                                                            />
                                                            {key.ans3}
                                                            {extractedKeys[index].includes(key.ans3) && extractedKeys[index] == key.correctAns && (
                                                                <p className='text-green-600'>correct</p>
                                                            )}
                                                            {extractedKeys[index].includes(key.ans3) && extractedKeys[index] != key.correctAns && (
                                                                <p className='text-red-600'>Wrong Answer</p>
                                                            )}
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <label className='flex gap-2'>
                                                            D.
                                                            <input
                                                                type="radio"
                                                                name={`question${index}`}
                                                                value={key.ans4}
                                                                checked={extractedKeys[index].includes(key.ans4)}
                                                                className={extractedKeys[index].includes(key.ans4) ? 'text-green-500' : ''}
                                                                disabled
                                                            />
                                                            {key.ans4}
                                                            {extractedKeys[index].includes(key.ans4) && extractedKeys[index] == key.correctAns && (
                                                                <p className='text-green-600'>correct</p>
                                                            )}
                                                            {extractedKeys[index].includes(key.ans4) && extractedKeys[index] != key.correctAns && (
                                                                <p className='text-red-600'>Wrong Answer</p>
                                                            )}
                                                        </label>
                                                    </li>
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                            <div className='flex justify-end w-3/12'>
                                {extractedKeys.map((keys, index) => (
                                    <div key={index}>
                                        {keys.map((key, i) => (
                                            <span key={i}></span>
                                        ))}
                                    </div>
                                ))}
                                <div className='bg-slate-200 h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] flex justify-center items-center border border-green-600 rounded-full mr-2'>
                                    <div>
                                        <p className='text-slate-500 font-extrabold sm:text-xl underline underline-offset-4'>{testScore}</p>
                                        <p className='text-slate-500 font-extrabold sm:text-xl'>{totalQuestions}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                </div>

            )}
        </div>
    );
};


export default TestDetails;
