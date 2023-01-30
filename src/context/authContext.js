import axios from "axios";
import { createContext, useEffect, useState } from "react";

//context is used to save user infos in local storage which can later used in diff instances like persist in redux

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)    //since datas are stored as string in localstorage its convertes to json

    const login = async (inputs) => {
        const res = await axios.post("/auth/login", inputs)
        setCurrentUser(res.data)
    }

    const logout = async (inputs) => {
        await axios.post("/auth/logout")
        setCurrentUser(null)
    }

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser])

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}