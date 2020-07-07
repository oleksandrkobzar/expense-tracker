const Transaction = require('../models/Transaction')

exports.createTransaction = async (req, res, next) => {
  try {
    const { user_id, amount, description, type, categories } = req.body
    
    const transaction = await Transaction.create({ user_id, amount, description, type, categories })

    return res.status(201).json({ data: transaction })
  }
  catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(elem => elem.message)

      return res.status(400).json({ error: messages })
    }

    console.log(err)
    return res.status(500).json({ error: "Server Error" })
  }
}

exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find()

    return res.status(201).json({ data: transactions, count: transactions.length })
  }
  catch (err) {
    console.log(err)
    return res.status(500).json({ error: "Server Error" })
  }
}

exports.updateTransaction = async (req, res, next) => {
  try {

    const { id } = req.params
    const { user_id, amount, description, type, categories } = req.body

    const transaction = await Transaction.update({ _id: id, user_id: user_id }, { amount, description, type, categories })

    return res.status(201).json({ data: transaction })
  }
  catch (err) {
    if (err.name === 'CastError') {
      console.log(err.message)
      return res.status(400).json({ error: "ID not found" })
    }

    console.log(err)
    return res.status(500).json({ error: "Server Error" })
  }
}

exports.deleteTransaction = async (req, res, next) => {
  try {
    const { id } = req.params

    const transaction = await Transaction.remove({ _id: id })

    return res.status(201).json({ data: transaction })
  }
  catch (err) {
    if (err.name === 'CastError') {
      console.log(err.message)
      return res.status(400).json({ error: "ID not found" })
    }

    console.log(err)
    return res.status(500).json({ error: "Server Error" })
  }
}