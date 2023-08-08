import { useEffect, useReducer } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer';

export const useTodos = () => {

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

    return{
        todos,
        handdlenewTodo,
        handdleDeleteTodo,
        handdleToggleTodo,
    }

}

