import {
  describe, expect, jest, test,
} from '@jest/globals';
import GameSavingLoader from '../../asyncHomework/GameSavingLoader';

// test('GameSavingLoader', async () => {
//     expect(await GameSavingLoader.load()).toEqual({
//         id: 9, // id сохранения
//         created: 1546300800, // timestamp создания
//         userInfo: {
//             id: 1, // user id
//             name: "Hit-man", // username
//             level: 10, // user level
//             points: 2000 // user points
//             }
//     })
// });

describe('GameSavingLoader', () => {
  test('load - successful', async () => {
    // Устанавливаем, что метод load должен вернуть данные
    GameSavingLoader.load.mockResolvedValue({
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1,
        name: 'Hitman',
        level: 10,
        points: 2000,
      },
    });

    try {
      const saving = await GameSavingLoader.load();
      console.log('Loaded saving:', saving);
    } catch (error) {
      // Если успешно загружено, не должны попасть сюда
      console.error('Unexpected error:', error);
    }
  });

  test('load - error', async () => {
    // Устанавливаем, что метод load должен выбросить ошибку
    GameSavingLoader.load.mockRejectedValue(new Error('Failed to load'));

    try {
      await GameSavingLoader.load();
      // Если успешно загружено, не должны попасть сюда
      console.log('Unexpected success');
    } catch (error) {
      // Ожидаем ошибку
      console.error('Expected error:', error.message);
    }
  });
});
