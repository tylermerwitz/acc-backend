'use strict';
let express = require( 'express' );
var morgan = require( 'morgan' );
let app = express();
var bodyParser = require( 'body-parser' );

let generateHex = function ( charCount ) {
    let hex = '0123456789ABCDEF';
    let output = '';
    for ( let i = 0; i < charCount; i++ ) {
        output += hex[ Math.floor( Math.random() * hex.length ) ];
    }
    return output;
};

let RSVPer = function () {

    let requestTickets = {};
    let invitations = {};

    this.createRequestTicket = function ( attendee ) {
        let id = generateHex( 24 ) + '-' + generateHex( 16 );
        requestTickets[ id ] = {
            id,
            attendee,
            created : new Date
        };
        return requestTickets[ id ];
    };

    this.getRequestTicket = function ( id ) {
        return requestTickets[ id ] || null;
    };

    this.getAllRequestTickets = function () {
        return Object.keys( requestTickets ).map( id => requestTickets[ id ] );
    }

    this.deleteOldRequestTickets = function () {
        for ( let id in requestTickets ) {
            let now = (new Date()).getTime();
            let lifetime = now - requestTickets[ id ].created.getTime();
            if ( lifetime > 7000 ) {
                delete requestTickets[ id ];
            }
        }
        return this;
    };

    this.createInvitation = function ( ticketId ) {
        let ticket = requestTickets[ ticketId ];
        if ( ticket === null ) {
            throw new Error( `No invitation request with ID ${id}.` );
        }
        let invitationId = generateHex( 32 );
        invitations[ invitationId ] = {
            attendee : ticket.attendee,
            created : new Date
        };
        delete requestTickets[ ticketId ];
        return invitations[ invitationId ];
    };

    this.getInvitation = function ( id ) {
        return invitations[ id ] || null;
    };

    this.findInvitation = function ( attendee ) {
        for ( let invitationId in invitations ) {
            let invitation = invitations[ invitationId ];
            if ( invitation.attendee.toLowerCase() === attendee.toLowerCase() ) {
                return invitation;
            }
        }
        return null;
    };

    this.getAllInvitations = function () {
        return Object.keys( invitations ).map( id => invitations[ id ] );
    };

};

let db = new RSVPer;

let apiKey = 'syTJvCEjk8uGRzHF';
app.use( bodyParser.json() );
app.set( 'json spaces', 2 );

app.use( morgan( 'combined' ) );

app.use( function ( err, req, res, next ) {
    if ( err instanceof SyntaxError ) {
        res.status( 400 ).send({
            message : "Malformed JSON request body."
        });
        return;
    } else {
        next();
    }
} );

app.use( function ( req, res, next ) {
    if ( req.method === 'GET' ) {
        return next();
    }
    let auth = req.get( 'Authorization' );
    if ( auth === undefined ) {
        res.status( 401 ).send({
            message : "No OAuth key defined."
        });
        return;
    } else if ( auth.indexOf( apiKey ) === -1 ) {
        res.status( 401 ).send({
            message : "Invalid OAuth key."
        });
        return;
    } else {
        next();
    }
} );

app.get ( '/invitation-requests', function ( req, res ) {
    res.json( db.getAllRequestTickets() );
} );

app.get ( '/invitation-requests/:id', function ( req, res ) {
    let ticket = db.getRequestTicket( req.params.id );
    if ( ticket === null ) {
        res.status( 404 ).json({
            'message' : `No ticket with id ${req.params.id}.`
        });
        return;
    } else {
        res.json( ticket );
    }
} );

app.post ( '/invitation-requests', function ( req, res ) {
    if ( req.body.attendee === undefined ) {
        res.status( 400 ).json({
            'message' : 'Attendee not specified. Request denied.'
        });
        return;
    } else if ( db.findInvitation( req.body.attendee ) !== null ) {
        res.status( 409 ).json({
            'message' : `${req.body.attendee} already has a reservation.`
        });
    } else {
        let ticket = db.createRequestTicket( req.body.attendee );
        res.json( ticket );
    }
} );

app.get ( '/invitations', function ( req, res ) {
    res.json( db.getAllInvitations() );
} );

app.get ( '/invitations/:id', function ( req, res ) {
    let invitation = db.getInvitation( req.params.id );
    if ( invitation === null ) {
        res.status( 404 ).json({
            'message' : `No invitation with id ${req.params.id}.`
        });
    } else {
        res.json( invitation );
    }
} );

app.post ( '/invitations', function ( req, res ) {
    if ( req.body[ 'request-id' ] === undefined ) {
        res.status( 400 ).json({
            'message' : 'Attendee not specified. Request denied.'
        });
        return;
    }
    try {
        res.json( db.createInvitation( req.body[ 'request-id' ] ) );
    } catch ( ex ) {
        res.status( 400 ).json({
            'message' : ex.toString()
        })
        return;
    }
} );

app.use( function ( req, res, next ) {
    res.status( 404 );
    res.json({
        'message' : 'Unknown resource.'
    });
    next();
} );

app.listen( 80 );

setInterval( () => {
    db.deleteOldRequestTickets();
}, 2000 );
