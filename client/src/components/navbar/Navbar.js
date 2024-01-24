// 'use client'
// import React from "react";
// import Link from "next/link";
// import {
//   Navbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
//   Input,
//   Image,
// } from "@nextui-org/react";
// // import {Button, ButtonGroup} from "@nextui-org/react";

// const NavbarComponent = () => {
//   return (
//     <Navbar className="h-20 ">
//       <NavbarContent className="ml-auto" justify="start">
//         <NavbarBrand >
//           <Image src="/ftlogo.png" width="80" height="70"/>
//         </NavbarBrand>
//         <NavbarContent className="hidden sm:flex gap-10">
//           <NavbarItem>
//             <Link href="/">Home</Link>
//           </NavbarItem>
//           <NavbarItem>
//             <Link href="/">About</Link>
//           </NavbarItem>
//           <NavbarItem>
//             <Link href="/">Products</Link>
//           </NavbarItem>
//         </NavbarContent>
//       </NavbarContent>

//       <NavbarContent as="div" className="items-center" justify="center" >
//         <Input
//           classNames={{
//             base: "max-w-full sm:max-w-[16rem] h-12",
//             mainWrapper: "h-full",
//             input: "text-medium",
//           }}
//           placeholder="Type to search..."
//           size="sm"
//           type="search"
//         />
//       </NavbarContent>

//       <NavbarContent className="hidden sm:flex gap-4" justify="end">
//           <NavbarItem>
//             <Link href="/login" className="relative block w-auto px-6 py-3 overflow-hidden text-base font-semibold text-center text-gray-800 rounded-lg bg-slate-200 hover:text-black">Login</Link>
//           </NavbarItem>
//           <NavbarItem>
//             <Link href="/register" className="relative block w-auto px-6 py-3 overflow-hidden text-base font-semibold text-center text-gray-800 rounded-lg bg-blue-300 hover:text-black">Register</Link>
//           </NavbarItem>

//       </NavbarContent>
//     </Navbar>
//   );
// };

// export default NavbarComponent;


'use client'
// import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from "next/link";


const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Products', href: '/admin/products', current: false },
  { name: 'About', href: '/', current: false },
  { name: 'Contact Us', href: '/', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const NavBar=()=> {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-12 w-auto"
                    src="/ftlogo.png"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden sm:flex gap-4" justify="end">

                <Link href="/login" className="relative block w-auto px-3 py-2 overflow-hidden text-base font-semibold text-center text-gray-800 rounded-lg bg-slate-200 hover:text-black">Login</Link>
                <Link href="/register" className="relative block w-auto px-3 py-2 overflow-hidden text-base font-semibold text-center text-gray-800 rounded-lg bg-blue-300 hover:text-black">Register</Link>

              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link href={item.href} className="relative block w-auto px-3 py-2 overflow-hidden text-base font-semibold text-center text-gray-800 rounded-lg bg-slate-200 hover:text-black">{item.name}</Link>
              ))}
              <Link href="/login" className="relative block w-auto px-3 py-2 overflow-hidden text-base font-semibold text-center text-gray-800 rounded-lg bg-slate-200 hover:text-black">Login</Link>
              <Link href="/register" className="relative block w-auto px-3 py-2 overflow-hidden text-base font-semibold text-center text-gray-800 rounded-lg bg-blue-300 hover:text-black">Register</Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}


export default NavBar