(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var app = angular.module("homework",[]);

app.factory("productService",require("./services/product.js"));
app.controller("main",require("./controllers/productCtl.js"));
},{"./controllers/productCtl.js":2,"./services/product.js":3}],2:[function(require,module,exports){
module.exports = function($scope,productService){
    $scope.sidebar ={"menu": {"name":"תפריט", "sub":true, "category":[{"name":"עיסקיות"},{"name": "פיצות"},{"name": "סלטים"},{"name": "קינוחים"},{"name": "פינוקים"},{"name": "מאפים"},{"name": "תימני"},{"name": "פסטות"},{"name": "שתיה"}]},"area": {"name":"סניפים","sub":false},"about":{"name":"אודות","sub":false},"order":{"name":"הזמנות שלך","sub":false}};
    $scope.category = "עיסקיות";
    $scope.search = "";
    productService.getProduct($scope.category,function(res){
        $scope.products = res;
    });
    productService.allProducts(function(res){
        $scope.all = res
    });
    /* var to start side bar close and function to be visible */
    $scope.showgraphSidebar = false;
    $scope.toggle = function() {
        $scope.showgraphSidebar = !$scope.showgraphSidebar;
    }
   
    $scope.setCategory = function(category){
        $scope.category = category;
        productService.getProduct(category,function(res){
            $scope.products = res;
        });
    }
}
},{}],3:[function(require,module,exports){
module.exports = function($http){
    var self = this
    var products;
    self.getProduct = function(category,callback){
        $http.post("/api/getProductsByCategory",{category:category}).then(function(res){
            callback(res.data);
        })
    }
    self.allProducts = function(callback){
        $http.post("/api/getAllProducts",{}).then(function(res){
            callback(res.data);
        })
         /*var arr = [];
        angular.forEach(products, function(value, key) {
            for (var index = 0; index < value.length; index++) {
                arr.push(value[index]);
                
            }
        }, this);
        return arr;*/
    }

    return self;
}
},{}]},{},[1]);
