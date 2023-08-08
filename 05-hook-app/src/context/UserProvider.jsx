import React, { useState } from 'react'
import { userContext } from './UserContext'



export const UserProvider = ({ children }) => {
  
    const [user, setUser] = useState();
  
    return (
    
    <userContext.Provider value={{user, setUser}}>
        {children}
    </userContext.Provider>

  )
}

