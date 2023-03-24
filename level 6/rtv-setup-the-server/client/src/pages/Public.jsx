import React, { useContext} from 'react'
import AllIssuesList from '../components/AllIssuesList'
import { IssuesContext } from '../context/IssuesProvider'
import { UserContext} from '../context/UserProvider'
import "../styles/public.css"


export default function Public(){

  const { 
    user: {
       username
     },
    token,
  } = useContext(UserContext)

  const {
    publicIssues,
  } = useContext(IssuesContext)

  return (
    <div className="public">
      <AllIssuesList publicIssues={publicIssues}/>
    </div>
  )
}