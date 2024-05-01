// validation.js
const Joi = require('joi');

const signupSchema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

function validateSignup(req, res, next) {
    const { error } = signupSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
}

module.exports = {
    validateSignup,
};
