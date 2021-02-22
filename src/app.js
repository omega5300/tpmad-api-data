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
// firebase
const { firestore } = require('../models/firebase');

// db initialization
const db = firestore();

// router initialization
const router = express.Router();

// routes

/* get users */
router.get('/', async (req, res) => {
  const news = [];
  const tpmadAllNews = await db.collection('news').get();
  if (tpmadAllNews.docs.length > 0) {
    for (const tpmadNews of tpmadAllNews.docs) {
      news.push(tpmadNews.data());
    }
  }
  res.json(news);
});

// routes
app.use('/api', router);

// exports
module.exports = app;
module.exports.handler = serverless(app);
