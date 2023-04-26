const Joi = require('joi');

const loginSchema = Joi.object({
  name: Joi.string().alphanum().max(14).required(),
  password: Joi.string().pattern(/^.{6,29}$/)
});

module.exports = loginSchema;
