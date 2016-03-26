import angular from 'angular';
import 'angular-ui-router';

import 'modules/html-templates/html-templates.module';

import HomeCtrl from './home.controller';

export default angular
  .module('Home', [
    'HTMLTemplates',
    'ui.router'
  ])

  .config(function ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        controller: 'HomeCtrl',
        controllerAs: 'vm',
        // templateUrl: 'modules/home/home.tpl.html',
        templateProvider: function ($templateCache) {
          return $templateCache.get('modules/home/home.tpl.html');
        },
        data: {
          pageTitle: 'Home'
        }
      });
  })

  .controller('HomeCtrl', HomeCtrl);
