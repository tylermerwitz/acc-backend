'use strict';

let FlipTossPick = require( './game.js' );

/*
    To complete this lab, implement ViabilityReport.
    This object should, after hooking into the game's running,
    expose two functions: getOutcomes() and getExpectedValue().

    "Outcome" in this context means the net return: the amount awarded,
    minus the wager paid to play.

    getOutcomes() should return an object mapping each outcome (as a
    numeric value encoded as a string) to the number of rounds of
    FlipTossPick it watched that ended in it. For example:

    {
        '-1' : 20,
        '1'  : 45,
        '4'  : 2
    }

    ...means "20 rounds were lost, 47 rounds were won and 2 of those were
    by a red marble".

    getExpectedValue() should, using getOutcomes(), compute the numeric
    expected value of playing a round of FlipTossPick.

    Expected value is the sum of each outcome, times its probability.
    So, using the example above (which are invented numbers):

    The total number of rounds played was ( 20 + 45 + 2 ) = 67.
    The probability of a -1 is estimated ( 20 / 67 ) = 0.298507.
    The probability of a 1 is estimated ( 45 / 67 ) = 0.671642.
    The probability of a 4 is estimated ( 2 / 67 ) = 0.029850.

    The expected value should equal:

        ( -1 * 0.298507 ) + ( 1 * 0.671642 ) + ( 4 * 0.029850 )
            = -0.298507 + 0.671546 + 0.1194
            = 0.492439

    Note: the outcome is the /net/ win or loss. To properly account, either
    subtract the initial wager in calculation or just measure player balance
    between rounds.
*/

module.exports = function ( game ) {

    /*
        YOUR CODE HERE
    */

    this.getOutcomes = function () {

        /*
            YOUR CODE HERE
        */

    };

    this.getExpectedValue = function () {

        /*
            YOUR CODE HERE
        */

    };

};
