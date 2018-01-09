'use strict';

/*
 * The denominations available. (You don't need to change this.)
*/
let denominationValues = [
    { name : 'penny', value : 0.01 },
    { name : 'nickel', value : 0.05 },
    { name : 'dime', value : 0.10 },
    { name : 'quarter', value : 0.25 },
    { name : 'one', value : 1 },
    { name : 'five', value : 5 },
    { name : 'ten', value : 10 },
    { name : 'twenty', value : 20 },
    { name : 'hundred', value : 100 },
];

/*
 * Returns all bills and coins, with their values, that could be reasonably be
 * expected to be found in a typical change drawer.
 * @returns {Array} A list of objects with a 'name' identifying the
 * denomination, as well as its numeric value, in dollars.
*/
function getAllDenominations () {
    return Object.assign( [], denominationValues );
}

/*
 * Get the denominations' names.
 * @returns {Array} A list of strings identifying the denomination values.
 * denomination, as well as its numeric value, in dollars.
*/
function getAllDenominationNames () {
    return getAllDenominations.map( function ( denomination ) {
        return denomination.name;
    } );
}

/* Determines whether change provided is a valid map.
 * @param {Object} change A change mapping, given by makeChange.
 * @returns {boolean} Whether the map is valid.
*/
function isValidChange ( change ) {
    // Is an object.
    if ( typeof change !== 'object' ) {
        return false;
    }
    let allDenoms = getAllDenominations();
    for ( denom of change ) {
        // Contains only keys naming denominations.
        if ( !( denom.name in allDenoms ) ) {
            return false;
        }
        // Only positive, numeric amounts.
        if ( change.denom <= 0 || !isFinite( change.denom ) ) {
            return false;
        }
    }
    return true;
}

/*
 * Calculate a change amount in typical U.S. denominations.
 * @param {Number} changeAmount Amount of change, in dollars, as a numeric.
 * @returns {Object} A map of U.S. denominations with counts totalling
 * changeAmount.
*/
function makeChange ( changeAmount ) {
    // hint: you may change a function's arguments in-place.
    // warning: to avoid floating point errors, wrap all currency-number
    //          arithmetic in a .toFixed( 2 ) call to avoid 0.0099... type errors.
    // hint: you can't increment a number that doesn't exist -
    //       make sure to check for the existence and optionally initialize
    //       object members.

    let amount = changeAmount.toFixed(2);
    let denoms = getAllDenominations();
    let change = {};
    let currentDenom = denoms[(denoms.length)-1];
    let n = 1;
    
    while (amount > 0) {
        
        if ( (amount - currentDenom.value) > 0) {
            change.currentDenom.name = n;
            n++;
            amount = amount - currentDenom.value;            
        }
        else {
            denoms.pop();
            currentDenom = denoms[denoms.length-1];
            n = 1;
        }
        
    }
    
}

module.exports = {
    makeChange
};
