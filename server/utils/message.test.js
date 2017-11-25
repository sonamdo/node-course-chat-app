var expect = require('expect');

var {generateMessage} = require('./message')

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = "Sonam";
    var text = "text";
    var testObject = generateMessage(from, text);

    expect(testObject.createdAt).toBeA('number')
    expect(testObject).toInclude({from, text})
  })
})
