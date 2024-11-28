import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/action";

const TodoForm = () => {
  const [todoInput, setTodoInput] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();

    const date = new Date();
    const id = date.getTime();

    const obj = {
      id: id,
      todo: todoInput,
    };

    dispatch(addTodo(obj));
    setTodoInput("");
  };

  return (
    <div>
      <form>
        <input
          type="text"
          onChange={(e) => setTodoInput(e.target.value)}
          value={todoInput}
        />
        <button onClick={handleAddTodo}>Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
