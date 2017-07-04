//importing module mysql
var mysql = require('mysql');
var dateformat = require('dateformat');
var unirest = require('unirest');
// quote controller

module.exports = {
getQuotes : function(req, res, next){
  var config = require('.././db/config');
  var db = mysql.createConnection(config);
  db.connect();
  var quotes = null;
  db.query('SELECT * FROM quote', function(err, rows, fields){
    if(err) throw err;
    quotes = rows;
    db.end();
    //render view quote!
      res.render('quotes/quotes', {quotes : quotes});
  });

},
getNewQuote : function(req, res, next)
{
  res.render('quotes/newquotes');
},
postNewQuote : function(req, res, next){
  var dateupdate =  new Date();
  var date = dateformat(dateupdate, 'yyyy-mm-dd h:MM:ss');
  var quote = {
    author :req.body.author,
    quote : req.body.quote,
    category : req.body.category,
    date : date
  }
  var config = require('.././db/config');
  var db = mysql.createConnection(config);
  db.connect();
  db.query('INSERT INTO quote SET ?', quote, function(err, rows, fields){
    if(err) throw err;
    db.end();
    res.render('quotes/newquotes', {info : 'Quote created!'});
  });

},
getSaveQuote : function(req, res, next)
{
  res.render('./');
},
postSavedQuote : function(req, res, next){
  var dateupdate =  new Date();
  var date = dateformat(dateupdate, 'yyyy-mm-dd h:MM:ss');
  var category = 'Random'
  var quote = {
    author :req.body.author,
    quote : req.body.quote,
    category : category,
    date : date
  }
  var config = require('.././db/config');
  var db = mysql.createConnection(config);
  db.connect();
  db.query('INSERT INTO quote SET ?', quote, function(err, rows, fields){
    if(err) throw err;
    db.end();
    res.render('./', {info : 'Quote saved!'});
  });

},
posteditQuote : function(req, res, next){
  var quote = {
    author :req.body.author,
    quote : req.body.quote,
    category : req.body.category,
  };
  var config = require('.././db/config');
  var db = mysql.createConnection(config);
  db.connect();
  db.query('UPDATE quote SET ? WHERE ?', [quote, {id_quote :req.body.id_quote}], function(err, rows, fields){
    if(err) throw err;
    db.end();
  });
  res.redirect('/quotes');
},
deleteQuote : function(req, res, next){
  var id = req.body.id; //post = body and get = params
  var result = {res : false};
  var config = require('.././db/config');
  var db = mysql.createConnection(config);
  db.connect();
  db.query('DELETE FROM quote WHERE id_quote = ?',id, function(err, rows, fields){
    if(err) throw err;

    db.end();
    result.res = true;
    res.json(result);

  });
},

geteditQuote : function(req, res, next){
  var id = req.params.id;
  var config = require('.././db/config');
  var db = mysql.createConnection(config);
  db.connect();
  var quote =null;
  db.query('SELECT *FROM quote WHERE id_quote = ?', id, function(err, rows, fields){
    if(err) throw err;

    quote = rows;
    db.end();
    res.render('quotes/edit', {quote :quote});
  });
}

}
