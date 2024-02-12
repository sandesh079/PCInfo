'use client'
import { Form, Input, Select, Button, Upload, message, Modal } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import URI from '@/config/api';
import ProductTable from '@/components/admin/productTable';
import { useSelector } from 'react-redux';

const { Option } = Select;

export default function Products() {
  const [categories, setCategories] = useState([]);
  const [addLoading,setAddLoading]= useState(false)
  const [productList, setProductList] = useState([]);
  const token = useSelector((state)=>state.user.token)

  const fetchCategories = async () => {
    try {
      const res = await fetch(`${URI}/categories`,{
        headers:{
          authorization:token
        }
      });
      const data = await res.json();
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  const fetchProducts = async () => {
    try {
      const res = await fetch(`${URI}/products`);
      const data = await res.json();
      setProductList(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    // Fetch categories from server
    

    fetchProducts();

    fetchCategories();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = async (values) => {
    try {
      setAddLoading(true)
      const formData = new FormData();
      formData.append("productName", values.productName);
      formData.append("brand", values.brand);
      formData.append("category", values.category);
      formData.append("storage", values.storage);
      formData.append("ram", values.ram);
      formData.append("processor", values.processor);
      formData.append("stock", values.stock);
      formData.append("price", values.price);
      formData.append("description", values.description);
      formData.append("image", values.image.file.originFileObj);
   
      const res = await fetch(`${URI}/products/`,
    
      {
        method: "POST",
        body: formData,
        
          headers:{
             authorization:token
          }
        ,
      },);
      const data = await res.json();
      fetchProducts()
      message.success(data.msg);
      
      setAddLoading(false)
      handleCancel()

    } catch (error) {
      setAddLoading(false)
      console.error("Error:", error);
      message.error("Error adding product");
    }
  };



  return (
    <>
  
      <div className="mt-5 mb-8">
        {/* Products Table component goes here */}
      </div>
      <Button className="rounded-md bg-indigo-600  text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={showModal}>
        ADD PRODUCTS
      </Button>
      <Modal 
      footer={false}
      open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Form
    layout='vertical'
      className="max-w-full  "
      onFinish={onFinish}
    >
      <h2 className="text-3xl p-4 flex justify-center font-semibold leading-7 text-gray-900">
        Add New Product
      </h2>
      <div className='grid grid-cols-2 gap-4'>
      <Form.Item
        label="Product Name"
        className=''
        name="productName"
        rules={[{ required: true, message: 'Please input product name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Processor"
        name="processor"
        rules={[{ required: true, message: 'Please input processor!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Brand"
        name="brand"
        rules={[{ required: true, message: 'Please select brand!' }]}
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
        rules={[{ required: true, message: 'Please select category!' }]}
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
        rules={[{ required: true, message: 'Please input storage!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="RAM"
        name="ram"
        rules={[{ required: true, message: 'Please input RAM!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Available in Stock"
        name="stock"
        rules={[{ required: true, message: 'Please input stock!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Price"
        name="price"
        rules={[{ required: true, message: 'Please input price!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Product description"
        name="description"
        className='col-span-2'
        rules={[{ required: true, message: 'Please input description!' }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        label="Image"
        className='col-span-2'
        name="image"
        rules={[{ required: true, message: 'Please upload image!' }]}
      >
        <Upload>
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
      </Form.Item>

      </div>
   
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Button htmlType="button" onClick={handleCancel} className="text-base font-semibold leading-6 text-gray-900">
          Cancel
        </Button>
        <Button
        loading={addLoading}
          type="primary"
          htmlType="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add Product
        </Button>
      </div>
    </Form>
      </Modal>
      <ProductTable products={productList}/>
    </>
  );
}
