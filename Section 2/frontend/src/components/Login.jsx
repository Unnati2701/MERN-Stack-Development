import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is Required'),
  password: Yup.string().required('Password is Required')
});

const Login = () => {

  //initializing formik
  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema : loginSchema
  });

  return (
    <div>
      <div className='col-md-4 mx-auto d-flex align-items-center vh-100'>
        <div className='card w-100 shadow-lg'>
          <div className='card-body p-5'>
            <h3 className='my-5 text-center'>Login Here</h3>
            <form onSubmit={loginForm.handleSubmit}>

              <label htmlFor="">Email</label>
              <span style={{marginLeft: '10px', fontSize: 10, color: 'red'}}>{loginForm.errors.email}</span>
              <input 
                type="email" 
                className='form-control mb-4' 
                name='email' 
                onChange={loginForm.handleChange} 
                value={loginForm.values.email} 
              />

              <label htmlFor="">Password</label>
              <span style={{marginLeft: '10px', fontSize: 10, color: 'red'}}>{loginForm.errors.password}</span>
              <input 
                type="password" 
                className='form-control mb-4' 
                name='password' 
                onChange={loginForm.handleChange} 
                value={loginForm.values.password}
              />

              <button type='submit' className='my-5 btn btn-primary w-100'>Submit</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login