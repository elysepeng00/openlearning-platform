/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('app').controller('mvNavBarLoginCtrl', function($scope, $http, mvIdentity, mvNotifier, mvAuth, $location){
    $scope.identity = mvIdentity;
    $scope.signin = function(username, password){
        mvAuth.authenticateUser(username, password).then(function(success){
            if(success){
                 mvNotifier.notify('You have successfully signed in!');
            }else{
                 mvNotifier.notify('Username/Password combination incorrect');
            }
        });
    }
    
    $scope.signout = function(){
        mvAuth.logoutUser().then(function(){
            $scope.username = "";
            $scope.password = "";
            mvNotifier.notify("You have successfully signed out!");
            $location.path('/');
        })
    }
});
