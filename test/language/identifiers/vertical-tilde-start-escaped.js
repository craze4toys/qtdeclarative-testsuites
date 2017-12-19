// Copyright (C) 2017 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-names-and-keywords
description: Test VERTICAL TILDE (U+2E2F) is not recognized as ID_Start character.
info: |
  VERTICAL TILDE is in General Category 'Lm' and [:Pattern_Syntax:].
negative:
  type: SyntaxError
  phase: early
---*/

throw "Test262: This statement should not be evaluated.";

var \u2E2F;
