import React from 'react'
import TodoFormSS from './ToDoFormSS'
import Link from 'next/link'


function ElmisModal() {
  return (
    <div className="modal show" id="Modal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered ">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5">Modal title</h1>
                    <Link href="/"  type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></Link>
                </div>
                <div className="modal-body">
                    <TodoFormSS />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ElmisModal