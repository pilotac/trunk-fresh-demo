'use strict';

function greet(name) {
  if (!name) throw new Error('name is required');
  return `Hello, ${name}!`;
}

function add(a, b) {
  return a + b;
}

module.exports = { greet, add };
