const Joi = require("joi");

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).alphanum().required()
});

const registerSchema = Joi.object({
    name: Joi.string().required(),
    gender: Joi.string().required(),
    dob: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).alphanum().required()
});

const logoutSchema = Joi.object({
    token: Joi.string().required()
});

const isloggedSchema = Joi.object({
    uniqueID: Joi.string().required()
})

module.exports = {
    loginSchema,
    registerSchema,
    logoutSchema,
    isloggedSchema
}