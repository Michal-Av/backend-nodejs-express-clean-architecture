// routes/weather.routes.js
const express = require('express');
const router = express.Router();

const weatherDataController = require('../controllers/weather.controller');
const validateResource = require('../middleware/validateResource');
const {
    validateCreateWeather,
    validateGetWeather,
    validateUpdateWeather,
    validateDeleteWeather,
} = require('../validations/weather.validation'); // Change to city validation
// Routes for WeatherData model
router.get('/', weatherDataController.getAllWeatherData);
router.post('/', validateResource(validateCreateWeather), weatherDataController.createWeatherData);
router.get('/:id', validateResource(validateGetWeather), weatherDataController.getWeatherDataById);
router.put('/:id', validateResource(validateUpdateWeather), weatherDataController.updateWeatherData);
router.delete('/:id', validateResource(validateDeleteWeather), weatherDataController.deleteWeatherData);

module.exports = router;
