const Joi = require('joi');

const schema = Joi.alternatives().try(
  Joi.object({
    firstName: Joi.string().alphanum().min(3).max(30),
    lastName: Joi.string().alphanum().min(3).max(30),
    nickName: Joi.string().min(3).max(30).trim(),
  }),
  Joi.object({
    name: Joi.string().alphanum().min(3).max(30),
    category: Joi.string().alphanum().min(3).max(20),
    platforms: Joi.string().min(3).max(30).trim(),
    gender: Joi.string().min(3).max(20).trim()
  })
)

  module.exports = schema;