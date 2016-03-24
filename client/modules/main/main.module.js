import angular from 'angular';
import 'angular-ui-router';

import MainCtrl from './main.controller';

let module = angular.module('Main', ['ui.router'])
  .config(function ($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  })

  .controller('MainCtrl', MainCtrl);

export default module;
