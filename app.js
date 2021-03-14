const express = require('express');
var path = require('path');
const app = express();
var port = process.env.PORT || 8080;
app.use(express.static(path.join(__dirname,"public")));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/home.html'));
});

app.get('/newsletter', function(req, res) {
  res.sendFile(path.join(__dirname + '/newsletter.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})