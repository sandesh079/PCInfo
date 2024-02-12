"use client";
import { useEffect, useState } from "react";
import URI from "@/config/api";
import HomeLayout from "@/layout/HomeLayout";

export default function Products({ params }) {
  const [product, setProduct] = useState({});

  const fetchProducts = async () => {
    const res = await fetch(`${URI}/products/${params.id}`);
    const data = await res.json();
    setProduct(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <HomeLayout>
        <div>
          Brand: {product?.brand}
          <br />
          Name: {product?.productName}
          <img
            alt="ecommerce"
            className="lg:w-1/3 w-full lg:h-auto h-64 object-cover object-center rounded-xl"
            src={product?.image}
          />
          Price: {product?.price}
        </div>
      </HomeLayout>
    </>
  );
}
