
    var html = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    var getQuote=function(data){
  if(data.quoteAuthor === "") {
    data.quoteAuthor = "Unknown";
  }
  $('#author').text(data.quoteAuthor);
  $('#text').text(data.quoteText);
  $('#input_quote').val(data.quoteText);
  $('#input_author').val(data.quoteAuthor);
  var quote = 'https://twitter.com/intent/tweet?text=' + "\"" + data.quoteText + "\"" + ' Author: ' + data.quoteAuthor +' @Gil_Skates';

  $('#tweet').attr("href", quote);
};

$(document).ready(function() {
  $.getJSON(html, getQuote, 'jsonp');
});


$('#btn-random').on("click", function(){
  $('#text').transition('fade left');
  $('#author').transition('fade left');
  $('#text').text("");
  $('#author').text("");
  $('<span style = "margin-left:200px" class="fa-li fa fa-spinner fa-spin"/>').appendTo('#text');
  $('#text').transition('fade left');
  $('#author').transition('fade left');

  $.getJSON(html, getQuote, 'jsonp');
});



window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));
function input_btb(){

}
