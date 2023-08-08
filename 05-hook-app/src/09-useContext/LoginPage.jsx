import React, { useContext } from 'react'
import { userContext } from '../context/UserContext';

  

export const LoginPage = () => {
  
  const {user, setUser} = useContext(userContext);


  console.log(user);

  return (
    <>
    <h1>Login Page</h1>
      <hr />

      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>

      <button className='btn btn-primary' onClick = {() => setUser({id:123,name:'Antonio',email:'boro@gmail.com'}) }>
          Establecer usuario
        </button>
    </>
  )
}

