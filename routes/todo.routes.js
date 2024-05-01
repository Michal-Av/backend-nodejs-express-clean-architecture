//routes/city.routes.js

const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todo.controller');

const {
    validateCreateTodo,
    validateUpdateTodo,
    validateDeleteTodo,
    validateGetTodo,
} = require('../validations/todo.validation');

const validateResource = require('../middleware/validateResource');


// Routes for todo model
router.get('/', todoController.getAllTodos);
router.post('/', validateResource(validateCreateTodo), todoController.createTodo);
router.get('/:id', validateResource(validateGetTodo), todoController.getTodoById);
router.put('/:id', validateResource(validateUpdateTodo), todoController.updateTodo);
router.delete('/:id', validateResource(validateDeleteTodo), todoController.deleteTodo);

module.exports = router;