const { check, validationResult } = require('express-validator')

exports.validateCategory = [
  check('title').trim().escape()
    .notEmpty().withMessage('Title category can not be empty'),
  check('background').trim().escape()
    .notEmpty().withMessage('Background category can not be empty')
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req)
    console.log(req.body)
    if (!errors.isEmpty())
      res.status(422).json({ error: errors.errors[0].msg })

    next()
  }
]