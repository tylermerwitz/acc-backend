'use strict';
let _ = require( 'lodash' );
let should = require( 'should' );

let Coin = require( '../src/coin.js' );

describe( '01-coin' , function () {

    it( 'should have a flip function that returns itself', function () {
        let coin = new Coin;
        _.isFunction( coin.flip ).should.be.true();
        should( coin.flip() ).equal( coin );
    } );

    it( 'has isHeads and isTails', function () {
        let coin = new Coin;
        _.isFunction( coin.isHeads ).should.be.true();
        _.isFunction( coin.isTails ).should.be.true();
        should( coin.isHeads() ).should.not.equal( coin.isTails() );
    } );

    it( 'should not (likely) return the same value many times', function () {
        let coin = new Coin;
        let flips = {
            heads : 0,
            tails : 0
        };
        for ( let i = 0; i < 1000; i++ ) {
            if ( coin.flip().isHeads() )
                flips.heads++;
            else
                flips.tails++;
        }
        flips.heads.should.not.equal( 0 );
        flips.tails.should.not.equal( 0 );
    } );

} );
