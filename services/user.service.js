// services/user.service.js

const {
    getUserByEmail,
    createUser,
    getUserById,
} = require('../data-access/user.da');

exports.getUserByEmailUC = async (email) => {
    return await getUserByEmail(email);
};

exports.createUserUC = async (userData) => {
    return await createUser(userData);
};

exports.getUserByIdUC = async (userId) => {
    return await getUserById(userId);
};
