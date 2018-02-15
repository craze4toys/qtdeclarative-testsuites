// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%typedarray%.prototype.copywithin
description: >
  %TypedArray%.prototype.copyWithin.name is "copyWithin".
info: |
  %TypedArray%.prototype.copyWithin (target, start [, end ] )

  17 ECMAScript Standard Built-in Objects:
    Every built-in Function object, including constructors, that is not
    identified as an anonymous function has a name property whose value
    is a String.

    Unless otherwise specified, the name property of a built-in Function
    object, if it exists, has the attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: true }.
includes: [propertyHelper.js, testBigIntTypedArray.js]
---*/

assert.sameValue(TypedArray.prototype.copyWithin.name, "copyWithin");

verifyNotEnumerable(TypedArray.prototype.copyWithin, "name");
verifyNotWritable(TypedArray.prototype.copyWithin, "name");
verifyConfigurable(TypedArray.prototype.copyWithin, "name");
