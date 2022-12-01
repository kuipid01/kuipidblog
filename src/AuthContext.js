import { createContext,useEffect, useState } from 'react'
import { auth } from './config'
import { onAuthStateChanged } from 'firebase/auth'

export const AuthContext = createContext()
export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurretUser] = useState({})

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
          setCurretUser(user);
      })
    }, []);
    return(
        <AuthContext.Provider value={{currentUser}}>
        {children}
    </AuthContext.Provider>
    )
    
    
}


