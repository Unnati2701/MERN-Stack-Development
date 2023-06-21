import React, { useState } from 'react'

const StateManagement = () => {

    let count = 0;

    const [likes, setLikes] = useState(0);

  return (
    <div>
        <h1>State Management in React</h1>
        <hr />

        <h1>Count : {count}</h1>

        <button className='btn btn-primary' onClick={ () => {count++; console.log(count);} }>Add Count</button>

        <h1>Likes: {likes}</h1>

        <button className='btn btn-primary' onClick={ () => {setLikes(likes+1)}}>Likes</button>
    </div>
  )
}

export default StateManagement