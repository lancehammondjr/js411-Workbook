import React from 'react';

function Todo({ todo, itsComplete, removeTodo }) {
    function checkboxClicked() {
        itsComplete(todo.id); 
    }

    function removeClick() {
        removeTodo(todo.id);
    }

    return (
        <div style={{ display: 'flex'}}>
            <input type='checkbox' onClick={checkboxClicked}/>
            <li style={{
                color: 'white',
                textDecoration: todo.comleted ? 'line-through' : null
            }}
            >{todo.task}</li>
            <button onClick={removeClick}>X</button>
        </div>
        
    );
}


export default Todo;
