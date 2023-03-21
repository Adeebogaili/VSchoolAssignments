import React, { useState, useEffect, useContext } from 'react'
import { IssuesContext } from './IssuesProvider'
import axios from 'axios'

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props) {

    const { getUserIssues } = useContext(IssuesContext)

    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        issues: [],
        errMsg: ""
    }

    const [userState, setUserState] = useState(initState)

    // Singup new user
    function signup(credentials){
        axios.post("/auth/signup", credentials)
        .then(res => {
            const { user, token } = res.data
            localStorage.setItem("token", token) //save the token data and not lose it after browser refresh
            localStorage.setItem("user", JSON.stringify(user))
            setUserState(prevUserState => ({
                ...prevUserState,
                user, 
                token
            }))
        })
        .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    // Login user
    function login(credentials){
        axios.post("/auth/login", credentials)
        .then(res => {
            const { user, token } = res.data
            localStorage.setItem("token", token) //save the token data and not lose it after browser refresh
            localStorage.setItem("user", JSON.stringify(user))
            getUserIssues()
            setUserState(prevUserState => ({
                ...prevUserState,
                user, 
                token
            }))
        })
        .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    // Logout user
    function logout(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: "",
            issues: []
        })
    }

    // error handling
    function handleAuthErr(errMsg){
        setUserState(prevUserState => ({
            ...prevUserState,
            errMsg
        }))
    }

    // reset Auth error
    function resetAuthErr(){
        setUserState(prevUserState => ({
            ...prevUserState,
            errMsg: ""
        }))
    }

    // Update user information
function updateUser(updatedUser) {
    userAxios.put("/api/user", updatedUser)
        .then(res => {
            localStorage.setItem("user", JSON.stringify(res.data))
            setUserState(prevUserState => ({
                ...prevUserState,
                user: res.data
            }))
        })
        .catch(err => console.log(err))
}

    // Add user issue
    function addIssue(newIssue){
        userAxios.post("/api/issue", newIssue)
            .then(res => {
                setUserState(prevUserState => ({
                    ...prevUserState,
                    issues: [...prevUserState.issues, res.data]
                }))
            })
            .catch(err => console.log(err))

    }

      useEffect (() => {
        getUserIssues()
      }, [])
      

    return (
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout,
                addIssue,
                resetAuthErr,
                updateUser,
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}


