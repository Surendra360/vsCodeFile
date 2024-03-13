var express = require('express');
var router = express.Router();
const fs = require("fs")
const path = require("path")

const globlepath = path.join(__dirname, "../", "public", "uplodes");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
//createfile ek post-rout he 
router.post('/createfile', function(req, res, next) {
  // const filename = req.body.filename;
  //using distructuring of line 14 in line 16
  const { filename } =req.body
  fs.writeFileSync(path.join(globlepath, filename),"");
  res.send("file created")
  
});

module.exports = router;
