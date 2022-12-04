import { Get_Todo, Post_Todo, Updata_Todo, Delete_Todo } from "./ActionType";
const initialValue = {
  Todo: [],
};

export const reducer = (state = initialValue, action) => {
  switch (action.type) {
    case Post_Todo:
      return {
        ...state,
        Todo: [...state.Todo, action.payload],
      };
    case Get_Todo:
      return {
        ...state,
        Todo: action.payload,
      };
    case Updata_Todo:
      const updatedTodo = state.Todo.map((todo) => {
        if (todo.id == action.payload.id) {
          return {
            ...todo,
            ...action.payload.update,
          };
        }
        return todo;
      });
      return {
        ...state,
        Todo: updatedTodo,
      };
    case Delete_Todo:
      const DeleteTodo = state.Todo.filter(
        (todo) => todo.id !== action.payload
      );
      return {
        ...state,
        Todo: DeleteTodo,
      };

    default:
      return state;
  }
};