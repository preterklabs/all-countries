var objectValues = require('./utils/object-values');
var countries = require('./data/countries.json');
var capitals = require('./data/capital.json');
var currencies = require('./data/currency.json');
var phone = require('./data/phone.json');

module.exports = {
    all: objectValues(countries),
    getCountryCodes: Object.keys(countries),
    getCountryByCode: function (code) {
        if (code && typeof code === 'string') {
            return countries[code.toUpperCase()];
        }
    },
    // TODO
    // getCountryByCapital: function (capital) {
    //     // Object.keys(capitals)[0]
    // }
    // // TODO
    // getCountryByCuurency: function (capital) {
    //     // Object.keys(capitals)[0]
    // }
    // // TODO
    // getCountryByPhoneCode: function (capital) {
    //     // Object.keys(capitals)[0]
    // }
    getCapitals: objectValues(capitals),
    // TODO Add the ability to accept country name too
    getCapitalByCountryCode: function (code) {
        if (code && typeof code === 'string') {
            return capitals[code.toUpperCase()];
        }
    },
    getCurrencies: objectValues(currencies),
    // TODO Add the ability to accept country name too
    getCurrencyByCountryCode: function (code) {
        if (code && typeof code === 'string') {
            return currencies[code.toUpperCase()];
        }
    },
    getPhoneCodes: objectValues(phone),
    // TODO Add the ability to accept country name too
    getPhoneCodeByCountryCode: function (code) {
        if (code && typeof code === 'string') {
            return phone[code.toUpperCase()];
        }
    }
};
