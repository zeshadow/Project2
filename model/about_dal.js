var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'select * from userAccount where Account_id=1;';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

