import angular from 'angular';
import 'angular-ui-router';

import 'app.css!';
import MainCtrl from './main.controller';
import home from 'modules/home/home.module';

const main = angular
  .module('Main', [
    home.name,
    'ui.router'
  ])

  .config(function ($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  })

  .controller('MainCtrl', MainCtrl);

export default main;

angular.element(document).ready(function () {
  angular.bootstrap(document, [main.name]);
});
