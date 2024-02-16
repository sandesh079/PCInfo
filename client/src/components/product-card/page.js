"use client";
import React from "react";
import { Card } from "antd";
import Link from "next/link";

const { Meta } = Card;
const ProductCard = (props) => {
  return (
    <Link
      className="relative  flex  w-auto h-auto flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
      href={"/products/" + props?.item?._id}
    >
      <a
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
        href="#"
      >
        <div className="h-auto w-[250px]">
          <img
            className="object-contain h-full w-full"
            src={props?.item?.image}
            alt="product image"
          />
        </div>

        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          {props?.item?.brand}
        </span>
      </a>
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-bold  text-slate-900">
            {props?.item?.productName}
          </h5>
        </a>
        <div className="w-[240px] h-auto">
          <p>{props?.item?.processor}</p>
        </div>

        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-xl font-bold text-blue-700">NPR. {props?.item?.price}</span>
            <span className="text-sm  text-slate-900 line-through">$699</span>
          </p>
        </div>
        <a
          href="#"
          className="flex items-center justify-center rounded-md bg-blue-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Add to cart
        </a>
      </div>
    </Link>
  );
};

export default ProductCard;
