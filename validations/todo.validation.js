// todo.validator.js

const Joi = require('joi');

const validateCreateTodo = Joi.object({
  body: Joi.object({
    title: Joi.string().required().error(new Error('Title is required')),
    description: Joi.string().allow('').optional(),
    flag: Joi.string()
      .valid('Red', 'Orange', 'Green')
      .optional()
      .error(new Error('Flag must be one of Red, Orange, or Green')),
  }),
  params: Joi.object(),
  query: Joi.object(),
});

const validateUpdateTodo = Joi.object({
  params: Joi.object({
    id: Joi.string().required().error(new Error('ID is required')),
  }),
  body: Joi.object({
    title: Joi.string().optional(),
    description: Joi.string().allow('').optional(),
    status: Joi.string().valid('Open', 'In Progress', 'Done').optional(),
    flag: Joi.string().valid('Red', 'Orange', 'Green').optional(),
  }).min(1),
  query: Joi.object(),
});

const validateDeleteTodo = Joi.object({
  params: Joi.object({
    id: Joi.string().required().error(new Error('ID is required')),
  }),
  body: Joi.object(),
  query: Joi.object(),
});

const validateGetTodo = Joi.object({
  params: Joi.object({
    id: Joi.string().required().error(new Error('ID is required')),
  }),
  body: Joi.object(),
  query: Joi.object(),
});

module.exports = {
  validateCreateTodo,
  validateUpdateTodo,
  validateGetTodo,
  validateDeleteTodo,
};