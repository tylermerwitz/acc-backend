'use strict';
let should = require( 'should' );
let change = require( '../exercises/02-make-change.js' );

let makeChange = change.makeChange;

describe( '02-polynomial' , function () {

    describe( 'makeChange()', function () {

        it( '$0.01: one penny', function () {

            makeChange( 0.01 ).should.eql({
                penny : 1
            });

        } );

        it( '$0.06: one penny and one nickel', function () {

            makeChange( 0.06 ).should.eql({
                penny : 1,
                nickel : 1
            });

        } );

        it( '$0.71: two quarters, two dimes, one penny', function () {

            makeChange( 0.71 ).should.eql({
                penny : 1,
                dime : 2,
                quarter : 2
            });

        } );

        it( '$7.00: one five, two ones', function () {

            makeChange( 7.00 ).should.eql({
                one : 2,
                five : 1
            });

        } );

        it( '$43.50: two twenties, three ones, two quarters', function () {

            makeChange( 43.50 ).should.eql({
                twenty : 2,
                one : 3,
                quarter : 2
            });

        } );

    } );

} );
