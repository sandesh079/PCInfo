"use client";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import URI from "@/config/api";

export default function Products() {
    const addNewCarousel = async (values) => {
        try {
            const formData = new FormData();
            formData.append("title", values.title);
            formData.append("isActive", values.isActive);
            formData.append("image", values.image);

            const res = await fetch(`${URI}/carousel/`, {
                method: "POST",
                body: formData,
            });

            const data = await res.json();
            toast(data.msg);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const formik = useFormik({
        initialValues: {
            title: "",
            isActive: false,
            image: null,
        },
        onSubmit: (values) => {
            addNewCarousel(values);
        },
    });

    const handleFileChange = (event) => {
        formik.setFieldValue("image", event.currentTarget.files[0]);
    };

    return (
        <div className="flex min-w-full justify-center h-auto">
            <form className="max-w-full mt-12 mb-4" onSubmit={formik.handleSubmit}>
                <div className="space-y-12">
                    <div>
                        <h2 className="text-3xl flex justify-center font-semibold leading-7 text-gray-900">
                            Add New Carousel
                        </h2>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="title"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Title
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        onChange={formik.handleChange}
                                        value={formik.values.title}
                                        className="block w-full p-2 rounded-md border-current border-1 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="isActive"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Active
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="checkbox"
                                        name="isActive"
                                        id="isActive"
                                        onChange={formik.handleChange}
                                        checked={formik.values.isActive}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <input type="file" id="image" name="image" onChange={handleFileChange} />
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
                        Add Carousel
                    </button>
                </div>
            </form>
        </div>
    );
}
