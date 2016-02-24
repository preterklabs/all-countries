var objectKeys = require('object-keys');
var objectValues = require('./utils/object-values');
var countries = require('./data/countries.json');
var capitals = require('./data/capital.json');
var currencies = require('./data/currency.json');

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
    getCurrencyByCountryCode: function (code) {
        if (code && typeof code === 'string') {
            return currencies[code];
        }
    }
};
