import Header from "./../components/Header";
import AddTodo from "./../components/AddTodo";
import TodoList from "./../components/TodoList";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const url = "http://localhost:8000/todos";

  const [todos, setTodos] = useState<ITodo[]>([]);

const getTodo = async () => {
  try {
    const { data } = await axios(url);
    
    // Backend'den gelen veriyi (title), Frontend'in beklediği yapıya (task) çeviriyoruz:
    const formattedTodos = data.result.rows.map((item: any) => ({
      id: item.id,
      task: item.title, // Backend'den gelen title -> Frontend'in task'ı oldu
      isDone: item.isDone,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt
    }));

    setTodos(formattedTodos);
  } catch (error) {
    console.log("Veri çekme hatası:", error);
  }
};

const addTodo: AddFn = async (task) => {
  try {
    // Backend'e gönderirken 'title' ismini kullanıyoruz (500 hatasını çözer):
    await axios.post(url, { title: task, isDone: false });
    getTodo();
  } catch (error) {
    console.log("Ekleme hatası:", error);
  }
};

const toggleTodo: ToggleFn = async (todo) => {
  try {
    // Backend'e geri gönderirken yine 'task'ı 'title' yaparak gönderiyoruz:
    await axios.put(`${url}/${todo.id}`, { 
      title: todo.task, 
      isDone: !todo.isDone 
    });
    getTodo();
  } catch (error) {
    console.log("Güncelleme hatası:", error);
  }
};

 const deleteTodo: DeleteFn = async (id) => {
    try {
        await axios.delete(`${url}/${id}`);
        getTodo();
    } catch (error) {
        console.log(error);
    }
 }

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div>
      <Header />
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </div>
  );
};

export default Home;