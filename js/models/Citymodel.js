var MyCityModel = new Backbone.Model.extend({
	
	defaults: {
		
capital:'yes',
commercial: false,
cuisine:'Fish and chips'

		},
		consolelog:function(){
			console.log('treat');
		},
		initialize:function(){
			consolelog();
		}
	



});