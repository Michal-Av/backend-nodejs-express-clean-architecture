// models/ weather.models.js

const mongoose = require('mongoose');

const weatherDataSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    city: { type: mongoose.Schema.Types.ObjectId, ref: 'City', required: true },
    temp_c: { type: Number, required: true },
    icon: { type: String, required: true },
    description: { type: String, required: true },
    mintemp_c: { type: Number, required: true },
    maxtemp_c: { type: Number, required: true },
    feel_like: { type: Number, required: true },
    humidity: { type: Number, required: true },
    wind_kph: { type: Number, required: true },
    wind_dir: { type: String, required: true },
    uv: { type: Number, required: true }

});

// Compound index on `city` and `date` for sorting and filtering.
weatherDataSchema.index({ city: 1, date: 1 });

module.exports = mongoose.model('weatherData', weatherDataSchema);
