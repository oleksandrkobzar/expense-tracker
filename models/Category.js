const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: [true, 'User ID is required']
  },
  title: {
    type: String,
    unique: true,
    trim: true,
    required: [true, 'Title category is required'],
    dropDups: true
  },
  background: {
    type: String,
    required: [true, 'Background color is required']
  }
},
  {
    timestamps: true
  }
)

module.exports = mongoose.model('categories', categorySchema)