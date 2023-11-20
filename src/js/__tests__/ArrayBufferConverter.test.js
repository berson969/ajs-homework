import { expect, test } from '@jest/globals';
import { ArrayBufferConverter, getBuffer } from '../ArrayBufferConverter';

test('get-toString', () => {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  const converter = new ArrayBufferConverter();
  converter.load(getBuffer(data));
  expect(converter.toString()).toEqual(
    '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}',
  );
});

test('not-get-buffer', () => {
  const converter = new ArrayBufferConverter();
  expect(() => converter.toString()).toThrow(
    'No data loaded. Use the load method first',
  );
});
