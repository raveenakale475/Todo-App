import React from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTodo } from "../TodoRedux/Action";
import {Box,Heading} from "@chakra-ui/react"

const Todo = () => {
  const Todo = useSelector((store) => {
    return store.Todo;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodo());
  }, []);
  return (
    <Box>
      <Heading as={"h1"} textAlign="center">TodoApp</Heading>
      <TodoInput />
      {Todo.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </Box>
  );
};

export default Todo;
