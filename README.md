# yo-reddit-clone-sass

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 1.0.0.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

##angular service:

1. add a service dependency in your html
```html
  <div id="simple" ng-controller="MyController">
    <p>Let's try this simple notify service, injected into the controller...</p>
    <input ng-init="message='test'" ng-model="message" >
    <button ng-click="callNotify(message);">NOTIFY</button>
    <p>(you have to click 3 times to see an alert)</p>
  </div>
```

```js
    angular.
    module('myServiceModule', []).
     controller('MyController', ['$scope','notify', function ($scope, notify) {
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
     }]);angular.
module('myServiceModule', []).
 controller('MyController', ['$scope','notify', function ($scope, notify) {
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
```

```js

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
 *     Angular invokes certain functions using the $injector
 */

/** INLINE ARRAY ANNOTATION */
modModule.controller('MyController', ['$depOne, $depTwo', function($scope, greeter){
//...
}]);

/**
 * INJECT PROPERTY ANNOTATION
 *     To allow the minifiers to rename the function parameters and still be able to inject the right services, the function needs to be annotated with the $inject property. The $inject property is an array of service names to inject.
 */
var MyController = function($scope, greeter) {
    // function(params) must be in same order as $inject[params]
}
MyController.$inject = [$scope, 'greeter'];
someModule.controller('MyController', MyController);

/**
 * THE INJECTOR
 *     user the injector to pass dependencies around
 *     the injector is a service localtor responsible for finding and passing around
 *     dependencies.
 */


/**
 * someclass is a constructor, it is handed greeter by the $injector when it is created.
 * @param {[type]} greeter [description]
 */
 function SomeClass(greeter) {
   this.greeter = greeter;
 }

 SomeClass.prototype.doSomething = function(name) {
   this.greeter.greet(name);
 }
 
 // example
 // Provide the wiring information in a module
 var myModule = angular.module('myModule', []);
 // teach injector how to build a greeter.
myModule.factory('greeter', function($window){
    return {
        greet: function(text) {
            
        }
    }
})
```