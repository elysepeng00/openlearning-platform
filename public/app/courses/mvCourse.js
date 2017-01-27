/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('app').factory('mvCourse', function($resource){
    var CourseResource = $resource('/api/courses/:_id', {_id: "@id"}, {
        update: {method:'PUT', isArray:false}
    });
    
    return CourseResource;
});
