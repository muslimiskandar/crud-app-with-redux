import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { deleteTodo } from "../redux/action";

const TodoList = () => {
  const state = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  console.log(state);

  const handleDeleteTodo = (el) => {
    console.log("e", el);
    dispatch(deleteTodo(el.id));
  };

  return (
    <div>
      <ul>
        {state?.map((el) => (
          <li key={el.id}>
            {el.todo} <MdDelete onClick={() => handleDeleteTodo(el)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
