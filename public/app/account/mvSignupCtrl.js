/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('app').controller('mvSignupCtrl', function($scope, mvUser, mvNotifier, $location, mvAuth){
    $scope.signup = function(){
        var newUserData = {
            username: $scope.email,
            password: $scope.password,
            firstName: $scope.fname,
            lastName: $scope.lname
        };
        
        mvAuth.createUser(newUserData).then(function(){
            mvNotifier.notify('User account created!');
            $location.path('/');
            
        }, function(reason){
            mvNotifier.error(reason);
        })
    }
})
