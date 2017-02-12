(function() {
    'use strict';

    angular
        .module('githubProfiler')
        .factory('ghpFactory', ghpFactory);

    ghpFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function ghpFactory($http, $q) {
        var service = {
            getGHP: getGHP,
            getRepos: getRepos
        };

        return service;


        function getGHP(username) {
            var defer = $q.defer();
            $http({
                method: 'GET',
                url: 'http://api.github.com/users/'+ username +'?access_token=6bbb389100e2f07545d52812b538cb319f007c7c'
            }).then(function(response) {
                defer.resolve(response);
                console.log(response);
            }, function(error) {
                defer.reject(error);
            });
            return defer.promise;
        }

        function getRepos(currentUser) {
            var defer = $q.defer();
            $http({
                method: 'GET',
                url: 'http://api.github.com/users/'+ currentUser +'/repos?access_token=6bbb389100e2f07545d52812b538cb319f007c7c'
            }).then(function(response) {
                defer.resolve(response);
                console.log(response);
            }, function(error) {
                defer.reject(error);
            });
            return defer.promise;
        }

    }
})();
