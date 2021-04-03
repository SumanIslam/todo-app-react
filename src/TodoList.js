import React, { Component } from "react";
import "./TodoList.css";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  addTodo(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  }

  removeTodo(todoId) {
    this.setState({
      todos: this.state.todos.filter((item) => item.id !== todoId),
    });
  }

  updateTodo(id, task) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, todoItem: task };
      }
      return todo;
    });

    this.setState({
      todos: updatedTodos,
    });
  }

  render() {
    const todos = this.state.todos.map((todo) => (
      <Todo
        key={todo.id}
        id={todo.id}
        completed={todo.completed}
        todoItem={todo.todoItem}
        removeTodo={this.removeTodo}
        updateTodo={this.updateTodo}
      />
    ));
    return (
      <div className="TodoList">
        <h1>
          Get To Work! <span>Get things done, one item at a time.</span>
        </h1>
        <ul>{todos}</ul>
        <NewTodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}
