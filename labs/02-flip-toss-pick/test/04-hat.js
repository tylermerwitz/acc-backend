'use strict';
let should = require( 'should' );

let Marble = require( '../src/marble.js' );
let Hat = require( '../src/hat.js' );

describe( '04-hat' , function () {

    it( 'should place and pick Marbles', function () {

        let hat = new Hat;
        hat.placeMarble( new Marble( Marble.Color.RED ) );

        hat.isEmpty().should.be.false();

        let marble = hat.pickMarble();
        ( marble instanceof Marble ).should.be.true();
        marble.isRed().should.be.true();

        hat.isEmpty().should.be.true();

        ( () => hat.pickMarble() ).should.throw();

    } );

} );
