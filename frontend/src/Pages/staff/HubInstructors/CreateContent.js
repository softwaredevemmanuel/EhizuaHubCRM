import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom'
import StaffLogin from "../StaffLogin";
import { useParams } from 'react-router-dom';
import toastr from 'toastr';
import ReactLoading from "react-loading";



const CreateContent = () => {
    const [user, setUser] = useState(false)
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false); // New state for loading indicator
    const [main_topic, set_MainTopic] = useState('');
    const [sub_topic, set_SubTopic] = useState('');
    const [mainTopic, setMainTopic] = useState([]);
    const [subTopic, setSubTopic] = useState([]);
    const { course: courseParams } = useParams();


    useEffect(() => {
        let staffToken = JSON.parse(localStorage.getItem('StaffToken'));
        if (staffToken && staffToken.token) {
            setUser(true);

        }
    }, []);



    useEffect(() => {
        async function fetchMainTopic() {

            try {
                const response = await axios.get('http://localhost:5000/api/hub-tutor/maintopic', {
                    headers: {
                        course: courseParams,
                    },
                });
                console.log(response.data.message)
                setMainTopic(response.data.message)


            } catch (error) {
                toastr.error('Error fetching curriculum data');
            }
        }

        fetchMainTopic();

    }, [courseParams]);



    useEffect(() => {
        async function fetchSubTopic() {
            try {
                if (main_topic !== '') { // Check if a topic is selected

                    const response = await axios.get('http://localhost:5000/api/hub-tutor/subtopic', {
                        headers: {
                            course: courseParams,
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



    // ........................ Create Content API ...................

    const createContent = () => {
        if (main_topic && content) {
            setLoading(true); // Start loading indicator

            axios.post("http://localhost:5000/api/hub-tutor/create-content", {
                main_topic: main_topic,
                content: content,
                course: courseParams,
                sub_topic: sub_topic
            })
                .then(response => {
                    toastr.success(response.data.message);

                    // Clear input fields after successful submission
                    set_MainTopic('');
                    setContent('');
                    set_SubTopic('');

                })
                .catch(error => {
                    toastr.error(error.response.data.error);
                    if (error.response.data.error === "Your account has been suspended. Please contact Ehizua Hub Admin.") {
                        localStorage.setItem('Tutorlogin', JSON.stringify({
                            login: false,
                        }));
                    }
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
                        <p className='text-[#F13178] text-[20px] mt-2 font-extrabold' >Create Content</p>
                        <Link to='/hub-instructor' className='mt-2'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>

                    </div>

                    <div className='border-[#F13178] border-b '></div>

                    <form className='bg-slate-200 sm:h-fit rounded-md pb-8 ' onSubmit={handleSubmit}>
                        <div className='sm:flex gap-4 mt-6 px-8 text-[#134574]'>
                            <p className='font-bold' > {courseParams}</p>
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


                        <div className='sm:flex gap-4 sm:mt-8 px-8 text-[#134574] '>
                            <p className='text-sm font-bold w-[80px] pt-4 sm:pt-2'>Content</p>
                            <textarea 
                                placeholder='Course Content' 
                                className='outline-none w-full rounded-md h-[80px] pl-4 pt-2' 
                                value={content}
                                onChange={(event) => setContent(event.target.value)}
                            />

                        </div>




                        <div className='flex gap-8 justify-center px-8'>

                            <button className=' bg-[#F13178] px-2 w-full sm:w-[120px] text-white md:text-[15px]  rounded-lg  mt-6 text-[11px] flex items-center text-center justify-center gap-4 font-bold h-[40px]'>
                                Create
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

export default CreateContent