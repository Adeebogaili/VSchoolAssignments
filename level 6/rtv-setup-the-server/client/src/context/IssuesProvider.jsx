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
        issues: []
    }

    const [issueState, setIssueState] = useState(initState)

    const initPublic = {
        publicIssues: []
    }

    const [publicIssues, setPublicIssues] = useState(initPublic)

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
    const getUserIssues = async (userId) => {
  console.log(userId);
  try {
    const response = await userAxios.get(`/api/issue/user`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log(response.data); // <-- console log the data returned from the API
    setIssueState((prevState) => ({
      ...prevState,
      issues: response.data,
    }));
  } catch (err) {
    console.log(err);
  }
};

      

    // Get public issues
    const getpublicIssues = async () => {
        try {
            const response = await userAxios.get("/api/issue/")
            setPublicIssues(prevState => ({
                ...prevState,
                publicIssues: response.data
            }))
        } catch (err) {
            console.log(err.resposne.errMsg)
        }
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
    
    // Call getUserIssues and getpublicIssues on mount
    useEffect(() => {
        getpublicIssues();
    }, []);

    return (
        <IssuesContext.Provider
            value={{
                ...issueState,
                ...publicIssues,
                addIssue,
                deleteIssue,
                editIssue,
                getUserIssues,
                getpublicIssues
            }}
        >
            {props.children}
        </IssuesContext.Provider>
    )
}
