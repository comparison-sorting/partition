
var compare , increasing , decreasing , t ;

compare = require( "aureooms-js-compare" ) ;

t = function ( array , left , right , p , k1 , k2 ) {

	var n ;

	n = array.length ;

	ok( partition.ispartitioned( compare.increasing , array , left , right , p ) === k1 ) ;
	ok( partition.ispartitioned( compare.decreasing , array , left , right , p ) === k2 ) ;

	deepEqual( array.length , n ) ;

} ;

test( "ispartitioned" , function ( ) {

	t( [ ] , 0 , 0 , 0 , 0 , 0 ) ;

	t( [ 0 , 1 , 2 ] , 1 , 1 , 1 , 1 , 1 ) ;

	t( [ 1 , 1 , 1 ] , 0 , 3 , 1 , 3 , 3 ) ;

	t( [ 1 , 2 , 3 ] , 0 , 3 , 1 , 3 , 0 ) ;

	t( [ 3 , 2 , 1 ] , 0 , 3 , 1 , 0 , 3 ) ;

	t( [ 1 , 2 , 4 , 3 ] , 0 , 4 , 1 , 4 , 0 ) ;

	t( [ 3 , 4 , 2 , 1 ] , 0 , 4 , 2 , 0 , 4 ) ;

	t( [ 1 , 2 , 4 , 3 ] , 0 , 4 , 2 , 3 , 0 ) ;

	t( [ 3 , 4 , 2 , 1 ] , 0 , 4 , 1 , 2 , 0 ) ;

	t( [ 5 , 4 , 4 , 5 ] , 0 , 4 , 1 , 0 , 3 ) ;

	t( [ 5 , 4 , 4 , 5 ] , 0 , 4 , 2 , 0 , 3 ) ;

	t( [ 1 , 0 , 1 , 1 , 2 , 3 , 1 , 0 , 1 ] , 3 , 6 , 4 , 6 , 3 ) ;

	t( [ 1 , 0 , 1 , 1 , 2 , 3 , 1 , 0 , 1 ] , 0 , 9 , 4 , 6 , 0 ) ;

} ) ;
