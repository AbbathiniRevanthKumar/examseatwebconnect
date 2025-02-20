const express = require('express');
const router = express.Router();


const con = require("./db");


router.post('/addStudentDetails', (req, res) => {
    const department  = req.body.department;
    const year = req.body.year;
    const program = req.body.program;
    const rollNo = req.body.rollNo;
    const name = req.body.studentName;
    const enrollId = req.body.enrollId;

    const insertQuery = "Insert into studenttable values(?,?,?,?,?,?)";

    con.query(insertQuery,[program,department,year,rollNo,name,enrollId],(err,results)=>{
        if(err) throw err;
        if(results.affectedRows>0)
        {
            res.json({success : true});
        }
        else
        {
            res.status(500).json({ success: false });
        }
    })
});

module.exports = router;