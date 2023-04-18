import { useState } from "react";

import classes from "./NewTodo.module.css";

// generate 3 digit long random key
function randKey() {
  let randStr = "";
  randStr += Math.random();
  randStr += Math.random();
  randStr += Math.random();
  return randStr;
}

const NewTodo = (props) => {
  const [enteredTodo, setEnteredTodo] = useState("");

  const todoInputChangeHandler = (event) => {
    setEnteredTodo(event.target.value);
  };

  const addTodoHandler = (event) => {
    if (event.target.value.trim().length == 0) {
      return;
    }
    // pass the new Todo to the App.jsa
    const newTodo = {
      id: randKey(),
      text: enteredTodo,
    };

    props.onAddTodo(newTodo);
  };

  return (
    <div className={classes.container}>
      <div>
        <input
          type="text"
          className={classes.input}
          onChange={todoInputChangeHandler}
          value={enteredTodo}
        ></input>
      </div>
      <div>
        <button className={classes.button} onClick={addTodoHandler}>
          Add
        </button>
      </div>
    </div>
  );
};

export default NewTodo;
