(function() {
  'use strict';

  angular
    .module('app.album')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'album',
        config: {
          url: '/a/{albumUrl}',
          templateUrl: 'app/album/album.html',
          controller: 'albumController',
          controllerAs: 'vm',
          title: 'album',
          settings: {
            nav: 1,
            content: '<i class="fa fa-album"></i> album'
          }
        }
      }
    ];
  }
})();
