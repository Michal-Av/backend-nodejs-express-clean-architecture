require('dotenv').config();
const express = require('express');
const config = require('config');
const connect = require('./utils/connect');
const router = require('./routes');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");

const port = config.get('port');

const app = express();

// Enable CORS with specific origin
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true // Enable credentials
}));

app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

app.use(router);

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  await connect();
});
