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
    const { id: idParam } = useParams();
    const { course: courseParam } = useParams();
    const [loading, setLoading] = useState(false); // New state for loading indicator

    useEffect(() => {
        setLoading(true)

        let staffToken = JSON.parse(localStorage.getItem('StaffToken'));
        if (staffToken && staffToken.token) {
            setUser(true);
            setLoading(false)


        }
    }, []);

    useEffect(() => {
        setLoading(true)

        async function fetchCourseContent() {
            try {
                const response = await axios.get('http://localhost:5000/api/hub-tutor/course-content-details', {
                    headers: {
                        id: idParam
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
    }, [idParam]);


    const uniqueMainTopics = [...new Set(content.map((item) => item.mainTopic))];


    return (
        <div className="">

            {!user ? (
                <StaffLogin />
            ) : (
                <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full pb-8">
                    <div className='flex justify-end '>
                        <Link to={`/hi-content-list/${courseParam}`} className='mt-8'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>

                    </div>
                    <div className='border-[#F13178] border-b'></div>

                    {loading && (
                        <div className=" z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                            <ReactLoading type={"bars"} color={"#ffffff"} height={100} width={100} />
                        </div>
                    )}
                    <div className='bg-slate-200 pb-8'>
                        {uniqueMainTopics.map((mainTopic, mainIndex) => (
                            <div key={mainIndex} className='px-6'>
                                <p className='text-[#F13178] font-bold pt-4 text-center text-2xl'> {mainTopic}</p>
                                {content
                                    .filter((item) => item.mainTopic === mainTopic)
                                    .map((subContent, subIndex) => (
                                        <div key={subIndex}>
                                            <div className='flex justify-between'>
                                                <p className='list-disc mt-2 text-[#134574] text-xl font-semibold'>Topic: {subContent.subTopic}</p>
                                                <Link to={`/edit-content/${courseParam}/${subContent.id}`} className='bg-slate-300 text-center flex px-2 rounded-md justify-center items-center '>
                                                    Edit
                                                </Link>
                                            </div>
                                            <div className="video-container flex justify-center mt-4 ">
                                                {subContent.videoUrl && (

                                                    <video controls className='w-[700px]'>
                                                        <source src={subContent.videoUrl} type="video/mp4" />
                                                        Your browser does not support the video tag.
                                                    </video>
                                                )}
                                            </div>

                                            <div dangerouslySetInnerHTML={{ __html: subContent.content }} />


                                        </div>

                                    ))}

                            </div>
                        ))}

                    </div>



                </div>
            )}
        </div>



    )
}

export default CourseContent