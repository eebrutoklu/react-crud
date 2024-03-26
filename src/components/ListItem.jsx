import React, { useState } from "react";
import formatDate from "../utils/formatDate";
import axios from "axios";
import ContentMode from "./ContentMode";
import EditMode from "./EditMode";
import { toast } from "react-toastify";

const ListItem = ({ todo, todos, setTodos }) => {
  const [isEdit, setIsEdit] = useState(true);
  const handleDelete = () => {
    /*fetch
    fetch(`http://localhost:3000/todos/${todo.id}`, { method: "DELETE" })
      .then(() =>
        setTodos((prev) => prev.filter((item) => item.id !== todo.id))
      )
      .catch((error) => console.log("başarısız oldu."));
      */

    axios
      .delete(`http://localhost:3000/todos/${todo.id}`)
      .then(() => {
        setTodos((prev) => prev.filter((item) => item.id !== todo.id));
        toast.error("todo silindi.");
      })
      .catch((error) => console.log("başarısız oldu."));
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    const text = e.target[1].value;
    const status = e.target[0].value;
    // const date =
    /*fetch(`http://localhost:3000/todos${todo.id}`, {
      method: "PATCH",
      body: JSON.stringify({ text, status }),
    }); */

    axios
      .patch(`http://localhost:3000/todos/${todo.id}`, { text, status })
      .then(() => {
        const updated = { ...todo, text, status };
        const newTodos = todos.map((item) =>
          item.id === updated.id ? updated : item
        );
        setTodos(newTodos);
        setIsEdit(true);
        toast.success("todo update.");
      });
  };
  return (
    <>
      <li className=" row align-items-center bg-dark my-2">
        {isEdit ? (
          <ContentMode
            todo={todo}
            handleDelete={handleDelete}
            setIsEdit={setIsEdit}
          />
        ) : (
          <EditMode
            todo={todo}
            handleUpdate={handleUpdate}
            setIsEdit={setIsEdit}
          />
        )}
      </li>
    </>
  );
};

export default ListItem;
