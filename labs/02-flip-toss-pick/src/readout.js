'use strict';

let FlipTossPick = require( './game.js' );

/*
    The ReadoutReport attaches handlers to the game that log each event.
    You should use this module as an example of how to attach listeners to
    the game.

    Here's an example of what the output looks like:

        Round begin
          Player wagers 1.
          Begin flip phase:
            flip tails
            flip tails
            flip heads (+1 die)
            flip tails
            flip heads (+1 die)
            flip heads (+1 die)
            flip heads (+1 die)
            flip heads (+1 die)
            flip heads (+1 die)
            flip heads (+1 die)
          Begin toss phase:
            Toss a 2 (+2 white marbles)
            Toss a 2 (+2 white marbles)
            Toss a 2 (+2 white marbles)
            Toss a 6 (+6 white marbles, +1 red marble)
            Toss a 6 (+6 white marbles, +1 red marble)
            Toss a 1 (+1 white marbles)
            Toss a 4 (+4 white marbles)
            Toss a 5 (+5 white marbles)
            Toss a 6 (+6 white marbles, +1 red marble)
          Begin pick phase:
            Picked a white marble (award is now 2)
        Won 2, now have balance 10002.

    Make sure to attach only one of these to any game or each line will be
    duplicated in the console. Also make sure that you run it for a small
    amount of games (i.e. closer to ten than a million) or the output will be
    unmanageably large.
*/

module.exports = function ReadoutReport ( game ) {

    game.on( 'beginRound', function () {
        console.log( "Round begin" );
    } );

    game.on( 'wager', function ( wager ) {
        console.log( `  Player wagers ${wager}.` );
    } );

    game.on( 'beginFlip', function () {
        console.log( `  Begin flip phase:` );
    } );

    game.on( 'flip', function ( coin ) {
        if ( coin.isHeads() ) {
            console.log( `    flip heads (+1 die)` );
        } else {
            console.log( `    flip tails` );
        }
    } );

    game.on( 'beginToss', function () {
        console.log( `  Begin toss phase:` );
    } );

    game.on( 'toss', function ( die, hat ) {
        let n = die.getValue();
        let bonus = `+${n} white marbles`;
        if ( n === 6 )
            bonus += ', +1 red marble';
        console.log( `    Toss a ${n} (${bonus})` );
    } );

    game.on( 'beginPick', function () {
        console.log( `  Begin pick phase:` );
    } );

    game.on( 'pick', function ( marble, wager, award ) {
        console.log( `    Picked a ${marble} (award is now ${award})` );
    } );

    game.on( 'win', function ( wager, award, balance ) {
        console.log( `Won ${award}, now have balance ${balance}.` );
    } );

    game.on( 'loss', function ( wager, hat, balance ) {
        console.log( `Lost, now have balance ${balance}.` );
    } );

};
