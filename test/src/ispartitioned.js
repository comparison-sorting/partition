import test from 'ava';

import {increasing, decreasing} from '@total-order/primitive';

import {ispartitioned} from '../../src/index.js';

function macro(t, array, left, right, p, k1, k2) {
	const n = array.length;

	t.true(ispartitioned(increasing, array, left, right, p) === k1);
	t.true(ispartitioned(decreasing, array, left, right, p) === k2);

	t.is(array.length, n);
}

macro.title = (provided, array, left, right, p, k1, k2) => {
	return [array, left, right, p, k1, k2].join(' , ');
};

test(macro, [], 0, 0, 0, 0, 0);

test(macro, [0, 1, 2], 1, 1, 1, 1, 1);

test(macro, [1, 1, 1], 0, 3, 1, 3, 3);

test(macro, [1, 2, 3], 0, 3, 1, 3, 0);

test(macro, [3, 2, 1], 0, 3, 1, 0, 3);

test(macro, [1, 2, 4, 3], 0, 4, 1, 4, 0);

test(macro, [3, 4, 2, 1], 0, 4, 2, 0, 4);

test(macro, [1, 2, 4, 3], 0, 4, 2, 3, 0);

test(macro, [3, 4, 2, 1], 0, 4, 1, 2, 0);

test(macro, [5, 4, 4, 5], 0, 4, 1, 0, 3);

test(macro, [5, 4, 4, 5], 0, 4, 2, 0, 3);

test(macro, [1, 0, 1, 1, 2, 3, 1, 0, 1], 3, 6, 4, 6, 3);

test(macro, [1, 0, 1, 1, 2, 3, 1, 0, 1], 0, 9, 4, 6, 0);
