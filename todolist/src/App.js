import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import {TodoForm} from './TodoForm';
import TodoList from './TodoList';
import {Todo} from './Todo';



function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>

      Todo Form
      Todo List

    <TodoList />

    </div>
  );
}

export default App;
