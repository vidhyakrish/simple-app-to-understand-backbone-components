var glasgowModel = new myCityModel({
	name:'Glasgow',
	commercial: true,
	capital:'no',
	cuisine:'fish and chips',
	accent:'scottish'
});


var edinburghModel = new myCityModel({
	name:'EDiburgh',
	commercial: true,
	capital:'no',
	cuisine:'fish and chips',
	accent:'scottish'
});

glasgowModel.set(name,'Glesga');
//console.log(glasgowModel.toJSON());

