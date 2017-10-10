'use strict';
let Random = require( './random.js' );

/*
    This object represents a simple die. It can take an argument for an
    arbitrary amount of sides, but FlipTossPick only needs six-sided dice.

    Example usage:

        let total = (new Die).getValue() + (new Die).getValue();
        console.log( `Rolling two dice: ${total}` );

*/

module.exports = function Die ( numSides ) {

    if ( numSides === undefined ) {
        numSides = 6;
    }

    let value;

    this.roll = function () {
        value = Random.int( 1, 6 );
    };

    this.getValue = function () {
        return value;
    }

    this.roll();

};
