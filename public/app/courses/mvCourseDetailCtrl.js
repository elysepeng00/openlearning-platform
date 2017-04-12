/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('app').controller('mvCourseDetailCtrl', function($scope, mvCachedCourses, $routeParams, mvUser, mvAuth, mvIdentity, mvNotifier){
   // var thisCourse;
    mvCachedCourses.query().$promise.then(function(collection){
       collection.forEach(function(course){
           if(course._id === $routeParams.id){
               $scope.course = course;
           }
       })
   })
   
   $scope.join = function(thisCourse){  
        var identity = mvIdentity;
        if (identity.isAuthenticated()){
        mvAuth.addToMyCourse(thisCourse).then(function() {
            mvNotifier.notify("Your have joined this course");
        })
        }else {
            mvNotifier.notify("Please login");
        }
    }
});
