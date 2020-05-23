const User = require('../models/User')
const bcrypt = require('bcrypt')

exports.createUser = async (req, res, next) => {
  try {
    const { username, password, repeat_password } = req.body

    if (password === repeat_password) {
      const passwordHash = bcrypt.hashSync(password, 10)
      const user = await User.create({ username: username, password: passwordHash })

      return res.status(201).json({ data: user })
    }

    return res.status(400).json({ error: "Passwords are not matching" })
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(elem => elem.message)

      return res.status(400).json({ error: messages })
    }
    if (err.name === 'MongoError' && err.code === 11000)
      return res.status(400).json({ error: 'Username already exists' })

    console.log(err)
    return res.status(500).json({ error: "Server Error" })
  }
}