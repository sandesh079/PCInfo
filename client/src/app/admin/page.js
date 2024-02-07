"use client";
import React, { useState } from "react";
import URI from "@/config/api";
import Link from "next/link";
import { toast } from "react-toastify";
import ProductTable from "@/components/admin/productTable";

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
    <div className="m-12 ">
    
    </div>
  );
};
export default page;
