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

console.log(allCountries.all); // [ '...']
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

#### allCountries.getCountryByCapital
Type: 'Function'

Parameter: 'capital'

Returns: `String`

This returns country name as a string based on the passed in country capital.

Example:
```js
var allCountries = require('all-countries');

console.log(allCountries.getCountryByCapital('Washington')); // United States
```


#### allCountries.getCountryByPhoneCode
Type: 'Function'

Parameter: 'phoneCode'

Returns: `String`

This returns country name as a string based on the passed in country phone code.

Example:
```js
var allCountries = require('all-countries');

console.log(allCountries.getCountryByPhoneCode('1')); // United States
```


#### allCountries.getCountryCodes
Type: 'Function'

Returns: `Array`

This returns all  ISO2 country codes as an array of strings.

Example:
```js
var allCountries = require('all-countries');

console.log(allCountries.getCountryCodes); // [ '...']
```


#### allCountries.getCountryCodeByCountryName
Type: 'Function'

Parameter: 'phoneCode'

Returns: `String`

This returns country code as a string based on the passed in country name.

Example:
```js
var allCountries = require('all-countries');

console.log(allCountries.getCountryCodeByCountryName('United States')); // US
```


#### allCountries.getCapitals
Type: 'Variable'

Returns: `Array`

This returns all country capitals as an array of strings.

Example:
```js
var allCountries = require('all-countries');

console.log(allCountries.getCapitals); // [ '...']
```


#### allCountries.getCapitalByCountryCode
Type: 'Function'

Parameter: 'code'

Returns: `String`

This returns a country capital as a string based on the passed in ISO2 country code.

Example:
```js
var allCountries = require('all-countries');

console.log(allCountries.getCapitalByCountryCode('US')); // Washington
```


#### allCountries.getCurrencies
Type: 'Variable'

Returns: `Array`

This returns all country currency codes as an array of strings.

Example:
```js
var allCountries = require('all-countries');

console.log(allCountries.getCurrencies); // [ '...']
```


#### allCountries.getCurrencyByCountryCode
Type: 'Function'

Parameter: 'code'

Returns: `String`

This returns a country currency code as a string based on the passed in ISO2 country code.

Example:
```js
var allCountries = require('all-countries');

console.log(allCountries.getCurrencyByCountryCode('US')); // USD
```

#### allCountries.getPhoneCodes
Type: 'Variable'

Returns: `Array`

This returns all phone codes as an array of strings.

Example:
```js
var allCountries = require('all-countries');

console.log(allCountries.getPhoneCodes); // [ '...']
```


#### allCountries.getPhoneCodeByCountryCode
Type: 'Function'

Parameter: 'code'

Returns: `String`

This returns a country phone code as a string based on the passed in ISO2 country code.

Example:
```js
var allCountries = require('all-countries');

console.log(allCountries.getPhoneCodeByCountryCode('US')); // 1
```
