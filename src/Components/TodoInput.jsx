import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postTodo } from "../TodoRedux/Action";
import { v4 } from "uuid";
import { Box, Input, useToast } from "@chakra-ui/react";
const TodoInput = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const HandleClick = () => {
    if (input) {
      dispatch(
        postTodo({
          id: v4(),
          value: input,
          isCompleted: false,
        })
      );
      toast({
        title: "Add Todo",
        position: "top",
        status: "success",
        duration: 900,
        isClosable: true,
      });
    }

    setInput("");
  };
  return (
    <Box margin={"auto"} width="50%" display={"flex"} gap="2" mt={"2"}>
      <Input
        type="text"
        placeholder="type here ........"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            HandleClick();
          }
        }}
      />
      {/* <Button onClick={HandleClick}>Add Todo</Button> */}
    </Box>
  );
};

export default TodoInput;
