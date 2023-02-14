import React from 'react'
import axios from "axios"
import { useEffect, useState } from "react";

// Components 
import Bounty from './Bounty';
import AddBountyForm from './AddBountyForm';

const Bounties = () => {
  const [bounties, setBounties] = useState([])

  const getData=() => {
    axios
      .get("/bounties")
      .then(res => setBounties(res.data))
      .catch(err => console.error(err))
  }

  function addBounty(newBounty){
    axios.post("/bounties", newBounty)
    .then(res => {
      setBounties(prevBounties => [...prevBounties, res.data])
    })
    .catch(err => console.error(err))
  }

  function deleteBounty(bountyId) {
    axios.delete(`/bounties/${bountyId}`)
    .then(res => {
      setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
    })
    .catch(err => console.error(err))
  }

  function editBounty(updates, bountyId) {
    axios.put(`/bounties/${bountyId}`, updates)
    .then(res => {
      setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
    })
    .catch(err => console.error(err))
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
    <div className='bounties-container'>
      <AddBountyForm
        submit = {addBounty}
        btnText = "Add Bounty"
      />
    {bounties.map(bounty => 
    <Bounty
     {...bounty}
     key={bounty._id}
     deleteBounty={deleteBounty}
     editBounty={editBounty}
     />)}
    </div>
    </>
  )
}

export default Bounties