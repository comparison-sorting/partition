
/**
 * HYP : i < j
 */

export function lomuto ( compare, a, i, j ) {

	const p = a[i];
	let k = i + 1;

	--j;

	while ( k <= j ) {

		if ( compare( p, a[k] ) <= 0 ) {

			const t = a[k];
			a[k] = a[j];
			a[j] = t;

			--j;
		}

		else {
			++k;
		}

	}

	a[i]   = a[k-1];
	a[k-1] = p;

	return k - 1;

}
