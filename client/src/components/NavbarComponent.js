import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import {Button, ButtonGroup} from "@nextui-org/react";
import Link from 'next/link'


const NavbarComponent = ()=> {
  return (
    <Navbar isBordered>
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <p className="hidden sm:block font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-3">
          <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page" color="secondary">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          type="search"
        />
      </NavbarContent>
      <div className="flex gap-4 items-center">

      <Link href="/login" className="relative block w-auto px-6 py-3 overflow-hidden text-base font-semibold text-center text-gray-800 rounded-lg hover:text-black">
        Login
      </Link>
      <Link href="/register"  className="relative block w-auto px-6 py-3 overflow-hidden text-base font-semibold text-center text-gray-800 rounded-lg bg-blue-300 hover:text-black" >
        Register
      </Link>
    </div>
    </Navbar>
  );
}

export default NavbarComponent