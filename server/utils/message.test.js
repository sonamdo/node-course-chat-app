var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message')

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = "Sonam";
    var text = "text";
    var testObject = generateMessage(from, text);

    expect(testObject.createdAt).toBeA('number')
    expect(testObject).toInclude({from, text})
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = "Admin";
    var latitude = 1234;
    var longitude = 5678;
    var testObject = generateLocationMessage(from, latitude, longitude);

    expect(testObject.createdAt).toBeA('number')
    expect(testObject.url).toBe(`https://www.google.com/maps?q=1234,5678`)
  });
});
