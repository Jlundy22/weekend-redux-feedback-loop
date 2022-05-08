const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');


// Adds a new review to the database
router.post('/',  (req, res) => {
  let newReview = req.body;
  console.log(` POST Adding review`, newReview);

  let queryText = `INSERT INTO "feedback" 
  ("feeling", "understanding", "support", "comments")
  VALUES ($1, $2, $3, $4);`;
  pool.query(queryText, [
    newReview.feeling,
     newReview.understanding,
     newReview.support,
     newReview.comment
    ])
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(`Error adding new review`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
