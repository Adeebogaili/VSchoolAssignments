const mongoose = require('mongoose')

Schema = mongoose.Schema

const issueSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    completed: {
      type: Boolean,
      default: false
    },
    imgUrl: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    likes: {
      type: Number,
      required: true,
      default: 0
    }
  },
  {
    timestamps: true
  }
)

issueSchema.statics.incrementLikes = async function(issueId) {
  const issue = await this.findByIdAndUpdate(issueId, { $inc: { likes: 1 } }, { new: true });
  return issue.likes;
};

module.exports = mongoose.model("Issue", issueSchema);
