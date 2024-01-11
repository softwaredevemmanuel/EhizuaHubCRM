import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid'
import { FaCirclePlus } from "react-icons/fa6";



const StaffInventory = () => {
  const data = [
    ['1', 'Laptop', 'HP Laptop, Serial No: 09j3jj90293uj', '06/08/2023', '-', ''],
    ['2', 'Laptop', 'HP Laptop, Serial No: 09j3jj90293uj', '06/08/2023', '-', ''],
    ['3', 'Laptop', 'HP Laptop, Serial No: 09j3jj90293uj', '06/08/2023', '-', ''],
    ['4', 'Laptop', 'HP Laptop, Serial No: 09j3jj90293uj', '06/08/2023', '-', ''],


  ];

  return (
    <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3  pb-8">
      <div className="w-full  bg-[#C8D1DA] flex flex-col gap-3">
        <div className='flex justify-between'>
          <nav className="flex mt-6" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-4">
              <li>
                <div>
                  <Link to="/dashboard" className="text-[#F13178] hover:text-[#134574]">
                    <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                    <span className="sr-only">Home</span>
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-[#F13178]" aria-hidden="true" />
                  <div className="ml-4 text-xs font-bold text-[#F13178]">
                    INVENTORY
                  </div>

                </div>

              </li>

            </ol>
          </nav>
        </div>
      </div>
      <div className='border-[#F13178] border-b '></div>
      <div className="flex justify-end">
        <Link to='/staff_inventory-request' className=" bg-[#F13178] text-white px-2 w-fit  text-center items-center rounded-lg py-1 font-bold flex gap-4 justify-center">
          <div className="flex items-center justify-center">
            <p className="pl-2">New Request</p>
            <FaCirclePlus size={28} className="pl-2 mr-2" />
          </div>
        </Link>
      </div>

      <div className='bg-slate-200  h-[520px]  sm:px-1'>
        <div className='overflow-x-auto mt-1'>
          <div className='p-1 h-[500px]'>

            <table className="w-[1000px] bg-white border border-gray-500 mb-8">
              <thead>
                <tr className='text-[#134574] bg-slate-400'>
                  <th className="border p-2">No</th>
                  <th className="border p-2">ITEM</th>
                  <th className="border p-2">DETAILS</th>
                  <th className="border p-2">DATE RECEIVED</th>
                  <th className="border p-2">DATE RETURNED</th>
                  <th className="border p-2">COMMENT</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index} className='hover:bg-gray-200'>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className='border p-3'>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>

            </table>


          </div>
        </div>


      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-white max-w-[980px] w-fit pb-44">


      </div>



    </div>



  )
}

export default StaffInventory