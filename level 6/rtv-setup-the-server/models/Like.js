const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const likeSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  target: {
    type: Schema.Types.ObjectId,
    required: true,
    refPath: 'onModel'
  },
  onModel: {
    type: String,
    required: true,
    enum: ['Issue', 'Comment']
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Like', likeSchema);
