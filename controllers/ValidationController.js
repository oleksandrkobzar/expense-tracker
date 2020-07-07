const { check, validationResult } = require('express-validator')

exports.validate = (req, res, next) => {
  const errors = validationResult(req)

  if (errors.isEmpty()) return next()

  const extractedErrors = []
  errors.array().map(err => extractedErrors.push(err.msg))

  return res.status(422).json({ error: extractedErrors })
}

exports.validateCategory = [
  check('title').trim().escape()
    .notEmpty().withMessage('Title category can not be empty'),

  check('background').trim().escape()
    .notEmpty().withMessage('Background category can not be empty')
    .bail()
]

exports.validateTransaction = [
  check('amount').trim().escape()
    .notEmpty().withMessage('Goal transaction can not be empty')
    .isFloat().withMessage('Goal transaction must be numeric'),

  check('description').trim().escape()
    .isLength({ max: 100 }).withMessage('Description transaction length max: 100'),

  check('categories').notEmpty().withMessage('Select a category')
    .bail()
]

exports.validateCreateUser = [
  check('username').trim().escape()
    .notEmpty().withMessage('Your username can not be empty')
    .isLength({ min: 3, max: 20 }).withMessage('Your username must be from 3 to 20 characters long')
    .matches(/^([0-9A-z\ \_]+)$/, 'g')
    .withMessage('Username must be contains characters upper/lower case letters, numbers, and underscores only'),

  check('password').trim().escape()
    .notEmpty().withMessage('Your password can not be empty')
    .isLength({ min: 6 }).withMessage('Your password must be at least 6 characters long')
    .isLength({ max: 40 }).withMessage('Your password must be to 40 characters long')
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* )(?=.*[^a-zA-Z0-9]).{6,}$/, 'i')
    .withMessage('Password must include one lowercase character, one uppercase character, a number, and a special character.'),

  check('repeatPassword').trim().escape()
    .notEmpty().withMessage('Password confirm is required')
]

exports.validateLoginUser = [
  check('username').trim().escape()
    .notEmpty().withMessage('Your username can not be empty'),

  check('password').trim().escape()
    .notEmpty().withMessage('Your password can not be empty')
]