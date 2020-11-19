import React from "react";
import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";

const TodoList = ({ todo, i,handleDelete, handleToggle }) => {
  return (
      <TodoItem
      key={todo.id }
      i={i}
      todo={todo}
      handleToggle={handleToggle}
      handleDelete={handleDelete}
      />
  );
};


TodoList.propTypes={
  todo: PropTypes.object.isRequired,
  i:PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleToggle:PropTypes.func.isRequired
}



export default TodoList;
