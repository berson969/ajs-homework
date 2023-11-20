import { expect, test } from '@jest/globals';
import Settings from '../Settings';

test('default-settings', () => {
  const defaultSetting = new Settings();
  expect(defaultSetting.defaultSettings.get('theme')).toBe('dark');
  expect(defaultSetting.defaultSettings.get('music')).toBe('trance');
  expect(defaultSetting.defaultSettings.get('difficulty')).toBe('easy');
});

test('set-user-settings', () => {
  const settings = new Settings();
  settings.setSetting('theme', 'gray');
  settings.setSetting('music', 'chillout');
  settings.setSetting('difficulty', 'hard');
  expect(settings.settings.get('theme')).toBe('gray');
  expect(settings.settings.get('music')).toBe('chillout');
  expect(settings.settings.get('difficulty')).toBe('hard');
});

test('set-wrong-theme', () => {
  const settings = new Settings();
  expect(() => settings.setSetting('theme', 'no-dark')).toThrow(
    'Invalid value no-dark for setting theme.',
  );
});
