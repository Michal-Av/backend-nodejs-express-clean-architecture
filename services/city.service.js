// services/city.service.js

const {
    createCity,
    deleteCity,
    getAllCities,
    getCityById,
    updateCity,
} = require('../data-access/city.da');

exports.createCityUC = async (body) => {
    return await createCity(body);
};

exports.deleteCityUC = async (params) => {
    const { id } = params;
    return await deleteCity(id);
};

exports.updateCityUC = async (params, body) => {
    const { id } = params;
    return await updateCity(id, body);
};
exports.getAllCitiesUC = async (body) => {
    return await getAllCities(body);
};

exports.getCityUC = async (params) => {
    const { id } = params;
    return await getCityById(id);
};
