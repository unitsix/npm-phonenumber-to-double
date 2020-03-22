[![Coverage Status](https://coveralls.io/repos/github/unitsix/npm-phonenumber-to-double/badge.svg?branch=master)](https://coveralls.io/github/unitsix/npm-phonenumber-to-double?branch=master) [![Build Status](https://travis-ci.com/unitsix/npm-phonenumber-to-double.svg?branch=master)](https://travis-ci.com/unitsix/npm-phonenumber-to-double)

Phone Number to Double
=========

A small library that formats a phone number to double. Useful for Lambdas triggered by Amazon Connect. 

## Installation

  `npm install @unitsix/phonenumber-to-double`


## Usage

    const phonenumberToDouble = require('@unitsix/phonenumber-to-double') 
    
    OR
    
    import phonenumberToDouble from '@unitsix/phonenumber-to-double' //ES6
    
    const fullmsn = '+61400000000'
    const msn = phonenumberToDouble(fullmsn)
    
    //returns 400000000

## Tests

  `npm test`
  or
  `make test`
