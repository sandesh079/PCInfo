"use client";
import React from "react";
import { Card } from "antd";
import Link from "next/link";

const { Meta } = Card;
const ProductCard = (props) => {
  return (
    <div className="inline-flex">
      <Link href={"/products/"+props?.item?._id}>
      <Card
        hoverable
        style={{
          width: 250,
          margin: 8,
        }}
        cover={
          <img
            alt="Product"
            src={props?.item?.image}
          />
        }
      >
        
        <Meta
          title={props?.item?.productName}
          description={props?.item?.description}
        />
        <Meta title={"Rs. " + props?.item?.price} />
      </Card>
      </Link>
    </div>
  );
};

export default ProductCard;
