// modules
const express = require('express');
const serverless = require('serverless-http');
const morgan = require('morgan');
const cors = require('cors');

// initialization
const app = express();

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// routes
app.use('/api', require('./routes'));

// exports
module.exports = app;
module.exports.handler = serverless(app);
