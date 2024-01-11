import React, { useState, useEffect, useRef } from 'react';
import StudentLogin from "./StudentLogin";
import TopNav from "./TopNav";
import frontend from '../../assets/frontend.png'
import { Link } from "react-router-dom";
import Chart from "chart.js/auto"



const TestSection = () => {
  const [user, setUser] = useState(false);
  const chartRef1 = useRef(null);
  const chartRef2 = useRef(null);
  const chartInstance1 = useRef(null);
  const chartInstance2 = useRef(null);

  // First chart
  useEffect(() => {
    const ctx1 = chartRef1.current.getContext('2d');
    const barColours1 = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'];

    chartInstance1.current = new Chart(ctx1, {
      type: 'bar',
      data: {
        labels: ['Label1', 'Label2'],
        datasets: [
          {
            label: 'Data1',
            data: [70, 50],
            backgroundColor: barColours1,
          },
        ],
      },
      options: {
        indexAxis: 'x',
      },
    });

    return () => {
      chartInstance1.current.destroy();
    };
  }, []);

  // Second chart
  useEffect(() => {
    const ctx2 = chartRef2.current.getContext('2d');
    const barColours2 = ['rgba(255, 205, 86, 0.2)', 'rgba(75, 192, 192, 0.2)'];

    chartInstance2.current = new Chart(ctx2, {
      type: 'pie',
      data: {
        labels: ['Test', 'Assessment'],
        datasets: [
          {
            label: 'Data2',
            data: [12, 50],
            backgroundColor: barColours2,
          },
        ],
      },
      options: {
        indexAxis: 'y',
      },
    });

    return () => {
      chartInstance2.current.destroy();
    };
  }, []);


  return (
    <div className="overflow-y-scroll w-full h-screen hide-bar">
      {user ? (
        <StudentLogin />
      ) : (
        <div className="relative z-0 w-full bg-[#C8D1DA] px-5 flex flex-col gap-3">

          <TopNav />

          <div className='flex gap-4'>
            <p className='text-[#134574] font-bold'>Course</p>

            <select
              className='rounded-lg h-[30px] w-[200px] text-slate-500 outline-none bg-slate-200 px-4'>
              <option value=''>Full Stack Web Development</option>
              <option value='theory'>Data Analytics</option>
            </select>

          </div>


          <div className=' pb-2 px-2 grid sm:grid-cols-2 h-fit'>
            <div className='flex justify-center'>
            <div className='w-fit'>
              <p className="justify-center text-center pt-2 text-[#2b4053]">Students Performance</p>
              <canvas ref={chartRef1} />
            </div>
            </div>

            <div className='flex justify-center'>
            <div className='w-[200px]'>
              <p className="justify-center text-center pt-2 text-[#2b4053]">Students Performance</p>
              <canvas ref={chartRef2} />
            </div>
            </div>
          </div>


          <div className='bg-slate-200  h-[520px] rounded-lg sm:px-8 mb-12'>
            <div className='overflow-x-auto mt-4'>
              <div className='p-4 h-[500px]'>

                <p className='text-[#F13178] font-bold pt-4'> HTML 101: BEGINERS GUIDE TO CODING</p>
                <ul className='px-4 list-disc mt-2 text-[#134574]'>

                  <li>
                    <div className="flex items-center justify-between hover:bg-gray-300 rounded-md">
                      <p>WHAT IS HTML</p>
                      <div className="bg-slate-400 rounded-md px-1 text-white text-xs">
                        <Link>Take Test</Link>
                      </div>
                    </div>

                  </li>
                  <li>
                    <div className="flex items-center justify-between hover:bg-gray-300 rounded-md">
                      <p>GETTING SET UP</p>
                      <div className="bg-slate-400 rounded-md px-1 text-white text-xs">
                        <Link>Take Test</Link>
                      </div>
                    </div>

                  </li>
                  <li>
                    <div className="flex items-center justify-between hover:bg-gray-300 rounded-md">
                      <p>HTML SYNTAX</p>
                      <div className="bg-slate-400 rounded-md px-1 text-white text-xs">
                        <Link>Take Test</Link>
                      </div>
                    </div>

                  </li>
                  <li>
                    <div className="flex items-center justify-between hover:bg-gray-300 rounded-md">
                      <p>PAGE TITLES</p>
                      <div className="bg-slate-400 rounded-md px-1 text-white text-xs">
                        <Link>Take Test</Link>
                      </div>
                    </div>

                  </li>
                  <li>
                    <div className="flex items-center justify-between hover:bg-gray-300 rounded-md">
                      <p>PARAGRAPHS AND HEADINGS</p>
                      <div className="bg-slate-400 rounded-md px-1 text-white text-xs">
                        <Link>Take Test</Link>
                      </div>
                    </div>

                  </li>
                  <li>
                    <div className="flex items-center justify-between hover:bg-gray-300 rounded-md">
                      <p>NESTING HTML ELEMENTS</p>
                      <div className="bg-slate-400 rounded-md px-1 text-white text-xs">
                        <Link>Take Test</Link>
                      </div>
                    </div>

                  </li>

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

export default TestSection