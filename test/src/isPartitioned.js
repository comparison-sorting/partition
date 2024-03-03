import test from 'ava';

import {increasing, decreasing} from '@total-order/primitive';

import {isPartitioned, firstInversion} from '#module';

const macro = (t, array, left, right, p, k1, k2) => {
	const n = array.length;

	t.is(firstInversion(increasing, array, left, right, [p], 0, 1), k1);
	if (k1 === right) {
		t.true(isPartitioned(increasing, array, left, right, [p], 0, 1));
	}

	t.is(firstInversion(decreasing, array, left, right, [p], 0, 1), k2);
	if (k2 === right) {
		t.true(isPartitioned(decreasing, array, left, right, [p], 0, 1));
	}

	t.is(array.length, n);
};

macro.title = (title, array, left, right, p, k1, k2) =>
	title ?? [array, left, right, p, k1, k2].join(' , ');

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

test('multi', (t) => {
	const array = [0, 0, 0, 2, 2, 2, 4, 1, 3, 3, 3, 4];
	t.is(firstInversion(increasing, array, 0, array.length, [4, 9], 0, 2), 6);
	t.is(firstInversion(increasing, array, 0, array.length, [6, 9], 0, 2), 7);
});
