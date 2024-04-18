"use client"
import Link from "next/link";
import { deleteTodo } from "../actions";

export default async function ToDoList() {
    const todos = await fetch("http://localhost:3000/api/todos", { next: { tags: ["ToDo"] } })
    const { data } = await todos.json()

    return (
        <div>
            <h1 className="d-flex justify-content-between" style={{ width: "50rem" }}>
                To-Do List
                <div>
                    <Link href="/todo/create?show=true" className="btn btn-primary rounded-circle">+</Link>
                </div>
            </h1>

            {/* deleteTodo(todo.id) */}

            <ul className="list-group" style={{ width: "50rem" }}>
                {data.map(todo => (
                    <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-start">
                        {todo.id + '-' + todo.task}
                        <div>
                            <button className="badge text-bg-primary rmvbutton" type="submit" onClick={() => {deleteTodo(todo.id)}}>Remove</button>
                            <span className="badge text-bg-primary"> {todo.dueDate}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}