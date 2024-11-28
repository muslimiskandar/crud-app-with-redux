import { ADD_TODO, DELETE_TODO } from "./actionTypes";

const initialValues = {
  todos: [
    {
      id: 1,
      todo: "Drink a coffee",
    },
    {
      id: 2,
      todo: "Repeat DOM lessons",
    },
  ],
};

export const todoReducer = (state = initialValues, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case DELETE_TODO:
      const filteredData = state.todos.filter((el) => el.id !== action.payload);
      return { ...state, todos: filteredData };
    default:
      return state;
  }
};
