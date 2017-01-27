/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development:{
        db:'mongodb://localhost/openlearning',
        rootPath:rootPath,
        port: process.env.PORT || 3030
    },
    
    production: {
        rootPath:rootPath,
        db: '',
        port: process.env.PORT || 80
    }
}