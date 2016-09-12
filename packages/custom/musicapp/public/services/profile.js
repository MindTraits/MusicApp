'use strict';

angular.module('mean.system').service('Profile',function($q,$timeout,$http) {
	/*
		JOHN PAPA - Y035
		Defer logic in a controller by delegating to services and factories.
		*/


	this.getProfile = function(){
		var deffered = $q.defer();
	    $http.get('meanStarter/assets/profile.json').success(function(response){
	    	$timeout(deffered.resolve(response));
	    }).error(function(e){
	    	$timeout(deferred.reject);
	    });
	    return deffered.promise;
	}

});