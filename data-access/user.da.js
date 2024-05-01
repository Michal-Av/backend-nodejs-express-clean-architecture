// data-access/user.da.js

const userModel = require('../models/user.model');

async function getUserByEmail(email) {
    return await userModel.findOne({ email });
}

async function createUser(userData) {
    return await userModel.create(userData);
}

async function getUserById(userId) {
    return await userModel.findById(userId);
}

module.exports = {
    getUserByEmail,
    createUser,
    getUserById,
};
