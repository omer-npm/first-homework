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