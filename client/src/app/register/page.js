"use client";
import { Formik, Field, Form } from "formik";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import * as Yup from "yup";
import Link from "next/link";

const page = () => {
  const router = useRouter();

  const SignupSchema = Yup.object().shape({
    fullName: Yup.string().required("Fullname is required"),
    phoneNumber: Yup.string().min(6, "Invalid Phonenumber").required("Phonenumber is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleRegister = async (values) => {
    try {
      const res = await fetch(`http://localhost:${process.env.NEXT_PUBLIC_API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();
      if (res.status === 200) {
        router.push("/login");
      }
      toast(data.msg);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex mt-12 min-w-full justify-center h-auto">
      <Formik
        initialValues={{
          fullName: "",
          phoneNumber: "",
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          handleRegister(values);
        }}
      >
        {({ errors }) => (
          <Form className="max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-5">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                Full Name
              </label>
              <Field
                name="fullName"
                type="text"
                className={`w-full lg:w-96 p-3 border rounded ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.fullName && <p className="absolute text-red-500 text-xs">{errors.fullName}</p>}
            </div>

            <div className="mb-5">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
                Phone Number
              </label>
              <Field
                name="phoneNumber"
                type="text"
                className={`w-full p-3 border rounded ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.phoneNumber && (
                <p className="absolute text-red-500 text-xs">{errors.phoneNumber}</p>
              )}
            </div>

            <div className="mb-5">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <Field
                name="email"
                type="email"
                className={`w-full p-3 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.email && <p className="absolute text-red-500 text-xs">{errors.email}</p>}
            </div>

            <div className="mb-5">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <Field
                name="password"
                type="password"
                className={`w-full p-3 border rounded ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.password && <p className="absolute text-red-500 text-xs">{errors.password}</p>}
            </div>

            <p className="text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-700 underline">
                Login
              </Link>
            </p>
            <button
              type="submit"
              className="w-full mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default page;
