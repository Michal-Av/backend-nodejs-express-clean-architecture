// services/user.service.js

const {
    createTodo,
    deleteTodo,
    getAllTodos,
    getTodo,
    updateTodo,
} = require('../data-access/todo.da');

exports.createTodoUC = async (body) => {
    return await createTodo(body);
  };

exports.deleteTodoUC = async (params) => {
    const { id } = params;
    return await deleteTodo(id);
  };

exports.updateTodoUC = async (params, body) => {
    const { id } = params;
    return await updateTodo(id, body);
  };

exports.getAllTodosUC = async (body) => {
    return await getAllTodos(body);
  };

exports.getTodoUC = async (params) => {
    const { id } = params;
    return await getTodo(id);
  };
