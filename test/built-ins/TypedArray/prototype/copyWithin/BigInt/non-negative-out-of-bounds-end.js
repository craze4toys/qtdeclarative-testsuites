// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.copywithin
description: >
  Max value of end position is the this.length.
info: |
  22.2.3.5 %TypedArray%.prototype.copyWithin (target, start [ , end ] )

  %TypedArray%.prototype.copyWithin is a distinct function that implements the
  same algorithm as Array.prototype.copyWithin as defined in 22.1.3.3 except
  that the this object's [[ArrayLength]] internal slot is accessed in place of
  performing a [[Get]] of "length" and the actual copying of values in step 12
  must be performed in a manner that preserves the bit-level encoding of the
  source data.

  ...
includes: [compareArray.js, testBigIntTypedArray.js]
---*/

testWithBigIntTypedArrayConstructors(function(TA) {
  assert(
    compareArray(
      new TA(convertToBigInt([0, 1, 2, 3])).copyWithin(0, 1, 6),
      convertToBigInt([1, 2, 3, 3])
    ),
    '[0, 1, 2, 3].copyWithin(0, 1, 6) -> [1, 2, 3, 3]'
  );

  assert(
    compareArray(
      new TA(convertToBigInt([1, 2, 3, 4, 5])).copyWithin(0, 1, Infinity),
      convertToBigInt([2, 3, 4, 5, 5])
    ),
    '[1, 2, 3, 4, 5].copyWithin(0, 1, Infinity) -> [2, 3, 4, 5, 5]'
  );

  assert(
    compareArray(
      new TA(convertToBigInt([0, 1, 2, 3, 4, 5])).copyWithin(1, 3, 6),
      convertToBigInt([0, 3, 4, 5, 4, 5])
    ),
    '[0, 1, 2, 3, 4, 5].copyWithin(1, 3, 6) -> [0, 3, 4, 5, 4, 5]'
  );

  assert(
    compareArray(
      new TA(convertToBigInt([1, 2, 3, 4, 5])).copyWithin(1, 3, Infinity),
      convertToBigInt([1, 4, 5, 4, 5])
    ),
    '[1, 2, 3, 4, 5].copyWithin(1, 3, Infinity) -> [1, 4, 5, 4, 5]'
  );
});
