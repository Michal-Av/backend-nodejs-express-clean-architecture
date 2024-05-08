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

async function updateUserPassword(email, newPasswordHash) {
    // Update user's password in the database
    await userModel.findOneAndUpdate({ email }, { password: newPasswordHash });
  }
  

module.exports = {
    getUserByEmail,
    createUser,
    getUserById,
    updateUserPassword
};
