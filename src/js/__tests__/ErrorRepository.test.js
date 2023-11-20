import { expect, test } from '@jest/globals';
import ErrorRepository from '../ErrorRepository';

test('get-unknown-error', () => {
  const errorRepo = new ErrorRepository();
  expect(errorRepo.translate(410)).toBe('Unknown error');
});

test('get-404-error', () => {
  const errorRepo = new ErrorRepository();
  expect(errorRepo.translate(404)).toBe('Not Found');
});

test('get-418-error', () => {
  const errorRepo = new ErrorRepository();
  expect(errorRepo.translate(418)).toBe('I’m a teapot');
});
