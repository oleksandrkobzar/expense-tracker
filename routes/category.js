const express = require('express')
const router = express.Router()

const { createCategory, getCategories, updateCategory, deleteCategory } = require('../controllers/CategoryController') 
const { validateCategory, validate } = require('../controllers/ValidationController')

router.route('/')
  .post(validateCategory, validate, createCategory)
  .get(getCategories)

router.route('/:id')
  .put(validateCategory, validate, updateCategory)
  .delete(deleteCategory)

module.exports = router