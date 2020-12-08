
import React, { useEffect, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const Local_Storage_Key = 'react-todo-list-todos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(Local_Storage_Key));

    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(Local_Storage_Key, JSON.stringify());
  }, [todos]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function itsComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo !== id));
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>ToDo List</p>
        <TodoForm addTodo={addTodo} />
        <TodoList 
        todos={todos} 
        itsComplete={itsComplete} 
        removeTodo={removeTodo}
        />
      </header>
    </div>
  );
}

export default App;
