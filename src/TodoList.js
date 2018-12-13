import React, { useState } from 'react';
import TodoForm from './TodoForm';

const App = () => {
  const [todos, setTodos] = useState([]);

  const toggleComplete = (i) => setTodos(todos.map((todo, k) => k === i ? {
    ...todo,
    complete: !todo.complete
  } : todo))

  return (
    <div>
      <TodoForm onSubmit={ text => setTodos([{ text, complete: false }, ...todos]) } />
      <div className="list">
        {
          todos.map(({ text, complete }, i) => (
            <div
              key={ text }
              onClick={ () => toggleComplete(i)  }
              style={{ textDecoration: complete ? "line-through" : "" }}
            >
              { text }
            </div>
          ))
        }
      </div>
      <button className="btn btn-success" onClick={ () => setTodos([]) }>reset</button>
    </div>
  );
}

export default App;