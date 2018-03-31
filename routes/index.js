const express = require('express');
const router = express.Router();
const moment = require('moment');
const path = require('path');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

router.get('/:date', (req, res) => {
  const param = req.params.date;
  let date;
  let obj;
  if(!isNaN(param)) {
    obj = {
      unix: param, 
      natural: moment(param * 1000).format("MMMM Do, YYYY"),
    };
  } else if (moment(new Date(param)).isValid()) {
    obj = {
      unix: new Date(param).getTime(), 
      natural: moment(new Date(param)).format("MMMM Do, YYYY"),
    };
  } else {
    obj = null;
  }
  res.json(obj);
});

module.exports = router;