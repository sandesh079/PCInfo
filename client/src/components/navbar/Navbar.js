"use client";
import React from "react";
import {
  Navbar,
  Button,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/redux/reducerSlice/userSlice";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { isLoggedIn } = useSelector((state) => state.user);
  const handleLogout = ()=>{
    dispatch(logout())
    router.push('/')
  }
  const LoggedInDrop = () => {
    return (
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            color="secondary"
            name="Jason Hughes"
            size="sm"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">zoey@example.com</p>
          </DropdownItem>
          <DropdownItem key="settings">My Settings</DropdownItem>
          <DropdownItem key="configurations">Configurations</DropdownItem>
          <DropdownItem onClick={handleLogout} key="logout" color="danger">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  };
  const AuthButtons = () => {
    return (
      <>
        <Button as={Link} className="sm:flex" href="/login">
          Login
        </Button>
        <Button as={Link} className="sm:flex bg-blue-500 hover:bg-blue-700 text-white" href="/register">
          Register
        </Button>
      </>
    );
  };
  return (
    <Navbar isBordered>
      <NavbarContent justify="start">
        <NavbarBrand >
          <Link href={'/'} className="hidden sm:block font-bold text-inherit">FUSION TECH</Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-5">
          <NavbarItem>
            <Link href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/products">
              Products
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/">
              About
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        {isLoggedIn ? <LoggedInDrop /> : <AuthButtons />}
      </NavbarContent>
    </Navbar>
  );
}


export default NavBar;
