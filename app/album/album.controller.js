(function() {
  'use strict';

  angular
    .module('app.album')
    .controller('albumController', albumController);

  albumController.$inject = ['$q', 'dataservice', 'logger'];
  /* @ngInject */
  function albumController($q, dataservice, logger) {
    var vm = this;
    vm.news = {
      title: 'Test',
      description: 'Hot Towel Angular is a SPA template for Angular developers.'
    };
    vm.messageCount = 0;
    vm.albums = [];
    vm.title = 'Tilt Brush Albums';

    activate();

    function activate() {
      var promises = [getAlbums()];
      return $q.all(promises).then(function() {
        logger.info('Activated album View');
      });
    }


    function getAlbums() {
      return dataservice.getAlbums().then(function(data) {
        vm.albums = data;
        return vm.albums;
      });
    }
  }
})();
