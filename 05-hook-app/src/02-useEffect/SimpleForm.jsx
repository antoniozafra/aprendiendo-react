import React, { useEffect, useState } from 'react'

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Antonio',
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

    useEffect(() => {
        console.log('useEffect call');
    });







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
        </>
    )
}

export default SimpleForm
