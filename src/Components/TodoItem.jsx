import React from "react";
import { useDispatch } from "react-redux";
import { updateTodo, deleteTodo } from "../TodoRedux/Action";
import { Box, Heading, Button, useToast } from "@chakra-ui/react";
import { useState } from "react";

const TodoItem = ({ id, value, isCompleted }) => {
  const [Id, setId] = useState(0);
  const dispatch = useDispatch();
  const toast = useToast();

  const HandleComplete = () => {
    dispatch(
      updateTodo(id, {
        isCompleted: !isCompleted,
      })
    );
    toast({
      title: "Changes Status",
      position: "top",
      status: "success",
      duration: 1500,
      isClosable: true,
    });
  };

  const HandleDelete = () => {
    dispatch(deleteTodo(Id));
    toast({
      title: "Delete Todo",
      position: "bottom",
      status: "success",
      duration: 1500,
      isClosable: true,
    });
  };

  if (Id) {
    HandleDelete();
  }

  return (
    <Box key={id} display="flex" margin="auto" width={"30%"} mt="2" gap={"2"}>
      <Heading
        as={"h6"}
        fontSize="2xl"
        textDecoration={isCompleted ? "line-through" : "none"}
        onClick
      >
        {value}{" "}
      </Heading>
      <Button onClick={HandleComplete}>
        {isCompleted ? "complete" : "Pending"}
      </Button>
      {!isCompleted && (
        <Button onClick={() => setId(id)} style={{ marginLeft: "5px" }}>
          Delete
        </Button>
      )}
    </Box>
  );
};

export default TodoItem;
