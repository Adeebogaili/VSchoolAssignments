import React, { useState } from "react";
import AddBountyForm from "./AddBountyForm";

const Bounty = ({
  firstName,
  lastName,
  living,
  type,
  bountyAmount,
  editBounty,
  deleteBounty,
  _id,
}) => {
  const [editToggle, setEditToggle] = useState(false);
  return (
    <div className="bounty">
      {!editToggle ? (
        <>
          <h1>
            Name: {firstName} {lastName}
          </h1>
          <p>Type: {type}</p>
          <button className="delete-btn" onClick={() => deleteBounty(_id)}>
            Delete
          </button>
          <button
            className="edit-btn"
            onClick={() => setEditToggle((preveToggle) => !preveToggle)}
          >
            Edit
          </button>
        </>
      ) : (
        <>
          <AddBountyForm
            firstName={firstName}
            lastName={lastName}
            type={type}
            _id={_id}
            btnText="Submit Edit"
            submit={editBounty}
          />
          <button onClick={() => setEditToggle((preveToggle) => !preveToggle)}>
            Close
          </button>
        </>
      )}
    </div>
  );
};

export default Bounty;
