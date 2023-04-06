// import './App.css';
import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';

// const defaultTodos = [
//   {text: 'Cortar tomate', completed: false},
//   {text: 'Tomar agua', completed: false},
//   {text: 'Aprender react', completed: true},
//   {text: 'Algo más', completed: false},
//   {text: 'ertytgrbdf', completed: false},
//   {text: 'sdfgsdfg', completed: false},
//   {text: 'rty rtyr', completed: false},
//   {text: 'wertyertghdfg', completed: false},
//   {text: 'efgsdfg fdg f', completed: false},
// ]


function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
