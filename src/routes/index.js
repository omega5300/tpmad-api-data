// router module
const { Router } = require('express');

// firebase
const { firestore } = require('../models/firebase');

// db initialization
const db = firestore();

// router initialization
const router = Router();

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

// export routes
module.exports = router

