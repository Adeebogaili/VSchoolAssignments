import React, { useState, useEffect, useContext } from "react";
import { CommentContext } from "../context/CommentProvider";

const PublicIssue = (props) => {
  const { title, description, imgUrl, user, createdAt } = props;

  return (
    <div className="issue-container">
      <div className="issue-wrapper">
        <div className="issue-div">
          <h3 className="issue-title">{title}</h3>
          <p className="issue-des">{description}</p>
          <img className="issue-img" src={imgUrl} alt={title} width={300} />
        </div>
      </div>
    </div>
  );
};

export default PublicIssue;
