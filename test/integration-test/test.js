// Load in our dependencies
var assert = require('assert');

// Start our tests
describe('A basic operation', function () {
  it('asserts without errors', function () {
    assert.strictEqual(1 + 1, 2);
  });
});
