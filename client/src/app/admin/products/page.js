"use client";
import React from "react";
import { Input } from "@nextui-org/react";
import {Select, SelectItem} from "@nextui-org/react";


const subCategories = [
  {
    label: "Cat",
    value: "cat",
    description: "The second most popular pet in the world",
  },
  {
    label: "Suite room",
    value: "dog",
    description: "The most popular pet in the world",
  },
  {
    label: "Elephant",
    value: "elephant",
    description: "The largest land animal",
  },
  { label: "Lion", value: "lion", description: "The king of the jungle" },
  { label: "Tiger", value: "tiger", description: "The largest cat species" },
  {
    label: "Giraffe",
    value: "giraffe",
    description: "The tallest land animal",
  },
];

const page = () => {
  return (
    <div className="flex w-full justify-center h-[90vh] items-center">
      <form className="bg-slate-50 shadow-2xl rounded-lg">
        <div className="m-10">
          <Input
            label="Product Name"
            placeholder="Enter Product Name"
            className="w-96 rounded"
          />{" "}
          <br />
          <Input
            label="Category"
            placeholder="Enter Category"
            className="w-96 rounded"
          />{" "}
          <br />
          <Select
            label="Select sub category"
            placeholder="Select sub category"
            selectionMode="multiple"
            className="w-96 rounded"
          >
            {subCategories.map((animal) => (
              <SelectItem key={animal.value} value={animal.value}>
                {animal.label}
              </SelectItem> 
            ))}
          </Select>
          <br/>
          <br/>
          <Input
            label="Stock Quantity"
            placeholder="Enter Stock Quantity"
            className="w-96 rounded"
          />{" "}
          <br />
          <Input
            label="Price"
            placeholder="Enter Product Price"
            className="w-96 rounded"
          />{" "}
          <br />
          <input type="file"/>
          <br />
          <br />
          <button className="ml-32 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
