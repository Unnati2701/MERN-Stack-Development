import { useFormik } from "formik";
import React from "react";
import * as Yup from 'yup';

const signupSchema = Yup.object().shape({
  name: Yup.string().name('Invalid email').required('Email is Required'),
  email: Yup.string().email('Invalid email').required('Email is Required'),
  password: Yup.string().required('Password is Required')
});

const Signup = () => {
  // initializing formik

  const signupForm = useFormik({
    initialValues: {
      name:"",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      console.log(values);

      const res = await fetch('https://localhost:5000/user/add', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(values)
      });

      console.log(res.status);
    },
    validationSchema: signupSchema
  });

  return (
    <div>
      <div className="col-md-3 mx-auto d-flex align-items-center vh-100">
        <div className="card w-100 shadow-lg">
          <div className="card-body p-5">
            <h3 className="my-5 text-center">SignUp Here</h3>

            <form onSubmit={signupForm.handleSubmit}>
            <label htmlFor="">Name</label>
              <span style={{marginLeft: '10px', fontSize: 10, color: 'red'}}>{signupForm.errors.name}</span>
              <input
                type="name"
                className="form-control mb-4"
                name="name"
                onChange={signupForm.handleChange}
                value={signupForm.values.name}
              />

              <label htmlFor="">Email</label>
              <span style={{marginLeft: '10px', fontSize: 10, color: 'red'}}>{signupForm.errors.email}</span>
              <input
                type="email"
                className="form-control mb-4"
                name="email"
                onChange={signupForm.handleChange}
                value={signupForm.values.email}
              />


              <label htmlFor="">Password</label>
              <span style={{marginLeft: '10px', fontSize: 10, color: 'red'}}>{signupForm.errors.password}</span>
              <input
                type="password"
                className="form-control mb-4"
                name="password"
                onChange={signupForm.handleChange}
                value={signupForm.values.password}
              />

              <button type="submit" className="my-5 btn btn-primary w-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;