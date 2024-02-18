import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaDownload } from "react-icons/fa";
import frontend from '../../../assets/frontend.png'
import { useParams } from 'react-router-dom';
import StaffLogin from "../StaffLogin";
import toastr from 'toastr';
import ReactLoading from "react-loading";
import '../../../index.css'
// Convert to PDF
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';




const CourseCurriculum = () => {
    const [user, setUser] = useState(false)
    const [content, setContent] = useState([]);
    const [courseDetails, setCourseDetails] = useState([]);
    const { course: courseParam } = useParams();
    const [loading, setLoading] = useState(false); // New state for loading indicator
    const [mainTopicHovered, setMainTopicHovered] = useState('');

    const tutorCourse = courseParam.trim()




    useEffect(() => {
        let staffToken = JSON.parse(localStorage.getItem('StaffToken'));
        if (staffToken && staffToken.token) {
            setUser(true);

        }
    }, []);

    useEffect(() => {
        async function fetchCourseContent() {
            try {
                setLoading(true)
                const response = await axios.get('http://localhost:5000/api/school-tutor/course-curriculum', {
                    headers: {
                        course: tutorCourse
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

    const generatePDF = () => {
        const input = document.getElementById('divToConvert');

        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4');
                const imgWidth = 210; // A4 width in mm
                const imgHeight = (canvas.height * imgWidth) / canvas.width;
                pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

                // Add watermark
                pdf.setFontSize(48);
                pdf.setTextColor(200); // Adjust the opacity of the watermark
                pdf.text('Ehizua Hub', 115, 148, 45, 0, 'center');



                pdf.save(`${tutorCourse}-curricullum.pdf`);
            })
            .catch((error) => {
                console.error('Error generating PDF:', error);
            });
    };


    return (
        <div className="">

            {!user ? (
                <StaffLogin />
            ) : (
                <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full pb-8">
                    <div className='flex justify-between '>
                        <p className='text-[#F13178] text-sm mt-8 font-extrabold' >{tutorCourse} Details & Curriculum</p>
                        <Link to='/school-instructor' className='mt-6'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>

                    </div>
                    <div className='border-[#F13178] border-b'></div>

                    {loading && (
                        <div className=" z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                            <ReactLoading type={"bars"} color={"#ffffff"} height={100} width={100} />
                        </div>
                    )}

                    <div className='flex justify-end'>
                        <button
                            onClick={generatePDF}
                            className="bg-[#F13178] px-2 text-center items-center rounded-lg flex justify-center h-[30px] w-fit sm:mt-0 mt-2"
                        >
                            <div className="flex">
                                {/* Hide the <p> tag on small screens */}
                                <p className="text-white pl-2 hidden sm:block">Download Curriculum </p>
                                <FaDownload size={22} className="pl-2 mr-2 text-white" />
                            </div>
                        </button>
                    </div>





                    <div id="divToConvert" style={{ position: 'relative' }}>
                        <p className='text-center justify-center text-[#134574] font-extrabold text-lg mt-4'>{tutorCourse} Course Curriculum</p>

                        <div className='bg-slate-50 pb-8 rounded-lg mt-4'>

                            <div>
                                {uniqueMainTopics.map((mainTopic, mainIndex) => (
                                    <div key={mainIndex}>
                                        <div
                                            className={`flex justify-between ${mainTopicHovered === mainTopic ? 'bg-slate-300' : 'bg-slate-200'}`}
                                            onMouseEnter={() => setMainTopicHovered(mainTopic)}
                                            onMouseLeave={() => setMainTopicHovered('')}>
                                            <div className='flex text-center mb-2'>
                                                <p className='text-[#F13178] font-bold pt-2 px-2 sm:px-6'>
                                                    {mainTopic}
                                                </p>
                                            </div>
                                            {mainTopicHovered == mainTopic && (
                                                <div className="pr-4 pt-2">
                                                    <Link to={`/edit-school-curriculum/${tutorCourse}/${mainTopic}`} className="bg-slate-400 text-slate-600 px-4 rounded-md" >
                                                        Edit
                                                    </Link>
                                                </div>
                                            )}
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

                    <div className="grid grid-cols-2 lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-white max-w-[980px] w-fit pb-44">

                    </div>



                </div>


            )}
        </div>
    )
}

export default CourseCurriculum