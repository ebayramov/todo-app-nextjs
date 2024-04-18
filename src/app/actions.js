"use server"
import axios from "axios";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const addTodo = async (data) => {
  const newTodoBody = {
    task: data.get("task"),
    dueDate: data.get("dueDate"),
  }
  await axios.post("/api/todos/", newTodoBody)
  revalidateTag("ToDo")
  redirect("/")
}

export const deleteTodo = async (id) => {
  const deleteBody = {
      id: id
  };  
  await fetch("/api/todos/", {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(deleteBody)
  });
   
  revalidateTag("ToDo");
};