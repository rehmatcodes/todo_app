import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { TodoProvider } from './context';
import { data } from 'autoprefixer';

function App() {
  const [todos, setTodos] = useState([]);
  
  const addTodo = (newTodo) => {
    setTodos((prev) => [{ id: Date.now(), ...newTodo }, ...prev]);
  };
  

  const updateTodo = (id, updatedTodo) => {
    setTodos((prev) => prev.map((todo) => (todo.id === id ? updatedTodo : todo)));
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <TodoProvider value={{ todos  , addTodo, deleteTodo, updateTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/* Loop and add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}




export default App;
