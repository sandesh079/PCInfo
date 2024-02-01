'use client'
import { useFormik } from "formik";
import { toast } from "react-toastify";


export default function Products() {
  const addNewProduct = async (values) => {
    const res = await fetch("http://localhost:5000/products/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = res.json()
    toast(data.msg)

}


  const formik = useFormik({
    initialValues: {
      productName: '',
      category: '',
      stock: '',
      price: '',
      description: '',
    },
    onSubmit: values =>{
      addNewProduct(values)
    } 
  });
  return (
    <div className="flex min-w-full justify-center h-auto">
                <form className="max-w-full mt-12 mb-4" onSubmit={formik.handleSubmit}>
                  <div className="space-y-12">
                    <div >
                      <h2 className="text-3xl flex justify-center font-semibold leading-7 text-gray-900">
                        Add New Product
                      </h2>

                      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
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
                              className="block w-full p-2 rounded-md border-current border-1 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="category"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Product Category
                          </label>
                          <div className="mt-2">
                            <select
                              id="category"
                              name="category"
                              onChange={formik.handleChange}
                              value={formik.values.category}
                              autoComplete="category-name"
                              className="block w-full p-2 h-9 rounded-md border-current border-1 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 sm:text-sm sm:leading-6"
                            >
                              <option>Acer</option>
                              <option>Dell</option>
                              <option>Lenovo</option>
                            </select>
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
                              value={formik.values.stock}
                              autoComplete="stock"
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
                              autoComplete="price"
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
                              autoComplete="description"
                              className="block w-full p-2 rounded-md border-current border-1 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-4">
                          <input type="file" id="myFile" name="filename" />
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
    
  )
}
