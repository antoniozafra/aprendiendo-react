import React, { useContext } from 'react'
import { userContext } from '../context/UserContext';

export const HomePage = () => {

  const  {user} = useContext (userContext);

  return (
    <div>
        <h1>Home Page <small>{user?.name}</small></h1>
        <hr />

        <pre aria-label='pre'>
          {

          JSON.stringify(user)
          }
        </pre>

      
      
    </div>
  )
}

