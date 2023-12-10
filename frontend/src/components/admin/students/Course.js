import React from 'react'
import Sidebar from '../Sidebar'

const Course = () => {
  return (
    <section className="flex-col flex md:flex-row justify-between w-full h-full">
    <Sidebar/>
    <div className="w-full lg:ml-72   bg-[#C8D1DA] px-6 flex flex-col gap-3">
      <h4> Students Course</h4>
    </div>
  
</section>
  )
}

export default Course