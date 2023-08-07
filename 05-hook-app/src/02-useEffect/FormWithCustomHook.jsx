import React, { useEffect, useState } from 'react'
import Message from './Message';
import useForm from '../hooks/useForm';


const FormWithCustomHook = () => {

    const {formState, onInputChange, username, email, password} = useForm( {
             username: '',
             email: '',
             password: ''
        });

        // const {username, email, password} = formState;


    return (
        <>
            <h1>Formulario con custos hooks</h1>
            <hr />

            <input
                className='form-control'
                placeholder='Username'
                type="text"
                name="username"
                id=""
                value={username}
                onChange={onInputChange}
            />
            <input
                className='form-control mt-2'
                placeholder='Email'
                type="email"
                name="email"
                id=""
                value={email}
                onChange={onInputChange}
            />
            <input
                className='form-control mt-2'
                placeholder='password'
                type="password"
                name="password"
                id=""
                value={password}
                onChange={onInputChange}
            />

            {
                (username === "Antonio") && <Message/>
            }
            
        </>
    )
}

export default FormWithCustomHook

