var objectKeys = require('object-keys');
var objectValues = require('object-values');
var countries = require('./countries.json');
var capitals = require('./capital.json');
var currencies = require('./currency.json');

module.exports = {
    all: objectValues(countries),
    getCountryCodes: objectKeys(countries),
    getCountryByCode: function (code) {
        if (code && typeof code === 'string') {
            return countries[code];
        }
    },
    getCapitals: objectValues(capitals),
    getCapitalByCountryCode: function (code) {
        if (code && typeof code === 'string') {
            return capitals[code];
        }
    },
    getCurrencies: objectValues(currencies),
    getCurrencyByCountryCode function (code) {
        if (code && typeof code === 'string') {
            return currencies[code];
        }
    }
};
