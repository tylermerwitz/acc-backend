'use strict';
let should = require( 'should' );
let poly = require( '../exercises/03-polynomial.js' );

let polyAdd = poly.polyAdd;
let polyMul = poly.polyMul;
let polyPrint = poly.polyPrint;

describe( '02-polynomial' , function () {

    describe( 'polyAdd', function () {

        it( "1 + 1 === 2", function () {
            polyPrint( polyAdd(
                [ 1 ],
                [ 1 ]
            ) ).should.equal(
                "2"
            );
        } );

        it( "x + x === 2x", function () {
            polyPrint( polyAdd(
                [ 1, 0 ],
                [ 1, 0 ]
            ) ).should.equal(
                "2x"
            );
        } );

        it( "3x^7 + 5x === 3x^7 + 5x", function () {
            polyPrint( polyAdd(
                [ 3, 0, 0, 0, 0, 0, 0, 0 ],
                [ 5, 0 ]
            ) ).should.equal(
                "3x^7 + 5x"
            );
        } );

        it( "0 + 0 === 0", function () {
            polyPrint( polyAdd(
                [ 0, 0, 0, 0, 0, 0, 0, 0 ],
                [ 0, 0 ]
            ) ).should.equal(
                "0"
            );
        } );

    } );

    describe( 'polyMul', function () {

        it( "2 * 50 === 100", function () {
            polyPrint( polyMul(
                [ 2 ],
                [ 50 ]
            ) ).should.equal(
                "100"
            );
        } );

        it( "x * x === x^2", function () {
            polyPrint( polyMul(
                [ 1, 0 ],
                [ 1, 0 ]
            ) ).should.equal(
                "x^2"
            );
        } );

        it( "( x^7 + 1 ) * ( x^2 ) = x^9 + x^2", function () {
            polyPrint( polyMul(
                [ 1, 0, 0, 0, 0, 0, 0, 1 ],
                [ 1, 0, 0 ]
            ) ).should.equal(
                "x^9 + x^2"
            );
        } );

        it( "( 3x^2 + 1 ) * ( 2x^2 + x ) === 6x^4 + 3x^3 + 2x^2 + x", function () {
            polyPrint( polyMul(
                [ 3, 0, 1 ],
                [ 2, 1, 0 ]
            ) ).should.equal(
                "6x^4 + 3x^3 + 2x^2 + x"
            );
        } );

    } );

} );
