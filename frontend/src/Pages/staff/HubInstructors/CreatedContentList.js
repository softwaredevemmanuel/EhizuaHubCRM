import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";


const CreatedContentList = () => {

    return (
        <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full pb-8">
            <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
                <div className='flex justify-between '>
                    <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Created Course Content</p>
                    <Link to='/hub-instructor' className='mt-8'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>

                </div>
            </div>
            <div className='border-[#F13178] border-b'></div>


            <div className='bg-slate-200  h-[520px] rounded-lg sm:px-8'>
                <div className='overflow-x-auto mt-4'>
                    <div className='p-4 h-[500px]'>

                        <p className='text-[#F13178] font-bold pt-4'> HTML 101: BEGINERS GUIDE TO CODING</p>
                        <ul className='px-4 list-disc mt-2 text-[#134574]'>
                            <li className='custom-list-item'>
                               <Link to='/hi-course-content'>
                                    WHAT IS HTML
                               </Link> 
                            </li>
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

export default CreatedContentList