var Connect = new Asteroid("localhost:3000");
angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // ddp
  

          // When the login event is emitted, this function will run.
          Connect.on('login', function(obj) {
            alert(JSON.stringify(obj));
          });
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);
    Connect.loginWithPassword($scope.loginData.username, $scope.loginData.password);
    //Connect.createUser($scope.loginData.username, $scope.loginData.password);
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

 .controller('UsersCtrl', function($scope) {
          $scope.users = [];
          $scope.refreshUsers = function () {
            var userCollection = Connect.getCollection('users');
            var allUsers = userCollection.reactiveQuery({});
            $scope.users = allUsers.result;
          }
        })

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
