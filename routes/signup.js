const express = require('express')
const router = express.Router();

const { createUser } = require('../controllers/SignupController')
const { validateCreateUser, validate } = require('../controllers/ValidationController')

router.route('/')
  .post(validateCreateUser, validate, createUser)

module.exports = router