'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { greet, add } = require('../src/index');

test('greet returns a greeting', () => {
  assert.equal(greet('LaneSync'), 'Hello, LaneSync!');
});

test('greet rejects an empty name', () => {
  assert.throws(() => greet(''), /name is required/);
});

test('add sums two numbers', () => {
  assert.equal(add(2, 3), 5);
});
