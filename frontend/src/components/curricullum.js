import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toastr from 'toastr';
import { FaDownload } from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";
import ReactLoading from "react-loading";


const Curricullum = (props) => {
    const [loading, setLoading] = useState(false);
    const [reload, setReload] = useState('');
    const [content, setContent] = useState([]);
    const uniqueMainTopics = [...new Set(content.map((item) => item.mainTopic))];


    useEffect(() => {
        async function fetchCourseCurriculum() {
            try {
                setLoading(true);
                const response = await axios.get('http://localhost:5000/api/students/course-curriculum', {
                    headers: {
                        course: props.course
                    }
                });
                setContent(response.data.content);
                setLoading(false);
            } catch (error) {
                toastr.error('Error retrieving content');
            }
        }

        fetchCourseCurriculum();
    }, [props.course, reload]);




    const Refresh = () => {
        if (reload === '') {
            setReload('reload')

        } else {
            setReload('')

        }
    }


    return (
        <div>
            <div className='flex justify-between'>

                <button className="bg-[#134574] px-2 text-center items-center rounded-lg font-bold flex justify-center  w-fit sm:mt-0 mt-2">
                    <div className="flex items-center">
                        <p className="text-white pl-2 hidden sm:block text-sm">Download </p>
                        <FaDownload size={24} className="pl-2 mr-2 text-white" />

                    </div>
                </button>
                <button onClick={Refresh}>
                    <div className='flex gap-2 text-gray-500 text-sm justify-center'>

                        <p className='hidden sm:block'>Refresh</p>
                        <LuRefreshCcw size={20} />

                    </div>
                </button>

            </div>

            {loading && (
                <div className=" z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <ReactLoading type={"bars"} color={"#ffffff"} height={100} width={100} />
                </div>
            )}


            <div className='bg-slate-200  h-[520px] rounded-lg sm:px-8'>
                <div className='overflow-x-auto mt-4'>
                    <div className='p-4 h-[500px]'>

                        <div>
                            {uniqueMainTopics.map((mainTopic, mainIndex) => (
                                <div key={mainIndex}>
                                    <div className='bg-slate-200'>
                                        <div className='flex text-center mb-2'>
                                            <p className='text-[#F13178] font-bold pt-2 px-2 sm:px-6'>
                                                {mainTopic}
                                            </p>
                                        </div>

                                    </div>
                                    {content
                                        .filter((item) => item.mainTopic === mainTopic)
                                        .map((subContent, subIndex) => (
                                            <div key={subIndex} className='px-2 sm:px-8 pb-6 '>
                                                {subContent.subTopic.split(', ').map((topic, topicIndex) => (
                                                    <ul key={topicIndex} className='px-4 list-disc mt-2 text-[#134574] '>
                                                        <li className='custom-list-item'>{topic}</li>

                                                    </ul>
                                                ))}
                                            </div>
                                        ))}
                                </div>
                            ))}


                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Curricullum