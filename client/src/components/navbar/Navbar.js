'use client'
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  Image,
} from "@nextui-org/react";
// import {Button, ButtonGroup} from "@nextui-org/react";
import Link from "next/link";

const NavbarComponent = () => {
  return (
    <Navbar className="h-20 ">
      <NavbarContent className="ml-auto" justify="start">
        <NavbarBrand >
          <Image src="/ftlogo.png" width="80" height="70"/>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-10">
          <NavbarItem>
            <Link href="/">Home</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/">About</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/">Products</Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="center" >
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[16rem] h-12",
            mainWrapper: "h-full",
            input: "text-medium",
          }}
          placeholder="Type to search..."
          size="sm"
          type="search"
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
          <NavbarItem>
            <Link href="/login" className="relative block w-auto px-6 py-3 overflow-hidden text-base font-semibold text-center text-gray-800 rounded-lg bg-slate-200 hover:text-black">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/register" className="relative block w-auto px-6 py-3 overflow-hidden text-base font-semibold text-center text-gray-800 rounded-lg bg-blue-300 hover:text-black">Register</Link>
          </NavbarItem>

      </NavbarContent>
    </Navbar>
  );
};

export default NavbarComponent;
