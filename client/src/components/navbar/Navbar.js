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
    <Navbar isBordered>
      <NavbarContent justify="start">
        <NavbarBrand >
          <Image src="/ftlogo.png"/>
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

      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[16rem] h-12",
            mainWrapper: "h-full",
            input: "text-large",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          type="search"
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4">
          <NavbarItem>
            <Link href="/login" className="relative block w-auto px-6 py-3 overflow-hidden text-base font-semibold text-center text-gray-800 rounded-lg bg-slate-200 hover:text-black">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/register" className="relative block w-auto px-6 py-3 overflow-hidden text-base font-semibold text-center text-gray-800 rounded-lg bg-blue-300 hover:text-black">Register</Link>
          </NavbarItem>

      </NavbarContent>



      {/* <div className="flex gap-4 items-center">
        <Link
          href="/login"
          className="relative block w-auto px-6 py-3 overflow-hidden text-base font-semibold text-center text-gray-800 rounded-lg bg-slate-200 hover:text-black">
          Login
        </Link>
        <Link
          href="/register"
          className="relative block w-auto px-6 py-3 overflow-hidden text-base font-semibold text-center text-gray-800 rounded-lg bg-blue-300 hover:text-black">
          Register
        </Link>
      </div> */}
    </Navbar>
  );
};

export default NavbarComponent;
