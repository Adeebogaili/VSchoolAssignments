import express from 'express';
import { createReview } from '../controllers/reviewController.js';
import { verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// @route   POST api/review/:tourId
// @des     Post a review
// @access  Private
router.post('/:tourId', verifyUser, createReview);

export default router;
