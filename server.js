const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(__dirname));
app.listen(3001, () => console.log("Visit http://127.0.0.1:3001"));
