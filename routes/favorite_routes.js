var express = require('express');
var router = express.Router();
var artist_dal = require('../model/artist_dal');
var name_dal = require('../model/name_dal')
var album_dal = require('../model/album_dal')
var favorite_dal = require('../model/favorite_dal')


// View All artists
router.get('/all', function(req, res) {
    favorite_dal.getAll(function(err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.render('favorite/favoriteViewAll', { 'result':result });
        }
    });

});

// View the artist for the given id
router.get('/', function(req, res){
    if(req.query.Account_id == null) {
        res.send('Account_id is null');
    }
    else {
        favorite_dal.getById(req.query.favorite_id, function(err,result) {
           if (err) {
               res.send(err);
           }
           else {
               res.render('favorite/favoriteViewById', {'result': result});
           }
        });
    }
});

module.exports = router;
