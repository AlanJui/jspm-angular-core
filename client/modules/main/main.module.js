import angular from 'angular';
import 'angular-ui-router';

import 'app.css!';
// import 'modules/html-templates/html-templates.module';

import MainCtrl from './main.controller';
import Home from 'modules/home/home.module';

const MAIN = angular
  .module('Main', [
    // 'HTMLTemplates',
    Home.name,
    'ui.router'
  ])

  .config(function ($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  })

  .controller('MainCtrl', MainCtrl);

// export default MAIN;

angular.element(document).ready(function () {
  angular.bootstrap(document, [MAIN.name]);
});
