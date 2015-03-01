var myCityCollection = Backbone.Collection.extend({

    model: myCityModel,
    url: 'sample.json',

    initialize: function() {
        console.log('ghb');
    }
});