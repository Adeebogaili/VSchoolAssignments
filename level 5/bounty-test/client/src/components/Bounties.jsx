import React, { useEffect } from 'react'
import axios from "axios"

const Bounties = () => {

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    axios
      .get("http://localhost:8050/bounties")
      .then(res => console.log(res))
      .catch(err => console.error(err))
  }

  return (
    <div>bounties</div>
  )
}

export default Bounties