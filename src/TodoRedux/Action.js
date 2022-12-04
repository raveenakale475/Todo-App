import { Get_Todo, Post_Todo, Updata_Todo, Delete_Todo } from "./ActionType";

export const getTodo = () => ({
  type: Get_Todo,
  payload: [
    { id: 1, value: "Todo 1", isCompleted: false },
    { id: 2, value: "Todo 2", isCompleted: false },
    { id: 3, value: "Todo 3", isCompleted: false },
    { id: 4, value: "Todo 4", isCompleted: false },
  ],
});
export const postTodo = (Todo_Task) => ({
  type: Post_Todo,
  payload: Todo_Task,
});

export const updateTodo = (id, update) => ({
  type: Updata_Todo,
  payload: {
    id,
    update,
  },
});

export const deleteTodo = (id) => ({
  type: Delete_Todo,
  payload: id,
});
