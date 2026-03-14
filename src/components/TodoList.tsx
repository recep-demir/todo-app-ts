import { Grid, List, Paper, Typography } from "@mui/material";
import TodoListItems from "./TodoListItems";

interface ITodoList {
  todos: ITodo[];
  toggleTodo: ToggleFn;
  deleteTodo: DeleteFn;
}

const TodoList: React.FC<ITodoList> = ({ todos, toggleTodo, deleteTodo }) => {
  const inProgress = todos.filter((todo) => !todo.isDone);
  const completed = todos.filter((todo) => todo.isDone);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" mb={1}>
            In Progress Todos
          </Typography>
          <List>
            {inProgress.length ? (
              inProgress.map((todo) => (
                <TodoListItems
                  key={todo.id}
                  todo={todo}
                  toggleTodo={toggleTodo}
                  deleteTodo={deleteTodo}
                />
              ))
            ) : (
              <Typography color="text.secondary">No Task</Typography>
            )}
          </List>
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" mb={1}>
            Completed Todos
          </Typography>
          <List>
            {completed.length ? (
              completed.map((todo) => (
                <TodoListItems
                  key={todo.id}
                  todo={todo}
                  toggleTodo={toggleTodo}
                  deleteTodo={deleteTodo}
                />
              ))
            ) : (
              <Typography color="text.secondary">No Task</Typography>
            )}
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TodoList;