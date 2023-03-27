const express = require("express");
const issueRouter = express.Router();
const Issue = require('../models/Issue.js');
const User = require('../models/User.js');

// Get All Issues
issueRouter.get("/", async (req, res, next) => {
  try {
    const issues = await Issue.find().populate('user', 'username profileImage');
    res.status(200).send(issues);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

// Get issues by user id
issueRouter.get("/user", async (req, res, next) => {
  try {
    const issues = await Issue.find({ user: req.auth._id }).populate('user', 'username profileImage');
    res.status(200).send(issues);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

// Add new Issue
issueRouter.post("/", async (req, res, next) => {
  try {
    req.body.user = req.auth._id;
    const newIssue = new Issue(req.body);
    const savedIssue = await newIssue.save();
    const populatedIssue = await savedIssue.populate('user', 'username profileImage');
    res.status(201).send(populatedIssue);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

// Delete Issue
issueRouter.delete("/:issueId", async (req, res, next) => {
  try {
    const deletedIssue = await Issue.findOneAndDelete({ _id: req.params.issueId, user: req.auth._id }).populate('user', 'username profileImage');
    res.status(200).send(`Successfully delete issue: ${deletedIssue.title}`);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

// Update Issue
issueRouter.put("/:issueId", async (req, res, next) => {
  try {
    const updatedIssue = await Issue.findOneAndUpdate({ _id: req.params.issueId, user: req.auth._id }, req.body, { new: true }).populate('user', 'username profileImage');
    res.status(201).send(updatedIssue);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

module.exports = issueRouter;
