$(function(){

  //function ajax(deleteQuote)
  $('#tbl-quotes #btn-delete').click(function(e){
    e.preventDefault();
    var element = $(this);
    var id = element.parent().parent().find('#id_quote').text();
    var confirmif = confirm('Do you really want to delete the quote?')
if(confirmif){
    $.ajax({
      url : '/deletequotes',
      method : 'post',
      data : {id : id },
      success : function(res){
        if(res.res){
          element.parent().parent().remove();
        }
      }
    });
  }
  });
});
