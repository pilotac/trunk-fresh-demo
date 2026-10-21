"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const multiply = require("../src/multiply");
test("multiply multiplies", () => { assert.equal(multiply(4, 5), 20); });
