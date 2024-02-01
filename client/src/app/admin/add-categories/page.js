'use client'
import React from 'react'
import {Input} from "@nextui-org/react";

const page = () => {
  return (
    <div className="flex w-full justify-center h-[90vh] items-center">
      <form className='bg-slate-50 shadow-2xl rounded-lg'>
        <div className="m-10">
          <Input label="Category" placeholder="Enter Category" className="w-96 rounded" /> <br/>
          <Input label="Sub Category" placeholder="Enter Sub Category" className="w-96 rounded" /> <br/>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Add Category</button>
        </div>
      </form>
    </div>
  )
}

export default page