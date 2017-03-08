var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var app = express();

mongoose.connect("mongodb://localhost/homework");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use("/",express.static("./public"));

app.use("/api",require("./controllers/api.js"));

var callbackListen = function(){
    console.log("Server are running and listing on port 3000");
}

app.listen(3000,callbackListen);

