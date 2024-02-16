'use client'
import { Button, message, Modal } from 'antd';
import React, { useState, useEffect } from 'react';
import URI from '@/config/api';
import ProductTable from '@/components/admin/productTable';
import { useSelector } from 'react-redux';
import AddProductForm from '@/components/admin/productForm';


export default function Products() {
  const [categories, setCategories] = useState([]);
  const [addLoading,setAddLoading]= useState(false)
  const [productList, setProductList] = useState([]);
  const token = useSelector((state)=>state.user.token)
  const [isAdd,setIsAdd] = useState(true);

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
  const defaultProductValues = {
    productName: "",
    brand: "",
    category:"",
    storage:"",
    ram: "",    
    processor: "",
    stock: "",
    price: "",
    description: "",
    image: "",
  }

  useEffect(() => {

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

  const handleEdit = async(values)=>{

    
    let formData = new FormData();

    formData.append("productName", values.productName);
    formData.append("brand", values.brand);
    formData.append("category", values.category);
    formData.append("storage", values.storage);
    formData.append("ram", values.ram);
    formData.append("processor", values.processor);
    formData.append("stock", values.stock);
    formData.append("price", values.price);
    formData.append("description", values.description);

    formData.append("image", 
    typeof values.image === 'string' ?
    values.image : 
     values.image.file.originFileObj);
 
    let requestOptions = {
      method: 'PUT',
      body: formData,
    };
const res =  await fetch(`${URI}/products/${values._id}`, requestOptions)
fetchProducts()
  
  }

  const handleDeleteProduct = async (productId) => {
    try {
      const res = await fetch(`${URI}/products/${productId}`, {
        method: "DELETE",
        headers: {
          Authorization: token,
        },
      });
      const data = await res.json();
      if (res.ok) {
        fetchProducts();
        message.success(data.message);
      } else {
        message.error(data.message);
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      message.error("Error deleting product");
    }
  };


  return (
    <>
      <Button type='primary' className="rounded-md bg-indigo-600 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 mb-4 focus-visible:outline-indigo-600" onClick={()=>{
        setIsAdd(true)
        showModal()
      }}>
        ADD NEW PRODUCTS
      </Button>
      <Modal 
      footer={false}
      open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>

          <AddProductForm categories={categories}
          handleCancel={handleCancel}
          title={'Add New'}
          handleFinish={onFinish}
          addLoading={addLoading}
          />
       
      </Modal>
      <ProductTable  products={productList} onDelete={handleDeleteProduct}
      handleEdit={handleEdit}
      categories={categories}
      />
    </>
  );
}
