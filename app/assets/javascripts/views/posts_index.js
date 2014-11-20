window.Journal.Views.PostsIndex = Backbone.View.extend ({   
  events: {
    "click .delete": "remove"
  },
  
  initialize: function () {
    this.listenTo(this.collection, "add remove change:title reset", this.render)
  },
  
  template: JST["posts/index"],
  
  render: function () {
    var content = this.template({posts : this.collection});
    this.$el.html(content);
    return this;
  },
  
  remove: function(event) {
    var that = this;
    var targetId = $(event.target).data('id');
    var newPost = new Journal.Models.Post;
    newPost.set({ id: targetId });
    newPost.fetch({
      success: function(newPost) { 
        newPost.destroy();
        that.collection.fetch();
      }
    });
  }
})

