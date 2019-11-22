import React from "react";
import Todo from "./Todo";
import { ITodo } from "../types";

const TodoList = ({ todos }: { todos?: ITodo[] }) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo, index) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} />;
        })
      : "No todos, yay!"}
  </ul>
);

export default TodoList;
