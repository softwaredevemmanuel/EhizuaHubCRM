import React from 'react'
import Sidebar from '../Sidebar'
import {Link} from 'react-router-dom'
import {  FaPlus  } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { useState } from 'react'
const Attendence = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isPosition, setIsPosition] = useState(false);

  const showPositions = () => {
     setIsPosition(!isPosition);
    setIsOpen(false);
    
  };

  const showLocations = () => {
    setIsOpen(!isOpen);
    setIsPosition(false);
    
  };

  const data = [
    [' 1', 'Okereke Emmanuel', '09015653022', 'Yes', 'Example@gmail.com', 'View More'],
    [' 2', 'Okereke Emmanuel', '09015653022', 'Yes', 'Example@gmail.com', 'View More'],
    [' 3', 'Okereke Emmanuel', '09015653022', 'Yes', 'Example@gmail.com', 'View More'],
    [' 4', 'Okereke Emmanuel', '09015653022', 'Yes', 'Example@gmail.com', 'View More'],
    [' 5', 'Okereke Emmanuel', '09015653022', 'Yes', 'Example@gmail.com', 'View More'],
    [' 7', 'Okereke Emmanuel', '09015653022', 'Yes', 'Example@gmail.com', 'View More'],
    [' 8', 'Okereke Emmanuel', '09015653022', 'Yes', 'Example@gmail.com', 'View More'],
    [' 9', 'Okereke Emmanuel', '09015653022', 'Yes', 'Example@gmail.com', 'View More'],
    [' 10', 'Okereke Emmanuel', '09015653022', 'Yes', 'Example@gmail.com', 'View More'],
    [' 11', 'Okereke Emmanuel', '09015653022', 'Yes', 'Example@gmail.com', 'View More'],
    [' 12', 'Okereke Emmanuel', '09015653022', 'Yes', 'Example@gmail.com', 'View More'],
    [' 13', 'Okereke Emmanuel', '09015653022', 'Yes', 'Example@gmail.com', 'View More'],
    
  ];



  return (
    <section className="flex-col flex md:flex-row justify-between w-full h-full">
        <Sidebar/>
        <div className="w-full  bg-[#C8D1DA] flex flex-col gap-3 pl-5">
          <div>
            <h4 className='w-full pt-12 font-bold text-[#1A3751] pb-3 text-[22px]'>LIST OF STAFF</h4>
            <div className='border-b-2 border-[#f13178]'></div>
           
          </div>
          <div className=' w-[150px] flex flex-row bg-[#f13178] p-3 rounded-[6px] text-white font-bold items-center mt-4'>
            <Link className=''>Create Staff</Link>
            <FaPlus size={25}  className='pl-3  font-[30px]'/>
           </div>
           <div className='flex flex-row gap-12 md:gap-52 lg:gap-60'>
           <div className='flex flex-row items-center relative'>
            <h6 className='font-bold md:w-[250px] w-[200px]'>All Location</h6>
            <MdArrowDropDown size={20}  className='text-[#f13178] ml-[-110px] md:ml-[-160px]'
            onClick={showPositions}
            />
                  {isPosition && (
              <div className="absolute bg-[#134574] top-6 left-2 md:w-[200px] w-[200px] lg:w-[210px] md:ml-20 ml-[-6px] flex flex-col gap-[18px] rounded-lg px-3 py-2 text-center text-white">
              
                <p className='flex flex-row w-[200px] text-[19px] items-center'>Ehizua hub Awoyaya</p>
                <p className='flex flex-row items-center text-[19px]'>Ehizua hub Benin</p>
                <p className='flex flex-row items-center text-[19px]'>Ehizua hub Abuja</p>
              
              </div>
            )}
            </div>
            <div className='flex flex-row items-center relative'>
            <h6 className='font-bold'>Position</h6>
            <MdArrowDropDown size={20}  className='text-[#f13178]'
             onClick={showLocations}
             />
                   {isOpen && (
              <div className="absolute bg-[#134574] top-[-10px] md:ml-16 mt-8 left-[1px] mr-20 w-[210px] md:w-[220px] md:px-4 md:py-4 lg:w-[240px] flex flex-col rounded-lg px-2 py-2 gap-[10px] text-center text-white">
                
                <p className='flex flex-row items-center w-[200px] text-[18px]'>FrontEnd web Dev.</p>
                <p className='flex flex-row items-center w-[200px] text-[18px]'>BackEnd web Dev.</p>
                <p className='flex flex-row items-center w-[200px] text-[18px]'>UI/UX Director</p>
                <p className='flex flex-row items-center w-[200px] text-[18px]'>HR</p>
                <p className='flex flex-row items-center w-[200px] text-[18px]'>Ehizua Hub Director</p>
                <p className='flex flex-row items-center w-[200px] text-[18px]'>CyberSecurity Instructor</p>
                <p className='flex flex-row items-center w-[200px] text-[18px] '>Data Analytics Instructor</p>
              
              </div>
            )}
            </div>
            </div>
            <div className='overflow-x-auto'>
      <table className="w-[750px] md:w-[600px] lg:w-[900px] bg-white border border-gray-500 h-[500px]">
        <thead>
          <tr>
            <th className="border p-2  left-0 bg-white z-10">ID</th>
            <th className="border p-2  left-0 bg-white z-10">Full-Name</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">Verified</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Action</th>
           
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className=''>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="border p-3">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
          
        </div>
      
    </section>
  )
}

export default Attendence