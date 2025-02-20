const express = require("express");
const con = require("./db");

const router = express.Router();

router.post("/getProgramDetails", (req, res) => {
 

  const detailsQuery =
    "select distinct program from departmenttable";

  con.query(detailsQuery, (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
      res.json(results);
    } else {
      res.status(500).json({ success: false });
    }
  });
});

module.exports = router;
