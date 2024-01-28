"use client";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import {  toast } from 'react-toastify';
import { useRouter } from 'next/navigation'
import Link from "next/link";
import { addUserDetails } from "@/redux/reducerSlice/userSlice";
import { useDispatch } from "react-redux";

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
      const res = await fetch("http://localhost:5000/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();
      if (res.status == 200) {
        dispatch(addUserDetails(data))
        router.push("/");
        dispatch(addUserDetails(data))
      } else{
        toast(data.msg);
      }
  }

  return (
    <div className="flex min-w-full justify-center h-[90vh] items-center">
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
          <Form className="bg-slate-50 shadow-2xl p-10 rounded-lg">
            <div className="mb-4">
              <Field
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-auto p-3 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-4">
              <Field
                name="password"
                type="password"
                placeholder="Enter your password"
                className="w-auto p-3 border border-gray-300 rounded"
              />
            </div>

            <p>Don't have an account? <Link href="/register" className="text-blue-700">SignUp</Link></p>

            <button
              type="submit"
              className="w-auto ml-30 mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
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
