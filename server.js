var express = require('express'); //import express

var bodyParser = require('body-parser'); //helps parse the request and create the req.body object that will we will need to access in our routes
var app = express(); //creates an express app

app.use(bodyParser.urlencoded({ extended: true })); // parse requests of content-type: application/x-www-form-urlencoded

app.use(bodyParser.json()); // parse requests of content-type: application/json


var port = process.env.port || 3300

// set port, listen for requests

app.listen(port, () => {
    console.log("Hi This port is running");
});

// simple route
app.get("/", (request, response) => {
    response.json({ message: "Welcome to Stuarts rest api application." });
  });