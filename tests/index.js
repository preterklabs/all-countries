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
});
