import Header from "./../components/Header";
import AddTodo from "./../components/AddTodo";
import TodoList from "./../components/TodoList";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const url = "https://6350438378563c1d82bde74a.mockapi.io/api/task"; //https://mockapi.io/

  interface ITodo{
    id:string;
    isDone:boolean;
    task:string;
  }


  const [todos, setTodos] = useState<ITodo[]>([]);

//   const [todos, setTodos] = useState({
//     id:"",
//     isDone:false,
//     task:""
//   });



  const getTodo = async () => {
    const { data } = await axios(url);
    console.log(data);
    setTodos(data)
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div>
      <Header />
      <AddTodo />
      <TodoList todos={todos} />
    </div>
  );
};

export default Home;
