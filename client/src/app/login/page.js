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
  return (
      <div className="flex w-full justify-center h-[90vh] items-center">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className="bg-slate-50 shadow-2xl p-10 rounded-lg" >

              <div className="mb-4">
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 border border-gray-300 rounded"
                />
                {errors.email && touched.email ? (
                  <div className="text-red-500 mt-2">{errors.email}</div>
                ) : null}
              </div>

              <div className="mb-4">
                <Field
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full p-3 border border-gray-300 rounded"
                />
                {errors.password && touched.password ? (
                  <div className="text-red-500 mt-2">{errors.password}</div>
                ) : null}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-700 transition duration-300"
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
