import React, { Component } from "react";
import TodoItem from "./TodoItem";
export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <ul className="my-5 list-group">
        <h3 className="text-center text-capitalize">todo list</h3>
        {items.map(item => {
          return (
            <TodoItem
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            />
          );
        })}
        <button
          type="button"
          className="mt-5 btn btn-danger btn-block text-uppercase"
          onClick={clearList}
        >
          clear list
        </button>
      </ul>
    );
  }
}
