"use client";
import React from "react";
import { Card } from "antd";

const { Meta } = Card;
const ProductCard = (props) => {
  return (
    <div className="flex flex-col">
      <Card
        hoverable
        style={{
          width: 300,
          margin: 24,
        }}
        cover={
          <img
            alt="Product"
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D"
          />
        }
      >
        <Meta
          title={props.item.productName}
          description={props.item.description}
        />
        <Meta title={"Rs. " + props.item.price} />
      </Card>
    </div>
  );
};
export default ProductCard;
