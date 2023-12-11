import React from 'react'
import SideBar from './Sidebar'


const OfficeLocations = () => {
  return (
    <section className="flex-col flex md:flex-row justify-between w-full h-full">
    <SideBar/>
    <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
      <h4> Office Locations</h4>
    </div>
  
</section>
  )
}

export default OfficeLocations