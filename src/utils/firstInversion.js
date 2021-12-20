/**
 * Checks whether range [left,right[ of array is partitioned according to pivot
 * p. Returns the index of the first inversion.
 *
 * @param {Function} compare
 * @param {ArrayLike} array
 * @param {number} left
 * @param {number} right
 * @param {number[]} pivots
 * @param {number} pi
 * @param {number} pj
 * @return {number}
 */
const firstInversion = (compare, array, left, right, pivots, pi, pj) => {
	let p = pivots[pi];
	let x = array[p];
	for (let k = left; k < p; ++k) {
		if (compare(array[k], x) > 0) return k;
	}

	while (++pi < pj) {
		const q = pivots[pi];
		const y = array[q];
		for (let k = p + 1; k < q; ++k) {
			if (compare(array[k], x) < 0) return k;
			if (compare(array[k], y) > 0) return k;
		}

		p = q;
		x = y;
	}

	for (let k = p + 1; k < right; ++k) {
		if (compare(array[k], x) < 0) return k;
	}

	return right;
};

export default firstInversion;
