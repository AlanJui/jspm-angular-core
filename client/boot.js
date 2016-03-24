import angular from 'angular';
import 'angular-ui-router';

import main from 'modules/main/main.module';

angular.element(document).ready(function () {
  return angular.bootstrap(document, [main.name]);
});
