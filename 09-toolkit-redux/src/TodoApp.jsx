import React from 'react'
import { useGetTodosQuery } from './store/apis'

export const TodoApp = () => {

    const {data, isLoading, isFetching} = useGetTodosQuery();

  return (
    <>
        <h1>Todo rtk</h1>
        <hr />

        <h4>isLoading: {isLoading ? 'true' : 'false'}</h4>

        <pre>...</pre>
        <ul>
            {/* {data.map( todo => (
                <li key={todo.id}>{todo.id}</li>
            ))} */}
        </ul>

        <button>NextTodo</button>
    </>
  )
}
