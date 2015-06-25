

var whole = function ( partition ) {

	return function ( compare, array ) {

		return partition( compare, array, 0, array.length );

	};

};

exports.whole = whole;
