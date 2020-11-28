import React from 'react';
import useForm from '../../hooks/useForm';

const FormTodo = ({ handleAddTodo }) => {

    const [{ description }, handleChange, reset] = useForm({
      description: "",
    });

    const handleSubmit = (e) => {
      e.preventDefault();

      if (description.trim()==='') {
        return;
      }
  
      const newTodo = {
        id: new Date().getTime(),
        desc: description,
        done: false,
      };

      handleAddTodo(newTodo);
      reset();
    };

    return ( 
        <div className="col-5 d-flex flex-column justify-content-center">
          <h4>Agregar TODO</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="description"
              placeholder="Aprender..."
              autoComplete="off"
              className="form-control"
              onChange={handleChange}
              value={description}
            />
            <button
              type="submit"
              className="btn btn-outline-primary mt-1 btn-block"
            >
              Agregar
            </button>
          </form>
        </div>
     );
}
 
export default FormTodo;