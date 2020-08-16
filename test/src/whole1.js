import test from 'ava' ;

import * as array from "@aureooms/js-array" ;
import * as random from "@aureooms/js-random" ;
import * as compare from "@aureooms/js-compare" ;
import * as itertools from "@aureooms/js-itertools" ;
import functools from "@aureooms/js-functools" ;

import * as partition from "../../src" ;

function check ( partitionname, method, ctor, n, comparename, compare ) {

	const title = `whole ${partitionname} (new ${ctor.name}(${n}), ${comparename})` ;

	method = partition.whole( method ) ;

	test( title, t => {

		// SETUP ARRAY
		const a = new ctor(n);
		array.iota( a, 0, n, 0 );

		// PARTITION ARRAY
		random.shuffle( a, 0, n );
		const p = method( compare, a );

		// TEST PREDICATE

		t.is( partition.ispartitioned( compare , a , 0 , n , p ) , n , "check partitioned" ) ;
		t.is( a.length, n, "check length a" );

	} );
}

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
	[ "hoare", partition.hoare ],
	[ "lomuto", partition.lomuto ]
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
