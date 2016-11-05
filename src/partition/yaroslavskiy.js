
/**
 * HYP : i < j
 *
 * http://cs.stackexchange.com/a/24099/20711
 */

export function yaroslavskiy ( compare , a , i , j ) {

	--j ;

	// Choose outermost elements as pivots
	if ( compare( a[i] , a[j] ) > 0 ) {

		const t = a[i] ;
		a[i] = a[j] ;
		a[j] = t ;

	}

	const p = a[i] ;
	const q = a[j] ;

	// Partition a according to invariant below
	let l = i + 1 ;
	let g = j - 1 ;
	let k = l ;

	while ( k <= g ) {

		if ( compare( p , a[k] ) > 0 ) {

			const t = a[k] ;
			a[k] = a[l] ;
			a[l] = t ;

			++l ;

		}

		else if ( compare( q , a[k] ) <= 0 ) {

			while ( compare ( a[g] , q ) > 0 && k < g ) {
				--g ;
			}

			const t = a[k] ;
			a[k] = a[g] ;
			a[g] = t ;
			--g ;

			if ( compare( p, a[k] ) > 0 ) {

				const t = a[k] ;
				a[k] = a[l] ;
				a[l] = t ;
				++l ;

			}

		}

		++k ;
	}

	--l ;
	++g ;

	// Swap pivots to final place

	const t1 = a[i] ;
	a[i] = a[l] ;
	a[l] = t1 ;

	const t2 = a[j] ;
	a[j] = a[g] ;
	a[g] = t2 ;

	return [ l , g ] ;

}
