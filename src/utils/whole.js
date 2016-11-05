

export function whole ( partition ) {

	return function ( compare, array ) {

		return partition( compare, array, 0, array.length );

	} ;

}
