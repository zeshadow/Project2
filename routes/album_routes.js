var express = require('express');
var router = express.Router();
var artist_dal = require('../model/artist_dal');
var name_dal = require('../model/name_dal')
var album_dal = require('../model/album_dal')


// View All artists
router.get('/all', function(req, res) {
    album_dal.getAll(function(err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.render('album/albumViewAll', { 'result':result });
        }
    });

});

// View the artist for the given id
router.get('/', function(req, res){
    if(req.query.album_id == null) {
        res.send('album_id is null');
    }
    else {
        album_dal.getById(req.query.album_id, function(err,result) {
           if (err) {
               res.send(err);
           }
           else {
               res.render('album/albumViewById', {'result': result});
           }
        });
    }
});

module.exports = router;
