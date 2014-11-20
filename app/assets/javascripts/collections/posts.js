window.Journal.Collections.Posts = Backbone.Collection.extend({
  url: "/posts/",
  model: window.Journal.Models.Post,
  
  getOrFetch: function (id) {
    var posts = Journal.posts;
    var post = posts.get(id);
    if (post) {
      post.fetch()
    } else {
      post = new Journal.Models.Post({ id: id });
      post.fetch({
        success: function () {
          posts.add(post);
          return post;
        }
      });
    }
    return post;
  }
});

Journal.posts = new Journal.Collections.Posts();




