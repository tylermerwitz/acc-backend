'use strict';
let Random = require( './random.js' );
let Marble = require( './marble.js' );

/*
    The Hat is an array of Marbles.

    Put Marbles in with `placeMarble()` and take them out with `pickMarble()`.
    Use `toCount()` to get a denormalized count for each color.
*/

module.exports = function Hat () {

    let marbles = [];

    this.isEmpty = function () {
        return marbles.length === 0;
    }

    this.placeMarble = function ( marble ) {
        if ( !( marble instanceof Marble ) )
            throw new Error( "Can only place Mables into Hats." );
        marbles.push( marble );
        return this;
    };

    this.pickMarble = function () {
        if ( this.isEmpty() )
            throw new Error( "Can't pick from an empty Hat." );
        let idx = Random.int( 0, marbles.length - 1 );
        return marbles.splice( idx, 1 )[ 0 ];
    };

    this.copy = function () {
        return Object.assign( {}, this );
    };

    this.toCount = function () {
        let count = {
            'white' : 0,
            'black' : 0,
            'red'   : 0
        };
        for ( let marble of marbles ) {
            if ( marble.isWhite() ) {
                count.white++
            } else if ( marble.isBlack() ) {
                count.black++;
            } else {
                count.red++;
            }
        }
        return count;
    };

    this.toString = function () {
        let count = this.toCount();
        return `${count.white} white, ${count.black} black, ${count.red} red`;
    };

};
