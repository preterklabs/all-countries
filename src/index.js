var objectValues = require('object-values');
var countryNames = require('./countries.json');

module.exports = {
    all: objectValues(countryNames)
};
