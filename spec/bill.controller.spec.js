// Initialize the controller and a mock scope

describe('Unit testing controller', function(){

    // load the controller's module
    //beforeEach(module(''));

    var scope,
        MainCtrl,
        apiService,
        deferred,
        q,
        status = {'temperature':'25.67'};
    beforeEach(inject(function($controller, $rootScope, $q){
        scope = $rootScope.$new();
        q = $q;
        apiService = {
            getStatus:function(){
                deferred = q.defer();
                return deferred.promise;
            }
        };
        MainCtrl = $controller('MainCtrl',
            { $scope : scope, backendService : apiService });

    }));

    it('should attach friend list to the scope', function(){
        expect(scope.names.length).toBe(3);
    });

    it('should request the current status when created', function(){
        spyOn(apiService, 'getStatus').andCallThrough();
        //spyOn(apiService, 'getStatus').and.callThrough(); new jasmine syntax
        scope.init();
        expect(apiService.getStatus).toHaveBeenCalled();
        deferred.resolve(status);
        scope.$root.$digest();
        expect(scope.currentTemp).toBe('25.67');
    });
});
