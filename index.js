const express = require("express");
const mysql = require("mysql2/promise");

const app = express();
const port = 3000;

let conn = null;
const initMysql = async () => {
  conn = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "web_dev_101",
  });
  conn.connect();
  return conn;
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, async () => {
  await initMysql();
  console.log(`Example app listening at http://localhost:${port}`);
});
