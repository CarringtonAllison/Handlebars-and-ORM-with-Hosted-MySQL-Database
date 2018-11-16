const mysql = require('mysql');


if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);    
}else {

    connection = mysql.createConnection({
        host: "tuy8t6uuvh43khkk.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "y195kawikei8iu66",
        password:"q0zwgiy1weifqqk6",
        database:"zrkslij408hgc8e5"
    });
}

connection.connect(function(err){
    if (err) throw err; 
    console.log("Connected to database")
});

module.exports = connection; 