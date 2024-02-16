"use client";
import React, { useEffect, useState } from "react";
import Card from "@/components/product-card/page";
import URI from "@/config/api";
import HomeLayout from "@/layout/HomeLayout";

const AllProducts = () => {
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
    <HomeLayout>
      <div className="mt-5">
        {productList.map((item) => {
          return <Card item={item} />;
        })}
      </div>
    </HomeLayout>
  );
};

export default AllProducts;
