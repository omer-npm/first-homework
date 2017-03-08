var express = require("express");
var router = express.Router();

var model = require("../models");

router.post("/getProductsByCategory",function(req,res){
    model.Product.find({categoryName:req.body.category},function(err,products){
        if(err){
            res.send(err);
        }
        res.json(products);
    })
});

router.post("/getAllProducts",function(req,res){
    model.Product.find({},function(err,all){
        if(err)
            res.send(err);
        res.send(all);
    })
})

module.exports = router;