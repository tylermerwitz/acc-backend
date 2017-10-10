'use strict';
let Random = require( './random.js' );

/*
    This object represents a simple coin flip: heads or tails.

    Example usage:

        let coin = new Coin;
        for ( let i = 0; i < 10; i++ ) {
            coin.flip();
            if ( coin.isHeads() ) {
                console.log( "heads" );
            } else {
                console.log( "tails" );
            }
        }
*/

module.exports = function Coin ( otherCoin ) {

    let isHeads;

    this.flip = function () {
        isHeads = Random.maybe( 0.5 );
        return this;
    };

    this.isHeads = function () {
        return isHeads;
    };

    this.isTails = function () {
        return !isHeads;
    }

    if ( otherCoin instanceof Coin ) {
        // copy constructor
        if ( otherCoin.isHeads() )
            isHeads = true;
        else
            isHeads = false;
    } else {
        this.flip();
    }

};
