import React, { useEffect, useState } from 'react'
import Message from './Message';


const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'antonio',
        email: 'boro@gmail.com'
    });


    const { username, email } = formState;

    const onInputChange = ({ target }) => {

        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value
        });

    }

    // useEffect(() => {
    //     console.log('useEffect call');
    // }, []);

    // useEffect(() => {
    //     console.log('email changed');
    // }, [email]);

    // useEffect(() => {
    //     console.log('formState changed');
    // }, [formState]);

   
    useEffect(( ) => {

        return () => {

        }

    }, []);






    return (
        <>
            <h1>Formulario Simple</h1>
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

            {
                (username === "Antonio") && <Message/>
            }
            
        </>
    )
}

export default SimpleForm

