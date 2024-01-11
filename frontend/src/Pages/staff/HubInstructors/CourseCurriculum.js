import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaDownload } from "react-icons/fa";
import frontend from '../../../assets/frontend.png'




const CourseCurriculum = () => {

    return (
        <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full pb-8">
            <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
                <div className='flex justify-between '>
                    <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Course Details & Curriculum</p>
                    <Link to='/hub-instructor' className='mt-8'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>

                </div>
            </div>
            <div className='border-[#F13178] border-b'></div>

            <div className='sm:flex justify-end'>

                    <button className="bg-[#F13178] px-2 text-center items-center rounded-lg font-bold flex justify-center h-[40px] w-fit sm:mt-0 mt-2">
                        <div className="flex">
                            <p className="text-white pl-2">Download Curriculum </p>
                            <FaDownload size={28} className="pl-2 mr-2 text-white" />

                        </div>
                    </button>
            </div>



            <div className='bg-slate-400 h-full rounded-lg pb-4'>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
                    <img src={frontend} alt='Course profile' className="w-full sm:w-[300px] max-w-full max-h-full p-1 md:my-auto" />
                    <div className='w-full sm:col-span-2 px-4 sm:px-0 md:pr-2 text-[#134574]'>
                        <p className=' font-bold text-center justify-center pt-2'>Frontend Web Development</p>
                        <p className=' pt-2 '>Frontend web development involves creating the user interface and user experience of a website or web application. Frontend developers focus on designing and implementing the visual elements that users interact with directly. This includes the layout, navigation, and overall aesthetics of a website.</p>
                        <p className=' pt-2 text-xs'>Duration: 12 Weeks</p>
                        <p className=' pt-2 text-xs'>Course Fee: ₦ 300,000.00</p>
                    </div>
                </div>


            </div>

            <p className='text-center justify-center text-[#134574] font-extrabold text-lg'>Course Curriculum</p>

            <div className='bg-slate-200  h-[520px] rounded-lg sm:px-8'>
                <div className='overflow-x-auto mt-4'>
                    <div className='p-4 h-[500px]'>

                        <p className='text-[#F13178] font-bold pt-4'> HTML 101: BEGINERS GUIDE TO CODING</p>
                        <ul className='px-4 list-disc mt-2 text-[#134574]'>
                            <li className='custom-list-item'>WHAT IS HTML</li>
                            <li>GETTING SET UP</li>
                            <li>HTML SYNTAX</li>
                            <li>PAGE TITLES</li>
                            <li>PARAGRAPHS AND HEADINGS</li>
                            <li>NESTING HTML ELEMENTS</li>
                            <li>BOLD, ITALICS AND UNDERLINES</li>
                            <li>THE DIV ELEMENT</li>
                            <li>BLOCK VS INLINE ELEMENTS</li>
                            <li>LINKING TO OTHER PAGES</li>
                            <li>OPENING LINKS IN NEW WINDOWS</li>
                            <li>ADDING IMAGES</li>
                            <li>LINKING AN IMAGE TO OTHER WEB PAGE</li>
                            <li>HTML COMMENTS</li>
                        </ul>
                        <p className='text-[#F13178] font-bold pt-4'> HTML 101: BEGINERS GUIDE TO CODING</p>
                        <ul className='px-4 list-disc mt-2 text-[#134574]'>
                            <li className='custom-list-item'>WHAT IS HTML</li>
                            <li>GETTING SET UP</li>
                            <li>HTML SYNTAX</li>
                            <li>PAGE TITLES</li>
                            <li>PARAGRAPHS AND HEADINGS</li>
                            <li>NESTING HTML ELEMENTS</li>
                            <li>BOLD, ITALICS AND UNDERLINES</li>
                            <li>THE DIV ELEMENT</li>
                            <li>BLOCK VS INLINE ELEMENTS</li>
                            <li>LINKING TO OTHER PAGES</li>
                            <li>OPENING LINKS IN NEW WINDOWS</li>
                            <li>ADDING IMAGES</li>
                            <li>LINKING AN IMAGE TO OTHER WEB PAGE</li>
                            <li>HTML COMMENTS</li>
                        </ul>

                        <p className='text-[#F13178] font-bold pt-4'> HTML 101: BEGINERS GUIDE TO CODING</p>
                        <ul className='px-4 list-disc mt-2 text-[#134574]'>
                            <li className='custom-list-item'>WHAT IS HTML</li>
                            <li>GETTING SET UP</li>
                            <li>HTML SYNTAX</li>
                            <li>PAGE TITLES</li>
                            <li>PARAGRAPHS AND HEADINGS</li>
                            <li>NESTING HTML ELEMENTS</li>
                            <li>BOLD, ITALICS AND UNDERLINES</li>
                            <li>THE DIV ELEMENT</li>
                            <li>BLOCK VS INLINE ELEMENTS</li>
                            <li>LINKING TO OTHER PAGES</li>
                            <li>OPENING LINKS IN NEW WINDOWS</li>
                            <li>ADDING IMAGES</li>
                            <li>LINKING AN IMAGE TO OTHER WEB PAGE</li>
                            <li>HTML COMMENTS</li>
                        </ul>


                    </div>
                </div>


            </div>



            <div className="grid grid-cols-2 lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-white max-w-[980px] w-fit pb-44">

            </div>



        </div>



    )
}

export default CourseCurriculum