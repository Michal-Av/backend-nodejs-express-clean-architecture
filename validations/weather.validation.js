const Joi = require('joi');

const validateCreateWeather = Joi.object({
    body: Joi.object({
        date: Joi.date().required().error(new Error('Date is required')),
        city: Joi.string().required().error(new Error('City is required')),
        temp_c: Joi.number().required().error(new Error('Temperature is required')),
        icon: Joi.string().required().error(new Error('Icon is required')),
        description: Joi.string().required().error(new Error('Description is required')),
        mintemp_c: Joi.number().required().error(new Error('Min temperature is required')),
        maxtemp_c: Joi.number().required().error(new Error('Max temperature is required')),
        feel_like: Joi.number().required().error(new Error('Feel like temperature is required')),
        humidity: Joi.number().required().error(new Error('Humidity is required')),
        wind_kph: Joi.number().required().error(new Error('Wind speed is required')),
        wind_dir: Joi.string().required().error(new Error('Wind direction is required')),
        uv: Joi.number().required().error(new Error('UV index is required')),
    }),
    params: Joi.object(),
    query: Joi.object(),
});

const validateUpdateWeather = Joi.object({
    params: Joi.object({
        id: Joi.string().required().error(new Error('ID is required')),
    }),
    body: Joi.object({
        date: Joi.date().optional(),
        city: Joi.string().optional(),
        temp_c: Joi.number().optional(),
        icon: Joi.string().optional(),
        description: Joi.string().optional(),
        mintemp_c: Joi.number().optional(),
        maxtemp_c: Joi.number().optional(),
        feel_like: Joi.number().optional(),
        humidity: Joi.number().optional(),
        wind_kph: Joi.number().optional(),
        wind_dir: Joi.string().optional(),
        uv: Joi.number().optional(),
    }).min(1),
    query: Joi.object(),
});

const validateDeleteWeather = Joi.object({
    params: Joi.object({
        id: Joi.string().required().error(new Error('ID is required')),
    }),
    body: Joi.object(),
    query: Joi.object(),
});

const validateGetWeather = Joi.object({
    params: Joi.object({
        id: Joi.string().required().error(new Error('ID is required')),
    }),
    body: Joi.object(),
    query: Joi.object(),
});

module.exports = {
    validateCreateWeather,
    validateUpdateWeather,
    validateGetWeather,
    validateDeleteWeather,
};
