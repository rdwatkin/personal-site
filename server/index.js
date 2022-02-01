const express = require('express'),
  bodyParser = require('body-parser'),
  swaggerJsdoc = require('swagger-jsdoc'),
  swaggerUi = require('swagger-ui-express')
  swaggerDoc = require('./swagger.json')
const http = require('http')
const fs = require('fs') // file server
const path = require('path')
const cors = require('cors')
const skillController = require('./controllers/skillController')


// Env Info
const port = 3000
const key = fs.readFileSync(__dirname + '/selfsigned.key')
const cert = fs.readFileSync(__dirname + '/selfsigned.crt')
const credentials = {
  key: key,
  cert: cert,
}

// Swagger Doc
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Ryan Watkins' Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Ryan Watkins",
      },
    },
    servers: [
      {
        url: "http://localhost:3000/",
      },
    ],
  },
  apis: ["./controllers/*.js"],
};


// Express
const app = express()

var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
app.use(express.json());

app.use(express.static(path.join(__dirname, "/../web", )))

app.get("/", (req, res) => {
  res.send("Now using http...");
})

app.use('/api/skill', skillController)

const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

const server = http.createServer(app)

server.listen(port, () => {
  console.log("Server starting on port: " + port)
})
