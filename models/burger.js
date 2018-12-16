//import orm.js
var orm = require('./../config/orm');

//create the code that will call the ORM functions using burger specific input for the ORM.

var burger={
    all:function(callBack){
        orm.selectAll(function(response){
            callBack(response);
        })
    },

    update:function(newValue,idToChange){
        orm.updateOne(newValue,idToChange);
    },

    add:function(burgerName){
        orm.insertOne(burgerName)
    }
}


//export   
module.exports=burger;