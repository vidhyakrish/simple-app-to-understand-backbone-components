var myCityView = Backbone.View.extend({

    el: '#container',

    initialize: function() {
        this.render();
    },
    render: function() {
        var newCityCollection = new myCityCollection();
        newCityCollection.fetch().done(function() {
            newCityCollection.each(function(model) {
                // Compile the template using underscore
                //var template = _.template( $("#search_template").html(), variables );


                // Load the compiled HTML into the Backbone "el"
                //this.$el.html( template );

                var template = _.template($("#search_template").html(), model.toJSON());
                $('#container').append(template);
            });

        });
        this.rerender();
    },
    rerender: function() {
        console.log('rtdhr');
    }

});


var glasgowView = new myCityView();