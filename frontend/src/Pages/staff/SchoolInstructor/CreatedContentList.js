import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundBack } from "react-icons/io";
import StaffLogin from "../StaffLogin";
import toastr from 'toastr';
import ReactLoading from "react-loading";
import { useParams } from 'react-router-dom';


const CreatedContentList = () => {
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
        async function fetchCourseContent() {
            try {

                const response = await axios.get('http://localhost:5000/api/school-tutor/course-contents', {
                    headers: {
                        course: courseParam
                    },
                });

                setContent(response.data.content);
                setLoading(false)


            } catch (error) {
                toastr.error('Error retrieving content');
            }
        }


        fetchCourseContent();
    }, [courseParam]);

    const uniqueMainTopics = [...new Set(content.map((item) => item.mainTopic))];

    return (
        <div className="">

            {!user ? (
                <StaffLogin />
            ) : (
                <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full pb-8">
                        <div className='flex justify-between '>
                            <p className='text-[#F13178] text-sm mt-8 font-extrabold' >Created Course Content</p>
                            <Link to='/school-instructor' className='mt-8'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>

                        </div>
                    <div className='border-[#F13178] border-b'></div>

                    {loading && (
                        <div className=" z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                            <ReactLoading type={"bars"} color={"#ffffff"} height={100} width={100} />
                        </div>
                    )}

                    <div className='bg-slate-200  h-[520px] rounded-lg sm:px-8'>
                        <div className='overflow-x-auto mt-4'>
                            <div className='p-4 h-[500px]'>

                                {uniqueMainTopics.map((mainTopic, mainIndex) => (
                                    <div key={mainIndex}>
                                        <p className='text-[#F13178] font-bold pt-4'> {mainTopic}</p>
                                        {content
                                            .filter((item) => item.mainTopic === mainTopic)
                                            .map((subContent, subIndex) => (
                                                <div key={subIndex}>
                                                    <ul className='px-4 list-disc mt-2 text-[#134574]'>
                                                        <li className='custom-list-item'>
                                                            <Link to={`/si-course-content/${subContent.id}`}>
                                                                {subContent.subTopic}
                                                            </Link>
                                                        </li>

                                                    </ul>

                                                </div>

                                            ))}

                                    </div>
                                ))}

                            </div>
                        </div>


                    </div>



                    <div className="grid grid-cols-2 lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-white max-w-[980px] w-fit pb-44">

                    </div>



                </div>

            )}
        </div>

    )
}

export default CreatedContentList