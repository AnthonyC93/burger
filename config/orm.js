//require connection.js
var connection = require('./connection').connection;


// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

// selectAll()
function selectAll(tableName){
    connection.query('SELECT * FROM ?',[tableName],function(err,data){
        if(err)throw err;
        console.log("result of select all: "+data);
        return data;
    })
}

// insertOne()
function insertOne(burgerName){
    connection.query("INSERT INTO burgers (burger_name, devoured) VALUES(?,'false')",[burgerName],function(err,result){
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

module.exports={
    selectAll:selectAll,
    insertOne:insertOne,
    updateOne:updateOne
}
// Export the ORM object in module.exports.