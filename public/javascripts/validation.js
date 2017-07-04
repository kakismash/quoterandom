$(function(){
  $('.form-newquote form').form({
    author : {
      identifier : 'author',
      rules : [
        {
          type : 'empty',
          prompt : 'Something Wrong! Please instert an author'
        }
      ]
    },
    quote : {
      identifier : 'quote',
      rules : [
        {
          type : 'empty',
          prompt : 'Something Wrong! Please instert a quote'
        }
      ]
    },
    category : {
      identifier : 'category',
      rules : [
        {
          type : 'empty',
          prompt : 'Something Wrong! Please instert a category'
        }
      ]
    },
  });
});
