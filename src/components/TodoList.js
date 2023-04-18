import Todo from "./Todo";

import classes from "./TodoList.module.css";

const TodoList = (props) => {
  const removeTodoHandler = (todoId) => {
    props.onRemove(todoId);
  };

  return (
    <div className={classes["todo-list"]}>
      <ul>
        {props.todos.map((todo) => (
          <li key={todo.id}>
            <Todo todo={todo} onRemove={removeTodoHandler} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
