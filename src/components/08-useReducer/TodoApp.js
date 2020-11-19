import React, { useEffect, useReducer } from "react";
import FormTodo from "./FormTodo";
import "./styles.css";
import TodoList from "./TodoList";
import { todoReducer } from "./todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

//Component
const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  const handleAddTodo=(newTodo)=>{
    dispatch({
      type: "add",
      payload: newTodo,
    });
  }

  const handleToggle=(todoId)=>{
    dispatch({
      type:'toggle',
      payload:todoId
    })
  }

  const handleDelete = (id) => {
    dispatch({
      type: "delete",
      payload: id,
    });
  };

  return (
    <div>
      <h1>TodosApp {todos.length} </h1>
      <hr />
      <div className="row">
        <div className="col-7  d-flex flex-column justify-content-center">
          <h2 className="">Todos</h2>
          <ul className="d-flex flex-column justify-content-start p-0">
            {todos.map((todo, i) => (
              <TodoList
              key={todo.id }
              i={i}
              todo={todo}
              handleToggle={handleToggle}
              handleDelete={handleDelete}
              />
            ))}
          </ul>
        </div>
        <FormTodo
          handleAddTodo={handleAddTodo}
        />
      </div>
    </div>
  );
};

export default TodoApp;
