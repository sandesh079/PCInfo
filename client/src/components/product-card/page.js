"use client";
import React from "react";
import { Card } from "antd";

const { Meta } = Card;
const ProductCard = (props) => {
  return (
    <div className="inline-flex">
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
    </div>
  );
};

export default ProductCard;
