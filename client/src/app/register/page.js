'use client'
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  phoneNumber: Yup.string()
    .min(8, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
  .min(4, 'Too Short!')
  .max(30, 'Too Long!')
  .required('Required')
});

const ValidationSchemaExample = () => (
  <div>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="fullName" placeholder="enter your fullname"/>
          {errors.fullName && touched.fullName ? (
            <div>{errors.fullName}</div>
          ) : null}
          <br/>
          <br/>
          <Field name="phoneNumber" placeholder="enter your phone number"/>
          {errors.phoneNumber && touched.phoneNumber ? (
            <div>{errors.phoneNumber}</div>
          ) : null}
          <br/>
          <br/>
          <Field name="email" type="email" placeholder="enter your email"/>
          {errors.email && touched.email ? <div>{errors.email}</div> : null}
          <br/>
          <br/>
          <Field name="password" type="password" placeholder="enter your password"/>
          {errors.password && touched.password ? <div>{errors.password}</div> : null}
          <br/>
          <br/>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default ValidationSchemaExample