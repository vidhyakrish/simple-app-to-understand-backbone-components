    var AppView = Backbone.View.extend({
        // el - stands for element. Every view has a element associate in with HTML
        //      content will be rendered.
        el: '#container',
        // It's the first function called when this view it's instantiated.
        initialize: function() {
            this.render();
        },
        render: function() {

            }
            // $el - it's a cached jQuery object (el), in which you can use jQuery functions
            //       to push content. Like the Hello World in this case.

    });
    var appView = new AppView();