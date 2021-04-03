import React, { Component } from "react";
import "./NewTodoForm.css";
import { v4 as uuidv4 } from "uuid";

export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { todoItem: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    evt.preventDefault();
    this.setState({ todoItem: evt.target.value });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    const newTodo = { ...this.state, id: uuidv4(), completed: false };
    this.props.addTodo(newTodo);
    this.setState({ todoItem: "" });
  }
  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <label htmlFor="todo">New Todo</label>
        <div>
          <input
            type="text"
            id="todo"
            name="todo"
            value={this.state.todoItem}
            onChange={this.handleChange}
            placeholder="New Todo.."
          />
          <button>ADD TODO</button>
        </div>
      </form>
    );
  }
}
