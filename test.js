var geo = require('./UkGeoTool.js');

var output = geo.latLongToEastNorth(53.48417373,-2.237230539);
console.log(JSON.stringify(output));

output = geo.eastNorthToLatLong(384255,398665);
console.log(JSON.stringify(output));


