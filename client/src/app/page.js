"use client";
import Card from "@/components/product-card/page";
import URI from "@/config/api";
import "flowbite";
import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import HomeLayout from "@/layout/HomeLayout";

const page = () => {
  const [productList, setProductList] = useState([]);
  const [carouselList, setCarouselList] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch(`${URI}/products`);
    const data = await res.json();
    setProductList(data);
  };
  const fetchCarousel = async () => {
    const res = await fetch(`${URI}/carousel`);
    const data = await res.json();
    setCarouselList(data);
  };
  useEffect(() => {
    fetchCarousel();
    fetchProducts();
  }, []);

  return (
    <HomeLayout>
      <Carousel autoplay>
        {carouselList.map((item, id) => {
          return (
            <>
              <div key={id}>
                <img
                  style={{ height: "80vh", width: "100%", objectFit: "cover" }}
                  src={item.image}
                  className=""
                />
              </div>
            </>
          );
        })}
      </Carousel>
      <h1 className="m-12 flex justify-center font-bold text-3xl">
        Products Overview
      </h1>

      {productList.length > 0 &&
        productList.map((item) => {
          return <Card item={item} />;
        })}
    </HomeLayout>
  );
};

export default page;
