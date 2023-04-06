import React from 'react';
import { useLocalStorage } from './useLocalStorage.js';

const TodoContext = React.createContext();

function TodoProvider(props) {
    const  {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []);
    
      const [searchValue, setSearchValue] = React.useState('');
      const [openedModal, setOpenModal] = React.useState(false);

      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
    
      let filteredTodos = (!searchValue.length >= 1) ?
        todos : todos.filter(t => t.text.toUpperCase().includes(searchValue.toUpperCase()));
    
      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          completed: false,
          text: text,
        });
        saveTodos(newTodos);
      };
    
      const completeTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = true;
        saveTodos(newTodos);
      };

      const uncompleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = false;
        saveTodos(newTodos);
      };
      
      const deleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        saveTodos(newTodos);
      };

    return (
        <TodoContext.Provider value={{
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            todos,
            filteredTodos,
            completeTodo,
            uncompleteTodo,
            deleteTodo,
            addTodo,
            loading,
            error,
            openedModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

// function TodoConsumer(props) {
//     return (
//         <TodoContext.Consumer>
            
//         </TodoContext.Consumer>
//     );
// }

<TodoContext.Consumer></TodoContext.Consumer>

export { TodoContext, TodoProvider };
