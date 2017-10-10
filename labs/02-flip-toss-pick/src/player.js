'use strict';

/*
    The Player represents the player!

    It keeps track of their balance between rounds.

    For the game extension where the player may choose to pick multiple times,
    it also implements the Strategy pattern. The strategy is represented by a
    function that returns either true or false, where true means to pick and
    false means to not pick.

    Users may provide it as the second argument. By default, the strategy is to
    always pick exactly one marble...maybe you can think of a better one, and
    then use the ViabilityReport to prove it?
*/

module.exports = function Player ( initBalance, strategy ) {

    let balance = initBalance;

    // Default strategy: always pick one Marble.
    if ( typeof strategy !== 'function' ) {
        strategy = function ( hat, pickedMarbles ) {
            return pickedMarbles.length < 2;
        };
    }

    // Make sure that the numbers are round and positive.
    let validateAmount = function ( amount ) {
        if ( !isFinite( amount ) ) {
            throw new Error( "Player balance must be finite." );
        }
        if ( Math.floor( amount ) !== amount ) {
            console.log( amount );
            throw new Error( "Player balance must be an integer." );
        }
        if ( amount < 0 ) {
            throw new Error( "Player balance must be positive." );
        }
        return amount;
    }

    // Give the player some amount.
    this.award = function ( amount ) {
        validateAmount( amount );
        balance += amount;
        return this;
    };

    // Take some amount away from the player.
    this.deduct = function ( amount ) {
        validateAmount( amount );
        balance -= amount;
        return this;
    };

    // Ask what the Player's balance is.
    this.getBalance = function () {
        return new Number( balance );
    };

    // Ask the user to decide whether or not to pick a Marble.
    this.decidePick = function ( hat, pickedMarbles ) {
        return strategy( hat, pickedMarbles );
    };

    // Ask the user to decide how much to wager. (not implemented)
    this.decideWager = function () {
        return 1;
    };

};
