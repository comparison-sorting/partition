
/**
 * Checks whether range [left,right[ of array is sorted according to pivot p.
 * Returns k the index of the first failed test.
 */

let ispartitioned = function ( compare , array , left , right , p ) {

	for ( let k = left ; k < p ; ++k ) {

		if ( compare( array[k] , array[p] ) > 0 ) return k ;

	}

	for ( let k = p + 1 ; k < right ; ++k ) {

		if ( compare( array[k] , array[p] ) < 0 ) return k ;

	}

	return right ;

} ;

exports.ispartitioned = ispartitioned ;
