const Joi = require('joi');

const signupSchema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  name: Joi.string().alphanum().max(14).required(),
  password: Joi.string().pattern(/^.{6,29}$/),
  confirmPassword: Joi.ref('password')
});

module.exports = signupSchema;
