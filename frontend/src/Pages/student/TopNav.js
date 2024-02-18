import React, { useState, Fragment, useEffect } from 'react';
import logo from "../../assets/ehizuahublogo.png"
import { IoMdNotifications } from "react-icons/io";
import { GoMail } from "react-icons/go";
import ReactLoading from "react-loading";
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'


const TopNav = () => {

  const [FirstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')
  const [loading, setLoading] = useState(false)

  const FirstNameLetter = FirstName[0]
  const LastNameLetter = LastName[0]

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem('User'));
    if ((user)) {
      setFirstName(user.FirstName);
      setLastName(user.LastName);
    }
  }, []);


  const logout = () => {
    localStorage.clear();
    window.location.reload();

  }

  return (
    <div>
      <nav className="flex items-center justify-between py-3 border-b border-[#DE1D80]">

        {loading && (
          <div className=" z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <ReactLoading type={"bars"} color={"#ffffff"} height={100} width={100} />
          </div>
        )}

        <div className="flex w-full max-w-[200px] ">
          <img src={logo} alt="" />
        </div>
        <div className="flex items-center gap-5">
          <div className="relative  cursor-pointer">
            <IoMdNotifications size={24} color="#DE1D80" />
            <div className="absolute top-0 right-0 rounded-full h-3 w-3 bg-white flex justify-center items-center">
              <p className='primary text-[0.5rem] text-center'>4</p>
            </div>
          </div>

          <div className="relative cursor-pointer">
            <GoMail size={24} color="#DE1D80" />
            <div className="absolute top-0 right-[-2px] rounded-full h-3 w-3 bg-white flex justify-center items-center">
              <p className='primary text-[0.5rem] text-center'>1</p>
            </div>
          </div>


          {/* Profile dropdown */}
          <Menu as="div" className="relative">
            <Menu.Button className="flex items-center">
              <span className="sr-only">Open user menu</span>

              <div className="w-[50px] h-[50px] border rounded-full flex justify-center items-center">
                <p className='text-[#DE1D80] text-xl font-bold'>{FirstNameLetter}{LastNameLetter}</p>
              </div>
              <span className="hidden lg:flex lg:items-center">

                <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                <Menu.Item >
                  <button onClick={logout} className='block px-3 py-1 text-sm leading-6 text-gray-900'>
                    Sign out
                  </button>

                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </nav>

    </div>
  )
}

export default TopNav