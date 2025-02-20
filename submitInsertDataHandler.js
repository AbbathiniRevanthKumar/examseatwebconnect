const express = require("express");
const router = express.Router();
const con = require("./db");

router.post("/submitDataInsertForm", (req, res) => {
  const year = req.body.year;
  const department = req.body.department;
  const startNumber = req.body.startNumber;
  const endNumber = req.body.endNumber;
  const subject = req.body.subject;
  const classroom = req.body.classroom;
  const date = req.body.date;
  const startTime = req.body.startTime;
  const endTime = req.body.endTime;

  const enrollQuery =
    "Select distinct enrollId from studenttable where department=? and year= ?";

  const enrollIds = [];
  con.query(enrollQuery, [department, year], (err, results) => {
    if (err) {
      console.error("Error fetching data: ", err);
    } else {
      console.log("Data fetched successfully");
      results.forEach((item) => {
        enrollIds.push(item.enrollId);
      });
      console.log(enrollIds);

      const insertQuery =
        "INSERT INTO details(year, department, enrollnumber, classroom, subject, examdate, starttime, endtime) VALUES ?;";

      
      const id=[];

      for(j=0;j<enrollIds.length;j++)
      {
        if(enrollIds[j] >=startNumber && enrollIds[j] <= endNumber)
        {
          id.push(enrollIds[j]);
        }
      }
      let i = 0;
      const values = [];
      for(i=0;i<id.length;i++)
      {
        values.push([
          year,
          department,
          id[i],
          classroom,
          subject,
          date,
          startTime,
          endTime,
        ]);
      }
     

      con.query(insertQuery, [values], (err, results) => {
        if (err) {
          console.error("Error inserting data: ", err);
          res.status(500).json({ success: false });
        } else {
          console.log("Data inserted successfully");
          res.status(200).json({ success: true });
        }
      });
    }
  });
});

module.exports = router;
