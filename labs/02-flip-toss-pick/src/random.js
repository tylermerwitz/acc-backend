'use strict';

/*
    Utility Facade for Math.random().
*/

module.exports = {
    int : function ( lo, hi ) {
        return Math.floor( Math.random() * ( hi - lo + 1 ) ) + lo;
    },
    maybe : function ( pTrue ) {
        return Math.random() < pTrue ? true : false;
    }
};
