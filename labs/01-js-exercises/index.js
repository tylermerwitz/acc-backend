'use strict';
let util = require( 'util' );

/*
    Pull in the modules of the lab so we can use their functions here.
*/
let maxAndMin = require( './exercises/00-max-and-min.js' );
let currentDay = require( './exercises/01-current-day.js' );
let change = require( './exercises/02-make-change.js' );
let poly = require( './exercises/03-polynomial.js' );

/*
    Assign those modules' functions to bare names we can use.
*/
let max2 = maxAndMin.max2;
let min2 = maxAndMin.min2;
let max3 = maxAndMin.max3;
let min3 = maxAndMin.min3;
let isLeapYear = currentDay.isLeapYear;
let getNumberOfDaysInMonth = currentDay.getNumberOfDaysInMonth;
let getCurrentDay = currentDay.getCurrentDay;
let makeChange = change.makeChange;
let polyAdd = poly.polyAdd;
let polyMul = poly.polyMul;
let polyPrint = poly.polyPrint;

/*
    Use this space as 'scratch' to debug: call whichever functions you'd like
    and print their output however you'd like in order to better understand
    how the code is operating.

    Use 'console.log()' to print values to the console.
    Use 'util.inspect()' to turn complex objects that can be more-easily read.
    Hint: pass the value of 'util.inspect() to console.log()'.

    This module also comes with Mocha tests. Run `npm test` to run them.
*/
console.log( 'the min of 2 and 3 is ' + min2( 2, 3 ) );
console.log(
    'polyPrint([ 1, 0, 1 ]) is ' + util.inspect( polyPrint([ 1, 0, 1 ]) )
);
