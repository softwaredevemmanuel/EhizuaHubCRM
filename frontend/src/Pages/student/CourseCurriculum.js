import { useState } from "react";
import StudentLogin from "./StudentLogin";
import TopNav from "./TopNav";
import { FaDownload } from "react-icons/fa";


const CourseCurriculum = () => {
  const [user, setUser] = useState(false);


  return (
    <div className="overflow-y-scroll w-full h-screen hide-bar">
      {user ? (
        <StudentLogin />
      ) : (
        <div className="relative z-0 w-full bg-[#C8D1DA] px-5 flex flex-col gap-3 pb-12">

          <TopNav />

          <div className='flex gap-4'>
            <p className='text-[#134574] font-bold'>Course</p>

            <select
              className='rounded-lg h-[30px] w-[200px] text-slate-500 outline-none bg-slate-200 px-4'>
              <option value=''>Full Stack Web Development</option>
              <option value='theory'>Data Analytics</option>
            </select>

          </div>
          <div className='sm:flex justify-end'>

            <button className="bg-[#F13178] px-2 text-center items-center rounded-lg font-bold flex justify-center p-1 w-fit sm:mt-0 mt-2">
              <div className="flex">
                <p className="text-white pl-2">Download </p>
                <FaDownload size={24} className="pl-2 mr-2 text-white" />

              </div>
            </button>
          </div>


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






        </div>
      )}
    </div>
  );
}

export default CourseCurriculum