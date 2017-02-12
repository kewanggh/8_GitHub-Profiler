(function() {
    'use strict';

    angular
        .module('githubProfiler')
        .controller('ghpController', ghpController);

    ghpController.$inject = ['ghpFactory'];

    /* @ngInject */
    function ghpController(ghpFactory) {
        var vm = this;
        vm.defaultUser = "kewanggh";
        vm.getProfile = getProfile;
        vm.getCurrentRepos = getCurrentRepos;

        function getProfile(username) {
          console.log(username);
          ghpFactory.getGHP(username).then(
            function(response) {
              vm.profile = response.data;
              console.log(response);
            })
            .catch(function(error){
              alert('An error occured');
            });
        }

         function getCurrentRepos(currentUser) {
          ghpFactory.getRepos(currentUser).then(
            function(response) {
              vm.currentRepos = response.data;
              console.log(response);
            })
            .catch(function(error) {
              alert('An error occured');
            });
        }

    }
})();
