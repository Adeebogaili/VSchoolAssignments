import React, { useState, useEffect } from 'react'
import { createContext } from 'react'
import axios from 'axios'

export const IssuesContext = createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function IssuesProvider(props) {

    const initState = {
        issues: [],
    }

    const [issueState, setIssueState] = useState(initState)


    // Add user issue
    function addIssue(newIssue){
        userAxios.post("/api/issue", newIssue)
            .then(res => {
                setIssueState(prevState => ({
                    ...prevState,
                    issues: [...prevState.issues, res.data]
                }))
            })
            .catch(err => console.log(err))

    }

    // Get user issues
    function getUserIssues(){
        userAxios.get("/api/issue/user")
        .then(res => {
            setIssueState(prevState => ({
                ...prevState,
                issues: res.data
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    // Delete user issue
    function deleteIssue(issueId) {
        userAxios.delete(`/api/issue/${issueId}`)
          .then(res => {
            setIssueState(prevState => ({
              ...prevState,
              issues: prevState.issues.filter(issue => issue._id !== issueId)
            }))
          })
          .catch(err => console.log(err))
      }

    // Edit user issue
    function editIssue(issueId, updatedIssue) {
        userAxios.put(`/api/issue/${issueId}`, updatedIssue)
          .then(res => {
            setIssueState(prevState => ({
              ...prevState,
              issues: prevState.issues.map(issue => issue._id === issueId ? res.data : issue)
            }))
          })
          .catch(err => console.log(err))
    }
    
    
      useEffect (() => {
        getUserIssues()
      }, [])
      

    return (
        <IssuesContext.Provider
            value={{
                ...issueState,
                addIssue,
                deleteIssue,
                editIssue,
                getUserIssues
            }}
        >
            {props.children}
        </IssuesContext.Provider>
    )
}


