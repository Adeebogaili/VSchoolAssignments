const express = require('express');
const router = express.Router();
const Like = require('../models/Vote');
const Issue = require('../models/Issue');
const Comment = require('../models/Comment');

// POST /likes/like
// Like an issue or comment
router.post('/like', async (req, res) => {
  const { user, targetId, targetType } = req.body;

  try {
    // Check if user has already liked or disliked the target
    const existingLike = await Like.findOne({ user, target: targetId, onModel: targetType });
    if (existingLike) {
      return res.status(400).json({ message: 'User has already liked or disliked this target.' });
    }

    // Create new like
    const like = new Like({
      user,
      target: targetId,
      onModel: targetType
    });

    // Populate username
    await like.populate('user', 'username').execPopulate();

    // Save like to database
    await like.save();

    // Update target's like count
    if (targetType === 'Issue') {
      await Issue.findByIdAndUpdate(targetId, { $inc: { likesCount: 1 } });
    } else if (targetType === 'Comment') {
      await Comment.findByIdAndUpdate(targetId, { $inc: { likesCount: 1 } });
    }

    res.json({ like });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// POST /likes/dislike
// Dislike an issue or comment
router.post('/dislike', async (req, res) => {
  const { user, targetId, targetType } = req.body;

  try {
    // Check if user has already liked or disliked the target
    const existingLike = await Like.findOne({ user, target: targetId, onModel: targetType });
    if (existingLike) {
      return res.status(400).json({ message: 'User has already liked or disliked this target.' });
    }

    // Create new dislike
    const like = new Like({
      user,
      target: targetId,
      onModel: targetType
    });

    // Populate username
    await like.populate('user', 'username').execPopulate();

    // Save dislike to database
    await like.save();

    // Update target's like count
    if (targetType === 'Issue') {
      await Issue.findByIdAndUpdate(targetId, { $inc: { dislikesCount: 1 } });
    } else if (targetType === 'Comment') {
      await Comment.findByIdAndUpdate(targetId, { $inc: { dislikesCount: 1 } });
    }

    res.json({ like });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
