import React, { useState } from 'react';
import {v1 as uuid} from 'uuid';

function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    function inputChange(e) {
        setTodo({ ...todo, task: e.target.value});
    }

    function handleSumbit(e) {
        e.preventDefault(); //to prevent defaulf broswer functionalty 

        //remove white space
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuid.v4() });
            //reset task input
            setTodo({ ...todo, task: "" });
        }
    }

    return (
        <form onSubmit={handleSumbit}>
            <input
            name='task'
            type='text'
            value={todo.task}
            onChange={inputChange}
            />
            <button type='submit'>Submit</button>
        </form>
    );
}

export default TodoForm;
