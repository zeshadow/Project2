var express = require('express');
var router = express.Router();
var artist_dal = require('../model/artist_dal');
var name_dal = require('../model/name_dal')
var album_dal = require('../model/album_dal')


// View All artists
router.get('/all', function(req, res) {
    artist_dal.getAll(function(err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.render('artist/artistViewAll', { 'result':result });
        }
    });

});

// View the artist for the given id
router.get('/', function(req, res){
    if(req.query.artist_id == null) {
        res.send('artist_id is null');
    }
    else {
        artist_dal.getById(req.query.artist_id, function(err,result) {
           if (err) {
               res.send(err);
           }
           else {
               res.render('artist/artistViewById', {'result': result});
           }
        });
    }
});

module.exports = router;
