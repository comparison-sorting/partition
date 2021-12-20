import firstInversion from './firstInversion.js';

/**
 * Checks whether range [left,right[ of array is partitioned according to pivot
 * p.
 *
 * @param {Function} compare
 * @param {ArrayLike} array
 * @param {number} left
 * @param {number} right
 * @param {number[]} pivots
 * @param {number} pi
 * @param {number} pj
 * @return {boolean}
 */
const isPartitioned = (compare, array, left, right, pivots, pi, pj) =>
	firstInversion(compare, array, left, right, pivots, pi, pj) === right;

export default isPartitioned;
