import React from 'react'

const Home = () => {
  return (
    <div>
        {/* <h1 className='text-center'>Welcome to Home Page</h1>
        <h1 className='my-text' style={{ color : 'red', backgroundColor : 'yellow' }}>Unnati</h1>  
        <input />
        <button className='btn btn-primary'>My Button</button> */}
        <header className='' style={{backgroundSize : 'cover', backgroundPosition: 'top' , backgroundImage: 'url("https://www.masala.com/cloud/2022/05/10/Never-Have-I-Ever-2-1.jpg")'}}>
          <div className='container' style={{padding: '200px 0'}}>
            <p className='display-4 fw-bold text-left my-title text-white'>
              Never Have I ever
            </p>


          </div>
        </header>
    </div>
  )
}

export default Home