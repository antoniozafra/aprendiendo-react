import React, { useState } from 'react'
import useForm from '../hooks/useForm'


export const TodoAdd = ({onNewTodo}) => {

    const {description,onInputChange, onResetForm} = useForm({
        description: ''
    });


    const onFormSubmit = (event) => {
        event.preventDefault();

        if(description.length <=1 ) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description
        };

        onNewTodo(newTodo);
        onResetForm();
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input 
                className='form-control'
                type="text"
                placeholder='¿Que hay que hacer?'
                name="description"
                value={description}
                onChange={onInputChange}
                />
            <button type='submit' className='btn btn-primary mt-1'>Agregar</button>
        </form>
    )
}

