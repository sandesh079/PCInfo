"use client";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import URI from "@/config/api";
import ProductTable from "@/components/admin/productTable";

export default function Products() {
  const addNewProduct = async (values) => {
    try{
      const formData = new FormData()
      formData.append("productName", values.productName)
      formData.append("brand", values.brand)
      formData.append("category", values.category)
      formData.append("storage", values.storage)
      formData.append("ram", values.ram)
      formData.append("processor", values.processor)
      formData.append("stock", values.stock)
      formData.append("price", values.price)
      formData.append("description", values.description)
      formData.append("image", values.image)

      const res = await fetch(`${URI}/products/`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      toast(data.msg);
    }catch (error){
      console.error("Error:", error)
    }
    
  };

  const formik = useFormik({
    initialValues: {
      productName: "",
      brand: "",
      category: "",
      storage: "",
      ram: "",
      processor: "",
      stock: "",
      price: "",
      description: "",
      image: null,
    },
    onSubmit: (values) => {
      addNewProduct(values);
    },
  });

  const handleFileChange = (event) => {
    formik.setFieldValue("image", event.currentTarget.files[0]);
};
  return (
    <>
    <div className="flex min-w-full justify-center h-auto">
      <form className="max-w-full p-10 mt-8 mb-4  shadow-md rounded bg-white" onSubmit={formik.handleSubmit}>
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl flex justify-center font-semibold leading-7 text-gray-900">
              Add New Product
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <label
                  htmlFor="productName"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Product Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="productName"
                    id="productName"
                    onChange={formik.handleChange}
                    value={formik.values.productName}
                    required
                    className="block w-full p-2 rounded-md border-current border-1 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-6">
                <label
                  htmlFor="processor"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Processor
                </label>
                <div className="mt-2">
                  <input
                    id="processor"
                    name="processor"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.processor}
                    required
                    className="block w-full p-2 rounded-md border-current border-1 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="brand"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Brand
                </label>
                <div className="mt-2">
                  <select
                    id="brand"
                    name="brand"
                    onChange={formik.handleChange}
                    value={formik.values.brand}
                    required
                    className="block w-full p-2 h-9 rounded-md border-current border-1 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  >
                    <option>Acer</option>
                    <option>Dell</option>
                    <option>HP</option>
                    <option>Lenovo</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="category"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Category
                </label>
                <div className="mt-2">
                  <select
                    id="category"
                    name="category"
                    onChange={formik.handleChange}
                    value={formik.values.category}
                    required
                    className="block w-full p-2 h-9 rounded-md border-current border-1 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  >
                    <option>Gaming Laptops</option>
                    <option>Business Laptops</option>
                    <option>Ultrabooks</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="storage"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Storage
                </label>
                <div className="mt-2">
                  <input
                    id="storage"
                    name="storage"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.storage}
                    required
                    className="block w-full p-2 rounded-md border-current border-1 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="ram"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  RAM
                </label>
                <div className="mt-2">
                  <input
                    id="ram"
                    name="ram"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.ram}
                    required
                    className="block w-full p-2 rounded-md border-current border-1 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              

              <div className="sm:col-span-3">
                <label
                  htmlFor="stock"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Available in Stock
                </label>
                <div className="mt-2">
                  <input
                    id="stock"
                    name="stock"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.stock}required
                    className="block w-full p-2 rounded-md border-current border-1 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="price"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Price
                </label>
                <div className="mt-2">
                  <input
                    id="price"
                    name="price"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.price}
                    required
                    className="block w-full p-2 rounded-md border-current border-1 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Product description
                </label>
                <div className="mt-2">
                  <textarea
                    type="text"
                    name="description"
                    id="description"
                    onChange={formik.handleChange}
                    value={formik.values.description}
                    required
                    className="block w-full p-2 rounded-md border-current border-1 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <input 
                type="file" 
                id="image" 
                name="image" 
                required
                onChange={handleFileChange} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-base font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Product
          </button>
        </div>
      </form>
      
    </div>
    <div className="mt-5 mb-8">
      <h1 className="mb-3 flex justify-center text-2xl">Products Table</h1>
      <ProductTable/>
    </div>
    </>

  );
}
