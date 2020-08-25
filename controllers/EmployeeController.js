const Employee = require('../models/Employee');
const { response } = require('express');

//show all employees
const index = function(req,res){
    Employee.find()
            .then(function(data){
                res.json({
                    data
                })
            })
            .catch(function(err){
                res.json({message:'something went wrong!'})
            })
}

const store = function(req,res){
    let employee = new Employee({
        name:'naveen',
        designation:'junior',
        email:'naveen@krify.net',
        phone:'8688512890',
        age:25
    })
    employee.save()
            .then(function(data){
                res.json({messgae:'employe was created'})
            })
            .catch(function(err){
                res.json({message:'something went wrong!'})
            })
}


module.exports = {index,store}

