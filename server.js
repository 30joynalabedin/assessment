const express = require("express");
const path = require('path');
var fs = require('fs');
const upload = require('express-fileupload');
const PORT = 3000;
const bodyParser = require('body-parser')

const app = express()

app.use(upload())

app.use(bodyParser.urlencoded({ extended: true }))

// simple route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname+'/index.html'));
});

// simple route
app.post("/", (req, res) => {
    var newPath = __dirname + "/uploads/"+req.files.file.name;
    fs.writeFile(newPath,req.files.file.data, function (err) {
      if (err) throw err;
      res.send("<h3>Success!</h3>");
    });
});

app.post("/search", (req, res) => {
  if (fs.existsSync(__dirname + "/uploads/"+req.body.search)) {
    res.send("<h3>File exists!</h3>");
    exit(1);
  }else{
    res.send("<h3>File does not exist!</h3>");
    exit(1);
  }
  console.log(req.body)
});

// set port, listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
  console.log(`Server is running on  http://localhost:${PORT}.`);
});