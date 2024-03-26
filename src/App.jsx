import { useEffect, useState } from "react";
import Form from "./components/Form";
import Loader from "./components/Loader";
import ListItem from "./components/ListItem";
import axios from "axios";

const App = () => {
  const [todos, setTodos] = useState(null);

  /* fetch
  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((error) => console.log(error));
  }, []); */

  //axios
  useEffect(() => {
    axios
      .get("http://localhost:3000/todos") //
      .then((res) => setTodos(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div>
        <h2 className="text-center p-3 p-md-5">
          Server <span className="text-warning ">CRUD</span>
        </h2>
      </div>

      <Form setTodos={setTodos} />

      <ul className="p-0">
        {!todos && <Loader />}
        {todos?.map((todo) => (
          <ListItem
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
