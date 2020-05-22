import React from 'react';
import './App.css';
import TodoItem from './todo-item';
import todo from './todo-data';

//App component
const App = () => {
  
  const todoData = todo.map(item => <TodoItem key={item.id} item={item}/>)
  
  return (
    //JSX
    <div className="todo-container">
    <h1>React Todo List </h1>
         {todoData}
    </div>
  
  
  );
}

export default App;
