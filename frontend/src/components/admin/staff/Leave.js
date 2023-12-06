import React from 'react'
import Sidebar from '../Sidebar'

const Leave = () => {
  return (
    <section className="flex-col flex md:flex-row justify-between w-full h-full">
    <Sidebar/>
    <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
      <h4> Staff Leave</h4>
    </div>
  
</section>
  )
}

export default Leave