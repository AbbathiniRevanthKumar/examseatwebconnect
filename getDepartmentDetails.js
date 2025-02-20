const express = require("express");
const con = require("./db");

const router = express.Router();

router.post("/getDepartmentDetails", (req, res) => {
 

  const detailsQuery =
    "select distinct * from departmenttable";

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
