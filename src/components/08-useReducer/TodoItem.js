import React from "react";
import PropTypes from 'prop-types';

const TodoItem = ({todo, i,handleDelete, handleToggle}) => {
  return (
    <li className="d-flex row my-2 w-100 align-items-center justify-content-around">
      <p
        className={todo.done ? `complete` : ""}
        onClick={() => handleToggle(todo.id)}
      >
        {i + 1}-{todo.desc}
      </p>
      <button
        className="btn btn-danger col-4"
        type="button"
        onClick={() => handleDelete(todo.id)}
      >
        Borrar
      </button>
    </li>
  );
};


TodoItem.propTypes={
  todo: PropTypes.object.isRequired,
  i:PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleToggle:PropTypes.func.isRequired
}


export default TodoItem;
