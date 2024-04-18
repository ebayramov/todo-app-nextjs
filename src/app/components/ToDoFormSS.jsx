import React from "react";
import { addTodo } from "../actions";

export default function TodoFormSS() {

  return (
    <div>
        <h1 >Add A New To-Do</h1>
        <form action={ addTodo } style={{width: "30rem"}}>
            <div className="mb-3">
                <label className="form-label">Task:</label>
                <input className="form-control" type="text" name="task" placeholder="Enter the task..." />
            </div>
            <div className="mb-3">
                <label className="form-label">Due Date:</label>
                <input className="form-control" type="date" name="dueDate" />
            </div>
            <button type="submit" className="btn btn-primary"> Add Task </button>
        </form>
    </div>
  )
}