# UK Geo Tool

Original code: http://www.movable-type.co.uk/scripts/latlong-gridref.html

This is an incredibly simple module which will convert easting/northings to lat and long and back again.

For us in UK only.

Please get in touch if you have any questions. dbamber@gmail.com




## Install
```
npm install UkGeoTool
```

## Usage

```
var geo = require('UkGeoTool');

var output = geo.latLongToEastNorth(53.48417373,-2.237230539);
console.log(JSON.stringify(output));

output = geo.eastNorthToLatLong(384255,398665);
console.log(JSON.stringify(output));
```

will output

```
{"easting":384255,"northing":398665}
{"lat":53.48421545664473,"long":-2.23729970585083}
```