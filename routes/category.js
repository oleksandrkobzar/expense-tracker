const express = require('express')
const router = express.Router()

const { createCategory, getCategories, updateCategory, deleteCategory } = require('../controllers/CategoryController') 
const { validateCategory } = require('../controllers/ValidationController')

router.route('/')
  .post(validateCategory, createCategory)
  .get(getCategories)

router.route('/:id')
  .put(validateCategory, updateCategory)
  .delete(deleteCategory)

module.exports = router