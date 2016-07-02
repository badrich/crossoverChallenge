'use strict';

angular.module('crossoverChallengeApp', [
  'crossoverChallengeApp.auth',
  'crossoverChallengeApp.admin',
  'crossoverChallengeApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match',
  'ngAnimate',
  'ngMaterial'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
