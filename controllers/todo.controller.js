// controllers/todo.controller.js

const {createTodoUC,deleteTodoUC,getAllTodosUC,getTodoUC,updateTodoUC
} = require('../services/todo.service');


exports.createTodo = async (req, res, next) => {
    try {
        await createTodoUC(req.body);
        res.status(201).json({ message: 'Todo created successfully!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getTodoById = async (req, res, next) => {
    try {
        const todo = await getTodoUC(req.params);
        res.status(200).json(todo);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.updateTodo = async (req, res, next) => {
    try {
        await updateTodoUC(req.params, req.body);
        res.status(200).json({ message: 'Todo updated successfully!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteTodo = async (req, res, next) => {
    try {
        await deleteTodoUC(req.params);
        res.status(200).json({ message: 'todo deleted successfully!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAllTodos = async (req, res, next) => {
    try {
        const todos = await getAllTodosUC();
        res.status(200).json(todos);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
