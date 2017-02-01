(function () {
    'use strict';

    angular
        .module('avaliacao360EricbApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
