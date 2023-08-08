import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import { useTodos } from '../hooks/useTodos';
import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';


export const TodoApp = () => {

// const [ todos, handdleDeleteTodo, handdlenewTodo, handdleToggleTodo] = useTodos();
    


const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};

const [todos, dispatch] = useReducer(todoReducer, initialState, init);

useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);


const handdlenewTodo = (todo) => {
    const action = {
        type: '[TODO] Add Todo',
        payload: todo
    }
    dispatch(action);
}

const handdleDeleteTodo = (id) => {
    dispatch({
        type: '[TODO] Remove Todo',
        payload: id
    });

}
const handdleToggleTodo = (id) => {
    dispatch({
        type: '[TODO] Toggle Todo',
        payload: id
    });

}

const todosCount = todos.length;
const todoPendingCount = todos.filter(todo => !todo.done).length;

    return (
        <>
            <h1>Todo App ({todosCount}) <small>pendientes ({todoPendingCount})</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <ul className='list-group'>

                    <TodoList todos={todos}
                         onDeleteTodo={ handdleDeleteTodo}
                         onToggleTodo={handdleToggleTodo}/>
                    </ul>
                </div>

                <div className="col-5">
                    <h4>Agregar Todo</h4>
                    <hr />

                    <TodoAdd onNewTodo={handdlenewTodo}  />
                </div>
            </div>
        </>
    )
}

