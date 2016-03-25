import angular from 'angular';
import 'angular-ui-router';

import HomeCtrl from './home.controller';

export default angular
  .module('Home', ['ui.router'])

  .config(function ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        controller: 'HomeCtrl',
        controllerAs: 'vm',
        templateUrl: 'modules/home/home.tpl.html',
        data: {
          pageTitle: 'Home'
        }
      });
  })

  .controller('HomeCtrl', HomeCtrl);
