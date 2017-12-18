'use strict';

/*
 * Calculates the maximum value of two numbers.
 * @param {Number} a Some value.
 * @param {Number} b Some other value.
 * @returns {Number} The number maximum value.
*/
function max2 ( a, b ) {
    if a > b
        return a;
    else if b > a;
        return b;
    else
        return 'The values are equal';
}

/*
 * Calculates the minimum value of two numbers.
 * @param {Number} a Some value.
 * @param {Number} b Some other value.
 * @returns {Number} The minimum value.
*/
function min2 ( a, b ) {
    if a > b
        return b
    else if b > a;
        return a
    else
        return 'The values are equal';
}

/*
 * Calculates the number of days in a given year.
 * @param {Number} month The month, as a number in [1,12].
 * @param {Number} month The year.
 * @returns {Number} The number of days in the month.
*/
function max3 ( a, b, c ) {
    let x = max2(a,b);
    if (typeof x === "string")
        x = a;
    return max2(x,c);
}

/*
 * Calculates the number of days in a given year.
 * @param {Number} month The month, as a number in [1,12].
 * @param {Number} month The year.
 * @returns {Number} The number of days in the month.
*/
function min3 ( a, b, c ) {
    let x = min2(a,b);
    if (typeof x === "string")
        x = a;
    return min2(x,c);
}

module.exports = {
    max2,
    min2,
    max3,
    min3
};
