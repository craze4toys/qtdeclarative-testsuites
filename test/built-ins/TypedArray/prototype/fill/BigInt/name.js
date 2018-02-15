// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%typedarray%.prototype.fill
description: >
  %TypedArray%.prototype.fill.name is "fill".
info: |
  %TypedArray%.prototype.fill (value [ , start [ , end ] ] )

  17 ECMAScript Standard Built-in Objects:
    Every built-in Function object, including constructors, that is not
    identified as an anonymous function has a name property whose value
    is a String.

    Unless otherwise specified, the name property of a built-in Function
    object, if it exists, has the attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: true }.
includes: [propertyHelper.js, testBigIntTypedArray.js]
---*/

assert.sameValue(TypedArray.prototype.fill.name, "fill");

verifyNotEnumerable(TypedArray.prototype.fill, "name");
verifyNotWritable(TypedArray.prototype.fill, "name");
verifyConfigurable(TypedArray.prototype.fill, "name");
