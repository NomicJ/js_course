import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    const newTodo = e.target.todo.value.trim();

    if (newTodo) {
      setTodos([...todos, newTodo]);
      e.target.reset();
    }
  };

  return (
    <div>
      <h1>Список дел</h1>
      <form onSubmit={handleAddTodo}>
        <input type="text" name="todo" placeholder="Введите новое дело" />
        <button type="submit">Добавить</button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
