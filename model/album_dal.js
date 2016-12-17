var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM Album a left join Artist a1 on a1.Artist_id=a.Artist_id ;';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.getById = function(album_id, callback) {

    /*
     select * from Song s
     left join Album a1 on a1.Album_id = s.Album_id
     left join Artist a on a.Artist_id= a1.Artist_id
     where a.Artist_id=1;
     ;

     */
    console.log(album_id);

    //var query = 'select * from Album a where Album_id =?;';

    var query = 'select * from Song s left join Album a1 on a1.Album_id = s.Album_id left join Artist a on a.Artist_id= a1.Artist_id where a.Artist_id=?; ; ';
    var queryData = [album_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};