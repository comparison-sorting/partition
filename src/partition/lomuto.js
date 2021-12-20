import assert from 'assert';

/**
 * @param {Function} compare
 * @param {Array} a
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
const lomuto = (compare, a, i, j) => {
	assert(i < j);

	const p = a[i];
	let k = i + 1;

	--j;

	while (k <= j) {
		if (compare(p, a[k]) <= 0) {
			const t = a[k];
			a[k] = a[j];
			a[j] = t;

			--j;
		} else {
			++k;
		}
	}

	a[i] = a[k - 1];
	a[k - 1] = p;

	return k - 1;
};

export default lomuto;
