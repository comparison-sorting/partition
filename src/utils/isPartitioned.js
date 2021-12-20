import firstInversion from './firstInversion.js';

/**
 * Checks whether range [left,right[ of array is partitioned according to pivot
 * p.
 *
 * @param {Function} compare
 * @param {ArrayLike} array
 * @param {number} left
 * @param {number} right
 * @param {number} p
 * @return {boolean}
 */
const isPartitioned = (compare, array, left, right, p) =>
	firstInversion(compare, array, left, right, p) === right;

export default isPartitioned;
