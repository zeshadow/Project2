var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.getAll = function(callback) {
   // var query = 'select * from Artist a left join Album a1 on a1.Artist_id = a.Artist_id where a.Artist_id =?;';
    //var queryData = [astist_id];



    var query = 'SELECT * FROM Artist order by artistName asc;';




    //SELECT * FROM Artist order by artistName asc;
    // order by artistName asc;
    connection.query(query, function(err, result) {
        callback(err, result);
    });
};

exports.getById = function(astist_id, callback) {  //DONE

    /*    select * from Names n
     left join Artist a on a.Artist_id =n.Artist_id
     where n.Artist_id =3
     ;
*/
   // select * from Artist a left join Names n on n.Artist_id =?;
    var query = 'select * from Names n left join Artist a on a.Artist_id =n.Artist_id where a.Artist_id =? ;'; // WORKS
    var queryData = [astist_id];

    connection.query(query, queryData, function(err, result) {
        callback(err, result);
    });
};