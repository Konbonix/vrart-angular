(function() {
  'use strict';

  angular
    .module('app.dashboard')
    .controller('DashboardController', DashboardController);

  DashboardController.$inject = ['$q', 'dataservice', 'logger'];
  /* @ngInject */
  function DashboardController($q, dataservice, logger) {
    var vm = this;
    vm.news = {
      title: 'VR Gallery',
      description: 'Hot Towel Angular is a SPA template for Angular developers.'
    };
    vm.people = [];
    vm.albums = [];
    vm.title = 'Dashboard';

    activate();

    function activate() {
      var promises = [getAlbums()];
      return $q.all(promises).then(function() {
        logger.info('Activated Dashboard View');
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
