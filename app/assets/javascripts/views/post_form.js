window.Journal.Views.PostForm = Backbone.View.extend ({   
  
  events: {
    "click .submit": "submit"
  },
  
  initialize: function () {
    this.listenTo(this.model, "sync", this.render)
    this.listenTo(this.model, "change", function() { 
      Backbone.history.navigate("#/", {trigger: true})
    });
  },
  
  template: JST["posts/form"],
  
  render: function () {
    var content = this.template({post : this.model});
    this.$el.html(content);
    return this;
  },
  
  submit: function(event) {
    event.preventDefault();
    var content = $('#form').serializeJSON().post;
    this.model.save({ title: content.title, body: content.body }, {patch: true});    
  }
  
})