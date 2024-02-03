"use client";
import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  ShoppingOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { useFormik } from "formik";
import URI from "@/config/api";
import SideBar from './components/sidebar'


const page = () => {
  const addNewProduct = async (values) => {
    const res = await fetch(`${URI}/products/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

   }
   debugger;
  const formik = useFormik({
    initialValues: {
      productName: '',
      category: '',
      stock: '',
      price: '',
      description: '',
    },
    onSubmit: values =>{
      addNewProduct(values)
    } 
  });
  return (
    <div>
      {/* <SideBar/> */}
      <div className="max-w-md mx-auto bg-white p-8 border border-gray-300 shadow-lg rounded-md">
      <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" id="name" name="name" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" id="password" name="password" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div className="flex justify-end">
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Sign Up</button>
        </div>
      </form>
    </div>
    </div>
  );
};
export default page;
