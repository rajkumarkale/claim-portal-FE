'use strict';
/*
@ APIs
@ Login:
@ url:    https://claim-backend.herokuapp.com/login
@ Method: POST
@ payload: email & password
==================Responce=============
  @for Success:    {
                        success:true,
                        message:"some string"
                        token:"some string"
                    }

========================================
========================================
@ Default password is password
========================================
*/

var app = angular.module('claimPortalApp');

app.service('loginService', ['$http', '$q', function ($http, $q) {
    var localUri = 'http://localhost:3000';
    //var appUri = "https://claim-backend.herokuapp.com"
    this.login = function (data) {
        var deferred = $q.defer();
        $http({
            method: 'POST',
            url: localUri + '/login',
            data: data
        }).success(function (data) {
            deferred.resolve(data);
            console.log(data);
        }).error(function (err) {
            deferred.resolve(err);
        });
        return deferred.promise;
    }


}]);
