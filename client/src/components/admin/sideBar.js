import React, { useEffect, useRef, useState } from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {DashboardRoutes} from "@/routes/routes";

const MenuItem = ({ icon, name, route }) => {
  const pathname = usePathname();
  const pathSplit = pathname.split("/");
  const routeSplit = route.split("/");
  return (
    <Link
      href={route}
      className={`${
        pathSplit[pathSplit.length - 2] === routeSplit[routeSplit.length - 1]
          ? "bg-primary rounded-lg text-white"
          : "text-[#374957]"
      } text-center text-[14px] flex gap-1 [&>*]:my-auto mx-[24px] text-md  py-3 border-b-[1px] border-b-white/10 `}
    >
      <div
        className={` text-xl flex items-center justify-center [&>*]:mx-auto w-[30px]`}
      >
        {icon}
      </div>
      <h1 className=" xl:text-[14px] md:text-[14px]">{name}</h1>
    </Link>
  );
};

const SideBar = ({ sidebarOpen, setSidebarOpen }) => {
  const trigger = useRef(null);
  const sidebar = useRef(null);

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <aside
      ref={sidebar}
      className={`z-50 absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-background duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <Link href="/dashboard" className="p-10">
          {/* <Image src={"/image/logo.png"} height={20} width={20} alt="logo" /> */}
        </Link>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className=" px-4  lg:px-6">
          <div className="flex flex-col w-full">
            {DashboardRoutes.map((item, id) => (
              <MenuItem
                key={id}
                name={item.name}
                route={item.href}
                icon={item.icons}
              />
            ))}
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default SideBar;
