"use client";
import React from 'react';
import { Table } from 'antd';
const columns = [
  {
    title: 'Name',
    width: 100,
    dataIndex: 'productName',
    key: 'productName',
    fixed: 'left',
  },
  {
    title: 'Category',
    width: 100,
    dataIndex: 'category',
    key: 'category',
    fixed: 'left',
  },
   
  {
    title: 'Storage',
    dataIndex: 'storage',
    key: 'storage',
    width: 150,
  },
  {
    title: 'RAM',
    dataIndex: 'ram',
    key: 'ram',
    width: 150,
  },
  {
    title: 'Processor',
    dataIndex: 'processor',
    key: 'processor',
    width: 150,
  },
  {
    title: 'Available Stock',
    dataIndex: 'stock',
    key: 'category',
    width: 150,
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    width: 150,
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    width: 150,
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a>Edit</a>,
  },
];
const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}
const ProductTable = () => (
  <Table
    columns={columns}
    dataSource={data}
    scroll={{
      x: 1500,
    }}
  />
);
export default ProductTable;
