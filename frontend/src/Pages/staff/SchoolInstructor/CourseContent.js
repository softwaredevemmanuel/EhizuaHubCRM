import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";

import StaffLogin from "../StaffLogin";
import toastr from 'toastr';
import ReactLoading from "react-loading";
import { useParams } from 'react-router-dom';

const CourseContent = () => {
    const [user, setUser] = useState(false)
    const [content, setContent] = useState([]);
    const { id: contentParam } = useParams();
    const [loading, setLoading] = useState(false); // New state for loading indicator

    useEffect(() => {
        let staffToken = JSON.parse(localStorage.getItem('StaffToken'));
        if (staffToken && staffToken.token) {
            setUser(true);

        }
    }, []);

    
    useEffect(() => {
        async function fetchCourseContent() {
            try {
                const response = await axios.get('http://localhost:5000/api/school-tutor/course-content-details', {
                    headers: {
                        id: contentParam
                    },
                });

                setContent(response.data.content);

            } catch (error) {
                toastr.error('Error retrieving content');
            }
        }


        fetchCourseContent();
    }, [contentParam]);


    const uniqueMainTopics = [...new Set(content.map((item) => item.mainTopic))];


    return (
        <div className="">

            {!user ? (
                <StaffLogin />
            ) : (
                <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full pb-8">
                    <div className='flex justify-end '>
                        <Link to='/school-instructor' className='mt-8'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>

                    </div>
                    <div className='border-[#F13178] border-b'></div>

                    {loading && (
                        <div className=" z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                            <ReactLoading type={"bars"} color={"#ffffff"} height={100} width={100} />
                        </div>
                    )}

                    {uniqueMainTopics.map((mainTopic, mainIndex) => (
                        <div key={mainIndex}>
                            <p className='text-[#F13178] font-bold pt-4 text-center text-2xl'> {mainTopic}</p>
                            {content
                                .filter((item) => item.mainTopic === mainTopic)
                                .map((subContent, subIndex) => (
                                    <div key={subIndex}>
                                        <p className='list-disc mt-2 text-[#134574] text-xl font-semibold'>Topic: {subContent.subTopic}</p>
                                        <p>{subContent.content}</p>


                                    </div>

                                ))}

                        </div>
                    ))}





                </div>
            )}
        </div>



    )
}

export default CourseContent