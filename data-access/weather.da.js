// data-access/weatherDataDA.js

const WeatherData = require('../models/weather.model');

exports.createWeatherData = async (weatherData) => {
    const newWeatherData = new WeatherData(weatherData);
    await newWeatherData.save();
};

exports.getWeatherDataById = async (weatherDataId) => {
    return await WeatherData.findById(weatherDataId);
};

exports.updateWeatherData = async (weatherDataId, weatherData) => {
    await WeatherData.findByIdAndUpdate(weatherDataId, weatherData, { new: true });
};

exports.deleteWeatherData = async (weatherDataId) => {
    await WeatherData.findByIdAndDelete(weatherDataId);
};

exports.getAllWeatherData = async () => {
    return await WeatherData.find();
};
