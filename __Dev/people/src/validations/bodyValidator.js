const Joi = require('joi');

const bodySchema = Joi.alternatives().try(
  Joi.object({
    firstName: Joi.string().alphanum().min(3).max(30).required(),
    lastName: Joi.string().alphanum().min(3).max(30).required(),
    nickName: Joi.string().min(3).max(30).trim().required(),
    password: Joi.string().required().min(3).max(30),
    cellPhone: Joi.string().min(9).max(13).required(),
    country: Joi.string(),
    //buscar validacion para fechas.
    datePeople: Joi.string(),
    address: Joi.string().required(),
    email: Joi.string().email().required()
  }),
  Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    developer: Joi.string().alphanum().min(3).max(30).required(),
    gender: Joi.string().alphanum().min(3).max(20).required(),
    gameModes: Joi.string().alphanum().min(3).max(20).required(),
    category: Joi.string().alphanum().min(3).max(20).required(),
    platforms: Joi.string().alphanum().min(3).max(30).required(),
    //agregar date mas tarde.
    release: Joi.string().alphanum().min(3).max(20).required(),
  })
)

  module.exports = bodySchema;