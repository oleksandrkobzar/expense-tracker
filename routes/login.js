const express = require('express')
const router = express.Router()

const { checkUser } = require('../controllers/LoginController')
const { validateLoginUser, validate } = require('../controllers/ValidationController')

router.route('/')
  .post(validateLoginUser, validate, checkUser)

module.exports = router