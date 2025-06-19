require('dotenv').config({path : './database/dbConfig.env'});
const express = require("express");
const app = express();
const port = 3000;

console.log(process.env.DB_NAME);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/hello", (req, res) => {
  console.log(req.url);
  res.send("Hello World!");
});


app.get("/api/board", (req, res) => {
  res.send({ title: "노드 api 서버 update!!!!" });
});

// vue.js build 이후

const path = require('path');
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

app.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname, "./public", "index.html"));
});


app.use((req, res) => {
 res.status(404).sendFile(path.join(__dirname, "./public", "index.html"));
});