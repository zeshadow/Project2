var express = require('express');
var router = express.Router();
var artist_dal = require('../model/artist_dal');
var name_dal = require('../model/name_dal')
var album_dal = require('../model/album_dal')
var song_dal = require('../model/song_dal')


// View All artists
router.get('/all', function(req, res) {
    song_dal.getAll(function(err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.render('song/songViewAll', { 'result':result });
        }
    });

});

// View the artist for the given id
router.get('/', function(req, res){
    if(req.query.song_id == null) {
        res.send('Song_id is null');
    }
    else {
        song_dal.getById(req.query.song_id, function(err,result) {
           if (err) {
               res.send(err);
           }
           else {
               res.render('song/songViewById', {'result': result});
           }
        });
    }
});

module.exports = router;
