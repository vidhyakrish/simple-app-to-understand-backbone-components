var myCityModel = Backbone.Model.extend({

    defaults: {

        capital: 'yes',
        commercial: false,
        cuisine: 'Fish and chips',
        name: 'Glasgow',
        accent: 'scottish'
    },

    initialize: function() {
        console.log('hferfh' + this.get('name') + 'initialixed');
        //this.listenTo(this.get('name'),this.changed);
    },
    changed: function() {
        console.log(this.name);
    }

});