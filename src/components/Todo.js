import classes from "./Todo.module.css";

const Todo = (props) => {
  const removeTodoHandler = () => {
    // pass id of this todo
    props.onRemove(props.todo.id);
  };

  return (
    <div className={classes["todo-box"]} onClick={removeTodoHandler}>
      <p>{props.todo.text}</p>
    </div>
  );
};

export default Todo;
