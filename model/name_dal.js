var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM Names;';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.getById = function(astist_id, callback) {
    var query = 'select * from Names n left join Artist a on a.Artist_id =n.?;';
    var queryData = [astist_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};