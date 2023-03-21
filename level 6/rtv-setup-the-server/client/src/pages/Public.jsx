import React, { useContext} from 'react'
import { IssuesContext } from '../context/IssuesProvider'
import IssueList from "../components/IssueList"


export default function Public(){

  const {
    issues,
    addIssue
  } = useContext(IssuesContext)


  return (
    <div className="public">
      {/* <IssueList /> */}
    </div>
  )
}