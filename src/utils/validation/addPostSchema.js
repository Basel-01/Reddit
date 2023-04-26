const Joi = require('joi');

const addPostSchema = Joi.object({
  postText: Joi.string().required()
});

module.exports = addPostSchema;
