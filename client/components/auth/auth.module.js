'use strict';

angular.module('crossoverChallengeApp.auth', [
  'crossoverChallengeApp.constants',
  'crossoverChallengeApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
