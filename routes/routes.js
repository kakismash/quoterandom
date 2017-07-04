var express = require('express');
var router = express.Router();

//FIND controllers/index.js
var controllers = require('.././controllers');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quote Crud' });
});
 // routes for quotes
 router.get('/quotes', controllers.quotecontroller.getQuotes);
 router.get('/newquotes', controllers.quotecontroller.getNewQuote);
 router.get('./', controllers.quotecontroller.getSaveQuote);
 router.post('/', controllers.quotecontroller.postSavedQuote);
 router.post('/createquotes', controllers.quotecontroller.postNewQuote);
 router.post('/deletequotes', controllers.quotecontroller.deleteQuote);
 router.post('/edit', controllers.quotecontroller.posteditQuote);
 router.get('/editquotes/:id', controllers.quotecontroller.geteditQuote);
 module.exports = router;
