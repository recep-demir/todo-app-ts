import { DeleteOutline } from "@mui/icons-material";
import { IconButton, ListItem, ListItemText } from "@mui/material";

interface ITodoListItems {
  todo: ITodo;
  toggleTodo: ToggleFn;
  deleteTodo: DeleteFn;
}

const TodoListItems: React.FC<ITodoListItems> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <ListItem
      divider
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.id)}>
          <DeleteOutline />
        </IconButton>
      }
    >
      <ListItemText
        primary={todo.task}
        onClick={() => toggleTodo(todo)}
        sx={{
          cursor: "pointer",
          textDecoration: todo.isDone ? "line-through" : "none",
          color: todo.isDone ? "#6c757d" : "#4a148c",
          fontWeight: "bold",
        }}
      />
    </ListItem>
  );
};

export default TodoListItems;