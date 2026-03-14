import { Box, Button, Paper, TextField } from "@mui/material";
import { useState } from "react";

interface IAddTodo {
  addTodo: AddFn;
}

const AddTodo: React.FC<IAddTodo> = ({ addTodo }) => {
  const [task, setTask] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!task.trim()) return;
    addTodo(task.trim());
    setTask("");
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      elevation={3}
      sx={{
        p: 2,
        display: "flex",
        gap: 1,
        alignItems: "center",
        mb: 2,
      }}
    >
      <TextField
        value={task}
        onChange={handleChange}
        placeholder="Enter a task..."
        variant="outlined"
        fullWidth
        sx={{
          flex: 1,
          "& .MuiOutlinedInput-root": {
            borderRadius: 2,
            backgroundColor: "#f3e5f5",
          },
        }}
      />
      <Box>
        <Button type="submit" variant="contained" color="secondary">
          SAVE
        </Button>
      </Box>
    </Paper>
  );
};

export default AddTodo;