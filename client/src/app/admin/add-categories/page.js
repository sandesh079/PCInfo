'use client'
import React from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import URI from "@/config/api";

const Page = () => {
  const addNewCategory = async (values) => {
    try {
      const res = await fetch(`${URI}/categories`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      toast(data.msg);
    } catch (error) {
      console.error(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      category: "",
      isSubCategory: false,
      subCategory: "",
    },
    onSubmit: (values) => {
      addNewCategory(values);
    },
  });

  return (
    <div className="flex min-w-full justify-center h-auto">
      <form className="max-w-full mt-12 mb-4" onSubmit={formik.handleSubmit}>
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl flex justify-center font-semibold leading-7 text-gray-900">
              Add New Category
            </h2>

            <div className="mt-10 ">
              <div className="">
                <label
                  htmlFor="category"
                  className="flex justify-start text-sm font-medium leading-6 text-gray-900"
                >
                  Category
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="category"
                    id="category"
                    onChange={formik.handleChange}
                    value={formik.values.category}
                    required
                    className="block w-full p-2 rounded-md border-current border-1 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="isSubCategory"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Sub Category?
              </label>
              <div className="mt-0">
                <input
                  type="checkbox"
                  name="isSubCategory"
                  id="isSubCategory"
                  onChange={formik.handleChange}
                  checked={formik.values.isSubCategory}
                />
              </div>
            </div>
            {formik.values.isSubCategory && ( // Conditionally render if isSubCategory is true
              <div className="mt-2 ">
                <div className="">
                  <label
                    htmlFor="subCategory"
                    className="flex justify-start text-sm font-medium leading-6 text-gray-900"
                  >
                    Sub Category
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="subCategory"
                      id="subCategory"
                      onChange={formik.handleChange}
                      value={formik.values.subCategory}
                      className="block w-full p-2 rounded-md border-current border-1 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Category
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
