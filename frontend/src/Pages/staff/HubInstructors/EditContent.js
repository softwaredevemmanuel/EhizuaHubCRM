import React, { useState, useEffect, useRef, useMemo  } from 'react';
import axios from 'axios';
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom'
import StaffLogin from "../StaffLogin";
import { useParams } from 'react-router-dom';
import toastr from 'toastr';
import ReactLoading from "react-loading";
import JoditEditor from 'jodit-react';



const EditContent = () => {
    const [user, setUser] = useState(false)
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false); // New state for loading indicator
    const [main_topic, set_MainTopic] = useState('');
    const [sub_topic, set_SubTopic] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    const [id, setId] = useState('');
    const [mainTopic, setMainTopic] = useState([]);
    const [subTopic, setSubTopic] = useState([]);
    const [result, setResult] = useState([]);
    const { id: idParams } = useParams();
    const { course: courseParam } = useParams();
    const editor = useRef(null);



    const topicContent = result.find((item) => item.id == idParams);

    useEffect(() => {
        let staffToken = JSON.parse(localStorage.getItem('StaffToken'));
        if (staffToken && staffToken.token) {
            setUser(true);

        }
    }, []);

    useEffect(() => {
        if (topicContent) {
            set_MainTopic(topicContent.mainTopic || '');
            set_SubTopic(topicContent.subTopic);
            setVideoUrl(topicContent.videoUrl);
            setId(topicContent.id);
            setContent(topicContent.content)

        }
    }, [topicContent]);


    useEffect(() => {
        setLoading(true)
        async function contentDetails() {

            try {
                const response = await axios.get('http://localhost:5000/api/hub-tutor/course-content-details', {
                    headers: {
                        id: idParams,
                    },
                });
                setResult(response.data.content)
                setLoading(false)



            } catch (error) {
                toastr.error('Error fetching curriculum data');
                setLoading(false)

            }
        }

        contentDetails();

    }, [idParams]);

    useEffect(() => {
        async function fetchMainTopic() {

            try {
                const response = await axios.get('http://localhost:5000/api/hub-tutor/maintopic', {
                    headers: {
                        course: courseParam,
                    },
                });
                setMainTopic(response.data.message)


            } catch (error) {
                toastr.error('Error fetching curriculum data');
            }
        }

        fetchMainTopic();

    }, [courseParam]);


    useEffect(() => {
        async function fetchSubTopic() {
            try {
                if (main_topic !== '') { // Check if a topic is selected

                    const response = await axios.get('http://localhost:5000/api/hub-tutor/subtopic', {
                        headers: {
                            course: courseParam,
                            main_topic: main_topic
                        },
                    });

                    setSubTopic(response.data.subTopics);
                }
            } catch (error) {
                toastr.error('Error fetching curriculum data');
            }
        }

        fetchSubTopic();
    }, [main_topic]); // Include 'topic' in the dependency array



    // ........................ Update Content  ...................

    const createContent = () => {
        if (main_topic && content) {
            setLoading(true); // Start loading indicator

            axios.put(`http://localhost:5000/api/hub-tutor/update-content/${id}`, {
                mainTopic: main_topic,
                content: content,
                course: courseParam,
                subTopic: sub_topic,
                videoUrl: videoUrl,
            })
                .then(response => {
                    toastr.success(response.data.message);

                })
                .catch(error => {
                    toastr.error(error.response.data.error);
            
                })
                .finally(() => {
                    setLoading(false); // Stop loading indicator
                });
        } else {
            toastr.error('Please fill in all required fields.');
        }
    };


    const handleSubmit = event => {
        event.preventDefault();
        createContent();
    };


    return (
        <div className="">
            {!user ? (
                <StaffLogin />
            ) : (
                <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full">
                    <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
                        <div className='flex justify-between '>
                        </div>
                    </div>

                    <div className='flex justify-between '>
                        <p className='text-[#F13178] text-sm mt-4 font-extrabold' >Edit Content</p>
                        <Link to={`/hi-course-content/${courseParam}/${idParams}`} className='mt-2'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>

                    </div>

                    <div className='border-[#F13178] border-b '></div>

                    {loading && (
                        <div className=" z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                            <ReactLoading type={"bars"} color={"#ffffff"} height={100} width={100} />
                        </div>
                    )}

                    <form className='bg-slate-200 sm:h-fit rounded-md pb-8 ' onSubmit={handleSubmit}>
                        <div className='sm:flex gap-4 mt-6 px-8 text-[#134574]'>
                            <p className='font-bold' > {courseParam}</p>
                        </div>
                        <div className='sm:flex gap-4 mt-4 px-8 text-[#134574]'>
                            <p className='text-sm w-[240px] pt-2 font-bold'>Main-Topic</p>
                            <select
                                className='rounded-md w-full h-[40px] outline-none pl-4'
                                value={main_topic}
                                onChange={(event) => set_MainTopic(event.target.value)}
                            >
                                <option value=''>Select the Main Topic</option>
                                {mainTopic.map((mainTopic, index) => (
                                    <option key={index} value={mainTopic.mainTopic}>
                                        {mainTopic.mainTopic}
                                    </option>
                                ))}
                            </select>
                            <p className='text-sm font-bold w-[210px] pt-4 sm:pt-2'> Sub-Topic</p>
                            <select
                                className='rounded-md w-full h-[40px] outline-none pl-4'
                                value={sub_topic}
                                onChange={(event) => set_SubTopic(event.target.value)}
                            >
                                <option value=''>Select a sub Topic</option>
                                {subTopic.map((subTopic, index) => (
                                    <option key={index} value={subTopic}>  {/* Set the value attribute */}
                                        {subTopic}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className='sm:flex gap-4 mt-6 px-8 text-[#134574]'>
                            <p className='text-sm font-bold w-[100px] pt-4 sm:pt-2'> Video Url</p>
                            <input
                                type='text'
                                className='rounded-md w-full h-[40px] outline-none pl-4'
                                value={videoUrl}
                                onChange={(event) => setVideoUrl(event.target.value)}
                            />
                        </div>


                       
                        <div className='px-4 mt-6'>

                            <JoditEditor
                                ref={editor}
                                value={content}
                                tabIndex={1} // tabIndex of textarea
                                onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                onChange={newContent => { }}
                                className=''
                            />

                        </div>




                        <div className='flex gap-8 justify-center px-8'>

                            <button className=' bg-[#F13178] px-2 w-full sm:w-[120px] text-white md:text-[15px]  rounded-lg  mt-6 text-[11px] flex items-center text-center justify-center gap-4 font-bold h-[40px]'>
                                Update
                            </button>
                        </div>





                    </form>





                    <div className="grid grid-cols-2 lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-white max-w-[980px] w-fit pb-44">


                    </div>



                </div>
            )}


        </div>
    )
}

export default EditContent