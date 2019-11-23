import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { ITodo } from "../types";
import { getTodos } from "../redux/selectors"

const TodoList = ({ todos }: { todos?: ITodo[] }) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo, index) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} />;
        })
      : "No todos, yay!"}
  </ul>
);

export default connect(state => ({ todos: getTodos(state) }))(TodoList);
