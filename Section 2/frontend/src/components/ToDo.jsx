import React, { useRef, useState } from 'react'
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';

const ToDo = () => {

    const [todoList, setTodoList] = useState([]);

    const inputRef = useRef(null);

    const addTask = (e) => {
        if(e.target.value === "") return;
        if(e.code === 'Enter') {
            console.log(e.target.value);
            console.log('Task added');
            setTodoList([...todoList, {text: e.target.value, completed: false}]);
            console.log(todoList);
            inputRef.current.value = "";
        }
    };

    const completeTask = (index) => {
        console.log(index);
        const temp = todoList[index];
        temp.completed = true;
        setTodoList([...todoList.slice(0, index), temp, ...todoList.slice(index + 1)]);
    }

    const removeTask = (index) => {
        console.log(index);
        const temp = todoList;
        temp.splice(index, 1);
        setTodoList([...temp]);
        toast.success('Task deleted');
    }

  return (
    <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: 1, x: 0}}
        exit={{ opacity: 0, x: '-100%'}} 
        transition={{duration: 0.5, stiffness: 50, type: 'spring'}}
    >
        <div className='container'>
            <h1 className='text-center display-4 fw-bold'>To Do App</h1>
            <hr />

            <div className='card'>
                <div className='card-header'>
                    <input 
                        type="text" 
                        className='form-control' 
                        placeholder='Enter Task'
                        ref={inputRef} 
                        onKeyDown={addTask} 
                    />                    
                </div>
                <div className='card-body'>
                    <ul className='list-group'>
                        {
                            todoList.map( (todo,index) => (
                                <li className='list-group-item'> 
                                    <div className='d-flex justify-content-between'>
                                        <div> <input type="checkbox" checked={todo.completed} /> <span className='fw-bold' style={{color: todo.completed ? 'green': 'red', textDecoration: todo.completed ? 'line-through' : ''}}> {todo.text} </span> </div>
                                        <div> 
                                            <button className='btn btn-success' onClick={() => {completeTask(index)}}>Complete</button>
                                            <button className='btn btn-danger' onClick={() => {removeTask(index)}}>Delete</button>
                                        </div>

                                    </div>
                                    
                                </li>
                            ) )
                        }
                    </ul>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default ToDo;