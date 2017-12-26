'use strict';

/*
 * Tests whether the given year is a leap year.
 * @param {Number} year The year to test.
 * @returns {boolean}
*/
function isLeapYear ( year ) {
    // hint: if the year isn't divisible by four, it's not a leap year.
    // hint: of those years, if the year isn't divisible by 100, it's a leap year.
    // hint: of those year still, if the year is divisible by 400, it's not a leap year.

    if (year % 4 !== 0)
        return false;
    if (year % 100 !== 0)
        return true;
    if (year % 400 === 0)
        return true;
    else
        return false;
}

/*
 * Calculates the number of days in a given year.
 * @param {Number} month The month, as a number in [1,12].
 * @param {Number} month The year.
 * @returns {Number} The number of days in the month.
*/
function getNumberOfDaysInMonth ( month, year ) {
    // hint: 28 days in February, but 29 in leap years.
    // hint: 30 days in April, June, September and November.
    // hint: 31 days in January, March, May, July, August, October and December.
    // hint: pass year to isLeapYear().
    // hint: could a switch block be useful here?
    
    if (month === 2) {
        
        if (isLeapYear(year) === false)
            return 28;
        else
            return 29;
        
    }
    
    else if ( month === 4 || 6 || 9 || 11 )
        return 30;
    
    else
        return 31;
    
}

/*
 * Calculates the Current Day of a given date - its day number in the year.
 * @param {Number} month The date's month, as a number in [1,12].
 * @param {Number} day The date's day, as a number in [1,31].
 * @param {Number} year The date's year.
 * @returns {Number} The Current Day of the date.
*/
let getCurrentDay = function ( month, day, year ) {
    // hint: the Julian day is the sum of all days in previous months, plus the
    //       number of days already occurring in this month.
    // hint: use getNumberOfDaysInMonth().
    let n = 0;
    
    for ( let x = 1; x > month; x++) {
        n = n + getNumberOfDaysInMonth(x, year);
    }
    
    n = n + day;
    
    return n;
    
}

module.exports = {
    isLeapYear,
    getNumberOfDaysInMonth,
    getCurrentDay
};
