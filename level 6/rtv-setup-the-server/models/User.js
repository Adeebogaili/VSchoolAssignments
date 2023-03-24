const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

// When a user likes an iussue or a comment
const likeSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Issue'
  },
  comment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }
});

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    lowercase: true,
    default: ''
  },
  lastName: {
    type: String,
    lowercase: true,
    default: ''
  },
  profileImage: {
    type: String,
    default: ''
  },
  likes: [likeSchema],
  createdAt: {
    type: Date,
    default: Date.now
  },
    memberSince: {
    type: Date,
    default: Date.now
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
})

// pre-save hook to encrypt user passwords on signup
userSchema.pre("save", function(next){
  const user = this
  if(!user.isModified("password")) return next()
  bcrypt.hash(user.password, 10, (err, hash) => {
    if(err) return next(err)
    user.password = hash
    next()
  })
})

// method to check encrypted password on login
userSchema.methods.checkPassword = function(passwordAttept, callBack){
  bcrypt.compare(passwordAttept, this.password, (err, isMatch) => {
    if(err) return callBack(err)
    return callBack(null, isMatch)
  })
}

// method to remove user's password for token/sending the response
userSchema.methods.withoutPassword = function(){
  const user = this.toObject()
  delete user.password
  return user
}

module.exports = mongoose.model("User", userSchema)