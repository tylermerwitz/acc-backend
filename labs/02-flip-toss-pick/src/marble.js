'use strict';

/*
    This object models the Marble. It can only be one of three colors which
    can't be changed. We ask which color it is with `isRed()`, `isWhite()` and
    `isBlack()`.

    Marble.Color is what's sometimes called a "static member": it doesn't
    belong to any marble in particular and is instead a member of the
    constructor function. So, instead of:

        (new Marble).WHITE

    ...we say:

        Marble.Color.WHITE

    ...but the user doesn't need to worry about which number actually represents
    white -- they'll just use `isWhite()` on an instantiated object.
*/

let marbleColors = Object.freeze({
    BLACK : 0,
    WHITE : 1,
    RED   : 2
});

let Marble = function Marble ( color ) {

    this.isBlack = function () {
        return color === Marble.Color.BLACK;
    };

    this.isWhite = function () {
        return color === Marble.Color.WHITE;
    };

    this.isRed = function () {
        return color === Marble.Color.RED;
    };

    this.getColor = function () {
        return color;
    };

    this.toString = function () {
        if ( this.isRed() ) return 'red marble';
        if ( this.isWhite() ) return 'white marble';
        return 'black marble';
    };

    if ( this.isRed() || this.isBlack() || this.isWhite() )
        return;

    throw new Error( "Invalid Marble color: " + color );

};

Marble.Color = marbleColors;

module.exports = Marble;
