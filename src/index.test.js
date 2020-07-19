import ArrayBufferConverter from './index.js';

test('instance', () => {
  expect(new ArrayBufferConverter('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}')).toBeInstanceOf(ArrayBufferConverter);
});

test('load()', () => {
  const received = new ArrayBufferConverter('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
  const expected = [
    123, 34, 100, 97, 116, 97, 34, 58, 123, 34,
    117, 115, 101, 114, 34, 58, 123, 34, 105, 100,
    34, 58, 49, 44, 34, 110, 97, 109, 101, 34,
    58, 34, 72, 105, 116, 109, 97, 110, 34, 44,
    34, 108, 101, 118, 101, 108, 34, 58, 49, 48,
    125, 125, 125,
  ];
  expect(Array.from(received.load())).toEqual(expect.arrayContaining(expected));
});

test('toString()', () => {
  const received = (new ArrayBufferConverter('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}')).toString();
  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  expect(received).toBe(expected);
});
