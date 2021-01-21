// modules
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// initialization
const app = express();

// port
const port = process.env.PORT || 3000;

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// routes
app.use('/api', require('./routes'))

// start server
app.listen(port, () => console.info('api on port', port));

