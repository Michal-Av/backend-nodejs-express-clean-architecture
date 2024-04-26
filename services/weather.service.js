// services/weatherData.service.js

const {
    createWeatherData,
    deleteWeatherData,
    getAllWeatherData,
    getWeatherDataById,
    updateWeatherData,
} = require('../data-access/weather.da');

exports.createWeatherDataUC = async (body) => {
    return await createWeatherData(body);
};

exports.deleteWeatherDataUC = async (params) => {
    const { id } = params;
    return await deleteWeatherData(id);
};

exports.updateWeatherDataUC = async (body, params) => {
    const { id } = params;
    return await updateWeatherData(id, body);
};

exports.getAllWeatherDataUC = async () => {
    return await getAllWeatherData();
};

exports.getWeatherDataByIdUC = async (params) => {
    const { id } = params;
    return await getWeatherDataById(id);
};
