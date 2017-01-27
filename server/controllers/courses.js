/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var Course = require('mongoose').model('Course');

exports.getCourses = function(req, res){
    Course.find({}).exec(function(err, collection){
        res.send(collection);
    })
};

exports.getCoursesById = function(req, res){
    Course.findOne({_id:req.params.id}).exec(function(err, course){
        res.send(course);
    })
}