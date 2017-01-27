/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


angular.module('app').factory('mvUser', function($resource){
    var UserResource = $resource('/api/users/:id',{_id:"@id"}, {
        update: {method: 'PUT', isArray: false}
    });
    
    UserResource.prototype.isAdmin = function(){
        return this.roles && this.roles.indexOf('admin') > -1;
    }
    
    return UserResource;
})