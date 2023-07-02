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
    onSubmit: async (values) => {
      console.log(values);

      const res = await fetch('http://localhost:5000/user/authenticate',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(values)
      });

      console.log(res.status);

      if (res.status === 200) {
        Swal.fire({
          icon : 'success',
          title : 'User Logged in Successfully',
        })
      }else if(res.status === 401){
        Swal.fire({
          icon : 'error',
          title : 'Invalid Credentials',
      })
    } else{
      Swal.fire({
        icon : 'error',
        title : 'Something went wrong'
      })
    }
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