/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('app').controller('mvCourseListCtrl', function($scope, mvCachedCourses){
    $scope.courses = mvCachedCourses.query();
    
    $scope.sortOptions = [{value:"title", text: "Sort by Title"},
        {value:"published",text:"Sort by Publish Date"}];
    
    $scope.sortOrder = $scope.sortOptions[0].value;
});

