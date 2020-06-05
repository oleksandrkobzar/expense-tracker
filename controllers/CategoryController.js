const Category = require('../models/Category')

exports.createCategory = async (req, res, next) => {
  try {
    const { title, background } = req.body

    const category = await Category.create({ title, background })

    return res.status(201).json({ data: category })
  }
  catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(elem => elem.message)

      return res.status(400).json({ error: messages })
    }
    if (err.name === 'MongoError' && err.code === 11000)
      return res.status(400).json({ error: 'Category already exists' })

    console.log(err)
    return res.status(500).json({ error: "Server Error" })
  }
}

exports.getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find()

    return res.status(201).json({ data: categories, count: categories.length })
  }
  catch (err) {
    console.log(err)
    return res.status(500).json({ error: "Server Error" })
  }
}

exports.updateCategory = async (req, res, next) => {
  try {

    const { id } = req.params
    const { title, background } = req.body

    const category = await Category.update({ _id: id }, { title, background })

    return res.status(201).json({ data: category })
  }
  catch (err) {
    if (err.name === 'CastError') {
      console.log(err.message)
      return res.status(400).json({ error: "ID not found" })
    }

    if (err.name === 'MongoError' && err.code === 11000)
      return res.status(400).json({ error: 'Category already exists' })

    console.log(err)
    return res.status(500).json({ error: "Server Error" })
  }
}

exports.deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params

    const category = await Category.remove({ _id: id })

    return res.status(201).json({ data: category })
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