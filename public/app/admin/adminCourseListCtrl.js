/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


angular.module('app').controller('adminCourseListCtrl', function($scope, mvCachedCourses, $routeParams){
   mvCachedCourses.query().$promise.then(function(collection){
       collection.forEach(function(course){
           if(course._id === $routeParams.id){
               $scope.course = course;
           }
       })
   })
});
