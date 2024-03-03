import test from 'ava';

import {_calloc} from '@array-like/alloc';
import {iota} from '@array-like/fill';
import {star} from '@functional-abstraction/functools';
import {_chain as chain} from '@iterable-iterator/chain';
import {exhaust} from '@iterable-iterator/consume';
import {list} from '@iterable-iterator/list';
import {map} from '@iterable-iterator/map';
import {shuffle} from '@randomized/random';
import {product} from '@set-theory/cartesian-product';
import {increasing, decreasing} from '@total-order/primitive';

import {isPartitioned, yaroslavskiy} from '#module';

function check(partitionname, method, ctor, n, comparename, compare) {
	const title = `${partitionname} (new ${ctor.name}(${n}), ${comparename})`;
	const calloc = _calloc(ctor);

	test(title, (t) => {
		// SETUP ARRAY
		const a = calloc(n);
		iota(a, 0, n, 0);

		// PARTITION ARRAY
		shuffle(a, 0, n);
		const x = method(compare, a, 0, n);

		const p = x[0];
		const q = x[1];

		// TEST PREDICATE

		t.true(p <= q, 'check p <= q');
		t.true(isPartitioned(compare, a, 0, n, [p, q], 0, 2), 'check partitioned');
		t.is(a.length, n, 'check length a');
	});
}

exhaust(
	map(
		function (args) {
			star(
				function (partitionname, method, comparename, compare, size, type) {
					if (
						type.BYTES_PER_ELEMENT &&
						size > 2 ** (type.BYTES_PER_ELEMENT * 8)
					) {
						return;
					}

					check(partitionname, method, type, size, comparename, compare);
				},
				list(chain(args)),
			);
		},

		product(
			[
				[['yaroslavskiy', yaroslavskiy]],

				[
					['increasing', increasing],
					['decreasing', decreasing],
				],

				[[1], [2], [10], [63], [64], [65]],

				[
					[Array],
					[Int8Array],
					[Uint8Array],
					[Int16Array],
					[Uint16Array],
					[Int32Array],
					[Uint32Array],
					[Float32Array],
					[Float64Array],
				],
			],
			1,
		),
	),
);
