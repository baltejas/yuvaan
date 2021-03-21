const express = require('express');
var path = require('path');
const app = express();
var port = process.env.PORT || 8080;
app.use(express.static(path.join(__dirname, "public")));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/pages/home.html'));
});

app.get('/landing', function (req, res) {
  res.sendFile(path.join(__dirname + '/pages/landing.html'));
});

app.get('/newsletter', function (req, res) {
  res.sendFile(path.join(__dirname + '/pages/newsletter.html'));
});

app.get('/projects', function (req, res) {
  res.sendFile(path.join(__dirname + '/pages/projects.html'));
});

app.get('/youth-center', function (req, res) {
  res.sendFile(path.join(__dirname + '/pages/youth-emp-center.html'));
});

app.get('/career-development', function (req, res) {
  res.sendFile(path.join(__dirname + '/pages/career-development.html'));
});

app.get('/volunteer', function (req, res) {
  res.sendFile(path.join(__dirname + '/pages/volunteer.html'));
});

app.get('/impact', function (req, res) {
  res.sendFile(path.join(__dirname + '/pages/impact.html'));
});

app.get('/about-us', function (req, res) {
  res.sendFile(path.join(__dirname + '/pages/about-us.html'));
});

app.get('/donate', function (req, res) {
  res.sendFile(path.join(__dirname + '/pages/donate.html'));
});

app.listen(port, () => {
  console.log(`Yuvaan app listening at http://localhost:${port}`)
})