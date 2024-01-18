"use client";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

// Define the validation schema
const SignupSchema = Yup.object().shape({ 
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const page = () => {
  const handleLogin = async (values) => {
    try {
      const res = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Set the content type to JSON
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      });
      // Handle the response here (e.g., check for success or failure)

    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
      <div className="flex w-full justify-center h-[90vh] items-center">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            handleLogin(values)

          }}
        >
          {({ errors, touched }) => (
            <Form className="bg-slate-50 shadow-2xl p-10 rounded-lg" >

              <div className="mb-4">
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-96 p-3 border border-gray-300 rounded"
                />
              </div>

              <div className="mb-4">
                <Field
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-96 p-3 border border-gray-300 rounded"
                />
              </div>

              <button
                type="submit"
                className="w-40 ml-30 mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
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
