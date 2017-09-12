'use strict';
let should = require( 'should' );
let currentDay = require( '../exercises/01-current-day.js' );

let isLeapYear = currentDay.isLeapYear;
let getNumberOfDaysInMonth = currentDay.getNumberOfDaysInMonth;
let getCurrentDay = currentDay.getCurrentDay;

describe( '01-julian-day' , function () {

    describe( 'isLeapYear', function () {

        it( '1900 was not a leap year', function () {
            isLeapYear( 1900 ).should.be.false();
        } );

        it( '1980 was a leap year', function () {
            isLeapYear( 1980 ).should.be.true();
        } );

        it( '2015 was not a leap year', function () {
            isLeapYear( 2015 ).should.be.false();
        } );

        it( '2016 was a leap year', function () {
            isLeapYear( 2016 ).should.be.true();
        } );

    } );

    describe( 'getNumberOfDaysInMonth', function () {

        it( '31 days in January 1990', function () {
            getNumberOfDaysInMonth( 1, 1990 ).should.equal( 31 );
        } );

        it( '28 days in February 1900', function () {
            getNumberOfDaysInMonth( 2, 1900 ).should.equal( 28 );
        } );

        it( '29 days in February 2000', function () {
            getNumberOfDaysInMonth( 2, 2000 ).should.equal( 29 );
        } );

        it( '30 days in April 2007', function () {
            getNumberOfDaysInMonth( 4, 2007 ).should.equal( 30 );
        } );

        it( '30 days in October 2009', function () {
            getNumberOfDaysInMonth( 10, 2009 ).should.equal( 31 );
        } );

    } );

    describe( 'getCurrentDay', function () {

        it( 'January 7th, 2003 (release of "In Da Club"): 7', function () {
            getCurrentDay( 1, 7, 2003 ).should.equal( 7 );
        } );

        it( 'July 31st, 2016 ("McMansion Hell" created): 213', function () {
            getCurrentDay( 7, 31, 2016 ).should.equal( 213 );
        } );

        it( 'March 18th, 2017 (838 area code overlay): 77', function () {
            getCurrentDay( 3, 18, 2017 ).should.equal( 77 );
        } );

    } );

} );
