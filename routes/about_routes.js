var express = require('express');
var router = express.Router();
var about_dal = require('../model/about_dal');


// View All artists
router.get('/about', function(req, res) {
    about_dal.getAll(function(err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.render('about/aboutView', { 'result':result });
        }
    });

});
router.get('/user', function(req, res) {
    about_dal.getAll(function(err, result){
        if(err) {
            res.send(err);
        }
        else {
            res.render('about/userView', { 'result':result });
        }
    });

});

module.exports = router;
