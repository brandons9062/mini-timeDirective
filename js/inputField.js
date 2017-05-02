angular.module('app')
.directive('inputField', function(){
    return {
        restrict: 'E',
        templateUrl: 'views/inputField.html',
        scope: {
            buttonText: '@',
            whenClicked: '&'
        }
    }
})