'use strict';
let should = require( 'should' );
let maxAndMin = require( '../exercises/00-max-and-min.js' );

let max2 = maxAndMin.max2;
let min2 = maxAndMin.min2;
let max3 = maxAndMin.max3;
let min3 = maxAndMin.min3;

describe( '00-max-and-min' , function () {

    describe( 'max2', function () {

        it( 'max2( 0, 1 ) == 1', function () {
            max2( 0, 1 ).should.equal( 1 );
        } );

        it( 'max2( 1, 1 ) == 1', function () {
            max2( 1, 1 ).should.equal( 1 );
        } );

        it( 'max2( 1, 0 ) == 1', function () {
            max2( 1, 0 ).should.equal( 1 );
        } );

    } );

    describe( 'min2', function () {

        it( 'min2( 0, 1 ) == 1', function () {
            min2( 0, 1 ).should.equal( 0 );
        } );

        it( 'min2( 1, 1 ) == 1', function () {
            min2( 1, 1 ).should.equal( 1 );
        } );

        it( 'min2( 1, 0 ) == 1', function () {
            min2( 1, 0 ).should.equal( 0 );
        } );

    } );

    describe( 'max3', function () {

        it( 'max3( 0, 1, 2 ) == 2', function () {
            max3( 0, 1, 2 ).should.equal( 2 );
        } );

        it( 'max3( 2, 1, 0 ) == 2', function () {
            max3( 2, 1, 0 ).should.equal( 2 );
        } );

        it( 'max3( 1, 0, 2 ) == 2', function () {
            max3( 1, 0, 2 ).should.equal( 2 );
        } );

        it( 'max3( 2, 1, 1 ) == 2', function () {
            max3( 2, 1, 1 ).should.equal( 2 );
        } );

        it( 'max3( 2, 1, 1 ) == 2', function () {
            max3( 1, 2, 2 ).should.equal( 2 );
        } );

    } );

    describe( 'min3', function () {

        it( 'min3( 0, 1, 2 ) == 0', function () {
            min3( 0, 1, 2 ).should.equal( 0 );
        } );

        it( 'min3( 2, 1, 0 ) == 0', function () {
            min3( 2, 1, 0 ).should.equal( 0 );
        } );

        it( 'min3( 1, 0, 2 ) == 0', function () {
            min3( 1, 0, 2 ).should.equal( 0 );
        } );

        it( 'min3( 1, 2, 1 ) == 1', function () {
            min3( 1, 2, 1 ).should.equal( 1 );
        } );

        it( 'min3( 2, 1, 2 ) == 1', function () {
            min3( 2, 1, 2 ).should.equal( 1 );
        } );


    } );


} );
