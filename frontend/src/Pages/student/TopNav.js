import React, { useState, Fragment, useEffect } from 'react';
import logo from "../../assets/ehizuahublogo.png"
import { IoMdNotifications } from "react-icons/io";
import { GoMail } from "react-icons/go";
import ReactLoading from "react-loading";
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { ChevronRightIcon, ChevronLeftIcon, HomeIcon } from '@heroicons/react/20/solid'
import { FaArrowLeftLong } from "react-icons/fa6";


const TopNav = (props) => {

  const [FirstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(false);
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


  const logoff = () => {
    const localStorageData = JSON.parse(localStorage.getItem('StudentToken')) || {};
    delete localStorageData.token;
    localStorage.setItem('StudentToken', JSON.stringify(localStorageData));
    setUser(false);

  };

  return (
    <div>
      <nav className="flex items-center justify-between py-3 border-b border-[#DE1D80] ">

        {loading && (
          <div className=" z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <ReactLoading type={"bars"} color={"#ffffff"} height={100} width={100} />
          </div>
        )}

        <div className="flex w-full max-w-[200px] pl-6 md:pl-0">
          <nav className="flex " aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-1">
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
                  <Link to={props.pageLink} className="ml-4 text-xs font-bold text-[#F13178]">
                    {props.previousPageName}
                  </Link>
                  <ChevronLeftIcon className="h-5 w-5 flex-shrink-0 text-[#F13178]" aria-hidden="true" />

                </div>

              </li>
              <li>
                <div className="flex items-center">
                  <div className="ml-4 text-xs font-bold text-slate-400">
                    {props.currentPageName}
                  </div>

                </div>

              </li>

            </ol>
          </nav>
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

          {/* Notification dropdown */}
          <Menu as="div" className="relative">
            <Menu.Button className="flex items-center">
              <span className="sr-only">Open user menu</span>

              <div className="relative cursor-pointer">
                <GoMail size={24} color="#DE1D80" />
                <div className="absolute top-0 right-[-2px] rounded-full h-3 w-3 bg-white flex justify-center items-center">
                  <p className='primary text-[0.5rem] text-center'>1</p>
                </div>
              </div>

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
              <Menu.Items className="absolute right-0 z-10 mt-2.5  w-[800px] origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                <Menu.Item >
                  <button onClick={logout} className='block px-3 py-1 text-sm leading-6 text-gray-900'>
                    Sign out
                  </button>
                  <button onClick={logoff} className="">
                    Stand By
                  </button>


                </Menu.Item>
                <Menu.Item >
                  <button onClick={logout} className='block px-3 py-1 text-sm leading-6 text-gray-900'>
                    Sign out
                  </button>
                  <button onClick={logoff} className="">
                    Stand By
                  </button>


                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>


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
                <Menu.Item >
                  <button onClick={logoff} className="block px-3 py-1 text-sm leading-6 text-gray-900'">
                    Stand By
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