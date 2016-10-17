var $ = require('jquery');
var models = require('./models');
var views = require('./views');
var template = require('../templates/application.hbs');

$(function(){
  var view = new views.PostView();

  $(document).on('posts:fetched', function(event, posts){
    view.showPosts(posts);
  });
  console.warn($('.form-action'));
  $('.form-action').on('submit', function(event){

    event.preventDefault();
    $(document).trigger('create:post', [{title: "Cool", body: "Cool"}]);
  });

  models.Post.fetch();
});

// $(function(){
//   var form = new form.CreatePostForm();
//
//   $(document).on('create:post', function(event, forms){
//     form.CreatePostForm(forms);
//     console.log(form);
//   });
// });
