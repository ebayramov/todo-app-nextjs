"use client"
import React, { useState } from "react";
import { addTodo } from "../actions";

export default function TodoFormCS() {
    const [task, setTask] = useState("")
    const [dueDate, setDueDate] = useState("")

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append("task", task)
        formData.append("dueDate", dueDate)
        addTodo(formData)
    }

    return (
        <div>
            <h1 >Add A New To-Do</h1>
            <div style={{width: "30rem"}}>
                <div className="mb-3">
                    <label className="form-label">Task:</label>
                    <input onChange={ (e)=> setTask(e.target.value) } className="form-control" type="text" name="task" placeholder="Enter the task..." />
                </div>
                <div className="mb-3">
                    <label className="form-label">Due Date:</label>
                    <input onChange={ (e)=> setDueDate(e.target.value) } className="form-control" type="date" name="dueDate" />
                </div>
                <button onClick={handleSubmit} className="btn btn-primary"> Add Task </button>
            </div>
        </div>
    )
}