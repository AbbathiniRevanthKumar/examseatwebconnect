const express = require("express");
const router = express.Router();
const con = require("./db");

router.get("/profile", (req, res) => {
  
  const insertQuery = "SELECT * FROM admintable";

  con.query(insertQuery, (err, results) => {
    if (err) {
      console.error("Error fetching data: ", err);
      res.json({ success: false });
    } else {
      res.json(results);
    }
  });
});


module.exports = router;
