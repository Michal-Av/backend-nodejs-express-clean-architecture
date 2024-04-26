/**
 * @mongoDB Atlas
 * connect to the DB weatherDB
 */
const mongoose = require('mongoose');
const config = require('config');


async function connect() {
    const dbUri = config.get('dbUri');

    try {
        await mongoose.connect(dbUri, {
            w: 'majority',
        });
        console.log('Successfully connected to MongoDB Atlas!');
    } catch (error) {
        console.log('Unable to connect to MongoDB Atlas!');
        console.error(error);
        process.exit(1);
    };
}
module.exports = connect;
