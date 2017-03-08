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