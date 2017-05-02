angular.module('app')
    .controller('mainCtrl', function($scope){
    
    $scope.name = 'Brandon';
    
    $scope.alerter = function (text){
        alert(text);
    }
    
    $scope.logger = function (text){
        console.log(text);
    }
})