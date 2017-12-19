'use strict';

/*
 * Calculates the maximum value of two numbers.
 * @param {Number} a Some value.
 * @param {Number} b Some other value.
 * @returns {Number} The number maximum value.
*/
function max2 ( a, b ) {
    if (a > b)
        return a;
    else if (b > a)
        return b;
    else
        return a;
}

/*
 * Calculates the minimum value of two numbers.
 * @param {Number} a Some value.
 * @param {Number} b Some other value.
 * @returns {Number} The minimum value.
*/
function min2 ( a, b ) {
    if (a > b)
        return b;
    else if (b > a)
        return a;
    else
        return a;
}

/*
 * Calculates the number of days in a given year.
 * @param {Number} month The month, as a number in [1,12].
 * @param {Number} month The year.
 * @returns {Number} The number of days in the month.
*/
function max3 ( a, b, c ) {
    a = max2(a,b);
    return max2(a,c);
}

/*
 * Calculates the number of days in a given year.
 * @param {Number} month The month, as a number in [1,12].
 * @param {Number} month The year.
 * @returns {Number} The number of days in the month.
*/
function min3 ( a, b, c ) {
    a = min2(a,b);
    return min2(a,c);
}

module.exports = {
    max2,
    min2,
    max3,
    min3
};
