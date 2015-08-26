'use strict';

describe('Service: BackendService', function(){

    //load backend service's module
    beforeEach(module('app.service','ngResource'));

    // instantiate service
    var BackendService, $httpBackend;
    beforeEach(inject(function( _BackendService_, _$httpBackend_ ){
        BackendService = _BackendService_;
        $httpBackend = _$httpBackend_;
    }));

    it('should be defined', function(){
        expect(BackendService).toBeDefined();
    });

    it('should GET controller settings from the service', function(){
        $httpBackend.expectGET('/API/Settings').respond(
            200,
            { "key":"value"}
        );
        var settings = BackendService.getSettings();
        $httpBackend.flush();
        expect(settings).toEqual(jasmine.any(Object));
    });

    afterEach(function(){
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

});
