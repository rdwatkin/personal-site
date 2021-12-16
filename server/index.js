const express = require("express")
const https = require('https')
const fs = require('fs') // file server
const mysql = require('mysql2');
const path = require("path")
const port = 3000

const key = fs.readFileSync(__dirname + '/selfsigned.key')
const cert = fs.readFileSync(__dirname + '/selfsigned.crt')
const credentials = {
  key: key,
  cert: cert,
}

const con = mysql.createConnection({
  database: "rybald",
  user: "root",
  password: "password",
  host: "mysql",
  port: "3306"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

const app = express()

app.use(express.static(path.join(__dirname, "/../web", )))

app.get("/", (req, res) => {
  res.send("Now using https...");
})

const server = https.createServer(credentials, app)

server.listen(port, () => {
  console.log("Server starting on port: " + port)
})
