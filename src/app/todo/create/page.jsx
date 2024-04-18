import ElmisModal from "@/app/components/ElmisModal"
import TodoFormCS from "@/app/components/ToDoFormCS"
// import TodoFormSS from "@/app/components/ToDoFormSS"

function TodoFormServer({ searchParams }) {
  const show = searchParams?.show

  return (
    <>
      {/* <TodoFormSS /> */}
      
      {show ? <ElmisModal /> : <TodoFormCS />}
    </>
  )
}

export default TodoFormServer