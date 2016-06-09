(function() {
  'use strict';

  angular
    .module('app.upload')
    .controller('uploadController', uploadController);

  uploadController.$inject = ['Upload', '$scope', '$timeout', 'logger'];
  /* @ngInject */
  function uploadController(Upload, $scope, $timeout, logger) {
    var vm = this;
    vm.news = {
      title: 'hottowel',
      description: 'Hot Towel Angular is a SPA template for Angular developers.'
    };
    vm.title = 'uploads';

        $scope.$watch('files', function () {
            $scope.upload($scope.files);
        });
        $scope.$watch('file', function () {
            if ($scope.file != null) {
                $scope.files = [$scope.file];
            }
        });
        $scope.log = '';
        var vm = this;
        vm.albumid = "empty";

        $scope.upload = function (files) {
            if (files && files.length) {
               
                    var file = files[0];
                    if (!file.$error) {
                        Upload.upload({
                            url: 'http://localhost:53285/api/uploads/',
                            data: {
                                file: file
                            }
                        }).then(function (resp) {
                            //Success
                            $timeout(function () {
                                $scope.log = 'file: ' +
                                resp.config.data.file.name +
                                ', Response: ' + JSON.stringify(resp.data) +
                                '\n' + $scope.log;
                                vm.albumid = JSON.stringify(resp.data);
                                $scope.albumid = resp.data;


                                alert($scope.albumid);
                                //Why does angular $window not work? or window.location?
                                window.location.replace("#/albums/" + $scope.albumid);
                            });



                        }, null, function (evt) {
                            var progressPercentage = parseInt(100.0 *
                                    evt.loaded / evt.total);
                            $scope.log = 'progress: ' + progressPercentage +
                                '% ' + evt.config.data.file.name + '\n' +
                              $scope.log;
                        })
                        .finally(function () {                          
                           
                        });

                      
                    }


                
            }
        };
  

}


})();
