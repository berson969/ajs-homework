import { expect, test } from '@jest/globals';
import Validator from '../../characters/Validator';

test('correct_userName', () => {
  expect(Validator.validateUserName('Bo12wma_n')).toBeTruthy();
});

test('not-latins-letter', () => {
  expect(Validator.validateUserName('BowЖman')).toBeFalsy();
});

test('another-symbol', () => {
  expect(Validator.validateUserName('Bow:man')).toBeFalsy();
});

test('start-with-dash', () => {
  expect(Validator.validateUserName('-Bowman')).toBeFalsy();
});

test('finish-with-dash', () => {
  expect(Validator.validateUserName('Bowman-')).toBeFalsy();
});

test('start-with-digit', () => {
  expect(Validator.validateUserName('0Bowman')).toBeFalsy();
});

test('finish-with-digit', () => {
  expect(Validator.validateUserName('Bowman1')).toBeFalsy();
});

test('start-with-underline', () => {
  expect(Validator.validateUserName('_Bowman')).toBeFalsy();
});

test('finish-with-underline', () => {
  expect(Validator.validateUserName('Bowman_')).toBeFalsy();
});

test('three-digits-in-row', () => {
  expect(Validator.validateUserName('Bo123wman')).toBeFalsy();
});

test('two-digits-in-row', () => {
  expect(Validator.validateUserName('Bo13wman')).toBeTruthy();
});

test('change-phone-number', () => {
  expect(Validator.changePhoneNumber('+734505453')).toBe('+734505453');
});

test('change-start-with-8', () => {
  expect(Validator.changePhoneNumber('834505453')).toBe('+734505453');
});

test('change-start-with-+8', () => {
  expect(Validator.changePhoneNumber('+834505453')).toBe('+834505453');
});

test('change-start-without+', () => {
  expect(Validator.changePhoneNumber('734505453')).toBe('+734505453');
});

test('change-number-with-symbols', () => {
  expect(Validator.changePhoneNumber('+7(345) 05-453')).toBe('+734505453');
});

test('change-number-with-letters', () => {
  expect(Validator.changePhoneNumber('+7(345)05element453')).toBe('+734505453');
});

test('wrong-number', () => {
  expect(Validator.changePhoneNumber('+element')).toBeFalsy();
});
