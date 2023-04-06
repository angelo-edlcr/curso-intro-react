import React from 'react';
import './TodosLoading.css';

function TodosLoading() {
    return (
        <div>
            <div className='LoadingTodo-container'>
                <span className='LoadingTodo-completeIcon'></span>
                <p className='LoadingTodo-text'>Cargando items...</p>
                <span className='LoadingTodo-deleteIcon'></span>
            </div>
            <div className='LoadingTodo-container'>
                <span className='LoadingTodo-completeIcon'></span>
                <p className='LoadingTodo-text'>Cargando items...</p>
                <span className='LoadingTodo-deleteIcon'></span>
            </div>
            <div className='LoadingTodo-container'>
                <span className='LoadingTodo-completeIcon'></span>
                <p className='LoadingTodo-text'>Cargando items...</p>
                <span className='LoadingTodo-deleteIcon'></span>
            </div>
        </div>
    )
}

export { TodosLoading };