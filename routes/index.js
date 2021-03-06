var express = require('express');
var router = express.Router();
mongodb = require('mongodb');

var mongoDBURI = process.env.MONGODB_URI || 'mongodb://Chandana:Chandu03!@ds133360.mlab.com:33360/heroku_1zwzjmrz';


var controllerMongoCollection = require('../controllers/database'); //load controller code dealing with database mongodb and Routes collection


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


router.post('/storeData', controllerMongoCollection.saveOrders);




//CODE to route /getAllRoutes to appropriate  Controller function
//**************************************************************************
//***** mongodb get all of the Routes in Routes collection w
//      and Render information iwith an ejs view
router.get('/getAllOrders', controllerMongoCollection.getAllOrders);
router.get('/successSave', controllerMongoCollection.saveOrders);




module.exports = router;
