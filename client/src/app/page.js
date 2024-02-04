"use client";
import Card from "@/components/product-card/page";
import URI from "@/config/api";
import "flowbite";
import React, { useEffect, useState } from "react";
import { Carousel } from 'antd';

const page = () => {
  const [productList, setProductList] = useState([]);
  const fetchProducts = async () => {
    const res = await fetch(`${URI}/products`);
    const data = await res.json();
    setProductList(data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Carousel autoplay >
        
        <div>
          <img style={{height: '80vh', width: '100%', objectFit: "cover"}} src="/slide-01.jpg" className=""/>
        </div>
        <div>
          <img style={{height: '80vh', width: '100%', objectFit: "cover"}} src="/slide-02.jpg" />
        </div>
        <div>
          <img style={{height: '80vh', width: '100%', objectFit: "cover"}} src="/slide-04.jpg" />
        </div>
        <div>
          <img style={{height: '80vh', width: '100%', objectFit: "cover"}} src="/slide-05.jpg" />
        </div>
      </Carousel>
      <h1 className="m-12 flex justify-center font-bold text-3xl">Products Overview</h1>

      {productList.length > 0 &&
        productList.map((item) => {
          return <Card item={item} />;
        })}
    </>
  );
};

export default page;
