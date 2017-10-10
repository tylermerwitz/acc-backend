'use strict';
let Player = require( './src/player.js' );
let FlipTossPick = require( './src/game.js' );
let ReadoutReport = require( './src/readout.js' );
let ViabilityReport = require( './src/viability.js' );

// Use the ReadoutReport to play one sample games.
( function () {

    let player = new Player( 10000.0 );
    let game = new FlipTossPick( player );
    let readoutReport = new ReadoutReport( game );

    game.playRound();

} )();
console.log( "\n\n" );

// Use the ViabilityReport to play a lot of games and print out the game's
// expected value.
//
// ...unless it's not implemented yet - in which case, display a message
// indicating so.
( function () {

    let player = new Player( 10000.0 );
    let game = new FlipTossPick( player );
    let viabilityReport = new ViabilityReport( game );
    game.playRound();

    let outcomes = viabilityReport.getOutcomes();
    let ev = viabilityReport.getExpectedValue();

    if ( outcomes !== undefined && ev !== undefined ) {
        let numRounds = 100000;
        for ( let i = 0; i < numRounds; i++ ) {
            game.playRound();
        }
        outcomes = viabilityReport.getOutcomes();
        ev = viabilityReport.getExpectedValue();
        console.log( `Outcomes after sampling ${numRounds} rounds:` );
        for ( let netWin in outcomes ) {
            let incidence = outcomes[ netWin ];
            console.log( `  ${incidence} games ended with a net win of ${netWin}` );
        }
        console.log( `The expected value of this game is: ${ev}` );
    } else {
        console.log( `The estimated expected value via Monte Carlo ` );
        console.log( `simulation will display here once you've implmented` );
        console.log( `the ViabilityReport.` );
    }


} )();
