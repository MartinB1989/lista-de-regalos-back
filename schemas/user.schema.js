const Joi = require('joi')

const id = Joi.string().uuid()
const fullName = Joi.string().min(2).max(50)
const avatar = Joi.string()
const phone = Joi.string()
const email = Joi.string().email()

const createUserSchema = Joi.object({
  fullName: fullName.required(),
  email: email.required()
})

const updateUserSchema = Joi.object({
  fullName: fullName.required(),
  email: email,
  phone: phone,
  avatar: avatar
})

const getUserSchema = Joi.object({
  id: id.required()
})

module.exports = {
  createUserSchema,
  updateUserSchema,
  getUserSchema
}
