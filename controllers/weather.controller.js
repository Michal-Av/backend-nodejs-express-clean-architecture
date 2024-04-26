// controllers/weatherData.controller.js

const weatherDataService = require('../services/weather.service');

exports.createWeatherData = async (req, res, next) => {
    try {
        await weatherDataService.createWeatherDataUC(req.body);
        res.status(201).json({ message: 'Weather data created successfully!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getWeatherDataById = async (req, res, next) => {
    try {
        const weatherData = await weatherDataService.getWeatherDataByIdUC(req.params);
        res.status(200).json(weatherData);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.updateWeatherData = async (req, res, next) => {
    try {
        await weatherDataService.updateWeatherDataUC(req.params, req.body);
        res.status(200).json({ message: 'Weather data updated successfully!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteWeatherData = async (req, res, next) => {
    try {
        await weatherDataService.deleteWeatherDataUC(req.params);
        res.status(200).json({ message: 'Weather data deleted successfully!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAllWeatherData = async (req, res, next) => {
    try {
        const weatherData = await weatherDataService.getAllWeatherDataUC();
        res.status(200).json(weatherData);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
