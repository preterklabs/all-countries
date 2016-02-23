var objectKeys = require('object-keys');
var objectValues = require('object-values');
var countries = require('./countries.json');

module.exports = {
    all: objectValues(countries),
    getCountryCodes: objectKeys(countries),
    getCountryByCode: function (code) {
        if (code && typeof(code) === 'string') {
            return countries[code];
        }
    }
};
