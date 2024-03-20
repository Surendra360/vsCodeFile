var express = require('express');
var router = express.Router();
const fs = require("fs")
const path = require("path")

const globlepath = path.join(__dirname, "../", "public", "uplodes");

/* GET home page. */
router.get('/', function (req, res, next) {
  const files = fs.readdirSync(globlepath)
  // res.render('index');
  res.render("index", { files: files, filedata: " " });
});

router.get('/file/:filename', function (req, res, next) {
  const filedata = fs.readFileSync(
    path.join(globlepath, req.params.filename),
    "utf-8"
  );
  const files = fs.readdirSync(globlepath);
  // res.render('index');
  res.render("index", { files: files, filedata: filedata })
});

//createfile ek post-rout he 
router.post('/createfile', function (req, res, next) {
  // const filename = req.body.filename;
  //using distructuring of line 14 in line 16
  const { filename } = req.body;
  fs.writeFileSync(path.join(globlepath, filename), "");
  // res.send("file created") 
  // message nahi dikhana h ese maine page pe dikhana h
  res.redirect(`/file/${filename}`);

});

router.get('/delete/:filename', function (req, res, next) {
  fs.unlinkSync(path.join(globlepath, req.params.filename));

  res.redirect("/")

});

module.exports = router;
