// config/default.js

module.exports = {
    port: process.env.PORT || 8000,
    protocol: "http",
    host: "localhost",
    origin: "https://localhost:4000",
    secretKey: "A0KzQq3cNfBogjH8",
    dbUri: process.env.DB_URL
};