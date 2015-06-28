[js-partition](http://aureooms.github.io/js-partition)
==

Partitioning code bricks for JavaScript. Parent is
[aureooms/js-sort](https://github.com/aureooms/js-sort).

```js
let pivot = partition.hoare( compare.increasing , array , left , right ) ;
```

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


Can be managed through [jspm](https://github.com/jspm/jspm-cli),
[duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower),
[ender](https://github.com/ender-js/Ender),
[jam](https://github.com/caolan/jam),
[spm](https://github.com/spmjs/spm),
and [npm](https://github.com/npm/npm).

## Install

### jspm
```terminal
jspm install github:aureooms/js-partition
# or
jspm install npm:aureooms-js-partition
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-partition
```

### bower
```terminal
bower install aureooms-js-partition
```

### ender
```terminal
ender add aureooms-js-partition
```

### jam
```terminal
jam install aureooms-js-partition
```

### spm
```terminal
spm install aureooms-js-partition --save
```

### npm
```terminal
npm install aureooms-js-partition --save
```

## Require
### jspm
```js
let partition = require( "github:aureooms/js-partition" ) ;
// or
import partition from 'aureooms-js-partition' ;
```
### duo
```js
let partition = require( "aureooms/js-partition" ) ;
```

### component, ender, spm, npm
```js
let partition = require( "aureooms-js-partition" ) ;
```

### bower
The script tag exposes the global variable `partition`.
```html
<script src="bower_components/aureooms-js-partition/js/dist/partition.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "aureooms-js-partition" ] , function ( partition ) { ... } ) ;
```


## Use

```js
let compare = require( "aureooms-js-compare" ) ;

/** hoare partitioning */
let array = [ 3 , 4 , 1 , 9 , 0 ] ;
let pivot = partition.hoare( compare.increasing , array , 0 , array.length ) ;
pivot ; // 2
array ; // [ 1 , 0 , 3 , 9 , 4 ]

// but also

/** lomuto partitioning */
partition.lomuto ;
/** yaroslavskiy (two pivots) */
partition.yaroslavskiy ;
```

## Reference

  - https://kluedo.ub.uni-kl.de/frontdoor/index/index/docId/3463
