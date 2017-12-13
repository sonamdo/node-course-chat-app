const expect = require('expect');
const {isRealString} = require('./validation')

describe('isRealString', () => {
  it ('should reject non-string values', () => {
    var test = isRealString(123);
    expect(test).toBe(false)
  })

  it ('should reject strings with only spaces', () => {
    var test = isRealString('   ');
    expect(test).toBe(false)
  })

  it ('should allow strings with non-space character', () => {
    var test = isRealString(" sd  eer t 1");
    expect(test).toBe(true)
  })
});
