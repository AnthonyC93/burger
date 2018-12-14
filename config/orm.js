//require connection.js
var connection = require('./connection').connection;


// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

// selectAll()
function selectAll(){
    
    // function getAll(){
    //     connection.query('SELECT * FROM burgers',function(err,data){
    //         if(err)throw err;
    //         console.log("result of select all: "+data);
    //         for(let i=0;i<data.length;i++){
    //             console.log(data[i]);
    //         }
    //         return data;
    //     })
    //     return;
    // }
    // return getAll();

    connection.query('SELECT * FROM burgers',function(err,data){
        if(err)throw err;
        console.log("result of select all: "+data);
        for(let i=0;i<data.length;i++){
            console.log(data[i]);
        }
        return data;
    })
    return;
}

// insertOne()
function insertOne(burgerName){
    connection.query("INSERT INTO burgers (burger_name,devoured) VALUES(?,0)",[burgerName],function(err,result){
        if(err) throw err;
        console.log("result of insert: "+result);
    })
}

// updateOne()
function updateOne(){
    connection.query("UPDATE burgers SET devoured = 'false' WHERE name=?",[burgerToUpdate],function(err,data){
        if(err) throw err;
        console.log("result of update: "+result);
    })
}

// Export the ORM object in module.exports.
module.exports={
    selectAll:selectAll,
    insertOne:insertOne,
    updateOne:updateOne,
    allBurgers:selectAll()
}