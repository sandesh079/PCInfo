"use client";
import { Formik, Field, Form } from "formik";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import * as Yup from "yup";

const page = () => {
  const router = useRouter()

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
      const res = await fetch("http://localhost:5000/api/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }
    );

    const data = await res.json();
    if (res.status == 200) {
      router.push("/login");
    }
    toast(data.msg);
    } catch (error) {
      console.error(error)
    }
  
  };
  return (
    <div className="flex w-full justify-center h-[90vh] items-center">
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
          <Form className="bg-slate-50 shadow-2xl p-10 rounded-lg">
            <div className="mb-4 flex flex-col">
              <Field
                name="fullName"
                type="text"
                placeholder="Enter your fullname"
                className="w-auto p-3 border border-gray-300 rounded"
              />
              {errors.fullName && (
                <div className="text-red-500">{errors.fullName}</div>
              )}
            </div>
            

            <div className="mb-4 flex flex-col">
              <Field
                name="phoneNumber"
                type="text"
                placeholder="Enter your phonenumber"
                className="w-auto p-3 border border-gray-300 rounded"
              />
              {errors.phoneNumber && (
                <div className="text-red-500">{errors.phoneNumber}</div>
              )}
            </div>
            

            <div className="mb-4 flex flex-col">
              <Field
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-auto p-3 border border-gray-300 rounded"
              />
              {errors.email && (
                <div className="text-red-500">{errors.email}</div>
              )}
            </div>

            <div className="mb-4 flex flex-col">
              <Field
                name="password"
                type="password"
                placeholder="Enter your password"
                className="w-auto p-3 border border-gray-300 rounded"
              />
              {errors.password && (
                <div className="text-red-500">{errors.password}</div>
              )}
            </div>

            <button
              type="submit"
              className="w-auto ml-30 mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
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
