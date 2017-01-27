/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('app').controller('mvProfileCtrl', function($scope, mvAuth, mvIdentity,mvNotifier){
    $scope.email = mvIdentity.currentUser.username;
    $scope.fname = mvIdentity.currentUser.firstName;
    $scope.lname = mvIdentity.currentUser.lastName;
    
    $scope.update = function(){
        var newUserData = {
            username: $scope.email,
            firstName: $scope.fname,
            lastName: $scope.lname
        }
        
        if($scope.password && $scope.password.length >0){
            newUserData.password = $scope.password;
        }
        
        mvAuth.updateCurrentUser(newUserData).then(function(){
            mvNotifier.notify('Your user accout has been updated');
        }, function(reason){
            mvNotifier.error(reason);
        })
    }
})
