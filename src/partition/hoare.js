/**
 * HYP : i < j
 */

export function hoare(compare, a, i, j) {
	const o = i;
	const x = a[o];

	while (true) {
		while (true) {
			--j;

			if (i >= j) {
				a[o] = a[j];
				a[j] = x;
				return j;
			}

			if (compare(x, a[j]) > 0) {
				break;
			}
		}

		while (true) {
			++i;

			if (i >= j) {
				a[o] = a[j];
				a[j] = x;
				return j;
			}

			if (compare(x, a[i]) < 0) {
				break;
			}
		}

		// Invariant i < j

		const t = a[i];
		a[i] = a[j];
		a[j] = t;
	}
}
