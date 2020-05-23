const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    trim: true,
    required: [true, 'Username field is required'],
    dropDups: true
  },
  password: {
    type: String,
    required: [true, 'Password field is required']
  }
},
  {
    timestamps: true
  }
)

module.exports = mongoose.model('user', userSchema)