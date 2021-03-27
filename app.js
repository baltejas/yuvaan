const express = require("express");
var path = require("path");
const app = express();
var port = process.env.PORT || 8080;
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname + "/pages/landing.html"));
});

app.listen(port, () => {
	console.log(`Yuvaan app listening at http://localhost:${port}`);
});
