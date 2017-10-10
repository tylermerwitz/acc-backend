'use strict';
let _ = require( 'lodash' );
let should = require( 'should' );

let Die = require( '../src/die.js' );

describe( '02-die' , function () {

    it( 'should have roll() and getValue() methods', function () {
        let die = new Die;
        _.isFunction( die.roll ).should.be.true();
        _.isFunction( die.getValue ).should.be.true();
        die.roll();
        ( die.getValue() >= 1 ).should.be.true();
        ( die.getValue() <= 6 ).should.be.true();
    } );

} );
