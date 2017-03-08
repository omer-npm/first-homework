var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var productModel = new Schema({
    productName:String,
    categoryName:String,
    price:Number
});

module.exports = mongoose.model("product", productModel);