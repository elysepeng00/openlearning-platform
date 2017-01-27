/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var crypto = require('crypto');

exports.createSalt = function() {
    return crypto.randomBytes(128).toString('base64');
}

exports.hashPwd = function(salt, pwd) {
    var hmac = crypto.createHmac('sha1', salt);
    hmac.setEncoding('hex');
    hmac.write(pwd);
    hmac.end();
    return hmac.read();
}
    