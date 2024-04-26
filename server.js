//server.js

require('dotenv').config();
const express = require('express');
const config = require('config');
const connect = require('./utils/connect');
const router = require('./routes');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = config.get('port');

const app = express();

app.use(cors());


app.use(bodyParser.json());

app.use(router);


app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  await connect();
});
