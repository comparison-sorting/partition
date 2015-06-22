[js-partition](http://aureooms.github.io/js-partition)
==

Sorting code bricks for JavaScript.

[![NPM license](http://img.shields.io/npm/l/aureooms-js-partition.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-partition/master/LICENSE)
[![NPM version](http://img.shields.io/npm/v/aureooms-js-partition.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-partition)
[![Bower version](http://img.shields.io/bower/v/aureooms-js-partition.svg?style=flat)](http://bower.io/search/?q=aureooms-js-partition)
[![Build Status](http://img.shields.io/travis/aureooms/js-partition.svg?style=flat)](https://travis-ci.org/aureooms/js-partition)
[![Coverage Status](http://img.shields.io/coveralls/aureooms/js-partition.svg?style=flat)](https://coveralls.io/r/aureooms/js-partition)
[![Dependencies Status](http://img.shields.io/david/aureooms/js-partition.svg?style=flat)](https://david-dm.org/aureooms/js-partition#info=dependencies)
[![devDependencies Status](http://img.shields.io/david/dev/aureooms/js-partition.svg?style=flat)](https://david-dm.org/aureooms/js-partition#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/aureooms/js-partition.svg?style=flat)](https://codeclimate.com/github/aureooms/js-partition)
[![NPM downloads per month](http://img.shields.io/npm/dm/aureooms-js-partition.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-partition)
[![GitHub issues](http://img.shields.io/github/issues/aureooms/js-partition.svg?style=flat)](https://github.com/aureooms/js-partition/issues)
[![Inline docs](http://inch-ci.org/github/aureooms/js-partition.svg?branch=master&style=shields)](http://inch-ci.org/github/aureooms/js-partition)

Can be managed through [duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower), or
[npm](https://github.com/npm/npm).

```js
let sort = require( "aureooms-js-partition" ) ;
```

## Use

```js
let compare = require( "aureooms-js-compare" ) ;

/** quicksort using hoare partitioning */
let quicksort = sort.__quicksort__( sort.hoare ) ;

let a = [ 1 , 6 , 5 , 3 , 2 , 4 ] ;

quicksort( compare.increasing , a , 0 , a.length ) ;

a ; // [ 1 , 2 , 3 , 4 , 5 , 6 ]

quicksort( compare.decreasing , a , 0 , a.length ) ;

a ; // [ 6 , 5 , 4 , 3 , 2 , 1 ]

// but also

/** binary heapsort */
let heapsort = sort.__heapsort__( 2 ) ;
/** ternary heapsort */
let heapsort = sort.__heapsort__( 3 ) ;
/** quicksort (lomuto) */
let quicksort = sort.__quicksort__( sort.lomuto ) ;
/** dualpivotquicksort (yaroslavskiy) */
let quicksort = sort.__dualpivotquicksort__( sort.yaroslavskiy ) ;
/** insertionsort */
let insertionsort = sort.insertionsort ;
/** selectionsort */
let selectionsort = sort.selectionsort ;
/** bubblesort */
let bubblesort = sort.bubblesort ;
```

## Reference

  - https://kluedo.ub.uni-kl.de/frontdoor/index/index/docId/3463
  - http://sorting.at

***( forked from [js-sort](https://github.com/aureooms/js-sort) )***
