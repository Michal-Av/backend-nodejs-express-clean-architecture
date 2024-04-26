// models/ city.models.js

const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    name: { type: String, required: true },
    country: { type: String, required: true },
    date: { type: Date, required: true },
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

// Compound index on `name` and `country` for faster lookup.
citySchema.index({ name: 1, country: 1 }, { unique: true });

module.exports = mongoose.model('cities', citySchema);
