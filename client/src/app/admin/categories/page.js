'use client'
import React from 'react'
import {Input} from "@nextui-org/react";

const page = () => {
  return (
    <div className=' items-center justify-center flex'>
      <div className="w-48">
        <Input label="Category" placeholder="Enter Category" /> <br/>
        <Input label="Sub Category" placeholder="Enter Sub Category" /> <br/>
      <button className="w-40  bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full">Add Category</button>

      </div>
    </div>
  )
}

export default page