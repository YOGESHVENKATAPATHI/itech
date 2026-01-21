// vulnerable.test.js

const assert = require('assert');
const { renderComment } = require('./vulnerable');

describe('renderComment', () => {
  it('should wrap comment in div', () => {
    const result = renderComment('hello');
    assert.strictEqual(result, '<div>hello</div>');
  });
});
