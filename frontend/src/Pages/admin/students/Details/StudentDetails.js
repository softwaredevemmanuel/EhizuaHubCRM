import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom'
import profile from './../../../../assets/adminlogin.png'
import { MdOutlineEdit } from "react-icons/md";

import React, { useEffect, useRef } from 'react';

import Chart from "chart.js/auto"



const StudentsDetails = () => {
    const chartRef = useRef(null)
    const chartInstance = useRef(null)

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }
        const myChartRef = chartRef.current.getContext('2d')
        const barColours = [

            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.5)'
        ];
        chartInstance.current = new Chart(myChartRef, {
            type: 'bar',
            data: {
                labels: ['Accessment', 'Punctuality', 'Attitude To Work', 'label 4', 'label 5'],
                datasets: [
                    {
                        label: "Data",
                        barThickness: 20,
                        data: [12, 50, 19, 80, 90],
                        backgroundColor: barColours
                    }
                ]
            },
            options: {
                indexAxis: 'y',
            }
        })
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy()
            }
        };
    }, [])


    return (
        <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full">
            <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
                <div className='flex justify-between '>
                </div>
            </div>


            <div className='flex justify-between '>
                <p className='text-[#F13178] text-[20px] mt-2 font-extrabold' >Student Details</p>
                <Link to='/student-section/hr' className='mt-2'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>

            </div>
            <div className='border-[#F13178] border-b '></div>

            <div className='grid md:grid-cols-2 gap-1'>
                <div className='bg-[#a1acb6] w-full h-full pb-8 text-[#2b4053]'>
                    <div className='flex items-end justify-end px-2 text-white md:h-[52px] h-[45px] rounded-lg'>
                        <Link to='/update-student/hr' className='bg-[#F13178] md:text-[15px]  text-[11px] flex items-center gap-2 font-bold p-1 rounded-md'>
                            Edit
                            <MdOutlineEdit className=" text-white text-[15px] md:text-[20px] " />
                        </Link>
                    </div>

                    <div className='flex flex-col items-center justify-center mt-4'>
                        <img src={profile} className='max-w-full max-h-full rounded-full' alt="Profile" />
                        <p className='text-center text-xl pt-4 text-[#2b4053] font-extrabold'>OKEREKE  EMMANUEL  CHIGOZIEM</p>

                    </div>

                    <div className='pl-2'>

                        <div className='flex gap-1 px-2 pt-8 '>
                            <p className='font-extrabold'>Course: </p>
                            <p className=''>FullStack Web Development </p>
                        </div>

                        <div className='flex gap-1 px-2 pt-2'>
                            <p className='font-extrabold'>Email: </p>
                            <p className=''>eokereke47@gmail.com  </p>
                        </div>
                        <div className='flex gap-2 px-2 pt-1'>
                            <p className='font-extrabold'>Phone: </p>
                            <p>08037819461</p>
                        </div>
                        <div className='flex gap-2 px-2 pt-1'>
                            <p className='font-extrabold'>Email: </p>
                            <p> eokereke47@gmail.com </p>
                        </div>
                        <div className='flex gap-4 px-2 pt-1'>
                            <p className='font-extrabold'>Duration: </p>
                            <p>32 Weeks</p>
                        </div>
                        <div className='flex gap-4 px-2 pt-1'>
                            <p className='font-extrabold'>Course Fee: </p>
                            <p>N600,000.00 </p>
                        </div>
                        <div className='flex  gap-4 px-2 pt-1'>
                            <p className='font-extrabold'>Initial Deposit: </p>
                            <p>N400,000.00 </p>
                        </div>
                        <div className='flex gap-4 px-2 pt-1'>
                            <p className='font-extrabold'>Balance: </p>
                            <p>N200,000.00 </p>
                        </div>
                        <div className='flex  gap-4 px-2 pt-1'>
                            <p className='font-extrabold'>Date Enrolled: </p>
                            <p>20/06/23</p>
                        </div>
                        <div className='flex  gap-4 px-2 pt-1'>
                            <p className='font-extrabold'>Date of Completion: </p>
                            <p>20/01/24</p>
                        </div>
                        <div className='flex  gap-4 px-2 pt-1'>
                            <p><span className='font-extrabold'>Home Address:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                mo lestiae quas vel sint commodi repudiandae
                            </p>
                        </div>
                        <div className='flex gap-4 px-2 pt-1'>
                            <p className='font-extrabold'>Parents / Guidiance Phone Number: </p>
                            <p>08037819461</p>
                        </div>
                        <div className='flex gap-4 px-2 pt-1'>
                            <p> <span className='font-extrabold'>Parents / Guidiance Home Address:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                mo lestiae quas vel sint commodi repudiandae
                            </p>
                        </div>
                    </div>

                </div>

                <div className='bg-[#ffffff] w-full pb-8 px-2'>
                    <p className="justify-center text-center pt-8 text-[#2b4053]">Student Performance</p>

                    <>
                        <canvas ref={chartRef} />
                    </>

                </div>
            </div>





            <div className="grid grid-cols-2 lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-white max-w-[980px] w-fit pb-44">


            </div>



        </div>
    )
}

export default StudentsDetails