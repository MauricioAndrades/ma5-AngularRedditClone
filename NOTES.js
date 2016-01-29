angular.module('myServiceModule', [])
.controller('MyController', ['$scope', 'notify', function($scope, notify) {
	$scope.callNotify = function(msg) {
		notify(msg);
	};
}]).
factory('notify', ['$window', function(win) {
	var msgs = [];
	return function(msg) {
		msgs.push(msg);
		if (msgs.length == 3) {
			win.alert(msgs.join("\n"));
			msgs = [];
		}
	};
}]);
angular.module('myServiceModule', [])
.controller('MyController', ['$scope', 'notify', function($scope, notify) {
	$scope.callNotify = function(msg) {
		notify(msg);
	};
}]).
factory('notify', ['$window', function(win) {
	var msgs = [];
	return function(msg) {
		msgs.push(msg);
		if (msgs.length == 3) {
			win.alert(msgs.join("\n"));
			msgs = [];
		}
	};
}]);

/**
 * REGIRESTING A SERVICE
 */

var myModule = angular.module('myModule', []);
myModule.factory('serviceId', function() {
	var newServiceInstance;
	/*
	factory function body that returns a newServiceInstance;
	 */
	return newServiceInstance;
});

/**
 * DEPENDENCY INJECTION
 * 	Angular invokes certain functions using the $injector
 */

/** INLINE ARRAY ANNOTATION */
modModule.controller('MyController', ['$depOne, $depTwo', function($scope, greeter){
//...
}]);

/**
 * INJECT PROPERTY ANNOTATION
 * 	To allow the minifiers to rename the function parameters and still be able to inject the right services, the function needs to be annotated with the $inject property. The $inject property is an array of service names to inject.
 */
var MyController = function($scope, greeter) {
	// function(params) must be in same order as $inject[params]
}
MyController.$inject = [$scope, 'greeter'];
someModule.controller('MyController', MyController);