import React, { Fragment } from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { Modal } from '../Modal';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI() {
    const {
        error, 
        loading, 
        filteredTodos, 
        todos, 
        completeTodo,
        uncompleteTodo,
        deleteTodo,
        openedModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return(
        <Fragment>
            <TodoCounter />
            <TodoSearch />

            <TodoList >
                {error && <TodosError error={error} />}
                {loading && <TodosLoading />}
                {(!loading && !filteredTodos.length ) && <EmptyTodos />}

                {filteredTodos.map(todo => (
                <TodoItem 
                    key = {todos.findIndex(t => t.text === todo.text)}
                    text = {todo.text}
                    completed = {todo.completed}
                    onUncomplete = {() => {uncompleteTodo(todos.findIndex(t => t.text === todo.text))}}
                    onComplete = {() => {completeTodo(todos.findIndex(t => t.text === todo.text))}}
                    onDelete = {() => {deleteTodo(todos.findIndex(t => t.text === todo.text))}}
                />
                ))}
            </ TodoList>

            {openedModal && (
                <Modal>
                    <p>{<TodoForm />}</p>
                </Modal>
            )}


            <CreateTodoButton 
                setOpenModal = {setOpenModal}
                openedModal = {openedModal}
            />
        </Fragment>
    );
}

export { AppUI };