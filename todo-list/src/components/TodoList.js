import React from 'react';
import Todo from './Todo';

function TodoList({ todos, itsComplete, removeTodo }) {

    return (
        <ul>
            {todos.map(todo => (
                <Todo 
                key={todo.id} 
                todo={todo} 
                itsComplete={itsComplete} 
                removeTodo={removeTodo}
                />
            ))}
        </ul>
    );
}



export default TodoList;
