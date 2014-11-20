window.Journal.Routers.Router = Backbone.Router.extend ({
  
  initialize: function(option) {
    this.$rootEl = option.$rootEl;  
  },

  routes: {
    "": "index",
    "posts/:id": "show",
    "posts/:id/edit": "edit"
  },
  
  index: function() {
    var view = new Journal.Views.PostsIndex({ 
      collection: Journal.posts
    });
    
    var that = this;
    
    view.collection.fetch();// {
//       success: function() {
//         that.$rootEl.html(view.render().$el);
//       }
//     })
    that.$rootEl.html(view.render().$el);
  }, 
  
  show: function(id) {
    var post = Journal.posts.getOrFetch(id);
    var view = new Journal.Views.PostShow({ model: post });
    this.$rootEl.html(view.render().$el);
  },
  
  edit: function(id) {
    var post = Journal.posts.getOrFetch(id);
    var view = new Journal.Views.PostForm({ model: post });
    this.$rootEl.html(view.render().$el);
  }
  
});