import { Box, Button, Paper, TextField } from "@mui/material";
import { useState } from "react";

interface IAddTodo{
    addTodo:AddFn
}

const AddTodo:React.FC<IAddTodo> = ({addTodo}) => {
  const [task, setTask] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(task)
    setTask("")
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        borderRadius: 2,
        maxWidth: 600,
        mx: "auto",
        mt: 3,
        background: "linear-gradient(90deg, #7310ec, #ff2bbf)",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          gap: 2,
          
        }}
      >
        <TextField
      value={task}
      //   onChange={(e)=>setTask(e.target.value)}
      onChange={handleChange}
      placeholder="Enter a task..."
      variant="outlined"
      fullWidth
      sx={{
        flex: 1,
      "& .MuiOutlinedInput-root": {
          borderRadius: 2,
          backgroundColor: "#e1bee7",
        },
      }}
    />
    <Button  type="submit"
      variant="contained"
      
      sx={{
        px: 3,
        py: 1.5,
        borderRadius: 2,
        fontWeight: "bold",
        textTransform: "none",
        background: "linear-gradient(90deg, #7310ec, #ff2bd1)"
      }}>SAVE</Button>
  </Box>
</Paper>
  );
};

export default AddTodo;
