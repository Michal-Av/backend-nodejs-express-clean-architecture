const express = require('express');
const router = express.Router();

const weather = require('./weather.routes')
const city = require('./city.routes');


router.get("/status", (_, res) => res.status(200).json({ status: "OK" }));

router.use('/api/weather', weather);
router.use('/api/city', city);

module.exports = router;