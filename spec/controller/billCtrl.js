'use strict'


var MainCtrl = ['$scope', 'backendService', function($scope, backendService){
    $scope.names = ['Soh','Sim','Yew'];

    $scope.init = function(){
        backendService.getStatus().then(function(status){
            $scope.currentTemp = status.temperature;
        });
    };


}];
