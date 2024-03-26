import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

const Form = ({ setTodos }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    const status = e.target[1].value;

    //kaydededilecek nesneyi hazırla
    const newTodo = {
      // id: new Date().getTime(), => gerçek projede kullanma
      id: uuidv4(),
      text,
      status,
      date: new Date(),
    };

    /* fetch("http://localhost:3000/todos", {
      method: "POST",
      body: JSON.stringify(newTodo),
    })
      .then(() => {
        setTodos((prev) => [...prev, newTodo]);
      })
      .catch((error) => console.log(error)); */

    //axios
    axios
      .post("http://localhost:3000/todos", newTodo)
      .then(() => {
        toast.info("todo eklendi.");
        setTodos((prev) => [...prev, newTodo]);
      })
      .catch((error) => alert("hata meydana geldi."));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex justify-content-center gap-3 m-3"
    >
      <input className="form-control shadow" type="text" />
      <select className="form-select w-25 shadow">
        <option value="daily">daily</option>
        <option value="important">important</option>
        <option value="school">school</option>
        <option value="job">job</option>
      </select>
      <button className="btn btn-primary shadow">Submit</button>
    </form>
  );
};

export default Form;
