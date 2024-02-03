"use client";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import {  toast } from 'react-toastify';
import { useRouter } from 'next/navigation'
import Link from "next/link";
import { addUserDetails } from "@/redux/reducerSlice/userSlice";
import { useDispatch } from "react-redux";
import URI from "@/config/api";

// Define the validation schema
const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const page = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const handleLogin = async (values) => {
      const res = await fetch(`${URI}/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();
      if (res.status == 200) {
        
        dispatch(addUserDetails(data))
        router.push('/admin');
        dispatch(addUserDetails(data))
      } else{
        toast(data.msg);
      }
  }

  return (
    <div className="flex min-w-full justify-center h-auto mt-12">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignInSchema}
        onSubmit={(values) => {
          handleLogin(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" >
                Email
              </label>
              <Field
                name="email"
                type="email"
                className="w-full lg:w-96 p-3 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" >
                Password
              </label>
              <Field
                name="password"
                type="password"
                className="w-full p-3 border border-gray-300 rounded"
              />
            </div>

            <p className="text-sm">Don't have an account?{" "} <Link href="/register" className="text-blue-700 underline">SignUp</Link></p>

            <button
              type="submit"
              className="w-full mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default page;
