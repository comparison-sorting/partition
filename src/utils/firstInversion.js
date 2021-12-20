/**
 * Checks whether range [left,right[ of array is partitioned according to pivot
 * p. Returns the index of the first inversion.
 *
 * @param {Function} compare
 * @param {ArrayLike} array
 * @param {number} left
 * @param {number} right
 * @param {number} p
 * @return {number}
 */
const firstInversion = (compare, array, left, right, p) => {
	for (let k = left; k < p; ++k) {
		if (compare(array[k], array[p]) > 0) return k;
	}

	for (let k = p + 1; k < right; ++k) {
		if (compare(array[k], array[p]) < 0) return k;
	}

	return right;
};

export default firstInversion;
