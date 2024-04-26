//routes/city.routes.js

const express = require('express');
const router = express.Router();

const cityController = require('../controllers/city.controller');

const {
    validateCreateCity,
    validateUpdateCity,
    validateDeleteCity,
    validateGetCity,
} = require('../validations/city.validation');

const validateResource = require('../middleware/validateResource');


// Routes for City model
router.get('/', cityController.getAllCities);
router.post('/', validateResource(validateCreateCity), cityController.createCity);
router.get('/:id', validateResource(validateGetCity), cityController.getCityById);
router.put('/:id', validateResource(validateUpdateCity), cityController.updateCity);
router.delete('/:id', validateResource(validateDeleteCity), cityController.deleteCity);

module.exports = router;