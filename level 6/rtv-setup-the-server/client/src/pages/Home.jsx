import React, { useContext, useEffect } from 'react'
import IssueForm from '../components/IssueForm'
import IssueList from "../components/IssueList"
import { UserContext } from '../context/UserProvider.jsx'
import { IssuesContext } from '../context/IssuesProvider'
import "../styles/home.css"

const Home = () => {
  const { 
    user: {
       username
     },
    token,
  } = useContext(UserContext)

  const {
    issues,
    addIssue
  } = useContext(IssuesContext)

  

  const firstLetter = token ? username.charAt(0).toUpperCase() : '';

  return (
    <div className="home">
      <div className="post">
        <div className="profile-pic">{firstLetter}</div>
        <div className="post-wrapper">
          <h3 className="issue-question">Hi {username}! What's on your mind?</h3>
          <IssueForm addIssue={addIssue} />
        </div>
      </div>
      <div className="issues-wrapper">
          <IssueList issues={issues}/>
      </div>
    </div>
  )
}

export default Home