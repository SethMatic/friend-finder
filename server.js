// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.text());
  app.use(bodyParser.json({ type: "application/vnd.api+json" }));

  // Requires and sets the HTML routes in this file
require('./app/routing/htmlRoutes.js')(app);

// Requires and sets the API routes in this file
require('./app/routing/apiRoutes.js')(app);