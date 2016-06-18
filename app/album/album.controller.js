(function() {
  'use strict';

  angular
    .module('app.album')
    .controller('albumController', albumController);

  albumController.$inject = ['$q', 'dataservice', 'logger', '$state', 'routerHelper', '$stateParams'];
  /* @ngInject */
  function albumController($q, dataservice, logger, $state, routerHelper, $stateParams) {
    var vm = this;
    vm.states = routerHelper.getStates();
    vm.news = {
      title: 'Test',
      description: 'Hot Towel Angular is a SPA template for Angular developers.'
    };
    vm.albumUrl = $stateParams.albumUrl;
    vm.messageCount = 0;
    vm.albumId;
    vm.title = 'Tilt Brush Albums';

    activate();

    function activate() {
      var promises = [getAlbumEdit(vm.albumUrl)];
      return $q.all(promises).then(function() {
        logger.info('Activated album View');
      });
    }


    function getAlbumEdit(albumUrl) {
      return dataservice.getAlbumEdit(albumUrl).then(function(data) {
        vm.albumId = data.albumId;
        return vm.albums;
      });
    }
  }
})();
