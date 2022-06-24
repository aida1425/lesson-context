import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React, { useContext } from "react";
import { counterContext } from "../../contexts/counterContext";

const Counter = () => {
  const { counter, decrement, increment } = useContext(counterContext);
  return (
    <div>
      <IconButton onClick={() => decrement()} aria-label="delete">
        <RemoveIcon />
      </IconButton>
      <span>{counter}</span>
      <IconButton
        onClick={() => increment()}
        aria-label="delete"
        color="primary">
        <AddIcon />
      </IconButton>
    </div>
  );
};

export default Counter;
