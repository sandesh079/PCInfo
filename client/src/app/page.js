"use client";
import NavbarComponent from "@/components/navbar/Navbar";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
     <Link href="/admin/categories" className="relative block w-auto px-6 py-3 overflow-hidden text-base font-semibold text-center text-gray-800 rounded-lg bg-slate-200 hover:text-black">Add Category</Link>
     <Link href="/admin/products" className="relative block w-auto px-6 py-3 overflow-hidden text-base font-semibold text-center text-gray-800 rounded-lg bg-slate-200 hover:text-black">Add Product</Link>
    </>
  );
};

export default page;
