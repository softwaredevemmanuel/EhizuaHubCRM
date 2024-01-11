import logo from "../../assets/ehizuahublogo.png"
import { FaTools } from "react-icons/fa";
import { RiHomeOfficeFill } from "react-icons/ri";
import { CiMemoPad } from "react-icons/ci";
import { HiClipboardList } from "react-icons/hi";
import { MdMenuBook } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { PiStudent } from "react-icons/pi";
import { FaUserMinus } from "react-icons/fa6";
import { BsPatchQuestionFill } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import { FaBuilding } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";
import { MdDashboard } from "react-icons/md";
import { TbReport } from "react-icons/tb";

import { useState, Fragment } from "react"
import { Link } from "react-router-dom";


import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'


const dashboards = [
  { id: "1", icon: <MdDashboard />, name: "Dashboard", url: "dashboard" }
]

const location = [
  { id: "1", icon: <RiHomeOfficeFill />, name: "Location", url: "office-locations/hr" }
]


const staff = [
  { id: "1", icon: <CiMemoPad />, name: "Memo", url: "staff-memo/hr" },
  { id: "2", icon: <TbReport />, name: "Weekly Report", url: "staff-report-list/hr" },
  { id: "3", icon: <HiClipboardList />, name: "Attendance", url: "staff-attendance/hr" },
  { id: "4", icon: <IoMdPerson />, name: "Income/Expenditures", url: "income-expenditure/hr" },
  { id: "5", icon: <IoMdPerson />, name: "Salary", url: "staff-salary/hr" },
  { id: "6", icon: <BsPatchQuestionFill />, name: "Complaints", url: "staff-complaints/hr" },
  { id: "7", icon: <FaTools />, name: "Inventory", url: "inventory/hr" },
  { id: "8", icon: <GiReceiveMoney />, name: "Loan", url: "staff-loan/hr" },
  { id: "9", icon: <FaUserMinus />, name: "Leave section", url: "leave-management" },

]
const school = [
  { id: "1", icon: <CiMemoPad />, name: "Memo", url: "school-memo/hr" },
  { id: "2", icon: <FaBuilding />, name: "Patner Schools", url: "partner-schools/hr" },
  { id: "4", icon: <BsPatchQuestionFill />, name: "Complaints", url: "school-complaints/hr" },

]

const students = [
  { id: "1", icon: <MdMenuBook />, name: "Courses and Curriculum", url: "student-course/hr" },
  { id: "2", icon: <CiMemoPad />, name: "Memo", url: "student-memo/hr" },
  { id: "3", icon: <PiStudent />, name: "student Section", url: "student-center/hr" },
  { id: "5", icon: <BsPatchQuestionFill />, name: "Complaints", url: "student-complaints/hr" },
  { id: "3", icon: <CiDiscount1 />, name: "Course Discounts", url: "course-discount/hr" },
]


const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}




const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#134574] px-6 pb-4 py-3">
                  <div className="w-full  bg-white rounded-[4px] px-[11px] py-[18px]"><img src={logo} alt="" /></div>
                  <nav className="flex flex-1 flex-col">
                    {/* <ul role="list" className="-mx-2 space-y-1"> */}
                    <ul className="-mx-2 space-y-1">
                      {dashboards.map((item) => (
                        <li key={item.id}>
                          <Link to={item.url}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-indigo-700 text-white'
                                : 'text-indigo-200 hover:text-white hover:bg-indigo-700',
                              'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                            )}
                          >
                            <div className={classNames(
                              item.current ? 'text-white flex items-center' : 'text-indigo-200 group-hover:text-white flex items-center',
                              'h-6 w-6 shrink-0 flex items-center'
                            )}>{item.icon}</div>
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="text-xs font-semibold leading-6 text-indigo-200">LOCATION</div>
                    {/* <ul role="list" className="-mx-2 space-y-1"> */}
                    <ul className="-mx-2 space-y-1">
                      {location.map((item) => (
                        <li key={item.id}>
                          <Link to={item.url}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-indigo-700 text-white'
                                : 'text-indigo-200 hover:text-white hover:bg-indigo-700',
                              'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                            )}
                          >
                            <div className={classNames(
                              item.current ? 'text-white flex items-center' : 'text-indigo-200 group-hover:text-white flex items-center',
                              'h-6 w-6 shrink-0 flex items-center'
                            )}>{item.icon}</div>
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div class="text-xs font-semibold leading-6 text-indigo-200">STAFF SECTION</div>
                    {/* <ul role="list" className="flex flex-1 flex-col gap-y-7"> */}
                    <ul className="flex flex-1 flex-col gap-y-7">
                      <li>
                        {/* <ul role="list" className="-mx-2 space-y-1"> */}
                        <ul className="-mx-2 space-y-1">
                          {staff.map((item) => (
                            <li key={item.id}>
                              <Link to={item.url}
                                href={item.href}
                                className={classNames(
                                  item.current
                                    ? 'bg-indigo-700 text-white'
                                    : 'text-indigo-200 hover:text-white hover:bg-indigo-700',
                                  'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                )}
                              >
                                <div className={classNames(
                                  item.current ? 'text-white flex items-center' : 'text-indigo-200 group-hover:text-white flex items-center',
                                  'h-6 w-6 shrink-0 flex items-center'
                                )}>{item.icon}</div>
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li>
                        <div className="text-xs font-semibold leading-6 text-indigo-200">SCHOOL SECTION</div>
                        {/* <ul role="list" className="-mx-2 mt-2 space-y-1"> */}
                        <ul className="-mx-2 mt-2 space-y-1">
                          {school.map((item) => (
                            <li key={item.id}>
                              <Link to={item.url}
                                href={item.href}
                                className={classNames(
                                  item.current
                                    ? 'bg-indigo-700 text-white'
                                    : 'text-indigo-200 hover:text-white hover:bg-indigo-700',
                                  'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                )}
                              >
                                <div className={classNames(
                                  item.current ? 'text-white flex items-center' : 'text-indigo-200 group-hover:text-white flex items-center',
                                  'h-6 w-6 shrink-0 flex items-center'
                                )}>{item.icon}</div>
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <div className="text-xs font-semibold leading-6 text-indigo-200">STUDENTS SECTION</div>
                      {/* <ul role="list" className="-mx-2 mt-2 space-y-1"> */}
                      <ul className="-mx-2 mt-2 space-y-1">
                        {students.map((item) => (
                          <li key={item.name}>
                            <Link to={item.url}
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? 'bg-indigo-700 text-white flex items-center'
                                  : 'text-indigo-200 hover:text-white hover:bg-indigo-700 flex items-center',
                                'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold items-center'
                              )}
                            >
                              <div className={classNames(
                                item.current ? 'text-white flex items-center' : 'text-indigo-200 group-hover:text-white  flex items-center',
                                'h-6 w-6 shrink-0 flex items-center'
                              )}>{item.icon}</div>
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed  lg:z-50 lg:flex lg:w-72 lg:flex-col h-screen overflow-hidden">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex flex-col gap-y-5 bg-[#134574] px-6 pb-4 py-3 overflow-y-auto h-full">
          <div className="w-full  bg-white rounded-[4px] px-[11px] py-[18px]"><img src={logo} alt="" /></div>
          <nav className="flex flex-1 flex-col">
            {/* <ul role="list" className="-mx-2 space-y-1"> */}
            <ul className="-mx-2 space-y-1">
              {dashboards.map((item) => (
                <li key={item.id}>
                  <Link to={item.url}
                    href={item.href}

                    className={classNames(
                      item.current
                        ? 'bg-blue-300 text-white'
                        : 'text-indigo-200 hover:text-white hover:bg-blue-300',
                      'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                    )}
                  >
                    <div className={classNames(
                      item.current ? 'text-white flex items-center' : 'text-indigo-200 group-hover:text-white flex items-center',
                      'h-6 w-6 shrink-0 flex items-center'
                    )}>{item.icon}</div>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="text-xs font-semibold leading-6 text-indigo-200">LOCATION</div>
            {/* <ul role="list" className="-mx-2 space-y-1"> */}
            <ul className="-mx-2 space-y-1">
              {location.map((item) => (
                <li key={item.id}>
                  <Link to={item.url}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-blue-400 text-white'
                        : 'text-indigo-200 hover:text-white hover:bg-blue-400',
                      'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                    )}
                  >
                    <div className={classNames(
                      item.current ? 'text-white flex items-center' : 'text-indigo-200 group-hover:text-white flex items-center',
                      'h-6 w-6 shrink-0 flex items-center'
                    )}>{item.icon}</div>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div class="text-xs font-semibold leading-6 text-indigo-200">STAFF SECTION</div>
            {/* <ul role="list" className="flex flex-1 flex-col gap-y-7"> */}
            <ul className="flex flex-1 flex-col gap-y-7">
              <li>
                {/* <ul role="list" className="-mx-2 space-y-1"> */}
                <ul className="-mx-2 space-y-1">
                  {staff.map((item) => (
                    <li key={item.id}>
                      <Link to={item.url}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-blue-500 text-white'
                            : 'text-indigo-200 hover:text-white hover:bg-blue-500',
                          'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                        )}
                      >
                        <div className={classNames(
                          item.current ? 'text-white flex items-center' : 'text-indigo-200 group-hover:text-white flex items-center',
                          'h-6 w-6 shrink-0 flex items-center'
                        )}>{item.icon}</div>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li>
                <div className="text-xs font-semibold leading-6 text-indigo-200">STUDENTS SECTION</div>
                {/* <ul role="list" className="-mx-2 mt-2 space-y-1"> */}
                <ul className="-mx-2 mt-2 space-y-1">
                  {students.map((item) => (
                    <li key={item.name}>
                      <Link to={item.url}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-blue-600 text-white flex items-center'
                            : 'text-indigo-200 hover:text-white hover:bg-blue-600 flex items-center',
                          'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold items-center'
                        )}
                      >
                        <div className={classNames(
                          item.current ? 'text-white flex items-center' : 'text-indigo-200 group-hover:text-white  flex items-center',
                          'h-6 w-6 shrink-0 flex items-center'
                        )}>{item.icon}</div>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="text-xs font-semibold leading-6 text-indigo-200">SCHOOL SECTION</div>

                {/* <ul role="list" className="-mx-2 mt-2 space-y-1"> */}
                <ul className="-mx-2 mt-2 space-y-1">
                  {school.map((item) => (
                    <li key={item.id}>
                      <Link to={item.url}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-indigo-700 text-white'
                            : 'text-indigo-200 hover:text-white hover:bg-indigo-700',
                          'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                        )}
                      >
                        <div className={classNames(
                          item.current ? 'text-white flex items-center' : 'text-indigo-200 group-hover:text-white flex items-center',
                          'h-6 w-6 shrink-0 flex items-center'
                        )}>{item.icon}</div>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

            </ul>
          </nav>
        </div>
      </div>









      <div className="lg:ml-72">
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
          <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* Separator */}
          <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <form className="relative flex flex-1" action="#" method="GET">
              <label htmlFor="search-field" className="sr-only">
                Search
              </label>
              <MagnifyingGlassIcon
                className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                aria-hidden="true"
              />
              <input
                id="search-field"
                className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                placeholder="Search..."
                type="search"
                name="search"
              />
            </form>
            <div className="flex items-center gap-x-4 lg:gap-x-6">
              <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Separator */}
              <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true" />

              {/* Profile dropdown */}
              <Menu as="div" className="relative">
                <Menu.Button className="-m-1.5 flex items-center p-1.5">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full bg-gray-50"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <span className="hidden lg:flex lg:items-center">
                    <span className="ml-4 text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">
                      Mr Emmanuel
                    </span>
                    <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
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
                    {userNavigation.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <a
                            href={item.href}
                            className={classNames(
                              active ? 'bg-gray-50' : '',
                              'block px-3 py-1 text-sm leading-6 text-gray-900'
                            )}
                          >
                            {item.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Sidebar
