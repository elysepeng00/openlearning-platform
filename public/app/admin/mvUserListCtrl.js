/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('app').controller('mvUserListCtrl', function($scope, mvUser){
    $scope.users = mvUser.query();
    
    
})

