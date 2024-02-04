"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import URI from "@/config/api";
import Link from "next/link";
import { toast } from "react-toastify";
import ProductTable from "@/app/admin/components/productTable"


const page = () => {

  // const addNewProduct = async (values) => {
  //   const res = await fetch(`${URI}/products/`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(values),
  //   });
  //   const data = res.json()
    
  //   toast(data.msg)
    

  //  }
  // const formik = useFormik({
  //   initialValues: {
  //     productName: '',
  //     category: '',
  //     stock: '',
  //     price: '',
  //     description: '',
  //   },
  //   onSubmit: values =>{
  //     addNewProduct(values)
  //   } 
  // });
  return (
    <div className="m-12 flex">
    this is dashboard
     <Link className="rounded-xl bg-gray-400 hover:bg-gray-500 p-2 m-3" href={'/admin/add-categories'}>Add Category</Link>
     <Link className="rounded-xl bg-gray-400 hover:bg-gray-500 p-2 m-3" href={'/admin/add-products'}>Add Product</Link>  
      
    </div>
  );
};
export default page;

