"use client";
import React from "react";
import { Table, Popconfirm, Button } from "antd";

const ProductTable = ({ products, onDelete }) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "productName",
      key: "productName",
      fixed: "left",
      width: "130px"
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
      fixed: "left",
      width: "100px"
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      width: "150px"
    },
    {
      title: "Storage",
      dataIndex: "storage",
      key: "storage",
      width: "110px"
    },
    {
      title: "RAM",
      dataIndex: "ram",
      key: "ram",
      width: "130px"
    },
    {
      title: "Processor",
      dataIndex: "processor",
      key: "processor",
      width: "250px"
    },
    {
      title: "Available Stock",
      dataIndex: "stock",
      key: "stock",
      width: "130px"
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: "100px"
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: "200px"
    },
    {
      title: "Image",
      dataIndex: "image",
      width: "130px",
      key: "image",
      render: (image) => (
        <img src={image} alt="Product" style={{ width: "120px", height: "60px" }} />
      ),
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: "100px",
      render: (_, record) => (
        <Popconfirm
          title="Are you sure you want to delete this product?"
          onConfirm={() => onDelete(record._id)}
          okText="Yes"
          cancelText="No"
        >
          <Button type="link" danger>
            Delete
          </Button>
        </Popconfirm>
      ),
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={products}
        scroll={{ x: 1500 }}
        pagination={false}
      />
    </div>
  );
};

export default ProductTable;
