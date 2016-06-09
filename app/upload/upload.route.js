(function() {
  'use strict';

  angular
    .module('app.upload')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'upload',
        config: {
          url: '/upload',
          templateUrl: 'app/upload/upload.html',
          controller: 'uploadController',
          controllerAs: 'vm',
          title: 'upload',
          settings: {
            nav: 1,
            content: '<i class="fa fa-upload"></i> upload'
          }
        }
      }
    ];
  }
})();
