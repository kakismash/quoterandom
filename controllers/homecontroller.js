//Home controller

module.exports = {
//controller function
index: function(req, res, next){
  res.render('index', {title : 'Welcome!!!!!!!!!!!!!'});
}

}
