import React, { useState } from 'react'

const ToDo = () => {

    const [todoList, setTodoList] = useState([]);

    const addTask = (e) => {
        if(e.code === 'Enter'){
            const text = e.target.value;
            console.log(text);

            setTodoList([...todoList, {text: text, completed: false}]);
            console.log(todoList);
        }
    }

  return (
    <div>
        <div className='container pt-5'>
            
            <h1 className='text-center mb-5'>TODO App</h1>

            <div className="card">
                <div className="card-header">
                    <input type="text" className='form-control' onKeyDown={addTask} />
                </div>
                <div className="card-body">

                </div>
            </div>

        </div>
    </div>
  )
}

export default ToDo;