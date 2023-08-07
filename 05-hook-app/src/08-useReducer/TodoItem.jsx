import React from 'react'

export const TodoItem = ({ todo }) => {
    return (
        <>
            <li key={todo.id} className=' mt-2 list-group-item d-flex justify-content-between'>
                <span className='align-self-center'>{todo.description}</span>
                <button className='btn btn-danger'>Eliminar</button>
            </li>

        </>
    )
}
