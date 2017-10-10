'use strict';
let Coin = require( './coin.js' );
let Die = require( './die.js' );
let Marble = require( './marble.js' );
let Hat = require( './hat.js' );
let Player = require( './player.js' );

/*
    This object represents a session of "Flip Toss Pick".

    The game is one of luck and involves three stages:
        - Flipping a set of coins,
        - Rolling a set of dice and
        - Picking marbles of three colors randomly from a Hat.

    The game starts with:
        - 5 coins
        - 2 dice
        - 18 black marbles in the Hat.

    In the first stage, each coin is flipped once. For each heads flipped,
    a die is added to the game.

    In the second stage, each of the dice is rolled once. White marbles are
    added to the hat in the amount shown on the die. If a six is rolled, one
    red marble is added to the hat in addition to the six white ones.

    In the last stage of the game, the player selects (without looking) a
    marble from the hat:

        - If a white marble is selected, the player wins their wager. (net: 2x)
        - If a black marble is selected, the player loses and forfeits
          their wager. (net: 0x)
        - If a red marble is selected, the player wins four times their wager.
          (net: 4x)

    It's initialized with a Player object, and activated with playRound().

    It implements the Observer pattern for all game events. This means,
    for example, when the game runs it does not log to the console but allows
    users who wish to do so attach "listeners" to be notified when each of the
    game's exposed events occur.

    You may write listeners by using the on() function like so:

        (new FlipTossPick(
            new Player( 10000 )
        )).on( 'win', function ( wager, award, balance ) {
            console.log( `Won ${award}, now have balance ${balance}.` );
        } ).playRound();

    In the above example, we instantiate a new game, attach a listener to the
    "win" event that logs it to the console. The 'win' event takes three
    arguments but each events has a signature of its own.

    They are:

        beginRound ()
            When the game begins, before wagering.

        wager ( wager )
            `wager` is the amount the player wagered.
            At the instant where the player has placed their wager.
            If the amount is zero, the turn ends.

        beginFlip ()
            After the wager is deducted from the player, but before flips.

        flip ( coin )
            `coin` is the Coin, after flipping.
            When a Coin is flipped.

        beginToss ( coins )
            `coins` is an array of the coins that were flipped.
            Before any rolls but after all flips.

        toss ( die, hat )
            `die` is the Die that was tossed.
            `hat` is the current state of the Hat.
            When any die is tossed.

        beginPick ( dice )
            `dice` is an array of the Dice that were tossed.
            After all dice have been tossed and before any pick.

        pick ( marble, wager, award )
            `marble` is the marble that was picked.
            `wager` is the amount originally wagered.
            `award` is the amount to be given to the player.
            When any marble is picked.

        win ( wager, award, balance, hat )
            `wager` is the amount originally wagered.
            `award` is the amount to be given to the player.
            `balance` is the player's current balance.
            `hat` is state of the Hat when the game ended.
            When the player ends the session not having picked a black marble.

        loss ( wager, hat, balance )
            `wager` is the amount originally wagered.
            `hat` is state of the Hat when the game ended.
            `balance` is the player's current balance.
            When the player ends the session having picked a black marble.

*/

module.exports = function FlipTossPick ( player ) {

    /*
        `listeners` is a map of all the names of the events to lists of
        callback functions attached to the game. When the game encounters the
        event named, it will call all of the functions in the list with the
        associated parameters.
    */

    let listeners = {
        'beginRound' : [],
        'wager' : [],
        'beginFlip' : [],
        'flip' : [],
        'beginToss' : [],
        'toss' : [],
        'beginPick' : [],
        'pick' : [],
        'win' : [],
        'loss' : []
    };

    /*
        Get the player that was provided to the instantiation of the game.
    */

    this.getPlayer = function () {
        return player;
    };

    /*
        The `on()` method exposes the game events. Callers provide the name
        of the event they'd like to attach to and specify a callback to be
        invoked whenever it occurs.
    */

    this.on = function ( event, callback ) {
        if ( typeof listeners[ event ] === 'undefined' ) {
            throw new Error( `Invalid event: ${event}.` );
        }
        if ( typeof callback !== 'function' ) {
            throw new Error( `Invalid callback for '${event}''.` );
        }
        listeners[ event ].push( callback );
        return this;
    };

    /*
        The playRound() method plays through an entire round.
        It changes the Player's balance.
    */

    this.playRound = function () {

        // Announce that the round has begun.
        listeners.beginRound.forEach( ( callback ) => {
            callback();
        } );

        // Set up the game board: two dice and 18 black marbles.
        // (`coins` is populated after flipping.)
        let coins = [];
        let dice = [ new Die(), new Die() ];
        let hat = new Hat();
        for ( let i = 0; i < 18; i++ ) {
            hat.placeMarble( new Marble( Marble.Color.BLACK ) );
        }

        // Ask the player how much they'd like to wager and take the amount.
        // (They can specify zero to choose not to play.)
        let wager = player.decideWager();
        let award = wager;
        listeners.wager.forEach( ( callback ) => {
            callback( wager );
        } );
        if ( !wager ) return this;
        player.deduct( wager );

        // Announce that we're going to start flipping.
        listeners.beginFlip.forEach( ( callback ) => {
            callback();
        } );

        // Flip five coins. For each heads, add a Die.
        for ( let i = 0; i < 5; i++ ) {
            let coin = (new Coin()).flip();
            if ( coin.isHeads() ) {
                dice.push( new Die() );
            }
            // Announce the flip.
            listeners.flip.forEach( ( callback ) => {
                callback( coin );
            } );
            coins.push( coin );
        }

        // Announce that we're done flipping and about to start tossing.
        listeners.beginToss.forEach( ( callback ) => {
            callback( coins );
        } );

        // Roll as many dice as we have.
        // Add white marbles matching the value of the faces.
        // Add one additional red marble if a six is rolled.
        for ( let i = 0; i < dice.length; i++ ) {
            let die = dice[ i ];
            die.roll();
            if ( die.getValue() === 6 ) {
                hat.placeMarble( new Marble( Marble.Color.RED ) );
            }
            for ( let j = 0; j < die.getValue(); j++ ) {
                hat.placeMarble( new Marble( Marble.Color.WHITE ) );
            }
            // Announce that a Die has been tossed.
            listeners.toss.forEach( ( callback ) => {
                callback( die, hat.copy() );
            } );
        }

        // Announce that we're done tossing and about to start picking.
        listeners.beginPick.forEach( ( callback ) => {
            callback( dice );
        } );

        let hasSeenBlackMarble = false; // The lose condition.
        let pickedMarbles = [];         // List of marbles that have been picked.

        // Convenience function that copies marbles, so as to not let Player
        // strategies cheat by changing the marbles in the listeners.
        let getPickedMarbles = () => {
            return pickedMarbles.map( function ( marble ) {
                return Object.assign( {}, marble );
            } );
        };

        // Convenience function that solicits the Player's strategy, so that the
        // following `while` condition fits on one line...
        let willPick = function () {
            return player.decidePick(
                Object.assign( {}, hat ),
                getPickedMarbles()
            )
        };

        while ( !hasSeenBlackMarble && willPick() ) {
            let marble = hat.pickMarble();
            if ( marble.isWhite() ) {
                award += wager;
            } else if ( marble.isRed() ) {
                award += ( wager * 4 );
            } else {
                award = 0;
                hasSeenBlackMarble = true;
            }
            pickedMarbles.push( marble );
            // Announce the pick.
            listeners.pick.forEach( ( callback ) => {
                callback( marble, wager, award );
            } );
        }

        // Assess the lose condition, call the appropriate listener and either
        // award or deduct the amount from the player.
        if ( hasSeenBlackMarble ) {
            listeners.loss.forEach( ( callback ) => {
                callback( wager, hat, player.getBalance() );
            } );
            return this;
        } else {
            player.award( award );
            listeners.win.forEach( ( callback ) => {
                callback( wager, award, player.getBalance(), hat );
            } );
        }

        return this;

    };


};
