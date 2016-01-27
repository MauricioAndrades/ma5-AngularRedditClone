'use strict';

describe('Controller: PostpicCtrl', function () {

  // load the controller's module
  beforeEach(module('RedditClone'));

  var PostpicCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PostpicCtrl = $controller('PostpicCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
