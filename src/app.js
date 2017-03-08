var app = angular.module("homework",[]);

app.factory("productService",require("./services/product.js"));
app.controller("main",require("./controllers/productCtl.js"));