import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";
import { useParams } from 'react-router-dom';
import StaffLogin from "../StaffLogin";
import toastr from 'toastr';
import ReactLoading from "react-loading";

const CreatedQuestionList = () => {
    const [user, setUser] = useState(false)
    const [content, setContent] = useState([]);
    const { course: courseParam } = useParams();
    const [loading, setLoading] = useState(false); // New state for loading indicator




    useEffect(() => {
        let staffToken = JSON.parse(localStorage.getItem('StaffToken'));
        if (staffToken && staffToken.token) {
            setUser(true);

        }
    }, []);

    useEffect(() => {
        setLoading(true)
        async function fetchQuestions() {
            try {

                const response = await axios.get('http://localhost:5000/api/hub-tutor/questions', {
                    headers: {
                        course: courseParam
                    },
                });

                setContent(response.data.question);
                setLoading(false)


            } catch (error) {
                toastr.error('Error retrieving content');
            }
        }


        fetchQuestions();
    }, [courseParam]);

    const uniqueMainTopics = [...new Set(content.map((item) => item.mainTopic))];


    return (
        <div className="">

            {!user ? (
                <StaffLogin />
            ) : (
                <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full pb-8">
                    <div className='flex justify-between '>
                        <p className='text-[#F13178] text-sm mt-8 font-extrabold' >{courseParam} Questions</p>
                        <Link to='/hub-instructor' className='mt-6'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>

                    </div>
                    <div className='border-[#F13178] border-b'></div>

                    {uniqueMainTopics.map((mainTopic, mainIndex) => (

                        <div key={mainIndex} className='bg-slate-200  rounded-lg sm:px-8'>

                            <p className='text-[#F13178] font-bold pt-4'> {mainTopic}</p>

                            {content
                                .filter((item) => item.mainTopic === mainTopic)
                                .map((subContent, subIndex) => (
                                    <div key={subIndex}>

                                        <div className='p-4 text-slate-600'>
                                            <div className='flex justify-between'>
                                            <p className=' font-semibold'>{subIndex + 1}. {subContent.question}</p>
                                            <Link to={`/edit-question/${subContent.question}/${courseParam}/${mainTopic}`}> Edit</Link>
                                            </div>

                                            <div className='grid sm:grid-cols-2 px-4'>
                                                {subContent.ans1 ? (
                                                    <div>
                                                        <p>A. {subContent.ans1}</p>
                                                        <p>B. {subContent.ans2}</p>
                                                        <p>C. {subContent.ans3}</p>
                                                        <p>D. {subContent.ans4}</p>
                                                    </div>
                                                ) : (
                                                    <p></p>
                                                )}

                                            </div>
                                            {subContent.correctAns || subContent.ans1 || subContent.ans2 || subContent.ans3 || subContent.ans4? (
                                                <div className='bg-slate-300 text-green-700 rounded-md px-4'>

                                                    <p> Correct Ans: {subContent.correctAns} </p>
                                                </div>

                                            ) : (
                                                <p>{`(Theory Question)`}</p>
                                            )}


                                        </div>
                                    </div>

                                ))}




                        </div>
                    ))}




                    <div className="grid grid-cols-2 lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-white max-w-[980px] w-fit pb-44">

                    </div>



                </div>


            )}
        </div>




    )
}

export default CreatedQuestionList