window.Journal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var router = new Journal.Routers.Router({ $rootEl: $('body') })
    Backbone.history.start();

  }
};

$(document).ready(function(){
  Journal.initialize();
});
