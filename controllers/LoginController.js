const User = require('../models/User')
const bcrypt = require('bcrypt')

exports.checkUser = async (req, res, next) => {
  try {
    const { username, password } = req.body

    const user = await User.findOne({ username: username })

    if (user && bcrypt.compareSync(password, user.password))
      return res.status(201).json({ data: user })

    return res.status(400).json({ error: "Incorrect username or password" })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: "Server Error" })
  }
}