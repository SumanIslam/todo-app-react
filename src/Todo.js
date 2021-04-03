import React, { Component } from "react";
import "./Todo.css";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.todoItem,
      isEditing: false,
      completed: this.props.completed,
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }

  handleRemove() {
    this.props.removeTodo(this.props.id);
  }

  handleToggle() {
    this.setState({ ...this.state, isEditing: !this.state.isEditing });
  }

  handleChange(evt) {
    this.setState({ ...this.state, task: evt.target.value });
  }

  handleUpdate(evt) {
    evt.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({ ...this.state, isEditing: !this.state.isEditing });
  }

  toggleCompletion() {
    this.setState({ ...this.state, completed: !this.state.completed });
  }
  render() {
    return (
      <div>
        {this.state.isEditing ? (
          <div className="Todo">
            <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
              <input value={this.state.task} onChange={this.handleChange} />
              <button>Save</button>
            </form>
          </div>
        ) : (
          <div className="Todo">
            <li
              className={
                this.state.completed ? "Todo-task completed" : "Todo-task"
              }
              onClick={this.toggleCompletion}
            >
              {this.props.todoItem}
            </li>
            <div className="Todo-buttons">
              <button onClick={this.handleToggle}>
                <i className="fas fa-pen"></i>
              </button>
              <button onClick={this.handleRemove}>
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
