'use strict';
let should = require( 'should' );

let Marble = require( '../src/marble.js' );

describe( '03-marble' , function () {

    it( 'should only be white or black or red', function () {

        ( () => new Marble() ).should.throw();
        ( () => new Marble( 234234 ) ).should.throw();
        ( () => new Marble( false ) ).should.throw();
        ( () => new Marble( 'red' ) ).should.throw();
        ( () => new Marble( Marble.Color.RED ) ).should.not.throw();
        ( () => new Marble( Marble.Color.WHITE ) ).should.not.throw();
        ( () => new Marble( Marble.Color.BLACK ) ).should.not.throw();

        ( new Marble( Marble.Color.RED ) ).isRed().should.be.true();
        ( new Marble( Marble.Color.WHITE ) ).isRed().should.be.false();
        ( new Marble( Marble.Color.BLACK ) ).isRed().should.be.false();

        ( new Marble( Marble.Color.RED ) ).isWhite().should.be.false();
        ( new Marble( Marble.Color.WHITE ) ).isWhite().should.be.true();
        ( new Marble( Marble.Color.BLACK ) ).isWhite().should.be.false();

        ( new Marble( Marble.Color.RED ) ).isBlack().should.be.false();
        ( new Marble( Marble.Color.WHITE ) ).isBlack().should.be.false();
        ( new Marble( Marble.Color.BLACK ) ).isBlack().should.be.true();

    } );

} );
