const express = require("express");
const commentRouter = express.Router();
const Comment = require("../models/Comment.js");
const User = require("../models/User.js");

// Get All Comments
commentRouter.get("/", async (req, res, next) => {
  try {
    const comments = await Comment.find().populate({
      path: "user",
      select: "username profileImage",
    });
    return res.status(200).send(comments);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

// Get comments by issue id
commentRouter.get("/:issueId", async (req, res, next) => {
  try {
    const comments = await Comment.find({ issue: req.params.issueId }).populate({
      path: "user",
      select: "username profileImage",
    });
    return res.status(200).send(comments);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

// Add new Comment
commentRouter.post("/:issueId", async (req, res, next) => {
  try {
    const user = await User.findById(req.auth._id);
    req.body.user = user._id;
    req.body.issue = req.params.issueId;
    const newComment = new Comment(req.body);
    const savedComment = await newComment.save();
    await savedComment.populate({
      path: "user",
      select: "username profileImage",
    });
    return res.status(201).send(savedComment);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

// Delete Comment
commentRouter.delete("/:issueId/:commentId", async (req, res, next) => {
  try {
    const deletedComment = await Comment.findOneAndDelete({
      _id: req.params.commentId,
      user: req.auth._id,
      issue: req.params.issueId,
    });
    if (!deletedComment) {
      res.status(404);
      return next(new Error("Comment not found."));
    }
    return res
      .status(200)
      .send(`Successfully deleted comment: ${deletedComment.text}`);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

// Update Comment
commentRouter.put("/:commentId", async (req, res, next) => {
  try {
    const updatedComment = await Comment.findOneAndUpdate(
      { _id: req.params.commentId, user: req.auth._id },
      req.body,
      { new: true }
    ).populate({
      path: "user",
      select: "username profileImage",
    });
    return res.status(201).send(updatedComment);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

module.exports = commentRouter;
