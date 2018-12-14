var express = require('express');
var app = express();
var exphbs = require("express-handlebars");
var PORT = process.env.PORT || 4000;
var orm =require('./config/orm');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public/assets"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get('/',function(req,res){
    // to show the homepage, we're gonna need to make a call to the mysql database to get the status of all the current burgers

    // connection.query('SELECT * FROM burgers',function(err,data){
    //     if(err)throw err;
    //     console.log(data);
    //     res.render('index',{arbitraryName: data})
    // })
    // let allBurgers = orm.selectAll();
    console.log({arbitraryName:orm.selectAll()})
    res.render('index',{arbitraryName:orm.allBurgers});
    
    // orm.insertOne('sexyTest');
})

app.post('/',function(req,res){
    // connection.query('INSERT INTO burgers (burger_name,devoured) VALUES(?)',[req.body.burgerToAdd],function(err,result){
    //     if(err) throw err;
    //     // res.json()
    // })
})

// // Update database
// app.put("/todos/:id", function(req, res) {
//     connection.query("UPDATE plans SET plan = ? WHERE id = ?", [req.body.plan, req.params.id], function(err, result) {
//       if (err) {
//         // If an error occurred, send a generic server failure
//         return res.status(500).end();
//       }
//       else if (result.changedRows === 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       }
//       res.status(200).end();
  
//     });
// });
  

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});