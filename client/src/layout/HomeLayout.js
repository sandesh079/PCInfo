"use client";
import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/Navbar";
import { ToastContainer } from "react-toastify";
import React from "react";
const HomeLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {/* <section className="text-gray-600 body-font relative"> */}
        <div className="">
        <ToastContainer hideProgressBar theme="dark" />
          {children}
          <Footer />
        </div>
      {/* </section> */}
    </div>
  );
};

export default HomeLayout;
