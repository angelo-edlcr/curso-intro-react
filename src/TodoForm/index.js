import React from 'react';
import './TodoForm.css'
import { TodoContext } from '../TodoContext';


function TodoForm() {
    const [newValue, setNewValue] = React.useState('');
    const [itemExists, setItemExistence] = React.useState('');

    const {
        addTodo,
        setOpenModal,
        todos,
    } = React.useContext(TodoContext);


    const onChange = (event) => {
        setNewValue(event.target.value);
        setItemExistence('');
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const todoIndex = todos.findIndex(t => t.text.toUpperCase() === newValue.toUpperCase());

        if (todoIndex < 0) {
            addTodo(newValue);
            setItemExistence('Jevi bro');
        } else {
            setItemExistence('Wey, esa vaina ya ta');
        }
        setNewValue("");
    };
    const onCancel = () => {
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit}>
              <label>{itemExists}</label>
              <textarea
                value = {newValue}
                onChange = {onChange}
                placeholder = "Escribe una nueva tarea"
              />
              <div className="TodoForm-buttonContainer">
                <button
                  type = "button"
                  className ="TodoForm-button TodoForm-button-cancel"
                  onClick = {onCancel}
                >
                  Cancelar
                </button>
        
                <button
                  className="TodoForm-button TodoForm-button-add"
                  type= "submit"
                >
                  Añadir
                  </button>
              </div>
            </form>
    )
}

export { TodoForm };