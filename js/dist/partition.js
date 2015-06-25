"use strict";

(function () {

	"use strict";

	var definition = function definition(exports, undefined) {

		/* js/src/partition */
		/* js/src/partition/hoare.js */

		/**
   * HYP : i < j
   */

		var hoare = function hoare(compare, a, i, j) {

			var x, t, o;

			o = i;
			x = a[o];

			while (true) {

				while (true) {

					--j;

					if (i >= j) {
						a[o] = a[j];
						a[j] = x;
						return j;
					} else if (compare(x, a[j]) > 0) {
						break;
					}
				}

				while (true) {

					++i;

					if (i >= j) {
						a[o] = a[j];
						a[j] = x;
						return j;
					} else if (compare(x, a[i]) < 0) {
						break;
					}
				}

				// invariant i < j

				t = a[i];
				a[i] = a[j];
				a[j] = t;
			}
		};

		exports.hoare = hoare;
		exports.partition = hoare;

		/* js/src/partition/lomuto.js */

		/**
   * HYP : i < j
   */

		var lomuto = function lomuto(compare, a, i, j) {

			var t, k, p;

			p = a[i];
			k = i + 1;

			--j;

			while (k <= j) {

				if (compare(p, a[k]) <= 0) {

					t = a[k];
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

		exports.lomuto = lomuto;

		/* js/src/partition/yaroslavskiy.js */

		/**
   * HYP : i < j
   *
   * http://cs.stackexchange.com/a/24099/20711
   */

		var yaroslavskiy = function yaroslavskiy(compare, a, i, j) {

			var p, q, g, k, l, t;

			--j;

			// Choose outermost elements as pivots
			if (compare(a[i], a[j]) > 0) {

				t = a[i];
				a[i] = a[j];
				a[j] = t;
			}

			p = a[i];
			q = a[j];

			// Partition a according to invariant below
			l = i + 1;
			g = j - 1;
			k = l;

			while (k <= g) {

				if (compare(p, a[k]) > 0) {

					t = a[k];
					a[k] = a[l];
					a[l] = t;

					++l;
				} else if (compare(q, a[k]) <= 0) {

					while (compare(a[g], q) > 0 && k < g) {
						--g;
					}

					t = a[k];
					a[k] = a[g];
					a[g] = t;
					--g;

					if (compare(p, a[k]) > 0) {

						t = a[k];
						a[k] = a[l];
						a[l] = t;
						++l;
					}
				}

				++k;
			}

			--l;
			++g;

			// Swap pivots to final place

			t = a[i];
			a[i] = a[l];
			a[l] = t;

			t = a[j];
			a[j] = a[g];
			a[g] = t;

			return [l, g];
		};

		exports.yaroslavskiy = yaroslavskiy;

		/* js/src/utils */
		/* js/src/utils/ispartitioned.js */

		/**
   * Checks whether range [left,right[ of array is sorted according to pivot p.
   * Returns k the index of the first failed test.
   */

		var ispartitioned = function ispartitioned(compare, array, left, right, p) {

			for (var k = left; k < p; ++k) {

				if (compare(array[k], array[p]) > 0) return k;
			}

			for (var k = p + 1; k < right; ++k) {

				if (compare(array[k], array[p]) < 0) return k;
			}

			return right;
		};

		exports.ispartitioned = ispartitioned;

		/* js/src/utils/whole.js */

		var whole = function whole(partition) {

			return function (compare, array) {

				return partition(compare, array, 0, array.length);
			};
		};

		exports.whole = whole;

		return exports;
	};
	if (typeof exports === "object") {
		definition(exports);
	} else if (typeof define === "function" && define.amd) {
		define("aureooms-js-partition", [], function () {
			return definition({});
		});
	} else if (typeof window === "object" && typeof window.document === "object") {
		definition(window["partition"] = {});
	} else console.error("unable to detect type of module to define for aureooms-js-partition");
})();