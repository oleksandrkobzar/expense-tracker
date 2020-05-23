const User = require('../models/User')
const bcrypt = require('bcrypt')

exports.checkUser = async (req, res, next) => {
  const { username, password } = req.body

  await User.findOne({ username: username }, (err, user) => {
    if (user && bcrypt.compareSync(password, user.password)) {
      return res.status(201).json({ data: user })
    }

    return res.status(400).json({ error: "Incorrect username or password" })
  })
}