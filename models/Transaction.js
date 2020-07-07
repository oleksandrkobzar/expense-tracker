const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: [true, 'User ID is required']
  },
  amount: {
    type: Number,
    required: [true, 'Amount transaction is required']
  },
  description: {
    type: String
  },
  type: {
    type: String,
    required: [true, 'Type transaction is required']
  },
  categories: {
    type: [mongoose.Schema.Types.Mixed],
    required: [true, 'Select min one category']
  }
},
  {
    timestamps: true
  }
)

module.exports = mongoose.model('transactions', transactionSchema)