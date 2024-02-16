"use client";
import React, { useState } from "react";
import { Table, Popconfirm, Button, Modal, Form } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Input, Upload, Select } from "antd";

const ProductTable = ({
  products,
  categories,
  onDelete,
  handleEdit,
  addLoading,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [product, setProduct] = useState({});

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModal = (record) => {
    form.resetFields();
    form.setFieldsValue(record);
    setIsModalOpen(true);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "productName",
      key: "productName",
      fixed: "left",
      width: "130px",
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
      fixed: "left",
      width: "100px",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      width: "150px",
    },
    {
      title: "Storage",
      dataIndex: "storage",
      key: "storage",
      width: "110px",
    },
    {
      title: "RAM",
      dataIndex: "ram",
      key: "ram",
      width: "130px",
    },
    {
      title: "Processor",
      dataIndex: "processor",
      key: "processor",
      width: "250px",
    },
    {
      title: "Available Stock",
      dataIndex: "stock",
      key: "stock",
      width: "130px",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: "100px",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: "200px",
    },
    {
      title: "Image",
      dataIndex: "image",
      width: "130px",
      key: "image",
      render: (image) => (
        <img
          src={image}
          alt="Product"
          style={{ width: "120px", height: "60px" }}
        />
      ),
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: "120px",
      render: (_, record) => (
        <>
          <div className="grid grid-cols-2">
            <div className="col-span-1">
              <Button type="link" onClick={() => showModal(record)}>
                Edit
              </Button>
            </div>
            <div className="col-span-1">
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
            </div>
          </div>
        </>
      ),
    },
  ];
  const [form] = Form.useForm();

  return (
    <div>
      <Table
        columns={columns}
        dataSource={products}
        scroll={{ x: 1500 }}
        pagination={false}
      />
      {JSON.stringify(product)}
      <Modal
        footer={false}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {product && (
          <Form
            form={form}
            key={product._id}
            layout="vertical"
            className="max-w-full  "
            onFinish={(value) => {
              handleEdit(value);
              handleCancel()
            }}
          >
            <h2 className="text-3xl p-4 flex justify-center font-semibold leading-7 text-gray-900">
              Add New Product
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <Form.Item
                label="Product Name"
                className=""
                style={{
                  display: "none",
                }}
                name="_id"
                rules={[
                  { required: true, message: "Please input product name!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Product Name"
                className=""
                name="productName"
                rules={[
                  { required: true, message: "Please input product name!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Processor"
                name="processor"
                rules={[{ required: true, message: "Please input processor!" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Brand"
                name="brand"
                rules={[{ required: true, message: "Please select brand!" }]}
              >
                <Select>
                  {categories.map((category) => (
                    <Option key={category._id} value={category.category}>
                      {category.category}
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item
                label="Category"
                name="category"
                rules={[{ required: true, message: "Please select category!" }]}
              >
                <Select>
                  {categories.map((category) => (
                    <Option key={category._id} value={category.subCategory}>
                      {category.subCategory}
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item
                label="Storage"
                name="storage"
                rules={[{ required: true, message: "Please input storage!" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="RAM"
                name="ram"
                rules={[{ required: true, message: "Please input RAM!" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Available in Stock"
                name="stock"
                rules={[{ required: true, message: "Please input stock!" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Price"
                name="price"
                rules={[{ required: true, message: "Please input price!" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Product description"
                name="description"
                className="col-span-2"
                rules={[
                  { required: true, message: "Please input description!" },
                ]}
              >
                <Input.TextArea />
              </Form.Item>

              <Form.Item label="Image" className="col-span-2" name="image">
                <Upload>
                  <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
              </Form.Item>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <Button
                htmlType="button"
                onClick={handleCancel}
                danger
                className="text-base font-semibold leading-6 text-gray-900"
              >
                Cancel
              </Button>
              <Button
                loading={addLoading}
                type="primary"
                htmlType="submit"
                className="rounded-md bg-indigo-600 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add Product
              </Button>
            </div>
          </Form>
        )}
      </Modal>
    </div>
  );
};

export default ProductTable;
