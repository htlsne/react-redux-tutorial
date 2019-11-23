import React from "react";

import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

interface AddTodoProps {
  addTodo: (input: string) => void;
}
interface AddTodoState {
  input: string;
}

class AddTodo extends React.Component<AddTodoProps, AddTodoState> {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = (input: string): void => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    // dispatches actions to add todo
    this.props.addTodo(this.state.input);
    // sets state back to empty string
    this.setState({ input: "" });
  };

  render(): React.ReactNode {
    return (
      <div>
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
            this.updateInput(e.target.value)
          }
          value={this.state.input}
        />
        <button className="add-todo" onClick={this.handleAddTodo}>
          Add Todo
        </button>
      </div>
    );
  }
}

export default connect(null, { addTodo })(AddTodo);
