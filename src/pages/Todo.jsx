import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Todo.css';


function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
      navigate('/');
    }

    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, [navigate]);

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      const updatedTodos = [...todos, { text: newTodo, completed: false }];
      setTodos(updatedTodos);
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      setNewTodo('');
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const toggleCompletion = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const logout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    navigate('/login');
  };

  const displayUsername = () => {
    return localStorage.getItem('username');
  };

  
  

  return (
    <div>
      <div className='header'>
        <h1>To-Do List</h1>
      </div>

      <div className='textfield'>
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button className='btn btn-success' onClick={addTodo}>
          Add 
        </button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index} >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleCompletion(index)}
              />
              {todo.text}
              <button className='btn btn-danger delete-button ' onClick={() => deleteTodo(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className='profile'>
        <h1>{displayUsername()}</h1>
        
         
        <button className='btn btn-denger' onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Todo;
