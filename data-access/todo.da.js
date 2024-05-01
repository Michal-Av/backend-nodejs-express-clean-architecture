// data-access/todo.da.js

const Todo = require('../models/todo.model');

const getAllTodos = async () => {
  return await Todo.find();
};

const getTodo = async (input) => {
  return await Todo.findById(input);
};

const createTodo = async (input) => {
  return await Todo.create(input);
};

const deleteTodo = async (input) => {
  return await Todo.findByIdAndDelete(input);
};

const updateTodo = async (id, input) => {
  return await Todo.findByIdAndUpdate(id, input, { new: true });
};

// export DA functions
module.exports = {
  getAllTodos,
  getTodo,
  deleteTodo,
  updateTodo,
  createTodo,
};