//import express
//import burger.js
var burger=require('./../models/burger');
var express=require('express');
var app=express();
var router = express.Router();

router.get('/',function(req,res){
    burger.all(function(data){
        var whatever={
            arbitraryName:data
        }
        res.render('index',whatever);
    })
})

router.post('/',function(req,res){
    burger.add(req.body.burgerNameEntered);
    res.redirect('/');
})

router.put('/:id',function(req,res){
    // burger.update(1,req.body.id);
    burger.update(1,req.params.id);
})

module.exports=router;