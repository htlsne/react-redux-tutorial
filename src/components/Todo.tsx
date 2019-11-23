import React from "react";
import cx from "classnames";
import { connect } from "react-redux";
import { ITodo } from "../types";
import { toggleTodo } from "../redux/actions";

interface TodoProps {
  todo: ITodo;
  toggleTodo: (id: any) => any;
}

const Todo: React.FunctionComponent<TodoProps> = props => {
  const todo = props.todo;
  return (
    <li
      className="todo-item"
      onClick={
        () => {
          props.toggleTodo(todo.id);
        } /** dispatches action to toggle todo */
      }
    >
      {todo && todo.completed ? "👌" : "👋"}{" "}
      <span
        className={cx(
          "todo-item__text",
          todo && todo.completed && "todo-item__text--completed"
        )}
      >
        {todo.content}
      </span>
    </li>
  );
};

export default connect(null, { toggleTodo })(Todo);
