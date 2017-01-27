/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


angular.module('app').controller('mvMyCourses', function($scope, mvAuth, mvIdentity,mvNotifier){
    $scope.email = mvIdentity.currentUser.username;
    $scope.fname = mvIdentity.currentUser.firstName;
    $scope.lname = mvIdentity.currentUser.lastName;
    
    $scope.join = function(){
        
        mvAuth.joinCourse().then(function(){
            mvNotifier.notify('Your have joined this course');
        }, function(reason){
            mvNotifier.error(reason);
        })
    }
})
