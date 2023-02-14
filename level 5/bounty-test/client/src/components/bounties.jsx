import React, { useEffect, useState } from 'react'
import axios from "axios"

const Bounties = () => {
    // const [bounties, setBounties] = useState

    useEffect(() => {
        axios.get("/bounties")
        .then(res => console.log(res))
    }, [])
  return (
    <div>Hi</div>
  )
}

export default Bounties