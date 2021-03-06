(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('dataservice', dataservice);

  dataservice.$inject = ['$http', '$q', 'exception', 'logger'];
  /* @ngInject */
  function dataservice($http, $q, exception, logger) {
    var service = {
      // getMessageCount: getMessageCount,
      getAlbumEdit,
      getAlbums : getAlbums
    };

    return service;

    // function getMessageCount() { return $q.when(72); }

    function getAlbums() {
      return $http.get('http://localhost:53285/api/albums')
        .then(success)
        .catch(fail);

      function success(response) {
        return response.data;
      }

      function fail(e) {
        return exception.catcher('XHR Failed for getAlbum')(e);
      }
    }

    function getAlbumEdit(albumUrl) {
      return $http.get('http://localhost:53285/api/albums/' + albumUrl)
        .then(success)
        .catch(fail);

      function success(response) {
        return response.data;
      }

      function fail(e) {
        return exception.catcher('XHR Failed for getEditAlbum')(e);
      }
    }

  }
})();
