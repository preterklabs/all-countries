var expect = require('chai').expect;
var allCountries = require('../src/index');

describe('all-countries', function () {
    describe('all', function () {
        it('should be an array of strings', function (){
            expect(allCountries.all).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array) {
                return array.every(function(item) {
                    return typeof item === 'string';
                })
            }
        });
    });

    describe('getCountryByCode', function () {
        it('should not throw an error with right params', function (){
            expect(function () { allCountries.getCountryByCode('US'); }).to.not.throw();
        });

        // it('should be a string', function (){
        //     expect(function () { allCountries.getCountryByCode('US'); }).to.satisfy(isString);
        //     // expect(function () { allCountries.getCountryByCode("anything else") }).to.throw("stop js execution");
        //
        //     // expect(allCountries.getCountryByCode).to.satisfy(isString);
        //     //
        //     function isString(item) {
        //         return typeof item === 'string';
        //     }
        // })
    });

    describe('getCountryCodes', function () {
        it('should be an array of strings', function (){
            expect(allCountries.getCountryCodes).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array) {
                return array.every(function(item) {
                    return typeof item === 'string';
                })
            }
        });
    });

    describe('getCapitals', function () {
        it('should be an array of strings', function (){
            expect(allCountries.getCapitals).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array) {
                return array.every(function(item) {
                    return typeof item === 'string';
                })
            }
        });
    });

    describe('getCurrencies', function () {
        it('should be an array of strings', function (){
            expect(allCountries.getCurrencies).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array) {
                return array.every(function(item) {
                    return typeof item === 'string';
                })
            }
        });
    });

    describe('getPhoneCodes', function () {
        it('should be an array of strings', function (){
            expect(allCountries.getPhoneCodes).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array) {
                return array.every(function(item) {
                    return typeof item === 'string';
                })
            }
        });
    });
});
