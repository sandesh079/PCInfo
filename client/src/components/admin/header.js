import Image from "next/image";
import Link from "next/link";
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
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/redux/reducerSlice/userSlice";
import { useRouter } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isLoggedIn } = useSelector((state) => state.user);
  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
  };
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

  return (
    <Navbar className="bg-background 2xl:w-[100%] xl:[100%] lg:w-[100%] sticky top-0 z-20 flex w-full drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="w-full flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">
        <div className="w-full flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <RxHamburgerMenu />
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}

          <Link className="block flex-shrink-0 lg:hidden" href="/">
            <h1>FusionTech</h1>
            {/* <img height={20} width={20} src={"/image/logo.png"} alt="Logo" /> */}
          </Link>
        </div>

        <div className="hidden sm:block  w-full">
          <div className="flex justify-between items-center xl:gap-14 lg:gap-8 md:gap-6  sm:gap-2">
            <div className="lg:block  hidden relative 2xl:w-[690px] xl:[500px] lg:[400px] h-[48px] bg-[#D7E0EE] rounded-lg">
              {/* <p className="pl-3 items-center flex absolute inset-y-0 left-0 pointer-events-none">
                <span className="justify-center items-center flex">
                  <span className="justify-center items-center flex">
                    <span className="items-center justify-center flex">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-6-6m2-5a7 7 0
                        11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </span>
                  </span>
                </span>
              </p> */}
              
            </div>

            <NavbarContent as="div" className="items-center" justify="end">
              {isLoggedIn ? <LoggedInDrop /> : null}
            </NavbarContent>
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default Header;
