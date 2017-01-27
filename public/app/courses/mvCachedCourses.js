/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('app').factory('mvCachedCourses', function(mvCourse){
    var courseList;
    
    return {
        query: function(){
            if(!courseList){
                courseList = mvCourse.query();
            }
            
            return courseList;
        }
    }
})
