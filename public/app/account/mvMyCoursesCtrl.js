/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


angular.module('app').controller('mvMyCoursesCtrl', function($scope, $routeParams,mvIdentity,mvCachedCourses){
    $scope.user = mvIdentity.currentUser;
//    var myCoursesList = mvIdentity.currentUser.myCourses;
//    $scope.courses = mvCachedCourses.query();
//    
//    $scope.findValue = function() {
//        var cur, i;
//        for (i = 0; i < myCoursesList.length; i++){
//            cur = myCoursesList[i];
//            console.log(cur);
//            for (var title in courses ){
//                if (courses.hasOwnProperty(title) && courses[title]== cur){
//                    return true;
//                }
//            }  
//        }  
//    }
})
