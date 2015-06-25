
var util, array, random, compare, itertools, functools;

util = require( "util" );
array = require( "aureooms-js-array" );
random = require( "aureooms-js-random" );
compare = require( "aureooms-js-compare" );
itertools = require( "aureooms-js-itertools" );
functools = require( "aureooms-js-functools" );

var check = function ( partitionname, method, ctor, n, comparename, compare ) {

	var title;

	title = util.format("%s (new %s(%d), %s)", partitionname, ctor.name, n, comparename);

	console.log( title );

	test( title, function () {

		var a ;

		// SETUP ARRAY
		a = new ctor(n);
		array.iota( a, 0, n, 0 );

		// PARTITION ARRAY
		random.shuffle( a, 0, n );
		var x = method( compare, a, 0, n );

		var p = x[0] ;
		var q = x[1] ;

		// TEST PREDICATE

		ok( p <= q , "check p <= q" ) ;
		deepEqual( partition.ispartitioned( compare , a , 0 , n , p ) , n , "check partitioned p" ) ;
		deepEqual( partition.ispartitioned( compare , a , 0 , n , q ) , n , "check partitioned q" ) ;
		deepEqual( a.length, n, "check length a" );

	} );
};

itertools.exhaust( itertools.map(
function ( args ) {

	functools.star( function ( partitionname, method, comparename, compare, size, type ) {

		if ( type.BYTES_PER_ELEMENT && size > Math.pow( 2, type.BYTES_PER_ELEMENT * 8 ) ) {
			return;
		}

		check( partitionname, method, type, size, comparename, compare );

	}, itertools.list( itertools.chain( args ) ) ) ;

} ,


itertools.product( [

[
	[ "yaroslavskiy", partition.yaroslavskiy ]
],

[
	[ "increasing", compare.increasing ],
	[ "decreasing", compare.decreasing ]
],

[[1], [2], [10], [63], [64], [65]],

[
	[ Array ],
	[ Int8Array ],
	[ Uint8Array ],
	[ Int16Array ],
	[ Uint16Array ],
	[ Int32Array ],
	[ Uint32Array ],
	[ Float32Array ],
	[ Float64Array ]
]

], 1 ) ) );
