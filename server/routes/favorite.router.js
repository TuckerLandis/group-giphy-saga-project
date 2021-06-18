const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  pool.query('SELECT * FROM "favorite";').then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log('Error GET /api/favorite', error);
    res.sendStatus(500);
  });
});
// add a new favorite
router.post('/', (req, res) => {
  let newFavorite = req.body.url;
  console.log(`Adding New Favorite GIF`, newFavorite);
  let queryText = `INSERT INTO "favorite" ("url")
                 VALUES ($1);`;
  pool.query(queryText, [newFavorite])
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(`Error adding new Favorite GIF`, error);
      res.sendStatus(500);
    });
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  console.log(req.body)
  let selectedId = req.body
  let queryText = `UPDATE`

  pool.query(queryText, [selectedId])
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(`Error adding category to Favorite GIF`, error);
      res.sendStatus(500);
    });
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
