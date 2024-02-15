import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Input, Upload, Select } from "antd";
import React from "react";

const EditProductForm = ({
    categories,
    handleFinish,
    handleCancel,
    addLoading,
    product,
  }) => {
    return (
      <Form
        layout="vertical"
        className="max-w-full  "
        onFinish={handleFinish}
        initialValues={product}
      >
        <h2 className="text-3xl p-4 flex justify-center font-semibold leading-7 text-gray-900">
          Add New Product
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <Form.Item
            label="Product Name"
            className=""
            name="productName"
            rules={[{ required: true, message: "Please input product name!" }]}
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
            rules={[{ required: true, message: "Please input description!" }]}
          >
            <Input.TextArea />
          </Form.Item>
  
          <Form.Item
            label="Image"
            className="col-span-2"
            name="image"
            rules={[{ required: true, message: "Please upload image!" }]}
          >
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
    );
  };

  export default EditProductForm;