var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");

const{compareUsers, compArrays, yourMatch} = require('./app/data/friends.js');

//variables to set up my server
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));



console.log(htmlRoutes)
//htmlRoutes.htmlRoutes(app, express);
htmlRoutes(app,express);
apiRoutes(app, express);
app.listen(PORT, function(){
    console.log("We are live");
    
})

