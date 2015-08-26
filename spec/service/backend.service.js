'use strict';

angular.module('app.service',[])
    .service('BackendService', ['$http','$q','$resource', function($http,$q, $resource){
        var deferred;
        this.getSettings = function(){
            // some complex XHR response
            deferred = $q.defer();
            var successCallback = function(data){
                // this callback will be called asynchronously
                // when the response is available
                console.log('$http: success');
                console.log(data);
                deferred.resolve(data);
            };
            var errorCallBack = function(data){
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log('$http: error');
                deferred.reject(data);
            };
            deferred = $q.defer();
            $http.get('/API/Settings').success(successCallback).error(errorCallBack);
            //$resource('/API/Settings').get({}, successCallback,errorCallBack );
            return deferred.promise;
        };
    }]);
