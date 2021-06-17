const express = require('express');
const pool = require('../modules/pool');
const axios = require("axios");
require("dotenv").config();

const router = express.Router();

router.get('/', (req, res) => {
  // return all categories
  const queryText = `SELECT * FROM category ORDER BY name ASC`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

// ---> client side /api/category/search
router.get("/search", (req, res) => {
  axios
    .get(
      `http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${req.params.searchTag}&limit=12`
    )
    .then((response) => {
      console.log(response.data);
      res.send(response.data);
    })
    .catch((error) => {
      console.log(`We got an error capt ${error}`);
    });
});

module.exports = router;
