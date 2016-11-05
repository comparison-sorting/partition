```js
import compare from "aureooms-js-compare" ;

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
