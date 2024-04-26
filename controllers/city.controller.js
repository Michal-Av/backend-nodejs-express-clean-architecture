// controllers/city.controller.js

const cityService = require('../services/city.service');


exports.createCity = async (req, res, next) => {
    try {
        await cityService.createCityUC(req.body);
        res.status(201).json({ message: 'City created successfully!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getCityById = async (req, res, next) => {
    try {
        const city = await cityService.getCityUC(req.params);
        res.status(200).json(city);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.updateCity = async (req, res, next) => {
    try {
        await cityService.updateCityUC(req.params, req.body);
        res.status(200).json({ message: 'City updated successfully!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteCity = async (req, res, next) => {
    try {
        await cityService.deleteCityUC(req.params);
        res.status(200).json({ message: 'City deleted successfully!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAllCities = async (req, res, next) => {
    try {
        const cities = await cityService.getAllCitiesUC();
        res.status(200).json(cities);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
