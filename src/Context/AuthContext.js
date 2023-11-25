import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) =>{
    const[currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
    
    const login = async(user) =>{
        const res = await axios.post("http://localhost:8000/user/login", user);
        setCurrentUser(res.data)
    }

    const logout = async() =>{
        await axios.post("http://localhost:8000/user/logout");
        setCurrentUser(null)
    }

    useEffect(() =>{
        localStorage.setItem("user", JSON.stringify(currentUser))
    })

    return(
        <AuthContext.Provider value={{login, logout, currentUser }}>
            {children}
        </AuthContext.Provider>
    )
}