// data-access/cityDA.js

const City = require('../models/city.model');

const createCity = async (cityData) => {
    const city = new City(cityData);
    await city.save();
};

const getCityById = async (cityId) => {
    return await City.findById(cityId);
};

const updateCity = async (cityId, cityData) => {
    await City.updateOne({ _id: cityId }, cityData)
};

const deleteCity = async (cityId) => {
    await City.findByIdAndDelete(cityId);
};

const getAllCities = async () => {
    return await City.find();
};

module.exports = {
    createCity,
    getCityById,
    updateCity,
    deleteCity,
    getAllCities,

};
