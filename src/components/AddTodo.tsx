import React from "react";

class AddTodo extends React.Component<{}, { input: string }> {
  constructor(props: {}) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = (input: string): void => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    // dispatches actions to add todo
    // sets state back to empty string
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

export default AddTodo;
