const express = require('express')
const router = express.Router()

const { checkUser } = require('../controllers/LoginController')

router.route('/').post(checkUser)

module.exports = router