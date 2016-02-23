# all-countries
> An API for getting info about countries

You may install this package with this command:

```shell
npm install all-countries --save
```

Once the package has been installed, it can be required inside your code with this line of JavaScript:

```js
var allCountries = require('all-countries');
```
### Variables and Functions

There are a number of members available. They are as follows:

#### allCountries.all
Type: 'Variable'

Returns: `Array`

This returns all countries as an array of strings.

Example:
```js
var allCountries = require('all-countries');

console.log(allCountries.all);
```

#### allCountries.getCountryCodes
Type: 'Function'

Returns: `Array`

This returns all  ISO2 country codes as an array of strings.

Example:
```js
var allCountries = require('all-countries');

console.log(allCountries.getCountryCodes()); // [ '...']
```

#### allCountries.getCountryByCode
Type: 'Function'

Parameter: 'code'

Returns: `String`

This returns country name as a string based on the passed in ISO2 country code.

Example:
```js
var allCountries = require('all-countries');

console.log(allCountries.getCountryByCode('US')); // United States
```
