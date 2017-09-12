'use strict';
let util = require( 'util' );

/*
    In this module, a "polynomial" is represented by an array of coefficients,
    where each term's degree is determined by its index in the array. The last
    item of such an array represents a constant term (i.e. with x to a degree
    of zero), the second-to-last item represents a term with x raised to one,
    etc. For example:

        [ 1 ] means "1"
        [ 1, 0 ] means "x"
        [ 1, 0, 0 ] means "x^2"
        [ 5, 7, 1, 11 ] means "5x^3 + 7x^2 + x + 11"
        [ 1, 0, 8, 0 ]  means "x^3 + 8x"
*/

/*
 * Takes two polynomials represented by arrays of coefficients and produces
 * their (polynomial) sum.
 * @param {Array} a A polynomial.
 * @param {Array} b Another polynomial.
 * @returns {Array} The polynomial sum of a and b.
*/
function polyAdd ( a, b ) {
    // hint: it's much easier to manipulate polynomials when their sizes are
    //       guaranteed to be equal. can you enforce that?

    /*
        YOUR CODE HERE
    */
}

/*
 * Takes two polynomials represented by arrays of coefficients and produces
 * their (polynomial) product.
 * @param {Array} a A polynomial.
 * @param {Array} b Another polynomial.
 * @returns {Array} The polynomial product of a and b.
*/
function polyMul ( a, b ) {
    // hint: it's much easier to manipulate polynomials when their sizes are
    //       guaranteed to be equal. can you enforce that?
    // hint: "each term in the first polynomial by each term in the second" can
    //       be done with a double-for loop.
    // hint: in order to best keep track of the degree of the term you're
    //       working on, either reverse both arrays or compute it from their
    //       lengths.

    /*
        YOUR CODE HERE
    */
}

/*
 * Takes a polynomial represented by an array of coefficients and prints it in
 * a more human-readable format (e.g. "2x^2 + x + 1").
 * @param {Array} a A polynomial to print.
 * @returns {String} A string representation of the polynomial.
*/
function polyPrint ( a ) {
    let terms = [];
    for ( let i = 0, degree = a.length - 1; i < a.length; i++, degree-- ) {
        let coeff = a[ i ];
        let term = "";

        if ( coeff === 0 ) {
            // skip zero-valued terms
            continue;
        } else if ( coeff !== 1 ) {
            // don't print extraneous identity coefficient one
            term += coeff;
        }

        if ( degree > 0 ) {
            // don't print an x for constant terms
            term += "x";
        }

        if ( degree > 1 ) {
            // don't print extraneous exponentiation for deg <= 1
            term += "^" + degree;
        }
        terms.push( term );
    }
    terms = terms.join( " + " );
    if ( terms.length === 0 ) {
        // return a zero instead of an empty string.
        return "0";
    }
    return terms;
}

module.exports = {
    polyAdd,
    polyMul,
    polyPrint
};
