import React from 'react'
import { toast } from 'react-hot-toast'

const EventHandling = () => {
    const myClick = () => {
        toast.success('Nice Toast 💎')
    }

    const changeBackground = (color) => {
        document.body.style.backgroundColor = color;
    }


  return (
    <div className='container'>
        <h1 className='text-center'>Event Handling</h1>
        <hr />

        <h4>CLick Event</h4>
        <button className='btn btn-primary' onClick={ () => { alert('CLick Event') } }>Click Event</button>
        <button className='btn btn-success' onClick={ myClick }> Another Click Event</button>

        <hr />

        <h4>Change Event</h4>

        <input type="text" onChange={ (e) => {console.log(e.target.value);} } className='form-control'/>
        <input type="color" onChange={ (e) => {changeBackground(e.target.value) } } />
    </div>
  )
}

export default EventHandling