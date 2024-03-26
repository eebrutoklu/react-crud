import React from "react";
import formatDate from "../utils/formatDate";
const ContentMode = ({ todo, handleDelete, setIsEdit }) => {
  return (
    <>
      <div className="col-2 fs-6">{todo.status}</div>
      <div className="col-6 fs-6">{todo.text}</div>
      <div className="col-4 d-flex justify-content-end my-2">
        <button
          className="btn btn-primary btn-sm me-2"
          onClick={() => setIsEdit(false)}
        >
          Edit
        </button>
        <button onClick={handleDelete} className="btn btn-danger btn-sm">
          Delete
        </button>
      </div>
      <div className="date fs-6 text-end bg-transparent">
        {formatDate(todo.date)}
      </div>
    </>
  );
};

export default ContentMode;
