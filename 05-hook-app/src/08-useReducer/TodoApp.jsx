import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';



export const TodoApp = () => {

    const initialState = [
        {
            id: new Date().getTime(),
            description: 'Recolectar piedra',
            done: false
        },
        {
            id: new Date().getTime() + 100,
            description: 'Comprar Pan',
            done: false
        },
    ];

    const [todos, dispatch] = useReducer(todoReducer, initialState);

    const handdlenewTodo =( todo ) => {
        console.log({todo});
    }

    return (
        <>
            <h1>Todo App (1) <small>pendientes (2)</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">

                <TodoList todos={todos}/>
                </div>

                <div className="col-5">
                    <h4>Agregar Todo</h4>
                    <hr />
                    
                    <TodoAdd onNewTodo={handdlenewTodo}/>                    
                  
                </div>
            </div>
        </>
    )
}

