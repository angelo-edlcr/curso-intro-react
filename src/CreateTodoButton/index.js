import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
    const onClickButton = () => {
        props.setOpenModal(openedModal => !openedModal);

        if (!props.openedModal) {
            document.getElementById("CreateTodoButton").classList.add('modal-opened');
        } else {
            document.getElementById("CreateTodoButton").classList.remove('modal-opened');
        }
    };

    return (
        <button 
            id = 'CreateTodoButton'
            className='CreateTodoButton'
            onClick={onClickButton}
        >
            +
        </button>
    );
}

export {CreateTodoButton};