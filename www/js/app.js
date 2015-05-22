'use strict';

angular.module(
  'userApp',
  [
    'ui.router',
    'ngResource',
    'userApp.controllers',
    'userApp.services'
  ]
);

angular.module('userApp').config(function($stateProvider, $httpProvider) {
  $stateProvider.state('users', {
    url: '/users',
    templateUrl: 'templates/users.html',
    controller: 'UserListController'
  }).state('viewUser', {
    url: '/users/:id/view',
    templateUrl: 'templates/user-view.html',
    controller: 'UserViewController'
  }).state('newUser', {
    url: '/users/new',
    templateUrl: 'templates/user-add.html',
    controller: 'UserCreateController'
  }).state('editUser', {
    url: '/users/:id/edit',
    templateUrl: 'templates/user-edit.html',
    controller: 'UserEditController'
  });
}).run(function($state) {
  $state.go('users');
});
