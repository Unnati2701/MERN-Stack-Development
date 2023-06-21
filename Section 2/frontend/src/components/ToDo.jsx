import React, { useState } from 'react'

const ToDo = () => {

    const [todoList, setTodoList] = useState([]);

    const addTask = (e) => {
        if(e.code === 'Enter') {
            console.log(e.target.value);
            console.log('Task added');
            setTodoList([...todoList, {text: e.target.value, completed: false}]);
            console.log(todoList);
        }
    }

  return (
    <div>
        <div className='container'>
            <h1 className='text-center display-4 fw-bold'>To Do App</h1>
            <hr />

            <div className='card'>
                <div className='card-header'>
                    <input type="text" className='form-control' placeholder='Enter Task' onKeyDown={addTask} />                    
                </div>
                <div className='card-body'>
                    <ul className='list-group'>
                        {
                            todoList.map( (todo) => (
                                <li className='list-group-item'> <input type="checkbox" /> {todo.text}</li>
                            ) )
                        }
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ToDo;