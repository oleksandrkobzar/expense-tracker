const express = require('express')
const router = express.Router()

const { createTransaction, getTransactions, updateTransaction, deleteTransaction } = require('../controllers/TransactionController') 
const { validateTransaction, validate } = require('../controllers/ValidationController')

router.route('/')
  .post(validateTransaction, validate, createTransaction)
  .get(getTransactions)

router.route('/:id')
  .put(validateTransaction, validate, updateTransaction)
  .delete(deleteTransaction)

module.exports = router