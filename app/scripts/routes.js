'use strict';

angular.module('RedditClone')

.config(['$routeProvider', 'SECURED_ROUTES', function($routeProvider, SECURED_ROUTES) {

    $routeProvider.whenAuthenticated = function(path, route) {
        route.resolve = route.resolve || {};
        route.resolve.user = ['Auth', function(Auth) {
            return Auth.$requireAuth();
        }];
        $routeProvider.when(path, route);
        SECURED_ROUTES[path] = true;
        return $routeProvider;
    };
}])


/* authentication bound routing*/

.config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }])
    .run(['$rootScope', '$location', 'Auth', 'SECURED_ROUTES', 'loginRedirectPath',
        function($rootScope, $location, Auth, SECURED_ROUTES, loginRedirectPath) {
            Auth.$onAuth(check);

            $rootScope.$on('$routeChangeError', function(e, next, prev, err) {
                if (err === 'AUTH_REQUIRED') {
                    $location.path(loginRedirectPath);
                }
            });

            function check(user) {
                if (!user && authRequired($location.path())) {
                    $location.path(loginRedirectPath);
                }
            }

            function authRequired(path) {
                return SECURED_ROUTES.hasOwnProperty(path);
            }
        }
    ])

// used by route security
.constant('SECURED_ROUTES', {});