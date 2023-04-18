import { useState } from "react";

import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

import classes from "./App.module.css";

function App() {
  // initially, the todo list is empty
  const [todoList, setTodoList] = useState([]);

  const addTodoHandler = (newTodo) => {
    // add enteredTodo to the todoList
    setTodoList((prevTodoList) => {
      return [...prevTodoList, newTodo];
    });
  };

  const removeTodoHandler = (todoId) => {
    setTodoList((prevTodoList) => {
      return prevTodoList.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Todos Tracker</h1>
      <NewTodo onAddTodo={addTodoHandler} />
      <TodoList todos={todoList} onRemove={removeTodoHandler} />
    </div>
  );
}

export default App;
