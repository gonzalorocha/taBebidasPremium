var app = angular.module('app');
app.controller('productTypeController',function($scope,$location,productTypeService){
    var pt = this;
    
    productTypeService.getType().then(function(product_types){
        pt.product_types = product_types;
    });

    pt.agregar = function(){
        console.log(pt.newType);
        productTypeService.addType(pt.newType);
    };

    pt.eliminar = function(){
        productTypeService.deleteProductType(pt.id);
    }
    
    // pt.modificar = function(){
    //     productTypeService.modificar(pt.)
    // }

    $scope.pt= pt


})