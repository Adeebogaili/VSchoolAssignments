import React from 'react'; // Import the React library
import axios from 'axios'; // Import the axios library for making HTTP requests
import { useEffect, useState } from 'react'; // Import the useEffect and useState hooks

// Import components
import Bounty from './Bounty';
import AddBountyForm from './AddBountyForm';

const Bounties = () => {
  const [bounties, setBounties] = useState([]); // Define the "bounties" state variable as an empty array and a setter function "setBounties"

  // Function to fetch bounties from the server
  const getBounties = () => {
    axios
      .get('/bounties') // Send a GET request to the "/bounties" endpoint
      .then(res => setBounties(res.data)) // Set the "bounties" state to the response data
      .catch(err => console.error(err.response.data.errMsg)); // Log any errors to the console
  };

  // Function to add a new bounty to the server
  function addBounty(newBounty) {
    axios
      .post('/bounties', newBounty) // Send a POST request to the "/bounties" endpoint with the new bounty object as the payload
      .then(res => {
        setBounties(prevBounties => [...prevBounties, res.data]); // Add the new bounty to the "bounties" state
      })
      .catch(err => console.error(err)); // Log any errors to the console
  }

  // Function to delete a bounty from the server
  function deleteBounty(bountyId) {
    axios
      .delete(`/bounties/${bountyId}`) // Send a DELETE request to the "/bounties/:id" endpoint with the ID of the bounty to be deleted
      .then(res => {
        setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId)); // Remove the deleted bounty from the "bounties" state
      })
      .catch(err => console.error(err)); // Log any errors to the console
  }

  // Function to edit a bounty on the server
  function editBounty(updates, bountyId) {
    axios
      .put(`/bounties/${bountyId}`, updates) // Send a PUT request to the "/bounties/:id" endpoint with the updated bounty object as the payload
      .then(res => {
        setBounties(prevBounties =>
          prevBounties.map(bounty => (bounty._id !== bountyId ? bounty : res.data))
        ); // Replace the old bounty with the updated bounty in the "bounties" state
      })
      .catch(err => console.error(err)); // Log any errors to the console
  }

  useEffect(() => {
    getBounties(); // Call the "getBounties" function when the component mounts
  }, []);

  return (
    <>
      <div className='bounties-container'>
        <AddBountyForm
          submit={addBounty}
          btnText="Add Bounty"
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

/*
This code defines a React component called "Bounties" which fetches and displays a list of bounties. 
The component imports the "React" and "axios" libraries, as well as the "useEffect" and "useState" hooks.

The component renders an "AddBountyForm" component which accepts a "submit" function and a "btnText" prop.
The component also maps over the "bounties" array and renders a "Bounty" component for each item in the array.

The "getBounties" function sends a GET request to the "/bounties" endpoint and sets the "bounties" state to the response data.

The "addBounty" function sends a POST request to the "/bounties" endpoint with a new bounty object as the payload, 
and adds the new bounty to the "bounties" state.

The "deleteBounty" function sends a DELETE request to the "/bounties/:id" endpoint, 
where ":id" is the ID of the bounty to be deleted, and removes the deleted bounty from the "bounties" state.

The "editBounty" function sends a PUT request to the "/bounties/:id" endpoint, 
where ":id" is the ID of the bounty to be updated, with the updated bounty object as the payload. The updated bounty is then added to the "bounties" state.

The "useEffect" hook is used to call the "getBounties" function when the component mounts.

Overall, this code is a simple CRUD (Create, Read, Update, Delete) application that fetches and displays a list of 
bounties and allows the user to add, delete, and edit bounties.
*/