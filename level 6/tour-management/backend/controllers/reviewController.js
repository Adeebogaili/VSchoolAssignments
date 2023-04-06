import Tour from '../models/Tour.js';
import Review from '../models/Review.js';

export const createReview = async (req, res, next) => {
  const tourId = req.params.tourId;
  const newReview = new Review({ ...req.body });

  try {
    const savedReview = await newReview.save();

    // update the reviews array of the tour after creating a new review
    await Tour.findByIdAndUpdate(tourId, {
      $push: { reviews: savedReview._id },
    });

    res
      .status(201)
      .json({ sucess: true, message: 'Review submitted', data: savedReview });
  } catch (err) {
    res.status(500);
    return next(err);
  }
};
