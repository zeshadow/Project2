var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
    var query = 'SELECT * FROM Song s left join Album a on a.Album_id = s.Album_id;';

    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.getById = function(song_id, callback) {

    /*
     select * from Song s
     left join Album a1 on a1.Album_id = s.Album_id
     left join Artist a on a.Artist_id= a1.Artist_id
     where a.Artist_id=1;
     ;

     */
    console.log(song_id);

    var query = 'select * from Song s left join Album a1 on a1.Album_id = s.Album_id left join Artist a on a.Artist_id= a1.Artist_id where Song_id=?; ';

    //var query = 'select * from Album a1 left join Song s on a1.Album_id = s.Album_id left join Artist a on a.Artist_id= a1.Artist_id where a.Artist_id=? and s.Song_id is not null; ';

    var queryData = [song_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};