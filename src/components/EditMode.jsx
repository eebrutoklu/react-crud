import React from "react";
import formatDate from "../utils/formatDate";

const EditMode = ({ todo, setIsEdit, handleUpdate }) => {
  return (
    <form onSubmit={handleUpdate} className="d-flex align-items-center">
      <div className="col-4 fs-6">
        <select
          defaultValue={todo.status}
          className="form-select w-auto shadow"
        >
          <option value="daily">daily</option>
          <option value="important">import.</option>
          <option value="school">school</option>
          <option value="job">job</option>
        </select>
      </div>
      <div className="col-4 fs-6 ">
        <input
          defaultValue={todo.text}
          type="text"
          className="form-control shadow"
        />
      </div>
      <div className="col-4 d-flex justify-content-end my-2">
        <button type="submit" className="btn btn-success btn-sm me-2">
          Approve
        </button>
        <button
          type="button"
          onClick={setIsEdit}
          className="btn btn-secondary btn-sm"
        >
          Cancel
        </button>
      </div>
      <div className="date fs-6 text-end bg-transparent">
        {formatDate(todo.date)}
      </div>
    </form>
  );
};

export default EditMode;
