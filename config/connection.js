const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3000,
    user: "root",
    password:"password",
    database:"burgers_db"
});

connection.connect(function(err){
    if (err) throw err; 
    console.log("Connected to database")
});

module.exports = connection; 